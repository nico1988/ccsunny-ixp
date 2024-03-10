"use client";
import './index.scss';

export default function Page17() {
  return (
    <main className="bg-white page_17">
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
          <div className='right-save'/>
          <div className='right-circle'>

          </div>
        </div>

        <div className='main'>
            <div className='left-nav'>
              <div className='nav-img'/>
            </div>

            <img className='shoes-detail' src='/page-17/shoes-detail.png'/>
            <img className='tools' src='/page-17/dark-mode.png'/>
        </div>
    </main>
  );
}
