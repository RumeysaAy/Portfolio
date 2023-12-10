import React from 'react'

const AboutBox = () => {
  return (
    <div className='about_boxes grid'>

        <div className='about_box'>
            <i className='about_icon icon-magic-wand'></i>
            <div>
                <h3 className='about_title'>198</h3>
                <span className='about_subtitle'>Proje tamamlandı</span>
            </div>
        </div>

        <div className='about_box'>
            <i className='about_icon icon-cup'></i>
            <div>
                <h3 className='about_title'>5670</h3>
                <span className='about_subtitle'>Bir fincan kahve</span>
            </div>
        </div>

        <div className='about_box'>
            <i className='about_icon icon-people'></i>
            <div>
                <h3 className='about_title'>427</h3>
                <span className='about_subtitle'>Memnun müşteriler</span>
            </div>
        </div>

       
        
    </div>
  )
}

export default AboutBox