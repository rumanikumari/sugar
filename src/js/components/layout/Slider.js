import React from "react";
import {Carousel} from "react-responsive-carousel";
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';

export default class Slider extends React.Component {
  state = {
      open: false,
    };

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

  render() {
    const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    backgroundColor: 'black',
    color: 'white',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
const actions = [
  <FlatButton
    label="Cancel"
    primary={true}
    onClick={this.handleClose}
  />,
  <FlatButton
    label="Submit"
    primary={true}
    keyboardFocused={true}
    onClick={this.handleClose}
  />,
];

const textFields = [];
      textFields.push(
        <TextField hintText="Albert" floatingLabelText="First Name"/>,
        <TextField hintText="Enstein" floatingLabelText="Last Name"/>,
        <TextField hintText="Ram Mohan Lal Sugar Industry" floatingLabelText="Company/Shop"/>,
        <TextField hintText="albert.enstein@company.com" floatingLabelText="Email Id"/>,
        <TextField hintText="0XXXXXXXXXX" floatingLabelText="Contact Number"/>,
        <TextField hintText="#15, XX road" floatingLabelText="Company/Shop Address"/>,
        <TextField hintText="Bangalore" floatingLabelText="Company/Shop City"/>,
      );

const signInButton = <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
<div class="carousel-caption d-none d-md-block">
<RaisedButton label="Sign In" onClick={this.handleOpen} style={styles.button} />
<Dialog title="Scrollable Dialog" actions={actions} modal={true} open={this.state.open} onRequestClose={this.handleClose} autoScrollBodyContent={true}>
  {textFields}
</Dialog>
</div>
</MuiThemeProvider>


    return (
      <Carousel autoPlay showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode" dynamicHeight infiniteLoop>
        <div>
          <img src="../../../assets/industry.jpg" className="slider-image-1"/>
          <p className="text-on-slider img-responsive">Our company is great. It has a great history. It is the best rated industry. It fulfills all your need.<br/>
          </p>
          {signInButton}
        </div>
        <div>
          <img src="../../../assets/3.png" className="slider-image-1"/>
          <p className="text-on-slider img-responsive">Our company is great. It has a great history. It is the best rated industry. It fulfills all your need.<br/>
          </p>
          {signInButton}
          </div>
        <div>
          <img src="../../../assets/4.png" className="slider-image-1"/>
          <p className="text-on-slider img-responsive">Our company is great. It has a great history. It is the best rated industry. It fulfills all your need.<br/>
          </p>
          {signInButton}
          </div>
      </Carousel>
    );
  }
}
