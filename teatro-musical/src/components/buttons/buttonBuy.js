import React from "react";
import './button.css'

const ButtonBuy = (props) => {
    
    return (
        <a className="buttonBuy" href = {props.link}>{props.text}</a>
    )
}

export default ButtonBuy