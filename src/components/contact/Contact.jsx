import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className='contact container section' id="contact">
      <h2 className='section__title'>İletişim</h2>

      <div className='contact_container grid'>
        <div className='contact_info'>
          <h3 className='contact_title'>Her şey hakkında konuşalım!</h3>
          <p className='contact_details'>Bana bir eposta gönder. 👋</p>
        </div>
        <from action="" className="contact_form">
          <div className='contact_form-group'>

            <div className='contact_form-div'>
              <input type="text" className='contact_form-input' placeholder='Adınız'></input>
            </div>

            <div className='contact_form-div'>
              <input type="email" className='contact_form-input' placeholder='E-posta adresiniz'></input>
            </div>

          </div>

          <div className='contact_form-div'>
              <input type="text" className='contact_form-input' placeholder='Konu'></input>
          </div>

          <div className='contact_form-div contact_form-area'>
              <textarea name='' id="" cols="30" rows="10" className='contact_form-input' placeholder='Mesaj'></textarea>
          </div>

          <button className='btn'>Gönder</button>

        </from>
      </div>
    </section>
  )
}

export default Contact