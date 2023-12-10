import React from 'react';
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (
    <section className='blog container section' id="blog">
      <h2 className='section__title'>Son Gönderiler</h2>

      <div className='blog_container grid'>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a href="#"><span className='blog_category'>Yorumlar</span></a>
            <a herf='#'><img src={Image1} alt='' className='blog_img'></img></a>
          </div>
          <div className='blog_details'>
            <h3 className='blog_title'>Projeleriniz İçin En İyi 5 Uygulama Geliştirme Aracı</h3>
            <div className='blog_meta'>
              <span>09 Mart 2023</span>
              <span className='blog_dot'>.</span>
              <span>Rumeysa</span>
            </div>
          </div>
        </div>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a href="#"><span className='blog_category'>Bilgilendirme</span></a>
            <a herf='#'><img src={Image2} alt='' className='blog_img'></img></a>
          </div>
          <div className='blog_details'>
            <h3 className='blog_title'>Ödemeyle İlgili Yaygın Yanılgılar</h3>
            <div className='blog_meta'>
              <span>07 Mart 2023</span>
              <span className='blog_dot'>.</span>
              <span>Rumeysa</span>
            </div>
          </div>
        </div>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a href="#"><span className='blog_category'>İşletme</span></a>
            <a herf='#'><img src={Image3} alt='' className='blog_img'></img></a>
          </div>
          <div className='blog_details'>
            <h3 className='blog_title'>Startup işi hakkında bilinmesi gereken 3 şey</h3>
            <div className='blog_meta'>
              <span>05 Mart 2023</span>
              <span className='blog_dot'>.</span>
              <span>Rumeysa</span>
            </div>
          </div>
        </div>



      </div>
    </section>
  )
}

export default Blog