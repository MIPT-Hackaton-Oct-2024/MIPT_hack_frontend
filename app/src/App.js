// import './App.css';
import "./index.css"

import FileForm from './components/FileForm/FileForm';
import { useState } from "react";
import * as XLSX from 'xlsx';
import axios from "axios";

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

  const [progValue, setProgValue] = useState(0);

  // first part
  const [strippedData, setStrippedData] = useState(null);
  const [errorData, setErrorData] = useState(null);

  // second part 
  const [clustData, setClustData] = useState(null);
  const [rawHTML, setRawHTML] = useState(null);

  const [radius, setRadius] = useState("150");

  // third part 
  const [lottingData, setLottingData] = useState(null);
  const [metricsData, setMetricsData] = useState(null);

  const fetchStrippedData = async (e) => {
    const request = await fetch("/get_correct_data/"); 

    const buff = await request.arrayBuffer();
    console.log(buff);

    const workbook = XLSX.read(new Uint8Array(buff), {type: 'array'});
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    setStrippedData(data.slice(0, 10));
  }

  const fetchErrorData = async (e) => {
    const request = await fetch("/get_error_data/"); 

    const buff = await request.arrayBuffer();
    console.log(buff);

    const workbook = XLSX.read(new Uint8Array(buff), {type: 'array'});
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    setErrorData(data.slice(0, 10));
  }

  const fetchClusterMap = async (e) => {
    const request = await fetch("/get_map/");
    
    const text = await request.text();

    console.log(text);

    setRawHTML(text);
  }

  const fetchLotting = async (e) => {
    const request = await fetch("/get_lotting/"); 

    const buff = await request.arrayBuffer();
    console.log(buff);

    const workbook = XLSX.read(new Uint8Array(buff), {type: 'array'});
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];

    const data = XLSX.utils.sheet_to_json(worksheet);

    // XLSX.writeFileAsync("./result.xlsx", workbook, (err) => {

    // });

    // XLSX.writeFile(workbook, )

    setLottingData(data.slice(0, 10));
  }

  const fetchMetrics = async (e) => {
    const request = await fetch("/get_metrix/");
    
    const loads = await request.json();

    // console.log(loads);

    document.getElementById("mett").innerHTML = loads;

    // setMetricsData(loads);
  }

  const handleDownload = async (e) => {
    fetch("/get_lotting/")
    .then(resp => resp.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      // the filename you want
      a.download = "result.xlsx";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(() => alert("oh no!"));
    ///
  }

  const handleLotting = async (e) => {
    const request = await fetch("/monte_carlo_lotting/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                "Lambda": 0.02, 
                "beta": 1.0
            }
        )
    });

    if (request.ok) {
        console.log("Perform lotting");
        //                 "filename": excelFile.name, 
        await fetchLotting(e);
        await fetchMetrics(e);

        setProgValue(1.0);
    }
    else {
        console.error("SUCK MY BALLS jnkjn");
    }
  }

  const performClusterize = async (e) => {
    const request = await fetch("/clusterize/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"max_cluster_size": radius, "linkage": "average"})
    });

    if (request.ok) {
        console.log("Perform clusteroize");

        await fetchClusterMap(e);

        setProgValue(0.75);

        await handleLotting(e);
    }
    else {
        console.error("SUCK MY BALLS");
    }
  }

  const clearData = async (e) => {
    const request = await fetch("/strip_data/", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"filename": excelFile.name})
    });

    if (request.ok) {
        console.log("clearData");
        
        await fetchStrippedData(e);
        await fetchErrorData(e);

        setProgValue(0.5);

        await performClusterize(e);
    }
    else {
        console.error("FUCK");
    }
  }

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    // e.stopPropagation();

    const formData = new FormData();
    formData.append("file_upload", excelFile);

    const response = await fetch("/uploadfile/", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        console.log("File uploaded");
        console.log(excelFile.name);
        setProgValue(0.25);
        await clearData(e);
    }
    else {
        console.error("File failed");
    }

  }

  const handleFileForm = async (e) => {
    setExcelFile(e.target.files[0]);
  }



  return (
    <div className="App">

      {/* <Load_data/> */}
      <div className='header'>
        <Navbar/>

        <form className='intro' onSubmit={handleSubmitFile}>
            <h1>Загрузите <span> данные </span> и получите <span> лотирование </span></h1>
            <input type="file" onChange={handleFileForm} />
            <button type="submit" className='header-btn'  >Загрузить</button>
            <p className="details"> в формате .xlsx, .csv</p>
            <progress className="progress" value={progValue}/>
        </form>


        <div>
          <input className="input"  value={radius} type="number" onChange={e => {setRadius(e.target.value); }} />
        </div>

      </div> 
      

      {/* <Look_on_data/> */}
      <div className='lookdata'>
            <div className='container'>
                <h2>Данные</h2>
                <h4> Обрабатываемые заявки: </h4>
                <div className="viewer" >
                  {strippedData?(
                  <div >
                      <table >

                          <thead>
                              <tr>
                              {Object.keys(strippedData[0]).map((key)=>(
                                  <th key={key}>{key}</th>
                              ))}
                              </tr>
                          </thead>

                          <tbody>
                              {strippedData.map((individualExcelData, index)=>(
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
                  {errorData?(
                  <div >
                      <table >

                          <thead>
                              <tr>
                              {Object.keys(errorData[0]).map((key)=>(
                                  <th key={key}>{key}</th>
                              ))}
                              </tr>
                          </thead>

                          <tbody>
                              {errorData.map((individualExcelData, index)=>(
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
                <iframe srcDoc={rawHTML}>Test</iframe>
            </div>
        </div>

      {/* <Lotter/> */}
      <div className='lotting'>
          <h1>Лотирование</h1>
            <div className='lotting-model'>
            <div className="viewer" >
                  {lottingData?(
                  <div >
                      <table >

                          <thead>
                              <tr>
                              {Object.keys(lottingData[0]).map((key)=>(
                                  <th key={key}>{key}</th>
                              ))}
                              </tr>
                          </thead>

                          <tbody>
                              {lottingData.map((individualExcelData, index)=>(
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
            </div>

            <div className="metrics">
            <div className="viewer">
                  <div id="mett"></div>
            </div>
          </div>
        </div>

      {/* <Downloader/> */}
      <div className='download'>
          <h1> Ваше <span> лотирование </span> готово</h1>
          <button href='#' onClick={handleDownload} className='download-btn'>Скачать</button>
          <p className="details"> в формате .xlsx</p>
      </div>

    </div>
  );
}

export default App;
