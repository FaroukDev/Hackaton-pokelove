import React from 'react';
import './Card.css';

const Card = (props) => {

  console.log(props)

  return (
    <>
      <div className="container_card">
      <h1>Bienvenue sur Netlify</h1>
        <div className="pokemon">
          <div className="card">
            <img src={props.poke1.img} alt="Avatar" />
            <div className="name">
              <h2><b>{props.poke1.name}</b></h2>
            </div>
          </div>
          <div className="card1">
            <p>{props.poke1.desc} <br/> {props.poke1.heigh}   {props.poke1.weigth}</p>
          </div>
        </div>
        <div className="pokemon1">
          <div className="card2">
            <p>{props.poke2.desc}  <br/> {props.poke2.heigh}   {props.poke2.weigth}</p>
          </div>
          <div className="card">
            <img src={props.poke2.img} alt="Avatar" />
            <div className="name">
              <h2><b>{props.poke2.name}</b></h2>
            </div>
          </div>
        </div>

      </div>
 
    </>
  );

}

export default Card;