import React, { useState } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blog = () => {
  const [inView, setInView] = useState(false);

  const clickHandler = () => {
    setInView(true);
  };

  return (
    <>
      <div>
        <Header />
      </div>

      <div className='relative'>
        <img src='/profile.png' alt='profile' className='flex h-80 w-80 mx-auto' />
        <div>
          <p className='absolute top-0 left-0 text-yellow-200 lg:text-6xl font-mono lg:ml-20 lg:mt-32 animate-bounce md:text-4xl md:ml-16 md:mt-16 sm:ml-16 sm:mt-16'>
            No code
          </p>
          <p className='absolute bottom-0 left-0 text-orange-500 lg:text-6xl font-mono lg:ml-64 lg:mb-20 animate-bounce md:text-4xl md:ml-32 md:mb-16 sm:ml-32 sm:mb-16'>
            No life
          </p>
        </div>
      </div>

      <div className='flex text-center bg-orange-100 pt-10'>
        {!inView && (
          <p
            className='text-6xl flex mx-auto animate-ping cursor-pointer text-orange-400'
            onClick={() => {
              clickHandler();
            }}
          >
            ⌬
          </p>
        )}
      </div>

      <div className='flex text-center bg-orange-100 pt-10'>
        {!inView && (
          <p className='flex text-center bg-orange-100 mx-auto pb-5 animate-pulse text-xl rounded-full font-mono'>
            OPEN!!
          </p>
        )}
      </div>

      {/* profile */}
      <div className='text-5xl font-mono flex text-center bg-orange-100 pt-10'>
        {inView && <h1 className='flex m-auto'>Profile</h1>}
      </div>

      {inView && (
        <div>
          <div>
            <div className='p-5 bg-orange-100 h-full'>
              <div className='flex justify-center'>
                <div className='flex flex-col md:flex-row md:max-w-3xl rounded-3xl bg-white shadow-2xl'>
                  <div className='p-6 flex flex-col justify-start bg-yellow-100 rounded-3xl'>
                    <h5 className='flex justify-center text-gray-900 text-2xl font-serif'>
                      佐藤 亮介
                    </h5>
                    <h5 className='flex justify-center text-gray-900 text-3xl font-serif mb-10'>
                      RYOUSUKE SATOU
                    </h5>
                    <p className='text-gray-700 text-base mb-4 font-serif'>
                      - 生息地 : 北海道 札幌市
                    </p>
                    <p className='text-gray-700 text-base mb-4 font-serif'>
                      - 趣味 : 料理, サッカー, 将棋, NetFlix, 3D Graphics
                    </p>
                    <p className='text-gray-700 text-base mb-4 font-serif'>
                      - Motto : 感動を呼ぶサービス開発
                    </p>
                    <div className='flex ml-auto p-2 mt-8 space-x-5'>
                      <p>
                        <Link href='https://www.youtube.com/channel/UC-F1geS98nNWsD2z3aj7XAw'>
                          <a>
                            <YouTubeIcon className='text-4xl text-red-600 cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link href='https://twitter.com/sRRRs45'>
                          <a>
                            <TwitterIcon className='text-4xl text-blue-300 cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link href='https://www.facebook.com/profile.php?id=100008637453334'>
                          <a>
                            <FacebookIcon className='text-4xl text-blue-800 cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link href='https://www.instagram.com/srrrs007/'>
                          <a>
                            <InstagramIcon className='text-4xl text-orange-500 cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                      <p>
                        <Link href='https://github.com/sRRRs-7'>
                          <a>
                            <GitHubIcon className='text-4xl text-black cursor-pointer' />
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* background */}

      <div className='text-5xl font-mono flex text-center bg-orange-100 pt-10'>
        {inView && <h1 className='flex m-auto'>Background</h1>}
      </div>
      <div className='text-xl font-mono flex text-center bg-orange-100 pt-10'>
        {inView && <h1 className='flex m-auto'>To Be Continue</h1>}
      </div>

      <div className='flex bg-orange-100'>
        {inView && <p className='text-5xl flex mx-auto animate-bounce'>⇣</p>}
      </div>

      <div className='bg-orange-100 w-full'>
        {inView && (
          <div className='p-10 flex justify-center md:px-0'>
            <div className='p-10 rounded-3xl shadow-2xl text-center bg-yellow-100'>
              <div>
                <h1>2021年-2023年</h1>
                <h3>プログラミングスキル習得, 資格取得</h3>

                <div className='text-md p-3 space-y-5'>
                  <div>
                    <h1 className='text-md'>スキル</h1>
                  </div>
                  <div>
                    <h4 className='text-xl'>- Language -</h4>
                    <p> Rust | Go | Javascript | Typescript | Python</p>
                  </div>
                  <div>
                    <h4 className='text-xl'>- Framework -</h4>
                    <p>React | Next.js | Axum | Gin-gonic | Django</p>
                  </div>
                  <div>
                    <h4 className='text-xl'>- RDB/NoSQL -</h4>
                    <p>Postgres | Redis</p>
                  </div>
                  <div>
                    <h4 className='text-xl'>- Cloud -</h4>
                    <p>AWS (EC2 | ECS) | GCP (Firebase)</p>
                  </div>
                  <div>
                    <h4 className='text-xl'>- その他 -</h4>
                    <p>Github | Docker | Terraform </p>
                  </div>
                </div>

                <div>
                  <div className='space-y-3'>
                    <h1 className='text-xl'>- 資格 -</h1>
                    <h4 className='text-md'>応用技術者</h4>
                    <h4 className='text-md'>LPIC</h4>
                    <h4 className='text-md'>AWS</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {inView && (
          <div className='flex'>
            <p className='text-5xl flex m-auto animate-bounce'>⇣</p>
          </div>
        )}

        {inView && (
          <div className='p-10 flex justify-center md:px-0'>
            <div className='p-10 rounded-3xl shadow-2xl text-center bg-yellow-100'>
              <h1>2019年-2021年</h1>
              <h3>サッポロホールディングス</h3>
              <h3>ポッカサッポロフード&ビバレッジ株式会社</h3>
              <h3>千葉支店 法人営業</h3>
              <br />
              <div>
                <p>食品卸大手, 某ドラッグチェーン ローカルスーパーマーケット</p>
                <p>- メイン商材　PJT リーダー</p>
                <p> &nbsp; &nbsp; 毎月のKPI, KGI設定, 利益率管理</p>
                <p> &nbsp; &nbsp; 統計分析(バスケット分析, ABC分析)による販売戦略の立案</p>
                <p> &nbsp; &nbsp; VBAでの共通データ分析フォーマットの作成</p>
              </div>
            </div>
          </div>
        )}

        {inView && (
          <div className='flex'>
            <p className='text-5xl flex m-auto animate-bounce'>⇣</p>
          </div>
        )}

        {inView && (
          <div className='p-10 flex justify-center md:px-0'>
            <div className='p-10 rounded-3xl shadow-2xl text-center bg-yellow-100'>
              <h1>2019年</h1>
              <h3>同志社大学 商学部 商学科 卒業</h3>
              <br />
              <p>
                - 一人一人の可能性を見つけ出すためのコミュニティの運営 <br />
                - DTL(doshisya tennis league)実行委員 経理部門 広報部門　担当
                <br />
              </p>
            </div>
          </div>
        )}
      </div>

      <div className='bottom-0'>
        <Footer />
      </div>
    </>
  );
};

export default blog;
