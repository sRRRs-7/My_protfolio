import { useEffect, useState } from 'react';
import JsonBlog from '../contents.json';
import ContentsList from './ContentsList';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { BlogState } from '../atom/recoil';

interface Blogs {
  id: String;
  title: String;
  image: String;
  contents: String;
  timestamp: String;
  comment: String;
  category: String;
}

function Blog() {
  const [blogs, _] = useState(JsonBlog);
  const [blog, setBlog] = useRecoilState(BlogState);
  const router = useRouter();

  const event_handler = (idx: string) => {
    blogs.blog.map((b: Blogs) => {
      if (b.id == idx) {
        setBlog(b);
      }
    });
    router.push(`/blog/${idx}`);
  };

  return (
    <>
      <div className='lg:flex'>
        <div className='grid lg:grid-cols-2 grid-flow-row lg:ml-64 p-10 space-y-5'>
          {blogs.blog.map((b) => (
            <div className='m-4 opacity-50 hover:opacity-100 bg-yellow-100 rounded-3xl' key={b.id}>
              <div
                className='space-y-3 border rounded-3xl shadow-2xl p-10 cursor-pointer object-contain w-auto h-64'
                onClick={() => event_handler(b.id)}
              >
                <h1 className='text-xl font-mono text-center '>{b.title}</h1>
                <h1 className='text-lg font-mono'>{b.image}</h1>
                <h1 className='text-md font-mono'>{b.contents}</h1>
                <h1 className='text-md font-mono'>{b.timestamp}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className='lg:flex right-0 lg:text-left lg:pt-20 md:text-center md:p-5 sm:text-center sm:p-5 '>
          <ContentsList />
        </div>
      </div>
    </>
  );
}

export default Blog;
