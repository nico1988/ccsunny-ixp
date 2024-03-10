import './index.scss';

export default function Home() {
  return (
    <main className="bg-black home">
      <div className='line-vertical'></div>
      <div className='top-bar'>
        <div className='brand-word'>
            DNA LAB
        </div>
        <div className='search'>
            <div className='icon-search'></div>
            <input />
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
        
        <div className='product-main'>
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
      </div>
    </main>
  );
}
