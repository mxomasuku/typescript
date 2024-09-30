import './App.css'
import AddNewProperty from './Components/AddNewProperty'
import PropertyList from './Components/PropertyList'
import { useState } from 'react'
import Header from './Components/Header'
import BasicModal from './Components/BasicModal'



function App() {

  const [open, setOpen] = useState<boolean>(false);



  

  return (

    <>
    <Header/>
      <main>
    <BasicModal open={open} setOpen={setOpen}>
    <AddNewProperty 

      onCancel={setOpen}
/>

    </BasicModal>

<PropertyList/>

   </main>
    </>
 
  )
}

export default App
