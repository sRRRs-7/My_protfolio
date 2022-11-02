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
      <div>
        <div className='absolute right-0 mr-48 mt-12'>
          <ContentsList />
        </div>
        <div className='grid grid-cols-2 grid-flow-row mr-64 ml-20 px-64'>
          {blogs.blog.map((b) => (
            <div className='m-10 opacity-50 hover:opacity-100 bg-yellow-100 rounded-3xl' key={b.id}>
              <div
                className='space-y-3 border rounded-3xl shadow-2xl p-10 cursor-pointer object-contain w-auto h-64'
                onClick={() => event_handler(b.id)}
              >
                <h1 className='text-2xl font-mono text-center'>{b.title}</h1>
                <h1 className='text-xl font-mono'>{b.image}</h1>
                <h1 className='text-lg font-mono'>{b.contents}</h1>
                <h1 className='text-lg font-mono'>{b.timestamp}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
