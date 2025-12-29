
//root component

import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from "./Create";
import Contact from './Contact';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App(){
  return(
    <Router>
   <div className='App'>
    <Navbar/>       
    <div className="content">
    <Switch>
      <Route exact path="/">
       <Home/>
      </Route>
      <Route path="/Create">
      <Create/>
      </Route>
       <Route path="/Contact">
      <Contact/>
      </Route>
       <Route path="/blogs/:id">
      <BlogDetails/>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
    </div>
   </div>
   </Router>
  );
}
export default App;



