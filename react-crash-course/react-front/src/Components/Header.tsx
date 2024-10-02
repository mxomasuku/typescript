import { Box, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const menuItems = [
  {name: "Home", url: "/"},
  { name: "Login", url: "/login" },
  { name: "About Us", url: "/about" },
  { name: "Offers For Students", url: "/student-offers" },
  { name: "Who We Work With", url: "/our-work" }
];

const Header = () => {
  return (
   <Box bgcolor={"whitesmoke"} width={"full"} color={"gray"} p={2}>

    <Stack spacing={{xs: 1, sm: 2}} direction={"row"} useFlexGap sx={{flexWrap: 'nowrap'}}>

{menuItems.map((menuItem) => {
  return(
    <Link to={menuItem.url}>
       <Typography>{menuItem.name}</Typography>

    </Link>
 
  )
})}
    </Stack>



 
   </Box>
  )
}

export default Header