import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.cnvsRef = React.createRef();
  }

  componentDidMount() {
    this.updateColorsCanvas();
  }

  updateColorsCanvas() {
    const size = 1;
    // initialization of canvas
    const cntx = this.cnvsRef.current.getContext('2d');

    for (let i = 0; i < 32; i++) {
      // x coordinate 
      let xcoord = 0;
      // y coordinate
      let ycoord = 0;

      for (let j = 0; j < 32; j++) {
        for (let k = 0; k < 32; k++) {
          cntx.fillStyle = `rgb(
            ${Math.floor(8 * k)},
            ${Math.floor(8 * j)},
            ${Math.floor(8 * i)})`;
          xcoord = k + (i % 8) * 32;
          ycoord = j + parseInt(i / 8) * 32;
          // draw rectangle box
          cntx.fillRect(xcoord * size, ycoord * size, size, size);
        }
      }
    }
  }

  render() {
    return (
      <canvas ref={this.cnvsRef} width={2560} height={1280} />
    );
  }
}

export default App;
