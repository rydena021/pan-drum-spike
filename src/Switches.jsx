import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchLabels extends React.Component {
  state = {
    displayNotes: false,
    displayColors: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.displayNotes}
              onChange={this.handleChange('displayNotes')}
              value="displayNotes"
            />
          }
          label="Note Labels"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.displayColors}
              onChange={this.handleChange('displayColors')}
              value="displayColors"
              color="primary"
            />
          }
          label="Colors"
        />
      </FormGroup>
    );
  }
}

export default SwitchLabels;
