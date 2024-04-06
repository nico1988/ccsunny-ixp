"use client";
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Home() {
  const [isFocus, setIsFocus] = useState(false);
  const router = useRouter();
  return (
    <main className="bg-black h-screen">
      <div className='block absolute top-0 left-[182px] h-screen border-r border-[#00FFE0]'></div>
      {
        isFocus && <div className='block absolute top-0 right-[280px] h-screen border-r border-[#00FFE0]'></div>
      }
      <div className='h-[130px] flex justify-between border-b border-[#00FFE0]'>
        <div className='w-[182px] flex items-center justify-center text-white font-bold text-2xl'>
            DNA LAB
        </div>
        <div className='flex justify-center items-center'>
            <div className='bg-[url("/search-icon.svg")] w-6 h-6 p-1 bg-no-repeat bg-center absolute left-[calc(50%-300px)]'></div>
            <input className='border border-[#00FFE0] bg-[#1E1E1E] w-[650px] h-7 rounded-md pl-8 text-white' onFocus={()=>{
              setIsFocus(true)
            }} onBlur={()=>{
              setIsFocus(false)
            }}/>
        </div>
        <div onClick={()=>{
          router.push('/Gallery1');
        }} className='w-[100px] h-[111px] mr-10 bg-[url("/nike-logo.svg")] bg-no-repeat bg-center cursor-pointer'>

        </div>
      </div>

      <div>
        <div className='absolute w-[74px] border border-[#00FFE0] rounded-md left-[20px] top-[285px] h-[652px] flex items-center flex-col'>
            <div className='nav-item active'>
                <div className='bg-[url("/shoes.svg")] bg-no-repeat bg-center w-12 h-12'></div>
            </div>
            <div className='nav-item '>
                <div className='icon bg-[url("/calendar.svg")] bg-no-repeat bg-center w-12 h-12'></div>
            </div>
            <div className='nav-item '>
                <div className='icon bg-[url("/star.svg")] bg-no-repeat bg-center w-12 h-12'></div>
            </div>
        </div>
        
        <div className={`product-main "mt-[56px] ml-[182px] w-[calc(100%-182px)] h-[750px] flex justify-end flex-col ${isFocus && 'hidden'}`}>
            <div  className='product-list-wrapper'>
              <div className="product-list-scroll-box">
                <div className='product-list'>
                  <div className='product-item'>
                    <img src='/shoe-1.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/shoe-2.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/shoe-3.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/shoe-4.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/shoe-5.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/shoe-1.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/shoe-2.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/shoe-3.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/shoe-4.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/shoe-5.png'></img>
                  </div>
                </div>
              </div>
              <span className="product-name">
                Shoe Laces
              </span>
            </div>
            <div  className='product-list-wrapper'>
            <div className="product-list-scroll-box">
                <div className='product-list'>
                  <div className='product-item'>
                    <img src='/swoosh-1.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/swoosh-2.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/swoosh-3.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/swoosh-4.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/swoosh-5.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/swoosh-1.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/swoosh-2.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/swoosh-3.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/swoosh-4.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/swoosh-5.png'></img>
                  </div>
                </div>
              </div>
              <span className="product-name">
                Swoosh
              </span>
            </div>
            <div  className='product-list-wrapper'>
            <div className="product-list-scroll-box">
                <div className='product-list'>
                  <div className='product-item'>
                    <img src='/tongue-1.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/tongue-2.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/tongue-3.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/tongue-4.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/tongue-5.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/tongue-1.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/tongue-2.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/tongue-3.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/tongue-4.png'></img>
                  </div>
                  <div className='product-item'>
                    <img src='/tongue-5.png'></img>
                  </div>
                </div>
              </div>
              <span className="product-name">
                Tongue
              </span>
            </div>
        </div>

        <div className={`text-white ml-[182px] w-[calc(100%-182px)] flex h-[750px] search-section ${!isFocus && 'hidden'} `}>
          <div className='search-content w-[900px] mx-auto'>
            <div className='search-block h-[268px] flex flex-col relative'>
                <div className="absolute top-full left-[-88px] w-[calc(100%+92px)] h-[1px] bg-[#00FFE0]"></div>
                <div className='search-block-title'>
                    History
                </div>
                <div  className='search-label-list'>
                  <span className="light" >Nike Air Force 1 '07</span>
                  <span>Nike Air Force 1 Wild</span>
                  <span>Shadow Pastel</span>
                  <span>White</span>
                  <span>original</span>
                  <span>Nike Air Force 1 PLT.AF.ORM</span>
                  <span>Shadow</span>
                  <span>‘07 Low</span>
                  <span>Black and White</span>
                </div>
            </div>
            <div className='search-block'>
                <div className='search-block-title'>
                Discover
                </div>
                <div  className='search-label-list'>
                  <span className="light">Cacao Wow</span>
                  <span>Nike Air Force 1 '07 LX</span>
                  <span>Women’s Shoes</span>
                  <span>Billie Eilish</span>
                  <span>Nike Air Force 1 Low SP x UNDERCOVER</span>
                </div>
            </div>
            <div className='search-block'>
                <div className='search-block-title'>
                  Trends
                </div>
                <div  className='search-label-list'>
                  <span className="light">Nike Air Force 1 PLT.AF.ORM</span>
                  <span>Shadow</span>
                  <span>‘07 Low</span>
                  <span>Black and White</span>
                </div>
            </div>
          </div>
          <div className='absolute h-[calc(100%-130px)] w-[280px] right-0 top-[130px] flex flex-col bg-[url("/right-bg.png")] bg-no-repeat bg-right'>
              
          </div>
        </div>
      </div>
    </main>
  );
}
