import React from 'react';
import "./testimonials.scss"

export default function Testimonials() {

    const data =[
        {
            id: 1,
            name: "Education",
            img: "assets/instagram.png",
            icon:"assets/text.png",
            desc1:"University of Hohenheim 2014-2017",
            desc2:"Stiftsgymnasium Sindelfingen 2003-2012",
            desc3:"Layton High School 2009-2010",
            desc4:"",
        },
        {
            id: 2,
            name: "Work Experience",
            img: "assets/linkedin.png",
            icon:"assets/text.png",
            desc1:"Sales and Business Development Manager 2021",
            desc2:"(Junior) Account Manager 2020-2021",
            desc3:"Project Manager 2018-2020",
            desc4:"Working Student 2017-2018",
            featured: true,
        },
        {
            id: 3,
            name:"IT Skills",
            img: "assets/instagram.png",
            icon:"assets/globe.png",
            desc1:"JavaScript, (S)CSS, HTML5",
            desc2:"Java, Kotlin, XML",
            desc3:"Firebase, SQL",
            desc4:"Python",
        },
    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>CV</h1>
            <div className="container">

                {data.map((d)=>(
                    <div className={d.featured ? "card featured": "card"}>
                        <div className="top">
                            <img src="assets/pfeil.png" className="left" alt="" />
                            <img src={d.img} className="user" alt="" />
                            <img src={d.icon}className="right" alt="" />
                        </div>
                        <div className="center">
                                <p>{d.desc1}</p> 
                                <p>{d.desc2}</p>
                                <p>{d.desc3}</p>
                                <p>{d.desc4}</p>
                        </div>
                        <div className="bottom">
                                <h3>{d.name}</h3>
                        </div>
                    </div>

                ))}
                
            </div>
        </div>
    )
}
