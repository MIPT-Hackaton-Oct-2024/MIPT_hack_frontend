import React from "react";
import Navbar from './Navbar';


function LookData() {
    return (
        <div className='lookdata'>
            <div className='container'>
                <h2>Данные</h2>
                <h4> Обрабатываемые заявки: </h4>
                <h4> Небрабатываемые заявки (ошибки в данных): </h4>
                <p className="details"> Если вам важны необработанные заявки, исправьте ошибки и загрузите новые данные, иначе лотирование будет производиться только для обрабатываемых заявок. </p>
            </div>
        </div>
    )
}

export default LookData;