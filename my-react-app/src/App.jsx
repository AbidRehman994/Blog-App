//component 

// const title="React"
// function App(){
//   return(
//     <div>
//       {/* <h1> Hello React!</h1> */}
//       <h1>Hey {title}</h1>
//     </div>
//   )
// }
// export default App; 


// //Slight html syntax diff when used in react
// const title='component';
// const link="www.google.com";
// function App(){
//   return(
//     <div className="App">                      {/*converts into just class in html*/}
//       <h1>App {title}</h1>
//       <label htmlFor="search">Search</label>         {/*htmlFor instead of for*/}
//       <input id='search' type="text" />
//       <p>{10}</p>                             {/*outputting dynamic values directly inside curly braces*/}
//       <p>{["wazir","khan",33]}</p>              {/*array*/}
//       <p>{Math.random()}</p>
//       {/*inserting link in jsx can't be direct as React takes here dynamic value*/}
//       {/* <a href="www.google.com">google</a> */}
//       <a href={link}>google</a>
//     </div>
//   )
// }

// export default App;


//root component

import './index.css';
import Navbar from './Navbar';
import Home from './Home'
function App(){
  return(
   <div className='App'>
    <Navbar></Navbar>
    <div className="content">
    <Home></Home>
    </div>
   </div>
  );
}
export default App;



