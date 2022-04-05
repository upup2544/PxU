import BasicDocument from "./pages/BasicDocument";
import Company from './pages/Company';
import Createcompany from './pages/Createcompany';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <h1>PxUProject</h1>
      <div>
      <Router>
        <div>
      <nav>
        <li><Link to="/company" >Company</Link></li>
        <li><Link to="/doc" >Doc</Link></li>
        </nav>
      </div> 
      <Switch>
        <Route path="/doc">
           <BasicDocument />
        </Route>
       <Route path="/company">
           <Company/>
        </Route>
        <Route path="/createcompany">
           <Createcompany />
        </Route>
      </Switch>
    </Router>
      </div>
      
    </div>
  );
}
export default App;