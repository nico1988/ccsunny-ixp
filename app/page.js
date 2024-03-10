"use client";
import { useState } from 'react';
import './index.scss';

export default function Home() {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <main className="bg-black home">
      <div className='line-vertical'></div>
      {
        isFocus && <div className='line-vertical-2'></div>
      }
      <div className='top-bar'>
        <div className='brand-word'>
            DNA LAB
        </div>
        <div className='search'>
            <div className='icon-search'></div>
            <input onFocus={()=>{
              setIsFocus(true)
            }} onBlur={()=>{
              setIsFocus(false)
            }}/>
        </div>
        <div className='logo'>

        </div>
      </div>

      <div className='main'>
        <div className='left-nav'>
            <div className='nav-item active'>
                <div className='icon shoes'></div>
            </div>
            <div className='nav-item '>
                <div className='icon calendar'></div>
            </div>
            <div className='nav-item '>
                <div className='icon star'></div>
            </div>
        </div>
        
        <div className={`product-main ${isFocus && 'is-hide'}`}>
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

        <div className={`search-section ${!isFocus && 'is-hide'}`}>
          <div className='search-content'>
            <div className='search-block'>
                <div className='search-block-title'>
                    History
                </div>
                <div  className='search-label-list'>
                  <span className="light">Nike Air Force 1 '07</span>
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
          <div className='search-right'>
              
          </div>
        </div>
      </div>
    </main>
  );
}
