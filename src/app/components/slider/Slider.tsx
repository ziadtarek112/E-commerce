import { EastOutlined, WestOutlined } from "@mui/icons-material";
import './Slider.scss'
import {images} from '../../../constants/index'
import { useState } from "react";
const Slider = () => {


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
                <img src={images[0]} alt="Slider Image" />
                <img src={images[1]} alt="Slider Image" />
                <img src={images[2]} alt="Slider Image" />
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