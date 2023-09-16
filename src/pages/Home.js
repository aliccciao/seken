import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './Home.css'; // Import your custom CSS file for styling
import { SocialIcon } from 'react-social-icons'

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
      <div className='vision'>
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
      <div className='education'>
  <div className='image'>
    <img src="./Carousel/edu.png" alt="Edu"/>
  </div>
  <div className='text'>
    <div className="benefit">Manfaat Membeli Pakaian Bekas</div>
    <div className='berikut'>
    <div>
    <div style={{ marginBottom: '12px', marginTop:'30px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src='/Carousel/cek.png' alt='Gambar Kolom 1' style={{ width: '34px', height: '33px', marginRight: '8px' }} />
        <p style={{ textAlign: 'left', margin: '0' }}>Harganya lebih terjangkau dari pakaian baru</p>
    </div>
</div>
<div style={{ marginBottom: '12px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src='/Carousel/cek.png' alt='Gambar Kolom 1' style={{ width: '34px', height: '33px', marginRight: '8px' }} />
        <p style={{ textAlign: 'left', margin: '0' }}>Mengurangi dampak polusi lingkungan akibat produksi pakaian</p>
    </div>
</div>
<div style={{ marginBottom: '12px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src='/Carousel/cek.png' alt='Gambar Kolom 1' style={{ width: '34px', height: '33px', marginRight: '8px' }} />
        <p style={{ textAlign: 'left', margin: '0' }}>Mendukung gerakan keberlanjutan</p>
    </div>
</div>
<div style={{ marginBottom: '12px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src='/Carousel/cek.png' alt='Gambar Kolom 1' style={{ width: '34px', height: '33px', marginRight: '8px' }} />
        <p style={{ textAlign: 'left', margin: '0' }}>Varian yang unik dan beragam</p>
    </div>
</div>

</div>
</div>

    </div>
  </div>
  <div className='youtube'>
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 className='title'>Our Videos</h1>
    </div>
    <div style={{ textAlign: 'center' }}>
        <video width="900" height="560" controls style={{ marginTop: '120px' }}>
            <source src="/Carousel/yt.mp4" type="video/mp4" />
        </video>
    </div>
</div>
</div>

  );
};

export default Home;
