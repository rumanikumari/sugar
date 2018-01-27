import React from "react";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export default class Profile extends React.Component {

  render() {
    const textFields = [];
          textFields.push(
            <TextField hintText="Albert" floatingLabelText="First Name"/>,
            <TextField hintText="Enstein" floatingLabelText="Last Name"/>,
            <TextField hintText="Ram Mohan Lal Sugar Industry" floatingLabelText="Company/Shop"/>,
            <TextField hintText="albert.enstein@company.com" floatingLabelText="Email Id"/>,
            <TextField hintText="0XXXXXXXXXX" floatingLabelText="Contact Number"/>,
            <TextField hintText="#15, XX road" floatingLabelText="Company/Shop Address"/>,
            <TextField hintText="Bangalore" floatingLabelText="Company/Shop City"/>
          );

    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div class="container" style={containerStyle}>
        <h1>Register</h1>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <form>
        {textFields}
        <br/>
        <input type="submit" value="Submit"/>
        </form>
        </MuiThemeProvider>
      </div>
    );
  }
}
