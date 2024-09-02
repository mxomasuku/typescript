import './App.css'
import Property from './Components/Property'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2




function App() {


 

  return (
   <main>
    <Grid container spacing={2}>

<Grid>
<Property id={"dn21"} price={12345} readilyAvailable={false} location={'East'} name={"Emerald Earrings House"} description={"A beautiful home for a medium family"} 
   fullDescription={"**Your dream home awaits!** This charming 3-bedroom property offers a perfect blend of comfort and style. The inviting lounge, bathed in natural light, is ideal for cozy evenings in, while the separate dining room sets the scene for memorable gatherings. The well-equipped kitchen, complete with a handy pantry, makes meal prep a joy. Three generously sized bedrooms ensure restful nights, and a modern bathroom adds a touch of luxury. **Bonus features:** A single garage provides secure parking, and a sun-drenched patio invites outdoor relaxation. Nestled in a friendly neighborhood, this gem won't last long! "} />
</Grid>

<Grid>
<Property
  id={"prp456"}
  price={25000}
  readilyAvailable={true}
  location={'West'}
  name={"Cozy Cottage"}
  description={"A quaint 2-bedroom retreat."}
  fullDescription={
    "Escape the hustle and bustle in this delightful cottage. Two cozy bedrooms, a warm living area with a fireplace, and a charming kitchen make this the perfect hideaway. Enjoy peaceful mornings on the front porch and stargazing from the backyard. Ideal for couples or small families seeking tranquility."
  }
/>

</Grid>
  
<Grid>
<Property
  id={"lux789"}
  price={500000}
  readilyAvailable={true}
  location={'North'}
  name={"Luxury Penthouse"}
  description={"Breathtaking city views from this 4-bedroom penthouse."}
  fullDescription={
    "Indulge in the ultimate urban lifestyle. This stunning penthouse boasts panoramic city views, four spacious bedrooms with en-suite bathrooms, a gourmet kitchen, and a private rooftop terrace. Enjoy the finest amenities and unparalleled luxury in this exclusive residence."
  }
/>
</Grid>

<Grid>
<Property
  id={"inv123"}
  price={100000}
  readilyAvailable={false}
  location={'South'}
  name={"Investment Opportunity"}
  description={"A fixer-upper with potential."}
  fullDescription={
    "Unlock the hidden value in this diamond in the rough. This property needs some TLC, but with the right vision, it could be transformed into a lucrative investment. Ideal for experienced renovators or those seeking a project."
  }
/>
</Grid>

<Grid>
<Property
  id={"fam321"}
  price={350000}
  readilyAvailable={true}
  location={'Central'}
  name={"Family Haven"}
  description={"Spacious 5-bedroom home in a family-friendly neighborhood."}
  fullDescription={
    "Create lasting memories in this spacious family home. Five bedrooms, multiple living areas, a large backyard with a pool, and a safe, welcoming neighborhood make this the perfect place to raise a family. Close to schools, parks, and amenities."
  }
/>
</Grid>

<Grid>
<Property
  id={"ret654"}
  price={200000}
  readilyAvailable={true}
  location={'Coastal'}
  name={"Retirement Paradise"}
  description={"Relaxing 2-bedroom villa by the sea."}
  fullDescription={
    "Embrace the golden years in this serene coastal villa. Two comfortable bedrooms, an open-plan living area, and a private patio with ocean views offer the perfect setting for relaxation. Enjoy leisurely walks on the beach and breathtaking sunsets. Ideal for retirees seeking peace and tranquility."
  }
/>
</Grid>


   
    </Grid>


   </main>
  )
}

export default App
