import { useState, useEffect} from 'react';
import CategoryCard from './CategoryCard.jsx'
import ProfileImage from './assets/image-jeremy.png'
import './App.css'
// can choose to import data.json here instead of fetch, but using fetch for purposes of 

function App() {
    const [timeFrame, setTimeFrame] = useState('daily');
    const [data, setData] = useState()

    useEffect(()=> {
        fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
        .catch(error => {
        console.error('Error:', error)
        });
    }, [timeFrame])

    return (
        <div>
            <div className='ProfileCard'>
                <div className='ImageAndName'>
                    <img src={ProfileImage} alt='Profile Image' />
                    <div>
                        <p>Report for </p>
                        <h1>Jeremy Johnson</h1>
                    </div>
                </div>
                <div className='StatTimeFrame'>
                    <button onClick={()=> setTimeFrame('daily')} >Daily</button>
                    <button onClick={()=> setTimeFrame('weekly')} >Weekly</button>
                    <button onClick={()=> setTimeFrame('monthly')} >Monthly</button>
                </div>
            </div>
            <div className='Categories'>
                <CategoryCard imgSrc='' category='' time='' prevTimeFrame='' prevTime='' />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    )
}

// think about using useState to switch between day, week, month
// fetch data at highest level


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let jsonData;
//   fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//       jsonData = data;
//       processData(jsonData);
//     })
//     .catch(error => {
//       console.error('Error:', error)
//     });

//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         {/* <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a> */}
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
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

export default App
