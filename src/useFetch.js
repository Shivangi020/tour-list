import { useState,useEffect,useContext } from "react";
import { TourGlobalData } from "./App";

const useFetch = (url)=>{
 const [isLoading ,setIsLoading] = useState(true);
 const [error,setError] = useState(false)
 const {setTour} = useContext(TourGlobalData)

 useEffect(()=>{
  setIsLoading(true)
  setError(false)
  const fetchData = async() =>{
    try{
      const response = await fetch(url)
      const apiData = await response.json()
      setTour(apiData)
      setIsLoading(false)
    }catch(e){
    setError(true)
    setIsLoading(false)
    }
  }
  fetchData()
 },[url])

 return {isLoading,error}
}


export default useFetch