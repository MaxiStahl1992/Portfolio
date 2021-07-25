import React from 'react';
import "./portfolio.scss";
import PortfolioList from '../portfolioList/portfolioList';
import { useState, useEffect } from "react";
import {
    featuredPortfolio,
    webInsta,
    webPortfolio,
    iosApp,
    androidApp
} from "../../data.js";


export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]); 
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "website",
            title: "Website"
        },
        {
            id: "app",
            title: "Mobile App"
        },
        {
            id: "game",
            title: "Mobile Game"
        },
    ];

    useEffect(() =>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webInsta);
                break;
            case "website":
                setData(webPortfolio);
                break;
            case "app":
                setData(iosApp);
                break;
            case "game":
                setData(androidApp);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) =>(
                    <PortfolioList 
                        title={item.title}
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(

                    <div className="item">
                        <img 
                            src={d.img} 
                            alt =""/>
                        <h3>{d.title}</h3>
                    </div>

                ))}
                
               
            </div>
            
        </div>
    )
}
