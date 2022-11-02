import Blog1 from '../../components/Blogs/blog1';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function blog() {
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
          <Blog1 />
        </div>
      </div>
      <div className='bottom-0'>
        <Footer />
      </div>
    </>
  );
}

export default blog;
