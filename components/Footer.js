import Link from 'next/link'

export default ({ links }) => (
  <footer className='u-with-padding'>
    <p>
      <span>
        <a href='mailto:hello@evilfactory.id'>Email</a> (
        <a
          href='https://git.io/evilfactory-pgp'
          target='_blank'
          rel='noopener noreferrer'
        >
          PGP
        </a>
        )
      </span>
      {links.map(link => (
        <span key={link.id}>
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
            {link.title}
          </a>
        </span>
      ))}
    </p>
    <p>
      &copy; MMXVIII - present.{' '}
      <Link href='/'>
        <a>evilfactory</a>
      </Link>{' '}
      rulez.
    </p>
    <style jsx>{`
      span {
        padding-right: 15px;
      }
    `}</style>
  </footer>
)
