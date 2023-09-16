import React from 'react';
import { SocialIcon } from 'react-social-icons';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './About.css';


const About = () => {
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossorigin="anonymous"></link>
  const titleStyle = {
    fontFamily: "Inter",
    fontSize: '44px',
    fontWeight: 'bold',
    color: '#093731',
    marginTop: '20px',
    marginBottom: '20px'
  };
  const paragraphStyle = {
    fontFamily: "Inter",
    fontSize: '20px',
    color: '#093731',
  };
  const paragraph = {
    fontFamily: "Inter",
    fontSize: '20px',
    color: '#093731',
    textAlign:'justify',
    marginLeft:'360px'
  };
  const titleStyle1 = {
    fontFamily: "Inter",
    fontSize: '44px',
    fontWeight: 'bold',
    color: '#DFECEA',
    marginTop: '20px',
    marginBottom: '20px'
  };
  const paragraph1 = {
    fontFamily: "Inter",
    fontSize: '20px',
    color: '#DFECEA',
    textAlign:'justify',
    marginLeft:'300px',
    marginTop:'12px'
  };
  return (
    <div className="Home">
      <div className="title-container">
        <h1 style={titleStyle}>Dari Pancong untuk Masyarakat</h1>
        <p style={paragraphStyle}>Selamat datang di Pancong, tempatnya inovasi, dedikasi, dan berkomitmen </p>
        <p style={paragraphStyle}>untuk memberikan solusi terbaik dalam penjualan dan pembelian pakaian bekas.</p>
        <p style={paragraphStyle}>Kami adalah tim profesional yang berfokus pada memberikan nilai tambah kepada </p>
        <p style={paragraphStyle}>pelanggan kami melalui produk dan layanan berkualitas tinggi.</p>
      </div>
      <div className="Tim">
      <div className='vision'>
          <h1 className='title'>Tim Kami</h1>
          <p style={{color: "#DFECEA", marginTop:"100px"}}>
  Kami adalah kelompok individu yang bersemangat dan berbakat, terdiri dari tiga orang, dengan pengalaman yang beragam di bidang IT. Kami memahami bahwa setiap pelanggan adalah unik, dan kami berkomitmen untuk memberikan solusi yang disesuaikan dengan kebutuhan khusus Anda.
</p>
           <div className='vision-cards'>
            <div className='vision-card'>
            <div class="gambar-lingkaran">
              <img src="./Carousel/cia.png" alt="Visi 1"/>
              <p>Alicia</p>
            </div>
            </div>
            <div className='vision-card'>
            <div class="gambar-lingkaran">
              <img src="./Carousel/mat.png" alt="Visi 2"/>
              <p>Mathilda</p>
            </div>
            </div>
            <div className='vision-card'>
            <div class="gambar-lingkaran">
              <img src="./Carousel/apin.png" alt="Visi 3"/>
              <p>Alvin</p>
            </div>
            </div>
           </div>
           </div>
      </div>
      <h1 style={titleStyle}>Motto Kami</h1>
      <p style={paragraph}>1. Mengutamakan nilai-nilai Edukasi, Ekonomis, dan Ekologis </p>
        <p style={paragraph}>2. Menjamin keamanan bertransaksi</p>
        <p style={paragraph}>3. Harmonis dan Kekeluargaan</p>
        <p style={paragraph}>4. User adalah raja</p>
      <div className='vision'>
      <h1 style={titleStyle1}>Kenapa Memilih Kami?</h1>
      <p style={paragraph1}>1. Seken aplikasi yang aman dan terpercaya </p>
        <p style={paragraph1}>2. Komitmen utama kami adalah kepuasan user</p>
        <p style={paragraph1}>3. Layanan kami yang responsif dan efisien</p>
        <p style={paragraph1}>4. Tindakan kami dalam misi penyelamatan bumi</p>
      </div>
    </div>
  );
};

export default About;
