const metaTagGenerator = ({ title, description, url }) => [
  {
    name: 'description',
    content: description,
    key: 'description'
  },
  {
    property: 'og:site_name',
    content: 'evilfactory',
    key: 'ogSiteName'
  },
  {
    property: 'og:type',
    content: 'article',
    key: 'ogType'
  },
  {
    property: 'og:title',
    content: title,
    key: 'ogTitle'
  },
  {
    property: 'og:description',
    content: description,
    key: 'ogDescription'
  },
  {
    property: 'og:url',
    content: url,
    key: 'ogUrl'
  },
  {
    name: 'twitter:card',
    content: 'summary',
    key: 'twitterCard'
  },
  {
    name: 'twitter:title',
    content: title,
    key: 'twitterTitle'
  },
  {
    name: 'twitter:description',
    content: description,
    key: 'twitterDescription'
  },
  {
    name: 'twitter:url',
    content: url,
    key: 'twitterUrl'
  }
]

module.exports = metaTagGenerator
