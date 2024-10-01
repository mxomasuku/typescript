import { Box, TextField, Typography, Button, Stack} from "@mui/material"
import React, { useState } from "react"
import { PropertyData } from "./Interfaces/interface"


interface AddNewPropertyProps {
  onCancel: (open: boolean) => void
  addNewPropertyHandler: (property: PropertyData) => void
}

const AddNewProperty: React.FC<AddNewPropertyProps> = (props) => {


  const [enteredTitle, setEnteredTitle] = useState<string>("")
  const [enteredDescription, setEnteredDescription] = useState<string>("")
  const [enteredPrice, setEnteredPrice] = useState<number>(0)


  const onChangePropertyNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value)
  
  }
  const onDescriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDescription(event.target.value)
  
  }
  const onPriceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value); 
    setEnteredPrice(value);
  };

const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault()
const propertyData = {
  id: Math.random(),
  name: enteredTitle,
 description: enteredDescription,
 price: enteredPrice,
}
console.log(propertyData)
props.addNewPropertyHandler(propertyData)
props.onCancel(false)

}


  return (
    <Box bgcolor={"white"}
    component="form"
    onSubmit={submitHandler}
    sx={{ '& .MuiTextField-root': { m: 2 } }}>

<Typography color={"black"} fontSize={"2xl"}>Add New Property</Typography>


<TextField
             fullWidth
   
          required
          id="outlined-required"
          label="Property Name"
          onChange={onChangePropertyNameHandler}
        />


               <TextField
             fullWidth
          required
          id="outlined-required"
          label="Price"
          type="number"
          onChange={onPriceChangeHandler}
        />


<TextField

            fullWidth
          required
          id="outlined-required"
          label="Description"
          onChange={onDescriptionChangeHandler}

        />
<Stack spacing={2} direction={"row"} justifyContent={"flex-end"}>
<Button variant="contained" type="submit">Submit</Button>

<Button variant="contained" onClick={() => {props.onCancel(false)}}>Cancel</Button>
</Stack>








    </Box>
    
  )
}

export default AddNewProperty