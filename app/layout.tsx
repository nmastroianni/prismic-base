import '@/app/globals.css'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { Metadata, ResolvingMetadata } from 'next'
import { Inter } from 'next/font/google'
import { createClient } from '@/prismicio'
import { HomepageDocument } from '@/prismicio-types'
import { asText } from '@prismicio/client'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const inter = Inter({ subsets: ['latin'] })
const client = createClient()

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const homepage: HomepageDocument = await client.getSingle('homepage')
  const {
    data: { metadescription, metaimage, sitetitle, siteurl, title },
  } = homepage
  return {
    title: `${asText(title)} | ${asText(sitetitle)}`,
    description: metadescription,
    openGraph: {
      title: asText(sitetitle),
      description: `${metadescription}`,
      url: `${siteurl}`,
      siteName: `${asText(sitetitle)}`,
      images: [`${metaimage.url}`],
      locale: `${homepage.lang}`,
      type: `website`,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA">
      <body className={inter.className}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
