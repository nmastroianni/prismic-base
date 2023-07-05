import { Metadata, ResolvingMetadata } from 'next'
import { createClient } from '@/prismicio'
import { Heading } from '@/components/Heading'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import type { Content } from '@prismicio/client'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const client = createClient()

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const homepage = await client.getSingle<Content.HomepageDocument>('homepage')
  const {
    data: { canonical },
  } = homepage
  return {
    alternates: {
      canonical: `${canonical || `${homepage.data.siteurl}${homepage?.url}`}`,
    },
  }
}

export default async function Home() {
  const homepage = await client.getSingle('homepage')
  return (
    <main>
      <h1>{homepage.data.metadescription}</h1>
      <SliceZone slices={homepage?.data?.slices} components={components} />
    </main>
  )
}
