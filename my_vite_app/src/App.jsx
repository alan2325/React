// import Sample_class from "./component/Sample"; 

import New_class from "./component/New"
import Props_class from "./component/Props"
// import Sample_class from "./component/Sample"

//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
   
//       <div className="card">
//       <button onClick={() => count>0 && setCount((count) => count - 1)}>
          
//           - 
//         </button>
//       <h1>{count}</h1>
//         <button onClick={() =>  setCount((count) => count + 1)}>
         
//           +
//         </button>
     
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }




// function App(){
//   const data=[
//     {id:1,name:'anu',age:20},
//     {id:2,name:'manu',age:22},
//     {id:3,name:'sanu',age:25},
//   ]
//   return(
//     <>
//     <h1>student Details</h1>
    
    
//     <table>
//       <thead>
//         <th>Id</th>
//         <th>Name</th>
//         <th>Age</th>
//       </thead>
//       <tbody>
//         {data.map((element)=>(
//           <tr key={element.id}>
//             <td>{element.id}</td>
//             <td>{element.name}</td>
//             <td>{element.age}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
    
//     </>
//   )
// }




// function App(){
//   return(
//     <>
//       <div>
//         <Sample_class/>
//       </div>
//     </>
//   )
// }


function App(){
  return(
    <>
      <div>
        
        <New_class/>
        <Props_class color='red' width='300px'/>
      </div>
    </>
  )
}


export default App
