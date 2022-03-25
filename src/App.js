import Footer from './Components/Footer/Footer'
import ModulePage from './Components/ModulePage/ModulePage'
import DashBoard from './Components/Dashboard/Dashboard';
import QuestionairePage from './Components/QuestionairePage/QuestionairePage'
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = '/' exact component={DashBoard} />
          <Route path = '/questionnaire' exact component={QuestionairePage} />
          <Route path = '/module' exact component={ModulePage} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
