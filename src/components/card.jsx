import React from "react";

const Card = (props) => {
    return (
        <td className={'Card'}>
            <img className = 'card-img' src = {props.img} alt = {props.name}/>
            <h3>{props.name}</h3>
            <h4>{props.type}</h4>
            <a href ={props.menu}> <button>View Menu</button> </a> 
        </td>
    )
  
}
export default Card;