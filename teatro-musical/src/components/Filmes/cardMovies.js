import React from "react";
import './cardMovies.css'
import ButtonBuy from "../buttons/buttonBuy";




function CardMovies (props) {
    return (
    <div className="card-parent">
    <div className="card" id={props.id} key={props.key}>
            <img src={props.img_src} alt={props.img_alt} id='negaImg'></img>
            <div className="text-card">
                <ButtonBuy link={props.link} text={props.text_card}/>
                </div>
            </div>
            <span>{props.title}</span>
            </div>
    )
}   

export default CardMovies