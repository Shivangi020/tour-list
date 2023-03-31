import React ,{useContext}from 'react'
import { TourGlobalData } from '../App'

function Refresh() {
  const {setRefresh} = useContext(TourGlobalData)

  const refreshHandler =()=>{
    setRefresh(false)
  }

  return (
    <div className='tour-refresh'>
        <button className='refresh-btn' onClick={refreshHandler} >Refresh</button>
    </div>
  )
}

export default Refresh