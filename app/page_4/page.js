"use client";
import './index.scss';

export default function Page4() {
  return (
    <main className="bg-black page_4">
       <div className='top-bar'>
          <div className='logo'>
          </div>
          <div className='search'>
              <div className='icon-search'></div>
              <input onFocus={()=>{
                setIsFocus(true)
              }} onBlur={()=>{
                setIsFocus(false)
              }}/>
          </div>
          <div className='right-circle'>

          </div>
        </div>

        <div  className='main'>
            <div className='gallery-list'>
              <div className='product-item'></div>
              <div className='product-item'></div>
              <div className='product-item'></div>
              <div className='product-item'></div>
              <div className='product-item'></div>
              <div className='product-item'></div>
              <div className='product-item'></div>
              <div className='product-item plus'>
              </div>
            </div>
        </div>

        <div className='footer'>
          <div className='tab'>
            <span  className='tab-item active'>Gallery</span>
            <span  className='tab-item'>Collection</span>
          </div>
        </div>
    </main>
  );
}
