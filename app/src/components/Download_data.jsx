import React from "react";

function Downloader() {
    return (
        <div className='download'>
            {/* <p>Looking for shit?</p> */}
                <h1> Ваше <span> лотирование </span> готово</h1>
                <button href='#' onClick={() => console.log("Bu ispugalsya??")} className='download-btn'>Скачать</button>
                <p className="details"> в формате .xlsx</p>
        </div>
    )
}

export default Downloader;