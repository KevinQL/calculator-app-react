import React from "react";

function Logo({alt, logoImg}){

  return (
    <div className='logo-contain'>
      <img 
        src={logoImg}
        className='logo-img'
        alt={alt} />
    </div>
  );
}

export default Logo;