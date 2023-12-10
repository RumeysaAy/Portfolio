import React from 'react';
import "./pricing.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";


const Pricing = () => {
  return (
    <section className='pricing container section'>
      <h2 className='section__title'>Fiyatlandırma Planları</h2>

      <div className='pricing_container grid'>

        <div className='pricing_item'>
          <img src={Image1} alt='' className='pricing_img' />
          <h3 className='pricing_plan'>Basic</h3>
          <p className='pricing_title'>İşinizi yönetmek için basit ama güçlü bir seçenek</p>
          <p className='pricing_support'>E-posta desteği</p>
          <h3 className='price'>
            <em>₺</em> 162 <span>Aylık</span>
          </h3>
          <a href='' className='btn'>Devam Et</a>
        </div>

 <div className='pricing_item best'>
          <span className='badge'>Tavsiye Edilen</span>
          <img src={Image2} alt='' className='pricing_img' />
          <h3 className='pricing_plan'>Premium</h3>
          <p className='pricing_title'>Uygulama entegrasyonu ve daha fazla özellik dahil olmak üzere sınırsız ürün</p>
          <p className='pricing_support'>Pazartesi ve cuma günleri destek</p>
          <h3 className='price'>
            <em>₺</em> 270 <span>Aylık</span>
          </h3>
          <a href='' className='btn'>Devam Et</a>
        </div>

<div className='pricing_item'>
          <img src={Image3} alt='' className='pricing_img' />
          <h3 className='pricing_plan'>Ultimate</h3>
          <p className='pricing_title'>Büyük şirketler ve bireyler için akıllıca bir seçenek</p>
          <p className='pricing_support'>24/7 destek</p>
          <h3 className='price'>
            <em>₺</em> 342 <span>Aylık</span>
          </h3>
          <a href='' className='btn'>Devam Et</a>
        </div>

      </div>

    </section>
  )
}

export default Pricing