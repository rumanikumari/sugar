import React from "react";
import Slider from "../components/layout/Slider";
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
export default class Home extends React.Component {
  state = {
   selectedIndex: 0,
 };
 select = (index) => this.setState({selectedIndex: index});

  render() {
    const containerStyle = {
      marginTop: "60px"
    };
    const paragraphStyle = {
      color: "black",
      lineHeight: 1.2,
      fontFamily: "Times New Roman",
      fontSize: '30px',
      fontWeight: 'bold',
      backgroundColor: "rgb(150, 211, 219)"
    };
    const footerStyle={
    width: "100%",
    padding: "1rem",
    margin: ".5rem 1rem",
    Align: "center",
    transition: "200ms",
    background: "white",
    position: "fixed",
  };

    return (
    <div>
        <Slider/>
      <div class="col-lg-12 image1 padding-small" style={paragraphStyle}>
      Every year Bajaj Hindusthan Sugar ltd. conducts a survey of its command area to bring on record the cane cultivated area of the farmers. This also takes care of the different varieties of sugarcane that are grown by farmers.
Post this massive exercise, every farmer within the command area of the mill is provided with a calendar, which tells him when he can expect a Mill Supply Ticket (Purchy) against which he will supply the cane
        </div>
        <div class="col-lg-12 image textOnImage padding">
             A Movie in the Park: Kung Fu Panda
             </div>
             <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
             <footer>my name</footer>
                </MuiThemeProvider>
   </div>
    );
  }
}
