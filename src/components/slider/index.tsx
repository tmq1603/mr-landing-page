import BannerBg from "@/assets/images/banner/bannerBg.png"
import Character1 from "@/assets/images/banner/character1.png"
import Character2 from "@/assets/images/banner/character2.png"
import Character3 from "@/assets/images/banner/character3.png"
import Character4 from "@/assets/images/banner/character4.png"
import Mask1 from "@/assets/images/banner/mask1.png"
// import Mask2 from "@/assets/images/banner/mask2.png"
// import Mask3 from "@/assets/images/banner/mask3.png"
// import Mask4 from "@/assets/images/banner/mask4.png"
/* eslint-disable react/jsx-key */
const makeCarousel = require("react-reveal/makeCarousel");
// const Slide = require("react-reveal/Slide");
const Fade = require("react-reveal/Fade");
// const Flip = require("react-reveal/Flip");

const conf = [
  {
    name: "Fade",
    pic: BannerBg,
    effects: [<Fade />, <Fade bottom title="We love games and we are making games for the future. Encouraging the new technologies like block-chain and NFT to combine with traditional game's element."/>, <Fade right imgParth1={Character1}/>, <Fade bottom imgParth2={Mask1}/>],
  },
  {
    name: "Fade",
    pic: BannerBg,
    effects: [<Fade />, <Fade bottom title="We love games and we are making games for the future. Encouraging the new technologies like block-chain and NFT to combine with traditional game's element."/>, <Fade right imgParth1={Character2}/>, <Fade bottom imgParth2={Mask1}/>],
  },
  {
    name: "Fade",
    pic: BannerBg,
    effects: [<Fade />, <Fade bottom title="We love games and we are making games for the future. Encouraging the new technologies like block-chain and NFT to combine with traditional game's element."/>, <Fade right imgParth1={Character3}/>, <Fade bottom imgParth2={Mask1}/>],
  },
  {
    name: "Fade",
    pic: BannerBg,
    effects: [<Fade />, <Fade bottom title="We love games and we are making games for the future. Encouraging the new technologies like block-chain and NFT to combine with traditional game's element."/>, <Fade right imgParth1={Character4}/>, <Fade bottom imgParth2={Mask1}/>],
  }, 
];

const makeSlide = (name: {} | null | undefined, pic: string, arr: any[],index: {} | null | undefined) => {
  const EffectItem = arr[0].type;
  const locationItem = arr[0].props; //defaults to none;
  // console.log(EffectItem);
  // console.log(arr[0].props)
  return (
    <EffectItem {...locationItem} key={name} fraction={0}>
      <div id="bg" style={{ backgroundImage: `url(${pic})` }}>
        {arr.map((item, id) => {
          return (
            <>
              <div className="title-banner">
                {/* <item.type delay={300} key={id} {...item.props}>
                  <div className="title-banner">
                    {item.props.title && <p>{item.props.title}</p>}
                  </div>
                </item.type> */}
                {item.props.title &&
                  <item.type delay={300} key={id} {...item.props}>
                    <div className="pt-[10px] flex justify-start items-top">
                      <span className="text-[94px] mr-4 font-glitch" style={{color: 'rgba(142, 142, 142, 0.35)', lineHeight: '55px'}}>00</span>
                      {/* <p className="text-[44px] font-bold italic text-white border-top-title">OUR TEAM</p> */}
                      <p className="max-w-[1060px] text-[25px] font-light border-top-title text-white border-top-title__custom" style={{lineHeight: '30px'}}>{item.props.title}</p>
                    </div>
                  </item.type>
                }
              </div>
              <div>
                <item.type delay={300} key={id} {...item.props}>
                  {item.props.imgParth1 && <img className={`character-${index}`} src={item.props.imgParth1} alt="" />}
                </item.type>
              </div>
              <div>
                <item.type delay={300} key={id} {...item.props}>
                  {item.props.imgParth2 && <img className={`mask-${index}`} src={item.props.imgParth2} alt="" />}
                </item.type>
              </div>
            </>
          )
        }
        )}
      </div>
    </EffectItem>
  );
};

const CarouselUI = ({ position, handleClick, children, total }: any) => {
  return (
    <div className="carousel mb-4">
      <div className="carousel-children">
        {children}

        {/* remove carousel-arrow */}
        {/* <div onClick={handleClick} data-position={position - 1} className="carousel-arrow carousel-prev">
          {" "}
          &lt;{" "}
        </div>
        <div onClick={handleClick} data-position={position + 1} className="carousel-arrow carousel-next">
          {" "}
          &gt;{" "}
        </div> */}
      </div>
      <div className="carousel-dots">
        {Array(...Array(total)).map((val, index) => (
          <span className={`carousel-dot ${index === position ? 'active': ''}`} key={index} onClick={handleClick} data-position={index}>
            {index === position ? "● " : "○ "}
          </span>
        ))}
      </div>
    </div>
  );
};

const Carousel = makeCarousel(CarouselUI);

export const Slider = () => {

  return (
    <>
      <Carousel  defaultWait={500000}  /* config swipe={true} maxTurns={0} defaultWait={1000} */ /*defaultWait: defaults to 5000 - maxTurns: defaults to 5 - swipe: defaults to True*/
      >
        {conf.map((slide,index) => makeSlide(slide.name, slide.pic, slide.effects,index))}
        {/* <Slide right>
        <div>
          <Flip left delay={1000}>
            <h1>React Reveal</h1>
          </Flip>
          <Fade right delay={1000}>
            <h1>React Reveal</h1>
          </Fade>
        </div>
      </Slide>
      <Slide right>
        <Flip top delay={1000}>
          <h1>React Reveal</h1>
        </Flip>
        <Fade bottom delay={1000}>
          <h1>React Reveal</h1>
        </Fade>
      </Slide> */}
      </Carousel>
    </>
    
  );
};
