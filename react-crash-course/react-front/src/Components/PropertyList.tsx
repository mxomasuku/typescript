import Property from './Property'
import { Grid } from '@mui/material';
import { PropertyData } from './Interfaces/interface';


type PropertyListProps = {
  properties: PropertyData[]
}

const PropertyList = ({properties}: PropertyListProps) => {


  return (
    <Grid container spacing={2}>


{properties.map((property) => {

  return(
    <Grid xs={4} mt={2}
    key={property.id}>
      <Property
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