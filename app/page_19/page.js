"use client";
import './index.scss';

export default function Page19() {
  return (
    <main className="bg-black page_19">
      <div className='line-vertical-1'></div>
      <div className='line-vertical-2'></div>
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

            <img className='tool-bar' src='/page-19/tool-bar.png'/>
            <img className='color-picker' src='/page-19/color-picker.png'/>

            <img className='shoes-detail' src='/page-19/shoes-detail.png'/>
            <img className='tools' src='/page-19/footer-circle.png' width={'50%'}/>
        </div>
    </main>
  );
}
