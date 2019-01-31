import React, { Component } from 'react';
import { Howl } from 'howler';

const E4sound = new Howl({
  src: ['/LeadWavs/LeadE4.wav', '/LeadWavs/LeadE4.wav']
});
const E5sound = new Howl({
  src: ['/LeadWavs/LeadE5.wav', '/LeadWavs/LeadE5.wav']
});
const E6sound = new Howl({
  src: ['/LeadWavs/LeadE6.wav', '/LeadWavs/LeadE6.wav']
});
const Eb4sound = new Howl({
  src: ['/LeadWavs/LeadEb4.wav', '/LeadWavs/LeadEb4.wav']
});
const Eb5sound = new Howl({
  src: ['/LeadWavs/LeadEb5.wav', '/LeadWavs/LeadEb5.wav']
});
const Eb6sound = new Howl({
  src: ['/LeadWavs/LeadEb6.wav', '/LeadWavs/LeadEb6.wav']
});

class ENotes extends Component {
  state = {
    e4: 'yellow',
    e4F: 'yellow',
    e5: 'yellow',
    e5F: 'yellow',
    e6: 'yellow',
    e6F: 'yellow',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.e4 === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e4: 'yellow',
        }))
      }, 500);
    } else if (this.state.e4F === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e4F: 'yellow',
        }))
      }, 500);
    } else if (this.state.e5 === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e5: 'yellow',
        }))
      }, 500);
    } else if (this.state.e5F === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e5F: 'yellow',
        }))
      }, 500);
    } else if (this.state.e6 === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e6: 'yellow',
        }))
      }, 500);
    } else if (this.state.e6F === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e6F: 'yellow',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }
  playE4Note = (note) => {
    E4sound.play();
    console.log('in ENotes', note);
    this.setState({
      [note]: '#D8D800'
    })
  }
  playE5Note = (note) => {
    E5sound.play();
    console.log('in ENotes', note);
    this.setState({
      [note]: '#D8D800'
    })
  }
  playE6Note = (note) => {
    E6sound.play();
    console.log('in ENotes', note);
    this.setState({
      [note]: '#D8D800'
    })
  }
  playEb4Note = (note) => {
    Eb4sound.play();
    console.log('in ENotes', note);
    this.setState({
      [note]: '#D8D800'
    })
  }
  playEb5Note = (note) => {
    Eb5sound.play();
    console.log('in ENotes', note);
    this.setState({
      [note]: '#D8D800'
    })
  }
  playEb6Note = (note) => {
    Eb6sound.play();
    console.log('in ENotes', note);
    this.setState({
      [note]: '#D8D800'
    })
  }
  render() {
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    return (
      <>
        {/* E NOTES */}
        <g id="e4">
          <ellipse
            transform="matrix(0.9269 -0.3754 0.3754 0.9269 -96.9854 498.2941)"
            style={{ fill: this.state.e4, stroke: this.state.stroke }}
            cx="1230.407"
            cy="498.066"
            rx="144.284"
            ry="111.421"
            onTouchStart={isTouch ? () => this.playE4Note('e4') : null}
            onClick={isTouch ? null : () => this.playE4Note('e4')}
          />
        </g>
        <g id="e4F">
          <ellipse
            transform="matrix(0.1815 -0.9834 0.9834 0.1815 -477.9086 696.9604)"
            style={{ fill: this.state.e4F, stroke: this.state.stroke }}
            cx="179.723"
            cy="635.569"
            rx="119.153"
            ry="152.941"
            onTouchStart={isTouch ? () => this.playEb4Note('e4F') : null}
            onClick={isTouch ? null : () => this.playEb4Note('e4F')}
          />
        </g>
        <g id="e5">
          <ellipse
            transform="matrix(0.7724 -0.6351 0.6351 0.7724 -103.6233 724.3026)"
            style={{ fill: this.state.e5, stroke: this.state.stroke }}
            cx="958.792"
            cy="506.735"
            rx="92.613"
            ry="66.307"
            onTouchStart={isTouch ? () => this.playE5Note('e5') : null}
            onClick={isTouch ? null : () => this.playE5Note('e5')}
          />
        </g>
        <g id="e5F">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -122.6176 80.4116)"
            style={{ fill: this.state.e5F, stroke: this.state.stroke }}
            cx="426.224"
            cy="783.632"
            rx="95.385"
            ry="68.307"
            onTouchStart={isTouch ? () => this.playEb5Note('e5F') : null}
            onClick={isTouch ? null : () => this.playEb5Note('e5F')}
          />
        </g>
        <g id="e6">
          <ellipse
            style={{ fill: this.state.e6, stroke: this.state.stroke }}
            cx="712"
            cy="598.5"
            rx="52.5"
            ry="51"
            onTouchStart={isTouch ? () => this.playE6Note('e6') : null}
            onClick={isTouch ? null : () => this.playE6Note('e6')}
          />
        </g>
        <g id="e6F">
          <circle
            style={{ fill: this.state.e6F, stroke: this.state.stroke }}
            cx="654"
            cy="806"
            r="52.5"
            onTouchStart={isTouch ? () => this.playEb6Note('e6F') : null}
            onClick={isTouch ? null : () => this.playEb6Note('e6F')}
          />
        </g>
      </>
    );
  }
};

export default ENotes;
