import React from 'react'

function Heading({badge,title, description}: {badge?: string,title: string, description: string}) {
  return (
    <article>
    {badge && <span className="text-center block w-fit sm:text-base text-sm mx-auto bg-orange text-white sm:px-5 px-3 sm:py-2 py-1 rounded-full">
      {badge}
    </span>}
    <h1 className="2xl:text-8xl xl:text-7xl md:text-6xl sm:text-5xl leading-[125%] text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-500 text-center">
    {title}
    </h1>
    <p className="text-lg text-white 2xl:max-w-xl max-w-lg mx-auto pt-2 text-center">
    {description}
    </p>
  </article>
  )
}

export default Heading
