import './App.css'
import AddNewProperty from './Components/AddNewProperty'
import PropertyList from './Components/PropertyList'
import { useState } from 'react'
import Header from './Components/Header'
import BasicModal from './Components/BasicModal'
import { PropertyData } from './Components/Interfaces/interface'



function App() {

  const [open, setOpen] = useState<boolean>(false);
  const [properties, setProperties] = useState<PropertyData[]>([])

  const addNewPropertyHandler = (propertyData: PropertyData) =>  {
    setProperties((nomad) => [propertyData, ...nomad])
  
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

<PropertyList properties={properties}/>

   </main>
    </>
 
  )
}

export default App
