import React from "react";

function Downloader() {
    return (
        <div className='download'>
            <div className = 'inro'>
            {/* <p>Looking for shit?</p> */}
                <h1>Загрузите <span> данные </span> и получите <span> лотирование </span></h1>
                <button href='#' onClick={() => console.log("Ya Pidoras Syka ebal tvoy mamy")} className='download-btn'>Загрузить</button>
                <p className="details"> в формате .xlsx, .csv</p>
            </div>
        </div>
    )
}

export default Downloader;