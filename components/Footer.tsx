import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { BlogState, FooterState } from '../atom/recoil';

function Footer() {
  const [title, setTitle] = useRecoilState(FooterState);
  const [blog, setBlog] = useRecoilState(BlogState);

  useEffect(() => {
    let url = window.location.pathname;
    if (url === '/') {
      setTitle('profile');
    } else if (url.includes('blog/')) {
      setTitle(url.replace(url, blog?.title));
    } else if (url.includes('category/')) {
      setTitle(url.replace('/category/', ''));
    } else {
      setTitle(url.replace('/', ''));
    }
  }, [title]);

  return (
    <>
      <div className='bg-gray-800 h-200 w-full'>
        <div className='text-white text-center text-xl font-mono p-32'>
          <h1 className='text-2xl'>{title}</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
