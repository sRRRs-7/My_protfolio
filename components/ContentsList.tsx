import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { BlogState, FooterState } from '../atom/recoil';
import JsonBlog from '../contents.json';

interface Blogs {
  id: String;
  title: String;
  image: String;
  contents: String;
  timestamp: String;
  comment: String;
  category: String;
}

function ContentsList() {
  const [blogs, _] = useState(JsonBlog);
  const [blog, setBlog] = useRecoilState(BlogState);
  const [title, setTitle] = useRecoilState(FooterState);
  const router = useRouter();

  const event_handler = (idx: string) => {
    blogs.blog.map((b: Blogs) => {
      if (b.id == idx) {
        setBlog(b);
        setTitle(b.title);
      }
    });
    router.push(`/blog/${idx}`);
  };

  return (
    <>
      <div className=''>
        {/* category */}
        <div className='font-mono text-2xl space-y-8'>
          <h1 className='text-3xl underline text-blue-400'>Category</h1>
          <div className='hover:text-blue-400'>
            <a href='/category/qualification'>Qualification</a>
          </div>
          <div>
            <a href='/category/rust' className='hover:text-blue-400'>
              Rust
            </a>
          </div>
          <div>
            <a href='/category/go' className='hover:text-blue-400'>
              Go
            </a>
          </div>
          <div>
            <a href='/category/python' className='hover:text-blue-400'>
              Python
            </a>
          </div>
          <div>
            <a href='/category/linux' className='hover:text-blue-400'>
              Linux
            </a>
          </div>
          <div>
            <a href='/category/node' className='hover:text-blue-400'>
              Node.js
            </a>
          </div>
          <div>
            <a href='/category/terraform' className='hover:text-blue-400'>
              Terraform
            </a>
          </div>
          <div>
            <a href='/category/docker' className='hover:text-blue-400'>
              Docker
            </a>
          </div>
          <div>
            <a href='/category/aws' className='hover:text-blue-400'>
              AWS
            </a>
          </div>
          <div>
            <a href='/category/rdb' className='hover:text-blue-400'>
              RDB
            </a>
          </div>
          <div>
            <a href='/category/kubernetes' className='hover:text-blue-400'>
              Kubernetes
            </a>
          </div>

          {/* recently */}
          <div className='text-2xl font-mono space-y-8'>
            <h1 className='underline text-3xl text-blue-400 mt-32'>Recommend Topic</h1>
            <div>
              <a
                className='hover:text-blue-400 cursor-pointer'
                onClick={() => {
                  event_handler('1');
                }}
              >
                Rust algorithm
              </a>
            </div>
            <div>
              <a
                className='hover:text-blue-400 cursor-pointer'
                onClick={() => {
                  event_handler('2');
                }}
              >
                Application Engineer
              </a>
            </div>
            <div>
              <a
                className='hover:text-blue-400 cursor-pointer'
                onClick={() => {
                  event_handler('3');
                }}
              >
                Algorithm
              </a>
            </div>
            <div>
              <a
                className='hover:text-blue-400 cursor-pointer'
                onClick={() => {
                  event_handler('4');
                }}
              >
                Linux
              </a>
            </div>
            <div>
              <a
                className='hover:text-blue-400 cursor-pointer'
                onClick={() => {
                  event_handler('5');
                }}
              >
                AWS
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentsList;
