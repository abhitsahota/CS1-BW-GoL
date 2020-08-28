import React from 'react';

function Rules() {


    return (
      <div className="Rules">
        <h2>Rules</h2>
        <br />
        <p>In the Game of Life, the rules examine a cell's neighbours to determine the outcome of its generation. </p>
        <ul>
          <li>If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.</li>
          <li>If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.</li>
        </ul>
        <br />
        <p>Note: The cells just outside of the grid are assumed to be dead. </p>
        <br />
      </div>
    )
}

export default Rules;
