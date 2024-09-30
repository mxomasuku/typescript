import { Box, Stack, Typography } from "@mui/material"

const Header = () => {
  return (
   <Box bgcolor={"whitesmoke"} width={"full"} color={"gray"} p={2}>

    <Stack spacing={{xs: 1, sm: 2}} direction={"row"} useFlexGap sx={{flexWrap: 'nowrap'}}>
    <Typography>Login</Typography>
<Typography>About Us</Typography>
<Typography>Offers For Students</Typography>
<Typography>Who We Work With</Typography>
    </Stack>



 
   </Box>
  )
}

export default Header