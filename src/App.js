
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Register from './Component/Register/Register';
import MedicalRecords from './Component/MedicalRecords/MedicalRecords';
import Login from './Component/Login/Login';
import Header from './Component/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthProvider from './Component/context/AuthProvider';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import Doctor from './Component/Doctor/Doctor';
import Patient from './Component/Patient/Patient';
import MedicalRep from './Component/MedicalRep/MedicalRep';
import Records from './Component/Records/Records';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/medicalrecords'>
              <MedicalRecords></MedicalRecords>
            </Route>
           <Route path='/doctor'>
              <Doctor></Doctor>
           </Route>
           <Route path='/patient'>
              <Patient></Patient>
           </Route>
           <Route path='/medicalrep'>
            <MedicalRep></MedicalRep>
           </Route>
           <Route path='/records'>
            <Records></Records>
           </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
