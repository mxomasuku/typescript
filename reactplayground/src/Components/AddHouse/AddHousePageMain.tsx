import {useState} from 'react'
import {Box} from '@chakra-ui/react'
import AddInput from './AddInput'
import { House } from '../../DataModels/model'
import Results from "./AvailableHouses"

const AddHousePageMain = () => {



    const [house, setHouse] = useState<string>("")
    const [houses, setHouses] = useState<House[]>([])
    const handleAddHouse = (e: React.FormEvent) =>  {
      e.preventDefault()
      if(house){
        setHouses([...houses, {id: Date.now(), house, isAvailable: true}])
        console.log(houses)
        setHouse("")
      }
    }
  return (
 <Box mt={4}>
    <AddInput house={house} setHouse={setHouse} handleAddHouse={handleAddHouse}/>
    <Results houses={houses} setHouses={setHouses}/>
 </Box>
  )
}


export default AddHousePageMain