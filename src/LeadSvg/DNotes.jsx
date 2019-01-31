import React, { Component } from 'react';
import { Howl } from 'howler';

const D4sound = new Howl({
  src: ['/LeadWavs/LeadD4.wav', '/LeadWavs/LeadD4.wav']
});
const D5sound = new Howl({
  src: ['/LeadWavs/LeadD5.wav', '/LeadWavs/LeadD5.wav']
});
const D6sound = new Howl({
  src: ['/LeadWavs/LeadD6.wav', '/LeadWavs/LeadD6.wav']
});


class DNotes extends Component {
  state = {
    d4: 'orange',
    d5: 'orange',
    d6: 'orange',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.d4 === '#EA7A00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          d4: 'orange',
        }))
      }, 500);
    } else if (this.state.d5 === '#EA7A00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          d5: 'orange',
        }))
      }, 500);
    } else if (this.state.d6 === '#EA7A00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          d6: 'orange',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }
  playD4Note = (note) => {
    D4sound.play();
    console.log('in DNotes', note);
    this.setState({
      [note]: '#EA7A00'
    })
  }
  playD5Note = (note) => {
    D5sound.play();
    console.log('in DNotes', note);
    this.setState({
      [note]: '#EA7A00'
    })
  }
  playD6Note = (note) => {
    D6sound.play();
    console.log('in DNotes', note);
    this.setState({
      [note]: '#EA7A00'
    })
  }
  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* D NOTES */}
        <g id="d4">
          <ellipse
            transform="matrix(0.5854 -0.8107 0.8107 0.5854 -349.8704 1374.5067)"
            style={{ fill: this.state.d4, stroke: this.state.stroke }}
            cx="1169.05"
            cy="1029.355"
            rx="120.239"
            ry="151.596"
            onTouchStart={isTouch ? () => this.playD4Note('d4') : null}
            onClick={isTouch ? null : () => this.playD4Note('d4')}
          />
        </g>
        <g id="d5">
          <ellipse
            transform="matrix(0.2741 -0.9617 0.9617 0.2741 -52.7768 1526.6034)"
            style={{ fill: this.state.d5, stroke: this.state.stroke }}
            cx="984.855"
            cy="798.262"
            rx="71.247"
            ry="100.371"
            onTouchStart={isTouch ? () => this.playD5Note('d5') : null}
            onClick={isTouch ? null : () => this.playD5Note('d5')}
          />
        </g>
        <g id="d6">
          <circle
            style={{ fill: this.state.d6, stroke: this.state.stroke }}
            cx="834"
            cy="662"
            r="54.5"
            onTouchStart={isTouch ? () => this.playD6Note('d6') : null}
            onClick={isTouch ? null : () => this.playD6Note('d6')}
          />
        </g>
      </>
    );
  }
};

export default DNotes;
