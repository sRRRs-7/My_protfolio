import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function skill() {
  return (
    <>
      <div className='bg-orange-100 h-full'>
        <div className='z-50'>
          <Header />
        </div>
        <div>
          <Footer />
        </div>

        <div className='flex mt-20 px-64 justify-items-center'>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
              width={120}
              height={120}
            />
            <p>HTML5</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
              width={120}
              height={120}
            />
            <p>CSS3</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
              width={120}
              height={120}
            />
            <p>Javascript</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
              width={120}
              height={120}
            />
            <p>Typescript</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
              width={120}
              height={120}
            />
            <p>React</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
              width={120}
              height={120}
            />
            <p>Next.js</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
              width={120}
              height={120}
            />
            <p>Tailwindcss</p>
          </div>
        </div>

        <div className='flex mt-20 px-64 justify-items-center'>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
              width={120}
              height={120}
            />
            <p>Go</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg'
              width={120}
              height={120}
            />
            <p>Rust</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
              width={120}
              height={120}
            />
            <p>Rust</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
              width={120}
              height={120}
            />
            <p>Linux</p>
          </div>
        </div>

        <div className='flex mt-20 px-64 justify-items-center mb-20'>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
              width={120}
              height={120}
            />
            <p>PostgreSQL</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
              width={120}
              height={120}
            />
            <p>Redis</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg'
              width={120}
              height={120}
            />
            <p>Docker</p>
          </div>
          <div className='text-center text-2xl font-mono justify-items-center mx-auto space-y-2'>
            <img
              className='mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
              width={120}
              height={120}
            />
            <p>Github</p>
          </div>
        </div>

        <div className='bottom-0'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default skill;
