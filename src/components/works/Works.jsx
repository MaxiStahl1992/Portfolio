import React from 'react';
import "./works.scss";
import { useState } from 'react';
import { Style } from '@material-ui/icons';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            icon: "assets/instagram.png",
            title: "Instagram Clone",
            desc: "Visual Studio Code, React JS, Firebase, JavaScript, CSS",
            img: "assets/Instaclone.png",
        },
        {
            id: 2,
            icon: "assets/globe.png",
            title: "Portfolio Website",
            desc: "Visual Studio Code, React JS, JavaScript, SCSS",
            img: "assets/portfolio.png",
        },
        {
            id: 3,
            icon: "assets/handy.png",
            title: "Tesla Clone",
            desc: "Visual Studio Code, React JS, JavaScript, CSS",
            img: "assets/modelS.png",
        },
        {
            id: 4,
            icon: "assets/handy.png",
            title: "General Knowledge Quiz",
            desc: "Android Studio, Java, XML",
            img: "assets/questionScreen.jpg",
        },
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <a href="https://github.com/MaxiStahl1992" >Projects</a>
                                </div>
                            </div>
                            <div className="right">

                                <img src={d.img} alt="" style={ {width: currentSlide > 1 ? `20%`: `80%`}} />

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/rechts.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/rechts.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    );
}
