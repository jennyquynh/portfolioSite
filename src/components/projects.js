import React, { Component } from 'react';
import { Button, Grid, Cell } from 'react-mdl';
import firm from '../CloudSat8Firm.jpg';
import gui from '../CloudSat8Gui.png';
import cape2 from '../cape2.jpeg';
import android from '../AndroidApp.png';
import portfolio from '../portfolioProject.png'

class Projects extends Component {
    render() {
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                {/** background */}
                <Grid className="background">
                    <Cell col ={12}>

                        {/** entire body */}
                        <div className="projects-body">

                            {/** title */}
                            <h1>Browse my recent projects.</h1>

                            {/** --------------------------- body start -------------------------- */}
                            <div>
                                {/** --------------------------- CloudSat 8 Firmware -------------------------- */}
                                <Grid id="projectRow">
                                    {/** picture */}
                                    <Cell col ={4}>
                                        <img 
                                        src={firm}
                                        alt="CloudSat 8 Firmware"
                                        className="project-pic"/>
                                    </Cell>

                                    {/** body */}
                                    <Cell col ={8}>
                                        <div className="project_description">
                                            <h3>CloudSat 8 Firmware</h3>

                                            <p>
                                                CloudSat 8 is a weather balloon that successfully launched in August 2019. It's payload consisted 
                                                of an Arduino Mega, a camera, GoPro, and multiple data sensors including GPS, temperature, altitude, 
                                                humidity, speed, and temperature. The payload reached an impressive altitude of 100,000 
                                                before naturally bursting and parachuting back down. My contribution to this project consisted of:
                                                
                                                <ul>
                                                    <li>programming of the temperature, humidity, and pressure sensor (BME280)</li>
                                                    <li>designing altitude and time checks for the payload's cut down system</li>
                                                    <li>implementing the payload's tweeting and email functionality</li>
                                                </ul>
                                            </p>

                                            <Button id="projectLink">
                                                <a href="https://www.youtube.com/watch?v=pTpQ-SmiC7s&t=204s" rel="noopener noreferrer" target="_blank" className="contact-links">
                                                    Aerial Footage
                                                </a>
                                                </Button>
                                        </div>
                                    </Cell>
                                </Grid>

                                {/** --------------------------- CloudSat 8 GUI -------------------------- */}
                                <Grid id="projectRow">
                                    {/** picture */}
                                    <Cell col ={4}>
                                        <img 
                                        src={gui}
                                        alt="CloudSat 8 GUI"
                                        className="project-pic"/>
                                    </Cell>

                                    {/** body */}
                                    <Cell col ={8}>
                                        <div className="project_description">
                                            <h3>CloudSat 8 GUI</h3>

                                            <p>
                                                In order to properly view the data that the CloudSat 8 balloon relayed back to the ground via ham radio, 
                                                I created a .NET application. The program received, parsed, and displayed the data into its appropriate 
                                                fields before finally storing it into an Excel sheet. The balloon's coordinates were then traced to the 
                                                GUI's live map. Cut down and beacon commands could also be sent via the GUI's buttons.
                                            </p>

                                            <Button id="projectLink">
                                                <a href="https://www.youtube.com/watch?v=bwghkYMMNpE" rel="noopener noreferrer" target="_blank" className="contact-links">
                                                    Data Live Stream
                                                </a>
                                            </Button>
                                        </div>
                                    </Cell>
                                </Grid>

                                {/** --------------------------- CAPE 3 Website-------------------------- */}
                                <Grid id="projectRow">
                                    {/** picture */}
                                    <Cell col ={4}>
                                        <img 
                                        src={cape2}
                                        alt="CloudSat 8 Firmware"
                                        className="project-pic"/>
                                    </Cell>

                                    {/** body */}
                                    <Cell col ={8}>
                                        <div className="project_description">
                                            <h3>CAPE 3 Website</h3>

                                            <p>
                                                CAPE 3 is the most recent satellite to be launched by the CAPE student organization. The CAPE 3 website 
                                                is currently being developed, and will use a node.js frontend to connect to a C# server and SQL database. 
                                                Users will be able to log in and view certain satellite data depending on the user's permission. My contribution 
                                                to this project thus far includes:

                                                <ul>
                                                    <li>creation of the website's login and register page using HTML and Bootswatch</li>
                                                    <li>implementation of routing between pages via Express</li>
                                                    <li>designing the WCF contract using C# and LINQ</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </Cell>
                                </Grid>

                                {/** --------------------------- Weather App -------------------------- */}
                                <Grid id="projectRow">
                                    {/** picture */}
                                    <Cell col ={4}>
                                        <img 
                                        src={android}
                                        alt="Android App"
                                        className="project-pic"/>
                                    </Cell>

                                    {/** body */}
                                    <Cell col ={8}>
                                        <div className="project_description">
                                            <h3>Android Weather App</h3>

                                            <p>
                                                A simple weather app that parses JSON data from a weather API and displays it on screen.
                                                After attending HackUTD 2018, I was inspired to experiement more with Android Studio.
                                            </p>

                                            <Button id="projectLink">
                                                <a href="https://github.com/jennyquynh/AndroidWeatherApp" rel="noopener noreferrer" target="_blank" className="contact-links">
                                                    View in Github
                                                </a>
                                            </Button>
                                        </div>
                                    </Cell>
                                </Grid>

                                {/** --------------------------- Resume Website -------------------------- */}
                                <Grid id="projectRow">
                                    {/** picture */}
                                    <Cell col ={4}>
                                        <img 
                                        src={portfolio}
                                        alt="Portfolio Website"
                                        className="project-pic"/>
                                    </Cell>

                                    {/** body */}
                                    <Cell col ={8}>
                                        <div className="project_description">
                                            <h3>Portfolio Website</h3>

                                            <p>
                                                The website you're currently viewing now! It uses React and node.js. This is the first website I have created and hosted on my own.
                                                This project was both exciting and a interesting at the same time. I hope you've enjoyed it!
                                            </p>

                                            <Button id="projectLink">
                                                <a href="https://github.com/jennyquynh/PortfolioWebsite" rel="noopener noreferrer" target="_blank" className="contact-links">
                                                    View in Github
                                                </a>
                                            </Button>
                                        </div>
                                    </Cell>
                                </Grid>
                                {/** --------------------------- body end -------------------------- */}
                            </div>                        
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;