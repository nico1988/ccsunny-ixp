"use client";
import './index.scss';

export default function Page4() {
  return (
    <main className="bg-black page_4">
       <div className='top-bar'>
          <div className='logo'>
          </div>
          <div className='tab'>
            <span  className='tab-item active'>Low</span>
            <span  className='tab-item'>Mid</span>
            <span  className='tab-item'>Hight</span>
          </div>
          <div className='right-circle'>

          </div>
        </div>

        <div className='main'>
            <div className='left-text'>
            DESINGER
            </div>

            <img src='/page-6-shoe.png'/>
            <div className='right-text'>
            Personalized
            </div>
        </div>
    </main>
  );
}
