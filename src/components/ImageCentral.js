import React from 'react';
import {  Link } from "react-router-dom"
import './ImageCentral.css';


const ImageCentral = (props) =>  {
  
    return (
        <div className="DivImageCentral">
        
          <div className="logo">
            <img src="https://zupimages.net/up/19/15/8rgj.png" alt="logo"></img>
          </div>
          <h4 className="Connexion"> <Link to="/login">CONNEXION</Link></h4>
          <img className="ImageCentral" src="https://zupimages.net/up/20/10/u13u.jpg" width="100%" height="100%" alt="fond d'ecran de pokelove "></img>
        <img className="contenair-pokeball" onClick={props.handleChangePokemon} src="https://gifimage.net/wp-content/uploads/2017/08/pokeball-gif-13.gif" alt="pokeball selected" ></img>
        <a href="http://images6.fanpop.com/image/photos/35900000/Pinkie-Pie-my-little-pony-friendship-is-magic-35939133-1600-1141.png">
          <img className="contenair-poney"  src="" alt=""></img>>
        </a>
          </div> 

       
    )
  
}


export default ImageCentral;