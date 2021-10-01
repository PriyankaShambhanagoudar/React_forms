import React from "react";
import  classes from './Card.module.css'

const Card = (props) =>{
                                            /*  it taken from card classNamr  (addUserJs 13-line)*/
      return <div className={`${classes.card} ${props.className}`}>{props.children}</div>; 
};
export default Card;