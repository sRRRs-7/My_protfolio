import { link } from 'fs';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Url } from 'url';
import Footer from '../components/Footer';
import Header from '../components/Header';
import JsonPortfolio from '../portfolio.json';

function portfolio() {
  const [portfolios, _] = useState(JsonPortfolio);
  const router = useRouter();

  const clickHandler = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <div className='bg-orange-100 f-full'>
        <div>
          <Header />
        </div>
        <div>
          <Footer />
        </div>

        <div className='grid grid-cols-2 grid-flow-row mx-64 px-32 mt-16'>
          {portfolios.portfolio.map((b) => (
            <div className='mx-10 my-16' key={b.id} onClick={() => clickHandler(b.link)}>
              <div className='space-y-3 border rounded-3xl shadow-2xl cursor-pointer opacity-50 hover:opacity-100 bg-yellow-100'>
                <img
                  src='profile2.jpg'
                  alt='portfolio'
                  width={400}
                  height={300}
                  className={`rounded-t-3xl`}
                />
                <div className='text-center p-3 space-y-3'>
                  <h1 className='text-2xl font-mono text-center'>{b.link}</h1>
                  <h1 className='text-lg font-mono'>{b.contents}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default portfolio;
