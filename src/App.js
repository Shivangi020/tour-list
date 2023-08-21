import React ,{useState , createContext} from 'react'
import Refresh from './Component/Refresh';
import CardSection from './Component/CardSection';
import './App.css';

export const TourGlobalData = createContext()

function App() {
  const [tour ,setTour] = useState([]);
  const [refresh ,setRefresh] = useState(false)
  return (
    <TourGlobalData.Provider value={{tour,setTour,refresh,setRefresh}}>
    <div className='tour-main-page'>
       <div className='tour-heading'>Tours</div>
       <hr className='heading-hr'></hr>
       {refresh ? <Refresh/> :<CardSection/>}
    </div>
    </TourGlobalData.Provider>
  )
}

export default App;
