import {Box, Text, Input, Button } from "@chakra-ui/react"
import { useRef } from "react"

interface Props {
    house: string,
    setHouse: React.Dispatch<React.SetStateAction<string>>,
    handleAddHouse: (e: React.FormEvent) => void
}

const AddInput = ({house, setHouse, handleAddHouse}: Props ) => {
const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Box as={"form"} onSubmit={(e: React.FormEvent) =>{
      handleAddHouse(e)
      inputRef.current?.blur()
    }
     }>
        <Text>Search or Add Property</Text>

            <Input type={"text"} 
            w={"full"} rounded={'2xl'}
            ref={inputRef}
            value={house} 
            onChange={(e) => setHouse(e.target.value)}/>

<Button mt={2} type="submit">
    Search
</Button>
    </Box>

  )
}

export default AddInput