import React from 'react'
import './Preloader.scss';

const Preloader = () => {
  return (
    <div className="preloader-wrap">
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
}

export default Preloader;