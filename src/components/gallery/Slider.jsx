import React from 'react';
import Slider from "react-slick";
import rightImg from '../../assets/events/rightDel.png';
import leftImg from '../../assets/events/leftDel.png';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", content: `url(${rightImg})`, borderRadius: "50%", width: "50px", height: "50px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", content: `url(${leftImg})`, borderRadius: "50%", width: "50px", height: "50px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

function VideoText() {
    return (
        <div className='[@media_screen_and(max-width:1000px)]:flex-col'>
            <video className='[@media_screen_and(max-width:1000px)]:w-4/5' src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" width="60%" height="auto" controls="controls" autoplay="true" />
            <p className='inline-block w-[fit-content] h-auto text-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of </p>
        </div>
    )
}

const Imageslider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        initialSlide: 0,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='flex justify-center items-center ml-[0] mr-[0] my-[0]'>
            <Slider {...settings} style={{ maxWidth: "90%", maxHeight: "90vh" }}>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
            </Slider>
        </div>
    )
}

export default Imageslider