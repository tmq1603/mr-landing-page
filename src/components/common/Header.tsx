import Logo from "@/assets/images/banner/miraiLogo.png"
import FaceBook from "@/assets/images/banner/icon-facebook.png"
import Insta from "@/assets/images/banner/icon-insta.png"
import Twitter from "@/assets/images/banner/icon-twitter.png"


export const Header = () => { 
  return (
    <div className="absolute top-0 w-full text-white z-10 header flex justify-between">
      <div className="main-banner"><img src={Logo} alt="" /></div>
      <div className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item"><a href="">About</a></li>
          <li className="main-nav__item"><a href="">Team</a></li>
          <li className="main-nav__item"><a href="">Services</a></li>
          <li className="main-nav__item"><a href="">Products</a></li>
          <li className="main-nav__item"><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="header-social">
        <ul className="header-social__list">
          <li className="header-social__item"><a href=""><img src={FaceBook} alt="" /></a></li>
          <li className="header-social__item"><a href=""><img src={Insta} alt="" /></a></li>
          <li className="header-social__item"><a href=""><img src={Twitter} alt="" /></a></li>
        </ul>
      </div>
    </div>
  );
}