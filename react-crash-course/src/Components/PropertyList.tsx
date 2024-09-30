import Property from './Property'
import Grid from '@mui/material/Unstable_Grid2';


const PropertyList = () => {
  return (
    <Grid container spacing={2}>

<Grid
xs={4}>
<Property 
id={"dn21"} 
price={12345} 
readilyAvailable={false} 
location={'East'} 
name={"Emerald Earrings House"} 
description={"A beautiful home for a medium family"} />

</Grid>

<Grid  xs={4}>
<Property
  id={"prp456"}
 
  price={25000}
  readilyAvailable={true}
  location={'West'}
  name={"Cozy Cottage"}
  description={"A quaint 2-bedroom retreat."}

/>

</Grid>
  
<Grid
xs={4}>
<Property
  id={"lux789"}
  price={500000}
  readilyAvailable={true}
  location={'North'}
  name={"Luxury Penthouse"}
  description={"Breathtaking city views from this 4-bedroom penthouse."}

/>
</Grid>

<Grid xs={4}>
<Property
  id={"inv123"}
  price={100000}
  readilyAvailable={false}
  location={'South'}
  name={"Investment Opportunity"}
  description={"A fixer-upper with potential."}
 
/>
</Grid>

<Grid xs={4}>
<Property
  id={"fam321"}
  price={350000}
  readilyAvailable={true}
  location={'Central'}
  name={"Family Haven"}
  description={"Spacious 5-bedroom home in a family-friendly neighborhood."}
 
/>
</Grid>

<Grid xs={4}>
<Property
  id={"ret654"}
  price={200000}
  readilyAvailable={true}
  location={'Coastal'}
  name={"Retirement Paradise"}
  description={"Relaxing 2-bedroom villa by the sea."}
 
/>
</Grid>


   
    </Grid>
  )
}

export default PropertyList