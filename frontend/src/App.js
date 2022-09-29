import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Page from './Componet/Page';
import StartPage from './Componet/StartPage';
import DesignPage from './Componet/DesignPage';
import DesignPopup from './Componet/DesignPopup';
import TestPage from './Componet/TestPage';
import ResultPage from './Componet/ResultPage';


function App() {
  return (
   
    <>
    <BrowserRouter>
      <div className="App">

        <div className="sider">
              <h2>Side bar</h2>
        </div>
        <div className="header">
              <h3>Kanves</h3>
        </div>
        <div className="main">

                <Routes>
                  <Route path="/" element={<Page />}>
                    <Route index element={<StartPage />} />
                    <Route path="/design" element={<DesignPage />} />
                    <Route path="/popup" element={<DesignPopup />} />
                    <Route path="/test" element={<TestPage />} />
                    <Route path="/result" element={<ResultPage />} />
                  </Route>
                </Routes>   

        </div>
                         
          

     </div>
    </BrowserRouter>
    </>
    

  );
}


export default App;
