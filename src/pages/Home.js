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
              <p>EDUKASI</p>
            </div>
            </div>
            <div className='vision-card'>
            <div class="gambar-lingkaran">
              <img src="./Carousel/visi 2.png" alt="Visi 2"/>
              <p>EKONOMIS</p>
            </div>
            </div>
            <div className='vision-card'>
            <div class="gambar-lingkaran">
              <img src="./Carousel/visi 3.png" alt="Visi 3"/>
              <p>EKOLOGIS</p>
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
        <h1 className='title'>Video Kami</h1>
    </div>
    <div style={{ textAlign: 'center' }}>
        <video width="900" height="560" controls style={{ marginTop: '120px' }}>
            <source src="/Carousel/yt.mp4" type="video/mp4" />
        </video>
    </div>
</div>
<div className='footer' style={{ height: '12px', paddingTop: '0', paddingBottom: '0'}}>
      <div className='team-info'style={{color:"#093731"}}>
        <p style={{fontFamily:'primary',fontSize:'20px', fontWeight:'bold', textAlign:'left', marginLeft:'40px',color:"#DFECEA"}}>"</p>
        <p style={{fontFamily:'primary',fontSize:'20px', fontWeight:'bold', textAlign:'left', marginLeft:'40px'}}>MKarya : Pancong</p>
        <p style={{fontFamily:'primary', textAlign:'left',marginLeft:'40px', marginTop:'4px'}}>Alicia Kirana Utomo</p>
        <p style={{fontFamily:'primary', textAlign:'left', marginLeft:'40px', marginTop:'4px'}}>Alvin Widi Nugroho</p>
        <p style={{fontFamily:'primary', textAlign:'left', marginLeft:'40px', marginTop:'4px'}}>Mathilda Dellanova</p>
      </div>
      <div className='social-icons' style={{ textAlign: 'right' }}>
        <SocialIcon href='https://youtu.be/dGpAaDeyjrs' url="www.youtube.com" style={{ marginRight: '12px', marginBottom:'12px' }} />
        <SocialIcon href="https://www.instagram.com/" url="www.instagram.com" style={{ marginRight: '12px', marginBottom:'12px'}} />
        <SocialIcon href="https://twitter.com/?lang=id" url="www.twitter.com" style={{ marginRight: '20px', marginBottom:'12px'}} />
</div>

    </div>
</div>

  );
};

export default Home;
