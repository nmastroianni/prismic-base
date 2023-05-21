import { Metadata, ResolvingMetadata } from 'next'
import { createClient } from '@/prismicio'
import { PageDocument } from '@/prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import { asText } from '@prismicio/client'
import { Heading } from '@/components/Heading'

type Props = {
  params: { uid: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const dynamicParams = false // true | false,
export const dynamic = 'error'
const client = createClient()

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const page = await client.getByUID('page', params.uid[params.uid.length - 1])
  const {
    data: { canonical, metadescription, metaimage, title },
  } = page
  const previousMeta = await parent
  const previousOpenGraph = previousMeta?.openGraph
  let metaImages = []
  if (metaimage.url) {
    metaImages.push(metaimage)
  } else if (previousOpenGraph?.images) {
    console.log('metaimage is false')
    metaImages.push(previousOpenGraph?.images[0])
  }

  return {
    title: `${asText(title)} | ${previousOpenGraph?.siteName}}`,
    description: metadescription,
    openGraph: {
      title: asText(title),
      description: `${metadescription || previousOpenGraph?.description}`,
      images: metaImages,
      type: `website`,
    },
    alternates: {
      canonical: `${
        canonical ||
        previousMeta?.alternates?.canonical ||
        previousOpenGraph?.url
      }`,
    },
  }
}

export async function generateStaticParams() {
  const pages = await client.getAllByType('page')
  return pages.map((page: PageDocument) => {
    const {
      data: { subdirectory },
    } = page
    if (subdirectory) {
      return { uid: [subdirectory, page.uid] }
    }
    return { uid: [page.uid] }
  })
}

export default async function Page({ params }: { params: { uid: string[] } }) {
  const page = await client.getByUID('page', params.uid[params.uid.length - 1])
  return (
    <main>
      <SliceZone slices={page?.data?.slices} components={components} />
    </main>
  )
}
