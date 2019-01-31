import React, { Component } from 'react';
import { Howl } from 'howler';

const A4sound = new Howl({
  src: ['/LeadWavs/LeadA4.wav', '/LeadWavs/LeadA4.wav']
});

const A5sound = new Howl({
  src: ['/LeadWavs/LeadA5.wav', '/LeadWavs/LeadA5.wav']
});


class ANotes extends Component {
  state = {
    a4: 'blue',
    a5: 'blue',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.a4 === '#00157C') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          a4: 'blue',
        }))
      }, 500);
    } else if (this.state.a5 === '#00157C') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          a5: 'blue',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }
  playA4Note = (note) => {
    A4sound.play();
    console.log('in ANotes', note);
    this.setState({
      [note]: '#00157C'
    })
    return false
  }
  playA5Note = (note) => {
    A5sound.play();
    console.log('in ANotes', note);
    this.setState({
      [note]: '#00157C'
    })
    return false
  }
  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* A NOTES */}
        <g id="a4">
          <ellipse
            transform="matrix(0.1738 -0.9848 0.9848 0.1738 291.1827 1898.2921)"
            style={{ fill: this.state.a4, stroke: this.state.stroke }}
            cx="1276.916"
            cy="775.61"
            rx="100.021"
            ry="131.926"
            onTouchStart={isTouch ? () => this.playA4Note('a4') : null}
            onClick={isTouch ? null : () => this.playA4Note('a4')}
          />
        </g>
        <g id="a5">
          <circle
            style={{ fill: this.state.a5, stroke: this.state.stroke }}
            cx="1034"
            cy="650"
            r="61.5"
            onTouchStart={isTouch ? () => this.playA5Note('a5') : null}
            onClick={isTouch ? null : () => this.playA5Note('a5')}
          />
        </g>
      </>
    );
  }
};

export default ANotes;
