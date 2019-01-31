import React, { Component } from 'react';
import { Howl } from 'howler';

const G4sound = new Howl({
  src: ['/LeadWavs/LeadG4.wav', '/LeadWavs/LeadG4.wav']
});
const GSh4sound = new Howl({
  src: ["/LeadWavs/LeadGSh4.wav", "/LeadWavs/LeadGSh4.wav"]
});
const G5sound = new Howl({
  src: ['/LeadWavs/LeadG5.wav', '/LeadWavs/LeadG5.wav']
});
const GSh5sound = new Howl({
  src: ['/LeadWavs/LeadGSh5.wav', '/LeadWavs/LeadGSh5.wav']
});

class GNotes extends Component {
  state = {
    g4: '#A9D7E4',
    g4Sh: '#A9D7E4',
    g5: '#A9D7E4',
    g5Sh: '#A9D7E4',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.g4 === '#23A9C9') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          g4: '#A9D7E4',
        }))
      }, 500);
    } else if (this.state.g4Sh === '#23A9C9') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          g4Sh: '#A9D7E4',
        }))
      }, 500);
    } else if (this.state.g5 === '#23A9C9') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          g5: '#A9D7E4',
        }))
      }, 500);
    } else if (this.state.g5Sh === '#23A9C9') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          g5Sh: '#A9D7E4',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }
  playG4Note = (note) => {
    G4sound.play();
    console.log('in GNotes', note);
    this.setState({
      [note]: '#23A9C9'
    })
  }
  playGSh4Note = (note) => {
    GSh4sound.play();
    console.log('in GNotes', note);
    this.setState({
      [note]: '#23A9C9'
    })
  }
  playG5Note = (note) => {
    G5sound.play();
    console.log('in GNotes', note);
    this.setState({
      [note]: '#23A9C9'
    })
  }
  playGSh5Note = (note) => {
    GSh5sound.play();
    console.log('in GNotes', note);
    this.setState({
      [note]: '#23A9C9'
    })
  }
  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* G NOTES  */}
        <g id="g4">
          <ellipse
            transform="matrix(0.9498 -0.313 0.313 0.9498 -336.5971 356.7783)"
            style={{ fill: this.state.g4, stroke: this.state.stroke }}
            cx="942.939"
            cy="1226.77"
            rx="105.142"
            ry="138.12"
            onTouchStart={isTouch ? () => this.playG4Note('g4') : null}
            onClick={isTouch ? null : () => this.playG4Note('g4')}
          />
        </g>
        <g id="g4Sh">
          <ellipse
            transform="matrix(0.6284 -0.7779 0.7779 0.6284 -182.2244 359.0121)"
            style={{ fill: this.state.g4Sh, stroke: this.state.stroke }}
            cx="284.677"
            cy="370.246"
            rx="106.013"
            ry="137.298"
            onTouchStart={isTouch ? () => this.playGSh4Note('g4Sh') : null}
            onClick={isTouch ? null : () => this.playGSh4Note('g4Sh')}
          />
        </g>
        <g id="g5">
          <ellipse
            transform="matrix(0.7424 -0.6699 0.6699 0.7424 -395.6221 859.191)"
            style={{ fill: this.state.g5, stroke: this.state.stroke }}
            cx="919.497"
            cy="944.07"
            rx="57.816"
            ry="84.637"
            onTouchStart={isTouch ? () => this.playG5Note('g5') : null}
            onClick={isTouch ? null : () => this.playG5Note('g5')}
          />
        </g>
        <g id="g5Sh">
          <ellipse
            transform="matrix(0.3593 -0.9332 0.9332 0.3593 -313.0156 797.0468)"
            style={{ fill: this.state.g5Sh, stroke: this.state.stroke }}
            cx="424"
            cy="626.5"
            rx="55.845"
            ry="80.365"
            onTouchStart={isTouch ? () => this.playGSh5Note('g5Sh') : null}
            onClick={isTouch ? null : () => this.playGSh5Note('g5Sh')}
          />
        </g>
      </>
    );
  }
};

export default GNotes;
