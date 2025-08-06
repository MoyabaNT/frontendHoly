import React from 'react';
import Blogo from '../assets/Blogo.png';
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div className="min-h-[230vh] bg-[#4A2C2A] font-sans text-gray-200">
      {/* Scroll Indicator */}
      <div className="fixed top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 font-light text-white animate-[hide_3s_both] [animation-timeline:scroll()] [animation-range:0%_10%]">
        <h1 className="text-3xl font-serif"><span className="font-semibold">Arranged </span>Holy</h1>
        <p className="mt-2 text-sm font-light italic">Where Holy Words Find Peaceful Order</p>
      </div>

      {/* Header Section with SVG Logo */}
      <div className="absolute top-100 left-0 z-[1] flex h-screen w-full items-center justify-center mb-20 bg-[#4A2C2A] animate-[header_2s_2s_both] [animation-timeline:scroll()] [animation-range:0%_55%]">
        <img src={Blogo} alt="Sacred Logo" className="h-48 w-auto animate-[logo_2s_2s_both] [animation-timeline:scroll()] [animation-range:0%_55%]" />
        <div className="absolute -top-10 left-0 z-0 h-[150%] w-full bg-gradient-to-b from-[#5E3A36] to-transparent blur-xl backdrop-blur-lg animate-[header-overlay_2s_2s_both] [animation-timeline:scroll()] [animation-range:0%_55%]" />
      </div>


      {/* First Content Section */}
      <div className="fixed z-[1] mx-auto w-full px-4 pt-24 text-[#D4A017] sm:pt-30">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full sm:mb-10 max-h-[660px]:mb-4 animate-[scale_3s_both] [animation-timeline:scroll()] [animation-range:45%_60%]">
            <img src={Blogo} alt="Sacred Icon" className="h-20 w-20" />
          </div>
          <h1 className="mb-6 text-center text-3xl font-serif font-semibold text-white sm:text-4xl max-h-[660px]:mb-3 max-h-[660px]:text-2xl animate-[up_3s_both] [animation-timeline:scroll()] [animation-range:50%_65%]">
            <span className="font-semibold">Arranged </span>Holy
          </h1 >
          <p className="line-clamp-3 font-light tracking-wide text-gray-300 sm:line-clamp-none max-h-[660px]:clamp-2 animate-[up_3s_both] [animation-timeline:scroll()] [animation-range:55%_70%]">
            The perfect sanctuary for curating your favorite sacred verses and crafting personal prayers with ease. This intuitive application empowers you to organize your spiritual treasures by book or custom filters, bringing order and peace to your 
            devotional practice. Ideal for those seeking a deeper connection with their faith, Arranged Holy offers a serene space to reflect, create, and grow, making it an essential tool for anyone inspired by the power of our Lord and saviour Jesus Christ.
          </p>
        </div>

        <div className="mx-auto max-w-5xl pt-8 sm:pt-16 max-h-[490px]:hidden">
          <div className="mx-auto flex h-10 w-20 items-center justify-center rounded-md sm:mb-10 max-h-[660px]:mb-4 animate-[up_3s_both] [animation-timeline:scroll()] [animation-range:60%_75%]">
            <button className='text-[#D4A017] text-lg bg-[#5E3A36] rounded-md p-2 font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
              <Link to='/SignIn'>
                Sign In
              </Link>
            </button>
          </div>
          <h2 className="mb-12 text-center text-2xl font-serif font-bold text-white sm:text-3xl max-h-[660px]:mb-6 max-h-[660px]:text-2xl animate-[up_3s_both] [animation-timeline:scroll()] [animation-range:65%_80%]">
            Your Spiritual Insights
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 mb-10">
            <div className="flex flex-col rounded-lg border-t border-t-[#D4A017]/30 bg-gradient-to-b from-[#5E3A36]/20 p-4 pb-10 sm:px-6 sm:pt-4 max-h-[660px]:px-3 max-h-[660px]:pt-2 animate-[down_3s_both] [animation-timeline:scroll()] [animation-range:70%_85%]">
              <span className="text-xs text-[#D4A017] sm:text-sm sm:max-w-[10ch]">Verses Saved</span>
              <span className="mt-2 text-2xl font-medium text-white sm:mt-3 sm:text-3xl max-h-[660px]:mt-1 max-h-[660px]:text-xl">100+</span>
            </div>
            <div className="flex flex-col rounded-lg border-t border-t-[#D4A017]/30 bg-gradient-to-b from-[#5E3A36]/20 p-4 pb-10 sm:px-6 sm:pt-4 max-h-[660px]:px-3 max-h-[660px]:pt-2 animate-[up_3s_both] [animation-timeline:scroll()] [animation-range:75%_90%]">
              <span className="text-xs text-[#D4A017] sm:text-sm sm:max-w-[10ch]">Prayers Created</span>
              <span className="mt-2 text-2xl font-medium text-white sm:mt-3 sm:text-3xl max-h-[660px]:mt-1 max-h-[660px]:text-xl">50+</span>
            </div>
            <div className="hidden flex-col rounded-lg border-t border-t-[#D4A017]/30 bg-gradient-to-b from-[#5E3A36]/20 p-4 pb-10 sm:flex sm:px-6 sm:pt-4 max-h-[660px]:px-3 max-h-[660px]:pt-2 animate-[down_3s_both] [animation-timeline:scroll()] [animation-range:80%_95%]">
              <span className="text-xs text-[#D4A017] sm:text-sm sm:max-w-[10ch]">Books Explored</span>
              <span className="mt-2 text-2xl font-medium text-white sm:mt-3 sm:text-3xl max-h-[660px]:mt-1 max-h-[660px]:text-xl">10+</span>
            </div>
            <div className="hidden flex-col rounded-lg border-t border-t-[#D4A017]/30 bg-gradient-to-b from-[#5E3A36]/20 p-4 pb-10 sm:flex sm:px-6 sm:pt-4 max-h-[660px]:px-3 max-h-[660px]:pt-2 animate-[up_3s_both] [animation-timeline:scroll()] [animation-range:85%_100%]">
              <span className="text-xs text-[#D4A017] sm:text-sm sm:max-w-[10ch]">Custom Filters</span>
              <span className="mt-2 text-2xl font-medium text-white sm:mt-3 sm:text-3xl max-h-[660px]:mt-1 max-h-[660px]:text-xl">20+</span>
            </div>
          </div>
        </div>
      </div>


      {/* Custom CSS for Animations */}
      <style>
        {`
          @keyframes hide {
            100% {
              transform: scale(0);
              filter: blur(10px);
              opacity: 0;
            }
          }
          @keyframes header {
            100% {
              height: 120px;
            }
          }
          @keyframes header-overlay {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0.7;
            }
          }
          @keyframes logo {
            0% {
              transform: scale(1.2);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          @keyframes scale {
            0% {
              transform: scale(0) translateY(40%);
              filter: blur(10px);
              opacity: 0;
            }
            100% {
              transform: scale(1) translateY(0);
              filter: blur(0);
              opacity: 1;
            }
          }
          @keyframes up {
            0% {
              transform: translateY(40%);
              filter: blur(10px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              filter: blur(0);
              opacity: 1;
            }
          }
          @keyframes down {
            0% {
              transform: translateY(-40%);
              filter: blur(10px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              filter: blur(0);
              opacity: 1;
            }
          }
          html, body {
            margin: 0;
            scroll-behavior: smooth;
            background: radial-gradient(circle at 20% 20%, #4A2C2A 0%, #3D2523 100%);
          }
        `}
      </style>
    </div>
  );
};

export default Landing;