import logo from './logo.svg';
import './App.css';
import './components/D3MenuScene';

import "./themes/css/d3scene.css";
import D3MenuScene from "./components/D3MenuScene";

app.use(cors());

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('serverreact.key'),
    cert: fs.readFileSync('serverreact.cert')};
function App() {
    return (
        <div className="App">
            <div className="toto"></div>
            toto
            <div id="D3scene">
<D3MenuScene id="D3scene"/>
          </div>

            <div>zfzef</div>
            sdqdsqdsqsdsdqsd
        </div>


)
    ;
}

export default App;
