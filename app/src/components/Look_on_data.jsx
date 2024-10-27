import React, { useContext, useState } from "react";
import Navbar from './Navbar';


function LookData() {

    const excelData = "test";

    return (
        <div className='lookdata'>
            <div className='container'>
                <h2>Данные</h2>
                <h4> Обрабатываемые заявки: </h4>
                <div className="viewer">
                        {excelData?(
                        <div >
                            <table >

                                <thead>
                                    <tr>
                                    {Object.keys(excelData[0]).map((key)=>(
                                        <th key={key}>{key}</th>
                                    ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {excelData.map((individualExcelData, index)=>(
                                    <tr key={index}>
                                        {Object.keys(individualExcelData).map((key)=>(
                                        <td key={key}>{individualExcelData[key]}</td>
                                        ))}
                                    </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                        ):(
                        <div>No File is uploaded yet!</div>
                        )}
                </div>

                <h4> Небрабатываемые заявки (ошибки в данных): </h4>
                <p className="details"> Если вам важны необработанные заявки, исправьте ошибки и загрузите новые данные, иначе лотирование будет производиться только для обрабатываемых заявок. </p>
            </div>
        </div>
    )
}

export default LookData;