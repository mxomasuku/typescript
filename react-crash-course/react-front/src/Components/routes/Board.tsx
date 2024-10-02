import { useState } from "react"
import Square from "./Square"
import { Stack } from "@mui/material"

export default function Board() {

 const [squares, setSquares] = useState(Array(9).fill(null)) 

     function handleClick(i: any) {
      const nextSquares = squares.slice()
      nextSquares[i] = "X"
        setSquares(nextSquares)
    }

    return(

      <>
      <Stack className="board-row" direction={"row"} >
     <Square  value={squares[0]} onSquareClick={() => handleClick(0)}/>
     <Square  value={squares[1]} onSquareClick={() => handleClick(1)}/>
     <Square  value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </Stack>
      <Stack className="board-row" direction={"row"} >
      <Square  value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square  value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square  value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </Stack>
      <Stack className="board-row" direction={"row"} >
      <Square  value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square  value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square  value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </Stack>
    </>
    )
    

  }