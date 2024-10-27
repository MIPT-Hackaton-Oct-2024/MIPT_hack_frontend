import React from "react";
import aboutimage from '../images/map.jpg';

function Lotter() {
    return (
        <div className='lotting'>
            <h1>Лотирование</h1>
            <div className='lotting-model'>
                <img src={aboutimage} alt='lotting image'/>
            </div>
            {/* <div className='about-text'>
                <h2>ГООООООООООООЙДААААААА</h2>
                <button>Гойда</button>
            </div> */}
        </div>
    )
}

export default Lotter;