import React, { useState } from "react";
import MiraiLogoFooter from "@/assets/images/footer/mirailogo-dark-1.png";

function Footer() {
  const Fade = require('react-reveal/Fade');
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [contactFormError, setContactFormError] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChangeInput = (e:any) => {
    const {name, value} = e.target;
    setContactData({...contactData, [name]: value})
  }

  const handleOnBlurInput = (e: any) => {
    const {name, value} = e.target;
    if (!value) {
      let errorMessage = '';
      switch (name) {
        case 'name': 
          errorMessage = 'Name is required';
          break;
        case 'email':
          errorMessage = 'Email is required';
          break;
        case 'message': 
          errorMessage ='Message cannot be empty';
          break;
      }
      setContactFormError({...contactFormError, [name]: errorMessage})
    } else {
      setContactFormError({...contactFormError, [name]: ''})
    }
  }

  const isValidForm = () => {
    return !contactFormError.email && !contactFormError.message && !contactFormError.name
  }

  return (
    <Fade bottom>
      <footer className="h-[206px] bg-[#EAEAEA] px-[120px] mt-[-250px] grid content-center relative z-[4]">
        <img src={MiraiLogoFooter} alt=""/>
        <div className="w-[760px] h-[569px] bg-contain form-background-linear">
          <div className="contact-form h-full pt-[40px] px-[55px]">
            <p className="form-title">LEAVE US A MESSAGE</p>
            <div className="mb-[46px]">
              <input 
                className="w-full h-[40px] border-transparent outline-none bg-transparent font-light text-[25px] leading-[30px] text-[#C4C4C4] input-border" 
                type="text" 
                name="name"
                placeholder="Name*"
                autoComplete="off"
                onChange={handleChangeInput}
                onBlur={handleOnBlurInput}
              />
              {contactFormError.name && <p className="error-text font-light text-[22px] leading-[30px] text-[#FFFFFF]">{contactFormError.name}</p>}
            </div>

            <div className="mb-[46px]">
              <input 
                className="w-full h-[40px] border-transparent outline-none bg-transparent font-light text-[25px] leading-[30px] text-[#C4C4C4] input-border" 
                type="email" 
                name="email"
                placeholder="Email*"
                autoComplete="off"
                onChange={handleChangeInput}
                onBlur={handleOnBlurInput}
              />
              {contactFormError.email && <p className="error-text font-light text-[22px] leading-[30px] text-[#FFFFFF]">{contactFormError.email}</p>}
            </div>

            <div className="mb-[46px]">
              <textarea 
                className="w-full border-transparent outline-none bg-transparent font-light text-[25px] leading-[30px] text-[#C4C4C4] input-border" 
                name="message"
                placeholder="Message*"
                rows={5}
                onChange={handleChangeInput}
                onBlur={handleOnBlurInput}
              />
              {contactFormError.message && <p className="error-text font-light text-[22px] leading-[30px] text-[#FFFFFF]">{contactFormError.message}</p>}
            </div>

            <button className="form-btn" name="send-message-btn" disabled={!isValidForm()}>SEND MESSAGE</button>
          </div>
        </div>
      </footer>
    </Fade>
  );
}

export default Footer;