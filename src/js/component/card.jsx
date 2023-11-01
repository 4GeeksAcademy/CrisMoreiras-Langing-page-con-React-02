import React from "react";


const Card = (props) => {
	return (
		<div className="card text-center" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary btn-sm" type="button">Find Out More!</button>
            </div>
        </div>
	);
};

export default Card;
