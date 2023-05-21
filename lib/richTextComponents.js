import { Heading } from '@/components/Heading'
import { PrismicLink } from '@prismicio/react'
export const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h1" size="5xl">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="4xl">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="3xl">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" size="2xl">
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading as="h5" size="xl">
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading as="h6" size="xl">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="commonTextMargins commonTextStyles pStyles">{children}</p>
  ),
  oList: ({ children }) => (
    <ol className="commonTextMargins commonTextStyles listStyles">
      {children}
    </ol>
  ),
  oListItem: ({ children }) => (
    <li className="commonTextMargins commonTextStyles listItemStyles">
      {children}
    </li>
  ),
  list: ({ children }) => (
    <ul className="commonTextMargins commonTextStyles listStyles">
      {children}
    </ul>
  ),
  listItem: ({ children }) => (
    <li className="commonTextMargins commonTextStyles listItemStyles">
      {children}
    </li>
  ),
  preformatted: ({ children }) => (
    <pre className="commonTextMargins preFormattedStyles">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="linkStyles">
      {children}
    </PrismicLink>
  ),
  embed: ({ node, children }) => {
    return (
      <div className="oEmbedStyles">
        <div
          className="aspect-w-16 aspect-h-9"
          dangerouslySetInnerHTML={{ __html: node.oembed.html }}
        />
      </div>
    )
  },
}
