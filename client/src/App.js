import BasicDocument from "./pages/BasicDocument";
import Feed from './pages/Feed';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <h1>Up</h1>
      <div>
      <Router>
        <div>
      <nav>
        <li><Link to="/feed" >Feed</Link></li>
        <li><Link to="/doc" >Doc</Link></li>
        </nav>
      </div> 
      <Switch>
        <Route path="/doc">
           <BasicDocument />
        </Route>
       <Route path="/feed">
           <Feed/>
        </Route>
      </Switch>
    </Router>
      </div>
      
    </div>
  );
}
export default App;