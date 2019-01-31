import React, { Component } from 'react';
import { Howl } from 'howler';


const B4sound = new Howl({
  src: ['/LeadWavs/LeadB4.wav', '/LeadWavs/LeadB4.wav']
});

const Bb4sound = new Howl({
  src: ['/LeadWavs/LeadBb4.wav', '/LeadWavs/LeadBb4.wav']
});

const B5sound = new Howl({
  src: ['/LeadWavs/LeadB5.wav', '/LeadWavs/LeadB5.wav']
});

const Bb5sound = new Howl({
  src: ['/LeadWavs/LeadBb5.wav', '/LeadWavs/LeadBb5.wav']
});

class BNotes extends Component {
  state = {
    b4: '#FFBFCA',
    b4F: '#FFBFCA',
    b5: '#FFBFCA',
    b5F: '#FFBFCA',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.b4 === '#FF577B') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          b4: '#FFBFCA',
        }))
      }, 500);
    } else if (this.state.b4F === '#FF577B') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          b4F: '#FFBFCA',
        }))
      }, 500);
    } else if (this.state.b5 === '#FF577B') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          b5: '#FFBFCA',
        }))
      }, 500);
    } else if (this.state.b5F === '#FF577B') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          b5F: '#FFBFCA',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }

  playB4Note = (note) => {
    B4sound.play();
    console.log('in BNotes', note);
    this.setState({
      [note]: '#FF577B'
    })
  }

  playBb4Note = (note) => {
    Bb4sound.play();
    console.log('in BNotes', note);
    this.setState({
      [note]: '#FF577B'
    })
  }

  playB5Note = (note) => {
    B5sound.play();
    console.log('in BNotes', note);
    this.setState({
      [note]: '#FF577B'
    })
  }

  playBb5Note = (note) => {
    Bb5sound.play();
    console.log('in BNotes', note);
    this.setState({
      [note]: '#FF577B'
    })
  }

  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* B NOTES */}
        <g id="b4">
          <ellipse
            transform="matrix(0.6631 -0.7485 0.7485 0.6631 153.779 902.843)"
            style={{ fill: this.state.b4, stroke: this.state.stroke }}
            cx="1079.905"
            cy="280.58"
            rx="130.591"
            ry="101.538"
            onTouchStart={isTouch ? () => this.playB4Note('b4') : null}
            onClick={isTouch ? null : () => this.playB4Note('b4')}
          />
        </g>
        <g id="b4F">
          <ellipse
            transform="matrix(0.9599 -0.2802 0.2802 0.9599 -247.888 89.9579)"
            style={{ fill: this.state.b4F, stroke: this.state.stroke }}
            cx="190.625"
            cy="911.805"
            rx="129.46"
            ry="101.873"
            onTouchStart={isTouch ? () => this.playBb4Note('b4f') : null}
            onClick={isTouch ? null : () => this.playBb4Note('b4f')}
          />
        </g>
        <g id="b5">
          <circle
            style={{ fill: this.state.b5, stroke: this.state.stroke }}
            cx="836"
            cy="410"
            r="57.5"
            onTouchStart={isTouch ? () => this.playB5Note('b5') : null}
            onClick={isTouch ? null : () => this.playB5Note('b5')}
          />
        </g>
        <g id="b5F">
          <circle
            style={{ fill: this.state.b5F, stroke: this.state.stroke }}
            cx="468"
            cy="931"
            r="61.5"
            onTouchStart={isTouch ? () => this.playBb5Note('b5F') : null}
            onClick={isTouch ? null : () => this.playBb5Note('b5F')}
          />
        </g>
      </>
    );
  }
};

export default BNotes;
