import './App.css'
import AddNewProperty from './Components/AddNewProperty'
import PropertyList from './Components/PropertyList'
import { useEffect, useState } from 'react'
import Header from './Components/Header'
import BasicModal from './Components/BasicModal'
import { PropertyData } from './Components/Interfaces/interface'
import { Box, Typography, Skeleton } from '@mui/material'



function App() {

  const [open, setOpen] = useState<boolean>(false);
  const [properties, setProperties] = useState<PropertyData[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {

    let controller = new AbortController()

const fetchProperties = async () => {

  setIsFetching(true)
  try{
    const response = await fetch("http://localhost:8080/posts")
    signal: controller.signal
  setIsFetching(false)
    if(!response.ok){
      throw new Error("Request Failed")
    }else{
      const responseData = await response.json()
      console.log("responseData", responseData)
    
      setProperties(responseData.properties)
    
    }

  }catch(error: any){
    if(error.name === "AbortError"){
      console.log("Fetch request was aborted")

    }else{
      console.error("Error fetching properties", error)
    }
  }
}

fetchProperties()
return () => controller?.abort()

}, [])

  const addNewPropertyHandler = (propertyData: PropertyData) =>  {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(propertyData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setProperties((existingData) => [propertyData, ...existingData])
  
  }


  

  return (

    <>
    <Header/>
      <main>
    <BasicModal open={open} setOpen={setOpen}>
    <AddNewProperty 
 addNewPropertyHandler={addNewPropertyHandler}
      onCancel={setOpen}
/>

    </BasicModal>

{isFetching ? <Box><Typography variant="h1"><Skeleton /></Typography>
</Box> : <PropertyList properties={properties}/>}


   </main>
    </>
 
  )
}

export default App
