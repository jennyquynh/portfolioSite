import React, { Component } from 'react';
import { Button, Grid, Cell } from 'react-mdl';
import firm from '../CloudSat8Firm.jpg';
import gui from '../CloudSat8Gui.png';
import cape2 from '../cape2.jpeg';
import android from '../AndroidApp.png';
import portfolio from '../portfolioProject.png'
import QtNotepad from '../QtNotepad.png'
import QtGPA from '../QtGPA.png'
import SpotifySearcher from '../SpotifySearcher.png'

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
                                                CloudSat 8 is a weather balloon that successfully launched in August 2019. <br/><br/> 
                                                
                                                It's payload consisted of an Arduino Mega, a camera, a GoPro, and multiple data sensors including: GPS, temperature, altitude, 
                                                humidity, speed, and temperature. The balloon reached an impressive altitude of 100,000 before naturally bursting and parachuting back down. <br/><br/>
                                                
                                                My contribution to this project consisted of:
                                                
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
                                                I created a .NET GUI. <br/><br/>
                                                
                                                The WPF application received, parsed, and displayed the data into its appropriate 
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
                                                CAPE 3 is the most recent satellite to be launched by the CAPE student organization. <br/><br/>
                                                
                                                The CAPE 3 website is currently being developed, and will use a javascript frontend to connect to a C# server and SQL database. 
                                                Users will be able to log in and view certain satellite data depending on the user's permission. <br/><br/>
                                                
                                                My contribution to this project thus far includes:

                                                <ul>
                                                    <li>Created a WCF contract that utilizes LINQ to connect the C# and SQL backend to a javascript frontend</li>
                                                    <li>creation of the website's login and register page using HTML and Bootswatch</li>
                                                    <li>implementation of routing between pages via Express</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </Cell>
                                </Grid>

                                {/** --------------------------- Spotify Searcher -------------------------- */}
                                <Grid id="projectRow">
                                    {/** picture */}
                                    <Cell col ={4}>
                                        <img 
                                        src={SpotifySearcher}
                                        alt="SpotifySearcher"
                                        className="project-pic"/>
                                    </Cell>

                                    {/** body */}
                                    <Cell col ={8}>
                                        <div className="project_description">
                                            <h3>SpotifySearcher</h3>

                                            <p>
                                                My first Angular 2 application. The website utilizes Spotify's API
                                                to display artists and albums based on the user's search. It also provides
                                                links to the corresponding Spotify pages.
                                            </p>

                                            <Button id="projectLink">
                                                <a href="https://github.com/jennyquynh/SpotifySearcher" rel="noopener noreferrer" target="_blank" className="contact-links">
                                                    View in Github
                                                </a>
                                            </Button>
                                        </div>
                                    </Cell>
                                </Grid>

                                {/** --------------------------- QtGPA -------------------------- */}
                                <Grid id="projectRow">
                                    {/** picture */}
                                    <Cell col ={4}>
                                        <img 
                                        src={QtGPA}
                                        alt="Qt GPA Calculator"
                                        className="project-pic"/>
                                    </Cell>

                                    {/** body */}
                                    <Cell col ={8}>
                                        <div className="project_description">
                                            <h3>Qt GPA Calculator</h3>

                                            <p>
                                                A Qt application that computes the user's GPA once course information is supplied. <br/><br/>
                                                
                                                The calculator uses three custom slots: one that adds a new course groupbox, one that deletes a course's group box,
                                                and one that calculates and displays the total GPA. Each slot is connected to individual buttons, and is triggered by the 
                                                "clicked" signal of that button.
                                            </p>

                                            <Button id="projectLink">
                                                <a href="https://github.com/jennyquynh/Qt-GPA-Calculator" rel="noopener noreferrer" target="_blank" className="contact-links">
                                                    View in Github
                                                </a>
                                            </Button>
                                        </div>
                                    </Cell>
                                </Grid>

                                {/** --------------------------- QtNotepad -------------------------- */}
                                <Grid id="projectRow">
                                    {/** picture */}
                                    <Cell col ={4}>
                                        <img 
                                        src={QtNotepad}
                                        alt="Qt Notepad"
                                        className="project-pic"/>
                                    </Cell>

                                    {/** body */}
                                    <Cell col ={8}>
                                        <div className="project_description">
                                            <h3>Qt Notepad App</h3>

                                            <p>
                                                My first Qt application is a small text editor that accounts for creating, saving, opening, and printing
                                                new text files. This project was created for the purpose of becoming more familiar with using Qt.
                                            </p>

                                            <Button id="projectLink">
                                                <a href="https://github.com/jennyquynh/QtNotepad" rel="noopener noreferrer" target="_blank" className="contact-links">
                                                    View in Github
                                                </a>
                                            </Button>
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
                                                <a href="https://github.com/jennyquynh/portfolioSite/tree/master" rel="noopener noreferrer" target="_blank" className="contact-links">
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