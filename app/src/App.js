import './App.css';

import FileForm from './components/FileForm/FileForm';

import Header from './components/Load_data';
import LookData from './components/Look_on_data';
import Classter from './components/Classterization';
import Lotter from './components/Lotting';
import Downloader from './components/Download_data';

function App() {
 
  return (
    <div className="App">
      <FileForm />
      <Header/>
      <LookData/>
      <Classter/>
      <Lotter/>
      <Downloader/>
    </div>
  );
}

export default App;
