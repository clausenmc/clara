import React from 'react';

function CardPhoto (props) {
    return (
        
        <div className="card-photo">
            <img className="card-img" src={props.photoURL} alt=""/>
            <span className="card-title">{props.nombre} </span>
            <p className="card-description">{props.descripcion} </p>
        </div>
    )
}

export default CardPhoto