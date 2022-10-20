import {Route, Switch} from 'react-router-dom'
import './App.css';
import Home from "./components/Home"
import Fulldetails from './components/Fulldetails';


const App=()=>(
  <Switch>
 
  <Route exact path="/" component={Home} />
  
  <Route exact path="/fulldetails/:id" component={Fulldetails} />
 
</Switch>
)

export default App;
