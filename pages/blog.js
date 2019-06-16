import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'

const months = [
  '',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Okt',
  'Nov',
  'Des'
]

const shouldAddZero = number => (~~number <= 9 ? '0' + number : number)

const convertToDate = date => {
  const $date = new Date(date)
  const day = shouldAddZero($date.getDate())
  const month = months[$date.getMonth()]
  const year = $date.getFullYear()

  return `${day} ${month} ${year}`
}

export default () => {
  const API_URL = 'https://api.github.com/repos/evilfactorylabs/blog/issues'
  const [posts, setPosts] = useState([])

  useEffect(() => {
    requestIdleCallback(async () => {
      const req = await fetch(API_URL)
      const json = await req.json()
      return setPosts(json)
    })
  }, [])
  return (
    <div className='u-with-padding'>
      <Head>
        <title>blog by evilfactory team</title>
        <met
          name='description'
          content='our greatest thought, knowledge and tinkering'
        />
      </Head>
      <div className='u-with-padding'>
        <h2>blog by evilfactory</h2>
        <p>our greatest thought, knowledge and tinkering</p>
        <article>
          {posts.length < 1 ? (
            <p>Loading...</p>
          ) : (
            posts.map(post => {
              return (
                <div key={post.id}>
                  <h4>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={`${post.html_url}#issue-${post.id}`}
                    >
                      {post.title}
                    </a>
                  </h4>
                  <p>
                    by{' '}
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={post.user.html_url}
                    >
                      @{post.user.login}
                    </a>{' '}
                    at {convertToDate(post.created_at)}
                  </p>
                </div>
              )
            })
          )}
        </article>
        <style jsx>{`
          article {
            margin-top: 4rem;
          }
          div {
            margin-bottom: 2.8rem;
          }
          p {
            font-size: 16px;
            line-height: 2.6rem;
          }
        `}</style>
        {posts.length > 1 && (
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        )}
      </div>
    </div>
  )
}
