import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import rightImg from '../assets/events/rightDel.png';
import leftImg from '../assets/events/leftDel.png';

const images = [
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/4000/3000",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/1500/1500",
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/4000/3000",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/1500/1500",
]

const Gallery = () => {

    const [data, setData] = useState({ img: '', i: 0 })

    const viewImage = (img, i) => {
        setData({ img, i });
    }

    const imgAction = (action) => {
        let i = data.i;
        const totalImages = images.length;

        if (action === "next-img") {
            setData({ img: images[(i + 1) % totalImages], i: (i + 1) % totalImages });
        } else if (action === "prev-img") {
            setData({ img: images[(i - 1 + totalImages) % totalImages], i: (i - 1 + totalImages) % totalImages });
        } else {
            setData({ img: "", i: 0 });
        }
    };

    console.log("Data:", data)


    return (
        <>
            {
                data.img &&
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-[0] flex justify-center items-center'>
                        <button className='absolute top-[10px] right-[20px] [rotate:45deg] rounded-[50%] text-[60px] h-auto p-[none] bg-none border-[none] text-[white] cursor-pointer' onClick={() => imgAction("close")}>+</button>
                        <button className='fixed top-2/4 bg-none border-[none] left-[10px] text-center cursor-pointer' onClick={() => imgAction("prev-img")}><img src={leftImg} style={{
                        width: "50px",
                        height: "50px"
                    }} />
                    </button>
                    <img
                            className='w-auto max-h-[90%] max-w-[90%]'
                        src={data.img}
                    />
                        <button className='fixed top-2/4 bg-none border-[none] right-[10px] text-center cursor-pointer' onClick={() => imgAction("next-img")} style={{
                            width: "50px",
                            height: "50px"
                        }}><img src={rightImg} /></button>
                </div>
            }
            <div style={{ padding: "10px" }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="10px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    )
}

export default Gallery
