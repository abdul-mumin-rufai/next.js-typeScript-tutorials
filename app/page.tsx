import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Hello, this is Rufai first ever Next.js app/project may I succeed with it.
      </h1>
      <Link href='/about' className='text-xl text-blue-500 inline-block mt-8'>
        about page
      </Link>
    </div>
  )
}

export default HomePage