import React, { Component } from 'react';
import { Button, Grid, Cell } from 'react-mdl';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="background">
                    <Cell col ={12}>
                        <div className="resume-body">
                        <Grid>

                            {/** ----------------------------------- left column --------------------------------- */}
                            <Cell className="resume-left-col" col={4}>

                                {/** header */}
                                <h2>Jenny Nguyen</h2>
                                <h4>Computer Science Student</h4>

                                <hr/>

                                {/** description */}
                                <p>
                                Undergraduate student pursuing a B.S. of Computer Science with experience in a variety of software topics
                                that include firmware, fullstack development, and .NET applications. Possesses excellent communication skills,
                                self motivation, and dependability. Eager to learn and become integrated into a team that works on interesting, 
                                meaningful projects.
                                </p>

                                <hr/>

                                {/** contacts */}
                                <div className="resume-contacts">
                                    <h4>Phone Number</h4>
                                    <p>(337) 789 - 2610</p>

                                    <h4>Email Address</h4>
                                    <p>jennyquynhphuong@gmail.com</p>

                                    <h4>LinkedIn</h4>
                                    <a href="https://linkedin.com/in/jenny-quynh-nguyen" rel="noopener noreferrer" target="_blank" className="contact-links">
                                        https://linkedin.com/in/jenny-quynh-nguyen
                                    </a>

                                    <h4>GitHub</h4>
                                    <a href="https://github.com/jennyquynh" rel="noopener noreferrer" target="_blank" className="contact-links">
                                        https://github.com/jennyquynh
                                    </a>
                                </div>

                                <div>
                                <Button id="resumeLink">
                                                <a href="https://docs.google.com/document/d/16dCeVQ146sz97VwzaAT8gUuVOQZS0CTowghRjneVmqY/edit?usp=sharing" rel="noopener noreferrer" target="_blank" className="contact-links">
                                                    Download Resume
                                                </a>
                                            </Button>
                                </div>

                            </Cell>

                            {/** ---------------------------- right column ------------------------------- */}
                            <Cell className="resume-right-col" col={8}>

                                {/** education block */}
                                <div className="resume-section">
                                    <h2>EDUCATION</h2>

                                    <h4>University of Louisiana at Lafayette</h4>
                                    <h5>Bachelor in Computer Science</h5>

                                    <Grid id="education">
                                        <Cell col={6} id="education">
                                            <p>
                                            Overall GPA: 3.78
                                            </p>

                                            <p>
                                            Expected Graduation: May 2021
                                            </p>
                                    
                                        </Cell>
                
                                        <Cell col={6} id="education">
                                            <p>Relevent Coursework:</p>
                                            <ul>
                                                <li>Advance Data Structures and Software Engineering</li>
                                                <li>Algorithm Design and Analysis</li>
                                                <li>Computer Architecture</li>
                                            </ul>
                                        </Cell>
                                    </Grid>
                                </div>

                                {/** skills block */}
                                <div className="resume-section">
                                    <h2>SKILLS</h2>

                                    <Skills
                                    skill="Java"
                                    progress="75"/>

                                    <Skills
                                    skill="C#"
                                    progress="60"/>    

                                    <Skills
                                    skill=".NET"
                                    progress="60"/>

                                    <Skills
                                    skill="JavaScript"
                                    progress="60"/>

                                    <Skills
                                    skill="Command Line Git"
                                    progress="75"/>
                                </div>

                                {/** experience block */}
                                <div className="resume-section">
                                    <h2>EXPERIENCE</h2>

                                    <h4>CAPE</h4>
                                    <h5>Software Engineer:  2018 - Present</h5>

                                    <p>
                                    CAPE is a student led organization focused on launching pico-satellites and weather balloons. The program's software team
                                    designs code in order to support the hardware team's payloads. These applications range anywhere from a satellite's firmware, 
                                    to websites that display data, to GUIs that interact with the projects.
                                    </p>
                                </div>

                                {/** extra curricular block */}
                                <div className="resume-section">
                                    <h2>EXTRA-CURRICULAR</h2>
                                    
                                    <h4>CAPE</h4>
                                    <h5>New Recruits Teacher</h5>

                                    <p>
                                    New CAPE recruits are mentored by a group of senior students via a series of basic programming and electrical engineering lectures. 
                                    At the end of the course, recruits are led in their first weather balloon project.
                                    </p>


                                    <h4>CMPS Academic Mentoring</h4>
                                    <h5>Peer Mentor</h5>

                                    <p>
                                    Peer mentors is a team of students who have excelled in their computer science related courses. They meet weekly to assist, teach,
                                    and advise any peers who may be struggling with software topics.
                                    </p>


                                    <h4>ACM</h4>

                                    <p>
                                    ACM allows computer science students to network during a variety of events hosted throughout the academic semester. These
                                    events include resume workshops, tech talks, and hack days.
                                    </p>
                                </div>
                            </Cell>
                        </Grid>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;