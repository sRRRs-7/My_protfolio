import { useEffect, useState } from 'react';
import JsonBlog from '../../contents.json';
import ContentsList from '../../components/ContentsList';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { BlogState, CategoryState } from '../../atom/recoil';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SubscriptionsOutlined } from '@mui/icons-material';

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
  const [category, setCategory] = useRecoilState(CategoryState);
  const [blog, setBlog] = useRecoilState(BlogState);
  const router = useRouter();
  let category_arr: Blogs[] = [];

  const event_handler = (idx: string) => {
    blogs.blog.map((b: Blogs) => {
      if (b.id == idx) {
        setBlog(b);
      }
    });
    router.push(`/blog/${idx}`);
  };

  const sorting = () => {
    let path = window.location.pathname;
    path = path.replace('/category/', '');
    blogs.blog.map((b: Blogs) => {
      if (path == b.category) {
        category_arr.push(b);
      }
    });
  };

  let is_ignore = false;
  useEffect(() => {
    if (!is_ignore) {
      sorting();
    }
    return () => {
      setCategory(category_arr);
      is_ignore = true;
    };
  }, [category]);

  return (
    <>
      <div className='bg-orange-100 h-full grid-cols-3 grid-flow-col'>
        <div className='z-50'>
          <Header />
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <div>
            <div className='absolute right-0 mr-56 mt-12'>
              <ContentsList />
            </div>

            <div className='grid grid-cols-2 grid-flow-row mr-64 ml-20 px-64'>
              {category?.map((m: any) => (
                <div
                  className='m-10 opacity-50 hover:opacity-100 bg-yellow-100 rounded-3xl'
                  key={m?.id}
                >
                  <div
                    className='space-y-3 border rounded-3xl shadow-2xl p-10 cursor-pointer'
                    onClick={() => event_handler(m?.id)}
                  >
                    <h1 className='text-2xl font-mono text-center'>{m?.title}</h1>
                    <h1 className='text-xl font-mono'>{m?.image}</h1>
                    <h1 className='text-lg font-mono'>{m?.contents}</h1>
                    <h1 className='text-lg font-mono'>{m?.timestamp}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-0'>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
