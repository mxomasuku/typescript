import Property from './Property'
import Grid from '@mui/material/Unstable_Grid2';
import { PropertyData } from './Interfaces/interface';


// const properties = [
//   {
//     id: "dn21",
//     price: 12345,
//     readilyAvailable: false,
//     location: "East",
//     name: "Emerald Earrings House",
//     description: "A beautiful home for a medium family",
//   },
//   {
//     id: "prp456",
//     price: 25000,
//     readilyAvailable: true,
//     location: "West",
//     name: "Cozy Cottage",
//     description: "A quaint 2-bedroom retreat.",
//   },
//   {
//     id: "lux789",
//     price: 500000,
//     readilyAvailable: true,
//     location: "North",
//     name: "Luxury Penthouse",
//     description: "Breathtaking city views from this 4-bedroom penthouse.",
//   },
//   {
//     id: "inv123",
//     price: 100000,
//     readilyAvailable: false,
//     location: "South",
//     name: "Investment Opportunity",
//     description: "A fixer-upper with potential.",
//   },
//   {
//     id: "fam321",
//     price: 350000,
//     readilyAvailable: true,
//     location: "Central",
//     name: "Family Haven",
//     description: "Spacious 5-bedroom home in a family-friendly neighborhood.",
//   },
//   {
//     id: "ret654",
//     price: 200000,
//     readilyAvailable: true,
//     location: "Coastal",
//     name: "Retirement Paradise",
//     description: "Relaxing 2-bedroom villa by the sea.",
//   },
// ];

type PropertyListProps = {
  properties: PropertyData[]
}

const PropertyList = ({properties}: PropertyListProps) => {





  return (
    <Grid container spacing={2}>





{properties.map((property) => {

  return(
    <Grid xs={4}>
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