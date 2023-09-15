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
          <h1 className='title'>Manfaat Membeli Pakaian Bekas</h1>
      </div>
    </div>
  );
};

export default Home;
