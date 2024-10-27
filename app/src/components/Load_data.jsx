import React from "react";
import Navbar from './Navbar';


function Header() {
const handleFileSubmit=(e)=>{
    e.preventDefault();
}

    return (
        <div className='header'>
            <Navbar/>
            <div className='intro'>
                {/* <p>Looking for shit?</p> */}
                <h1>Загрузите <span> данные </span> и получите <span> лотирование </span></h1>
                <button href='#' onClick={() => console.log("Ya Pidoras Syka ebal tvoy mamy")} className='header-btn'>Загрузить</button>
                <p className="details"> в формате .xlsx, .csv</p>
            </div>
        </div>
    )
}

export default Header;