import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Page from './Componet/Page';
import StartPage from './Componet/StartPage';
import DesignPage from './Componet/DesignPage';
import DesignPopup from './Componet/DesignPopup';
import TestPage from './Componet/TestPage';
import ResultPage from './Componet/ResultPage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShield, faUser, faGauge, faBook, faUsers, faCalendar, faInbox, faClock, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
   
    <>
    <BrowserRouter>
      <div className="App">

        <div className="sider">
              <ul>
                <li class="highlighted-menu-item">
                  <FontAwesomeIcon icon={faShield} size="3x" color='' />
                </li>
                <li class='menu-item'>
                  <FontAwesomeIcon icon={faUser} size="2x" />
                  <br></br>
                   Account
                </li>
                <li class='menu-item'>
                  <FontAwesomeIcon icon={faGauge} size="2x" />
                  <br></br>
                   Dashboard
                </li>

                <li class='highlighted-menu-item'>
                  <FontAwesomeIcon icon={faBook} size="2x" color='' />
                  <br></br>
                   Courses
                </li>

                <li class='menu-item'>
                  <FontAwesomeIcon icon={faUsers} size="2x"/>
                  <br></br>
                   Groups
                </li>

                <li class='menu-item'>
                  <FontAwesomeIcon icon={faCalendar} size="2x"/>
                  <br></br>
                   Calendar
                </li>

                <li class='menu-item'>
                  <FontAwesomeIcon icon={faInbox} size="2x"/>
                  <br></br>
                   Inbox
                </li>

                <li class='menu-item'>
                  <FontAwesomeIcon icon={faClock} size="2x"/>
                  <br></br>
                   History
                </li>

                <li class='menu-item'>
                  <FontAwesomeIcon icon={faCircleQuestion} size="2x"/>
                  <br></br>
                   Help
                </li>
              </ul>
        </div>
        <div className="header">
          <FontAwesomeIcon icon={faBars} size="2x"/>
          <h3>Kanvas</h3>
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
