import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './Home.css'; // Import your custom CSS file for styling

const Home = () => {
  return (
    <div className="Home">
      <div className="carousel-container">
        <Carousel
          showThumbs={true}
          width="1260px"
          height="930px"
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showStatus={false} // Sembunyikan teks status
          showIndicators={false} // Sembunyikan indikator slider
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button onClick={onClickHandler} className="carousel-arrow prev">
                &lt;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button onClick={onClickHandler} className="carousel-arrow next">
                &gt;
              </button>
            )
          }
        >
          <div>
            <img src="./Carousel/baju.png" alt="Image 1" />
          </div>
          <div>
            <img src="./Carousel/promosi.png" alt="Image 2" />
          </div>
          <div>
            <img src="./Carousel/hire.png" alt="Image 3" />
          </div>
        </Carousel>
      </div>
      <div className='education'>
          <h1 className='title'>Visi Kami</h1>
           <div className='vision-cards'>
            <div className='vision-card'>
            <div class="gambar-lingkaran">
              <img src="./Carousel/visi 1.png" alt="Visi 1"/>
              <p>EDUCATE</p>
            </div>
            </div>
            <div className='vision-card'>
            <div class="gambar-lingkaran">
              <img src="./Carousel/visi 2.png" alt="Visi 2"/>
              <p>MONEY</p>
            </div>
            </div>
            <div className='vision-card'>
            <div class="gambar-lingkaran">
              <img src="./Carousel/visi 3.png" alt="Visi 3"/>
              <p>PROTECT</p>
            </div>
            </div>
           </div>
      </div>
    </div>
  );
};

export default Home;
