import React, { useEffect } from "react";
import Navbar from './Navbar';
import { useState } from "react";
import * as XLSX from 'xlsx';


function Header() {
    const [excelFile, setExcelFile] = useState(null);

    const [excelData, setExcelData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workbook = XLSX.read(excelFile, {type: 'buffer'});
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        setExcelData(data.slice(0, 10));
    }

    const handleFile = async (e) => {
        let selectedFile = e.target.files[0];

        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        }
    }

    return (
            <div className='header'>
            <Navbar/>

                <form className='intro' onSubmit={handleSubmit}>
                    <h1>Загрузите <span> данные </span> и получите <span> лотирование </span></h1>
                    <input type="file"  required onChange={handleFile} />
                    <button className='header-btn' type="submit" >Загрузить</button>
                    <p className="details"> в формате .xlsx, .csv</p>
                </form>

{/* 
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
                </div> */}
            </div>
    )
}

export default Header;