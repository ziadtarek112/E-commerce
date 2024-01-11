import { EastOutlined, WestOutlined } from "@mui/icons-material";
import './Slider.scss'
import { useState } from "react";
const Slider = () => {
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const [currentImg,setCurrentImg] = useState(0);
    const nextSlide = ()=>{
        setCurrentImg(prev=> prev === 2 ? 0 : prev+1);
    }
    const prevSlide = ()=>{
        setCurrentImg(prev=> prev === 0 ? 2 : prev-1);
    }
    return (
        <div className="slider">
            <div className="imgContainer" style = {{transform : `translateX(-${currentImg*100}vw)`}}>
                <img src={data[0]} alt="Slider Image" />
                <img src={data[1]} alt="Slider Image" />
                <img src={data[2]} alt="Slider Image" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlined/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Slider