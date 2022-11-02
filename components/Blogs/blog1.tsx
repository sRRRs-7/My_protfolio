import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { BlogState } from '../../atom/recoil';
import ContentsList from '../ContentsList';

interface Blogs {
  id: String;
  title: String;
  image: String;
  contents: String;
  timestamp: String;
  comment: String;
  category: String;
}

function Blog1() {
  const [blog, setBlog] = useRecoilState(BlogState);
  const router = useRouter();

  console.log(blog);

  const execFunc = () => {
    if (blog == null) {
      alert('Redirect blogs home');
      router.push('/blogs');
    }
  };

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      execFunc();
    }
    return () => {
      ignore = true;
    };
  }, [blog]);

  return (
    <>
      <div>
        <div className='absolute right-0 mr-56 mt-12 m-20'>
          <ContentsList />
        </div>

        <div className='grid grid-cols-1 grid-flow-row ml-64 px-64 my-10 font-mono'>
          <p>{blog?.timestamp}</p>
        </div>

        <div className='grid grid-cols-1 grid-flow-row mr-64 ml-32 px-64'>
          <div className='m-10 opacity-50 hover:opacity-100' key={blog?.id}>
            <div className='space-y-3 border rounded-3xl shadow-2xl p-10'>
              <h1 className='text-2xl font-mono text-center'></h1>
              <h1 className='text-2xl font-mono text-center'>{blog?.image}</h1>
            </div>
          </div>
        </div>

        <div className='flex bg-orange-100 pt-3 mr-32'>
          <p className='text-5xl flex m-auto'>⇣</p>
        </div>

        <div className='grid grid-cols-1 grid-flow-row mr-64 ml-32 px-64'>
          <div className='m-10 opacity-50 hover:opacity-100' key={blog?.id}>
            <div className='space-y-3 border rounded-3xl shadow-2xl p-10'>
              <h1 className='text-2xl font-mono text-center'></h1>
              <h1 className='text-xl font-mono'>{blog?.title}</h1>
            </div>
          </div>
        </div>

        <div className='flex bg-orange-100 pt-3 mr-32'>
          <p className='text-5xl flex m-auto'>⇣</p>
        </div>

        <div className='grid grid-cols-1 grid-flow-row mr-64 ml-32 px-64'>
          <div className='m-10 opacity-50 hover:opacity-100' key={blog?.id}>
            <div className='space-y-3 border rounded-3xl shadow-2xl p-10'>
              <h1 className='text-2xl font-mono text-center'></h1>
              <h1 className='text-lg font-mono'>{blog?.contents}</h1>
            </div>
          </div>
        </div>

        <div className='flex bg-orange-100 pt-3 mr-32'>
          <p className='text-5xl flex m-auto'>⇣</p>
        </div>

        <div className='grid grid-cols-1 grid-flow-row mr-64 ml-32 px-64'>
          <div className='m-10 opacity-50 hover:opacity-100' key={blog?.id}>
            <div className='space-y-3 border rounded-3xl shadow-2xl p-10'>
              <h1 className='text-2xl font-mono text-center'></h1>
              <h1 className='text-lg font-mono'>{blog?.comment}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog1;
