const postFields = /*css*/`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
`

export const indexQuery = /*css*/`
  *[_type == "post"] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`

export const postQuery = /*css*/`
  {
    "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
      content,
      ${postFields}
    }
  }
`

export const postSlugsQuery = /*css*/`
  *[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = /*css*/`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }
`

export const postUpdatedQuery = /*css*/`
  *[_type == "post" && _id == $id].slug.current
`

const snippetFields = /*css*/`
  _id,
  title,
  description,
  logo,
  "slug": slug.current,
`

export const allSnippetsQuery = /*css*/`
  *[_type == "snippet"] | order(date desc, _updatedAt desc) {
    ${snippetFields}
  }
`

export const snippetsQuery = /*css*/`
  {
    "snippet": *[_type == "snippet" && slug.current == $slug] | order(_updatedAt desc) [0] {
      content,
      ${snippetFields}
    }
  }
`

export const snippetSlugsQuery = /*css*/`
  *[_type == "snippet" && defined(slug.current)][].slug.current
`

export const snippetBySlugQuery = /*css*/`
  *[_type == "snippet" && slug.current == $slug][0] {
    ${snippetFields}
  }
`
