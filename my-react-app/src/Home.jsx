// const Home=()=>{
//     return(
//     <div className="home">
//     <h2>Homepage</h2>
//     </div>
//     )
// }
// export default Home;

//click event handler

// const Home=()=>{
//   const gemClich=()=>{
//     console.log('hello');
//   }
//   return(
//     <div className="home">
//       <h2>Homepage</h2>
//       <button onClick={gemClich}>Click me</button>

//     </div>
//   )
// }
// export default Home;


// //when veriable isn't reactive e.g abid
// const Home=()=>{
//   let name='abid';

//   //reactive
//   const tipClick=()=>{
//     name='javid';
//     console.log(name);
//   }
// //reactive 2
//   const handleClick=()=>{
//     name='hamid'
//     console.log(name);
//   }
//   return(
//     <div>
//       <p>{name}</p>
//       <button onClick={handleClick}>click</button>
//       <button onClick={tipClick}>click2</button>
//     </div>  
//     )
// }
// export default Home;

// const Home=()=>{
// const handleClick=(name)=>{
//   console.log('hello,'+ name);
// }
// return (
//   <div className='home'>
//     <h2>HomePage</h2>
//     <button onClick={()=>handleClick('abid')}>click me</button>
//   </div>
// )
// }
// export default Home;





// //exporting just name

// const Home=()=>{
//  let name='mario'; 

// return(
//   <div>
//     <p>{name}</p>
//   </div>
// )}
// export default Home;


// //Hook USe State : looks & re-render new value , special fn
// //makes value reactive and changeable

// import {useState} from 'react';
// const Loom=()=>{
//   const [name,setName]=useState('abid');  //set is a fn ,name is option
//   const [age,setAge]=useState(24);
//   const handleClick=()=>{
//     setName('hamid');                     {/*name changes from abid to hamid*/}
//     setAge('13')
//   }
//   return(
//     <div>                       {/*JSX expressions must have parent element*/}
//     <p>{name} is {age} years old.</p>
//     <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }
// export default Loom;

// // //outputting lists of data


import {useState} from 'react';
import BlogList from './BlogList';

const Home=()=>{
  const[blogs,setBlogs]=useState([
    {title:'Co-existence in existential crises',body:'the time we started',author:'Abid',id:1},
    {title:'From neanderthals to homo-sapiens',body:'foragers were made',author:'Yuval Harrari',id:2},
    {title:'Thinking big in modern world',body:'the human machine,brains',author:'Abid',id:3},
  ]);
  const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id!== id);
    setBlogs(newBlogs);
  }
  return(
    <div className="home">
    <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>   
    {/*filtering*/}
    <BlogList blogs={blogs.filter((blog)=>blog.author==='Abid')} title="Abid's blogs"/>     
   

      {/* {blogs.map((blog)=>(                // passing this data to BlogList as props
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>By {blog.author}</p>
        </div>
      ))} */}

    </div>
  )
}
export default Home;


