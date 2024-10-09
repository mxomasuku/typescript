import Property from './Property'
import { Grid } from '@mui/material';
import { PropertyData } from './Interfaces/interface';
import { useContext } from 'react';
import { TestContext } from './context/TestContext';


type PropertyListProps = {
  properties: PropertyData[]
}

const PropertyList = ({properties}: PropertyListProps) => {

  const context = useContext(TestContext)

if(!context){
  throw new Error("My Component must be wrapped in a context")
}

const { testString, setTestString } = context;
console.log(testString,"test string")

  return (
    <Grid container spacing={2}>



{properties.map((property) => {

  return(
    <Grid xs={4} mt={2}
    key={property.id} >
      <Property
     setTestString={setTestString}
      id={property.id}
      price={property.price}
      name={property.name}
      description={property.description} />
    </Grid>
  )

})}

    </Grid>

  )
}

export default PropertyList