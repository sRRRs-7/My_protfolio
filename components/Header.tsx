import React from 'react';

const Header = () => {
  return (
    <>
      <div className='fixed right-0 mx-20 mt-5 z-50'>
        <div className='flex h-20 items-center justify-center space-x-10'>
          <a
            href='/'
            className='lg:text-2xl md:text-md font-mono text-yellow-500 hover:text-blue-300'
          >
            Profile
          </a>
          <a
            href='/portfolio'
            className='lg:text-2xl md:text-md font-mono text-yellow-500 hover:text-blue-300'
          >
            Portfolio
          </a>
          <a
            href='/blogs'
            className='lg:text-2xl md:text-md font-mono text-yellow-500 hover:text-blue-300'
          >
            Blog
          </a>
          <a
            href='/contact'
            className='lg:text-2xl md:text-md font-mono text-yellow-500 hover:text-blue-300'
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
