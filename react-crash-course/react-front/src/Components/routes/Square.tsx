import { useState } from "react"
import { Box } from "@mui/material"

interface SquareValue {
    value: string,
    onSquareClick: (i: any) => void
  }

function Square ({value, onSquareClick} : SquareValue) {

//  const [value, setValue] = useState<string>("")  


    return (
        <Box 
        onClick={onSquareClick} 
        className="square"  height={24} width={24} border={"2px solid black"}>
{value}
        </Box>
    )

}

export default Square