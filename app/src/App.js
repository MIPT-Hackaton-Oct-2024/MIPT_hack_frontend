// import './App.css';
import "./index.css"

import FileForm from './components/FileForm/FileForm';
import { useState } from "react";
import * as XLSX from 'xlsx';

// import Header from './components/Load_data';
// import LookData from './components/Look_on_data';
import Navbar from './components/Navbar';
import Classter from './components/Classterization';
import Lotter from './components/Lotting';
import Downloader from './components/Download_data';
import aboutimage from './images/map.jpg';


function App() {
 
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
    <div className="App">

      {/* <Load_data/> */}
      <div className='header'>
        <Navbar/>

        <form className='intro' onSubmit={handleSubmit}>
            <h1>Загрузите <span> данные </span> и получите <span> лотирование </span></h1>
            <input type="file"  required onChange={handleFile} />
            <button className='header-btn' type="submit" >Загрузить</button>
            <p className="details"> в формате .xlsx, .csv</p>
        </form>
      </div>

      {/* <Look_on_data/> */}
      <div className='lookdata'>
            <div className='container'>
                <h2>Данные</h2>
                <h4> Обрабатываемые заявки: </h4>
                <div className="viewer" >
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

                <p className="details"> Если вам важны необработанные заявки, исправьте ошибки и загрузите новые данные, иначе лотирование будет производиться только для обрабатываемых заявок. </p>
          </div>
      </div>

      {/* <Classter/> */}
      <div className='class'>
            <h1>Кластеризация</h1>
            <div className='class-model'>
                <img src={aboutimage} alt='class image'/>
            </div>
            <div className='class-text'>
                <h2>ГООООООООООООЙДААААААА</h2>
            </div>
        </div>

      {/* <Lotter/> */}
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

      {/* <Downloader/> */}
      <div className='download'>
          <p>Looking for shit?</p>
          <h1> Ваше <span> лотирование </span> готово</h1>
          <button href='#' onClick={() => console.log("Bu ispugalsya??")} className='download-btn'>Скачать</button>
          <p className="details"> в формате .xlsx</p>
      </div>

    </div>
  );
}

export default App;
