import React from 'react';


export default function Image(props) { 
  require(`../images/${props.src}`);
  return(
  <>
    <img className={props.className} src={props.src} alt={props.alt} />
  </>  
)}

