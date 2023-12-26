import React, { useState } from "react";
import plus from "../../assets/events/plus.png";
import plusBack from "../../assets/events/plusBack.png";
import {BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
const EventCard = (props) => {
  const cardElement = props.card;
  const [flipped, setFlipped] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleClass = () => {
    const card = document.getElementById(`card${props.id}`);
    card.style.transform = "rotateY(180deg)";
      setFlipped(true);
      props.setCardFlippedId(props.id)
    if((props.cardFlippedId)!=null){
    const unflipCard=  document.getElementById(`card${props.cardFlippedId}`)
    unflipCard.style.transform = "rotateY(0deg)";
    setFlipped(false);
    }
    console.log(`card${props.id}`);
    
      
    
  };
  const prevSlide=()=>{
    const isFirstSlide = currentImage === 0;
    const newImage= isFirstSlide? cardElement.backAlbum.length-1: currentImage-1;
    setCurrentImage(newImage)
  }
  const nextSlide=()=>{
    const isLastSlide = currentImage === cardElement.backAlbum.length-1;
    const newImage= isLastSlide? 0: currentImage+1;
    setCurrentImage(newImage)
  }
  

  return (
    <>
      <div className="group card-holder max-sm:w-[40em] max-sm:h-[50em] max-md:w-[30em] max-md:h-[38em] w-[21em] h-[27em]  transition-all  hover:translate-y-[-1em] cardBox  hover:before:color-border bg-black rounded-xl md:mt-3">
        <div className="absolute h-[96%] w-[96%] bg-black rounded-xl"></div>
        <div
          id={`card${props.id}`}
          className="relative hover:h-[96%] hover:w-[96%] h-full w-full [transform-style:preserve-3d] transition-all duration-500 rounded-xl "
        >
          <div
            className="absolute h-full w-full card rounded-xl max-md:bg-[length:auto_38em] bg-[length:auto_27em] max-sm:bg-[length:auto_50em]"
            style={{
              backgroundImage: cardElement.frontBg,             
            }}
          >
            <div
              className="h-full"
              style={{ color: `${cardElement.titleFrontColor}` }}
            >
              <div className="flex flex-col px-3 max-md:px-6  w-[75%] max-md:w-[90%]  pt-[25%] h-[90%]">
                <span className="text-3xl max-sm:text-7xl max-md:text-5xl leading-[1.3em] font-semibold font-montserrat">
                  <p>{cardElement.titleFrontTop} {cardElement.id}</p>
                  <p>{cardElement.titleFrontBottom}</p>
                </span>
                <span className="text-lg max-md:text-4xl max-sm:text-5xl leading-[1.3em] max-md:w-[70%] font-gSans">
                  <p className="mt-4">{cardElement.descBack}</p>
                </span>
              </div>
              <div className="mt-auto pl-3 font-light w-full flex justify-between">
                <span className="max-md:text-xl max-sm:text-4xl mx-3">
                  <p className="inline-block">Date: {cardElement.date}</p>
                </span>
                <div className="mt-auto pl-3 font-light w-full flex justify-end absolute bottom-5 right-2">
                  <button className="mt-2 mr-1 " onClick={() => toggleClass()}>
                    <img src={plus} alt="" className="w-12 max-md:w-[5rem] max-sm:w-[6rem]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Back side  */}

          <div className="relative h-full w-full card card-back [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl max-md:bg-[length:auto_38em] bg-[length:auto_27em]">
            <div
              className="absolute h-full card w-full  rounded-xl max-md:bg-[length:auto_38em] bg-[length:auto_27em] max-sm:bg-[length:auto_50em] "
              style={{
                backgroundImage: cardElement.backBg,                
              }}
            >
              <div
                className="h-full"
                style={{ color: `${cardElement.backColor}` }}
              >
                <div className="relative w-full  h-[16em] max-md:h-[20em] group mt-6 max-sm:h-[22em]"   onMouseOver={()=>setShowArrow(true)} onMouseLeave={()=>setShowArrow(false)}>
                  <div className="bg-cover h-[15em] w-[15em] max-md:h-[20em] max-md:w-[22em] max-sm:h-[22em] max-sm:w-[20em] mx-auto transition-all duration-500 rounded-xl border-2 border-solid border-blue-400"
                    style={{
                      backgroundImage: `url(${cardElement.backAlbum[currentImage]})`,
                    }} 
                  ></div>
                  <div className={`${showArrow?'':'hidden'} arrows absolute top-[50%] translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
                    <BsChevronCompactLeft size={20} onClick={prevSlide}/>
                  </div>
                  <div className={`${showArrow?'':'hidden'} arrows absolute top-[50%] translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
                    <BsChevronCompactRight size={20} onClick={nextSlide}/>
                  </div>
                </div>



                  <div className="flex justify-center flex-col mt-1 ">
                    <span className="pl-3 text-xl max-md:text-3xl max-sm:text-4xl max-sm:leading-[5rem]  font-gSans">
                      <ul>
                        <li>Date: <span className="text-blue-200">{cardElement.date}</span></li>
                        <li>Time: <span className="text-blue-200">{cardElement.time}</span></li>
                        <li>Venue: <span className="text-blue-200">{cardElement.venue}</span></li>
                        <li className="underline text-blue-500"><a href={cardElement.link}>Registration Link</a></li>
                      </ul>
                    </span>
                  </div>

                <div className="mt-auto pl-3 font-light w-full flex justify-end absolute bottom-2">
                  <div className="inline-block">
                    <button className="mt-2 mr-1" onClick={() => toggleClass()}>
                      <img src={plusBack} alt="" className="w-12 max-md:w-[5rem]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

export default EventCard;
