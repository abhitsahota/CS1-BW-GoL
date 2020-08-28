import React, { useState, useCallback, useRef } from "react";
import  produce from 'immer'

const numRows = 25
const numCols = 25

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];


function Grid() {

  const [generation, setGeneration] = useState(0)
  const generationRef = useRef(generation)
  generationRef.current = generation

  // Sets the state for the grid

  const clearGrid = () => {
    let arr = new Array(numCols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(numRows).fill(0)
    }
    setGeneration(0)
    return arr
  }

  const [grid, setGrid] = useState(() => {
    return clearGrid()
  })



  // Check if the sim is running
  const [running, setRunning] = useState(false)

  const runningRef = useRef(running)
  runningRef.current = running

  const [speed, setSpeed] = useState(1000)
  const speedRef = useRef(speed)
  speedRef.current = speed


  const runSim = useCallback(() => {
    if (!runningRef.current) {
      return
    }
    
    setGrid((g) => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });
              let newGen = generationRef.current + 1
              setGeneration(newGen)

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSim, speedRef.current)
  }, [])

  const sim = () => {
    setGrid((g) => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });
              let newGen = generationRef.current + 1
              setGeneration(newGen)

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });
  }
  
  const randomGrid = () => {
    let arr = new Array(numCols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(numRows).fill(0)
      for (let j = 0; j < numCols; j++) {
        arr[i][j] = Math.floor(Math.random() * 2)
      }
    }
    setGeneration(0)
    return arr
  }

  const changeHandler = (i, j) => {
    const newGrid = produce(grid, gridCopy => {
      gridCopy[i][j] = grid[i][j] ? 0 : 1
    })
    setGrid(newGrid)
  }

  return (
    <>
    <button 
      onClick={() => {
        setRunning(!running)
        if (!running) {
          runningRef.current = true
          runSim()
        }}
      }>
      {running ? 'stop' : 'start'}
    </button>
    <button 
      onClick={() => sim()}
      >
      Step
    </button>
    <button
      onClick={() => setGrid(clearGrid())}>
      Clear
    </button>
    {running ? "" : (
      <button
      onClick={() => setGrid(randomGrid())}
      >
      random
      </button>
    )}
    <label for="speed">Sim Speed</label>
    <select name="speed" id="speed" value={speedRef}
      onChange={(e) => {
        setSpeed(e.target.value)
        speedRef.current = speed
        console.log(speed)
      }
    }>
      <option value={speedRef}>N/A</option>
      <option value="1000" >1x</option>
      <option value="250">2x</option>
      <option value="125">4x</option>
      <option value="50">10x</option>
    </select>
    <br />
    <p>Generation: {generationRef.current} </p>
    <br />

    <div className="Grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`
      }} >
      {grid.map((row, i) => 
        row.map((col, j) => 
          <div key={`${i}${j}`} 
          onClick={() => changeHandler(i, j)}
          style={{
            width: 20, 
            height: 20,
            backgroundColor: grid[i][j] ? 'black' : 'white',
            border: 'solid 1px black'
          }} />
      ))}
    </div>
    </>
  )
}

export default Grid;