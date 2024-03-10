"use client";
import './index.scss';
import { useRouter } from 'next/navigation';

export default function Page4() {
  const router = useRouter();
  return (
    <main className="bg-black page_4">
      <div className='line-vertical-1'></div>
      <div className='line-vertical-2'></div>
      <div className='line-vertical-3'></div>
      <div className='line-horizontal-2'></div> 
      <div className='line-horizontal-3'></div>
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
              <div className='product-item plus' onClick={()=>{
                router.push('/page_6')
              }}>
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
