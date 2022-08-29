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
                                <h4>Software Developer II</h4>

                                <hr/>

                                {/** description */}
                                <p>
                                A software developer with 2+ years of experience working high performance code in a time critical environment.
                                Familiar with collaboration in an Agile environment using Atlassian products such as Jira, Confluence, and Bitbucket. 
                                </p>

                                <hr/>

                                {/** contacts */}
                                <div className="resume-contacts">
                                    <h4>Phone Number</h4>
                                    <p>(337) 789 - 2610</p>

                                    <h4>Email Address</h4>
                                    <p>jennyquynhphuong@gmail.com</p>

                                    <h4>LinkedIn</h4>
                                    <a href="https://linkedin.com/in/jenny-quynh" rel="noopener noreferrer" target="_blank" className="contact-links">
                                        https://linkedin.com/in/jenny-quynh
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

                                                                {/** education block */}
                                                                <div className="resume-section">
                                    <h2>EDUCATION</h2>

                                    <br/>
                                    <br/>
                                    <h5 id="edu">Bachelors in Computer Science</h5>
                                    <h4>University of Louisiana at Lafayette</h4>

                                    <Grid id="education">
                                        <Cell col={6} id="education">
                                            <p>
                                            Overall GPA: 3.74
                                            </p>

                                            <p>
                                            Magna Cum Laude
                                            </p>

                                            <p>
                                            Graduated: May 2021
                                            </p>
                                    
                                        </Cell>
                                    </Grid>
                                </div>

                                {/** skills block */}
                                <div className="resume-section">
                                    <h2>SKILLS</h2>

                                    <Skills
                                    skill="C++"
                                    progress="90"/>

                                    <Skills
                                    skill="C#"
                                    progress="70"/>    

                                    <Skills
                                    skill=".NET"
                                    progress="70"/>

                                    <Skills
                                    skill="JavaScript"
                                    progress="60"/>

                                    <Skills
                                    skill="Command Line Git"
                                    progress="75"/>

                                    <Skills
                                    skill="Mercurial"
                                    progress="90"/>
                                </div>

                            </Cell>

                            {/** ---------------------------- right column ------------------------------- */}
                            <Cell className="resume-right-col" col={8}>

                                {/** experience block */}
                                <div className="resume-section">
                                    <h2>EXPERIENCE</h2>

                                    <h4>Software Developer II</h4>
                                    <h5>L3Harris Technologies:  July 2022 - Present</h5>

                                    <p>
                                    Developed sophisticated code on a time-critical schedule to meet the standards and requirements of two large-scale commercial vessels.
                                    </p>
                                    <ul>
                                        <li>Performed as a small-scale sprint lead for the implementation of the wave avoidance feature requested by the customer.</li>
                                        <li>Contributed to the design and development of autonomous and dynamic mission shifting during dire conditions.</li>
                                        <li>Mentored multiple new developers by assisting in their understanding of our development environment, repositories, tools, and procedures</li>
                                    </ul>

                                    <br/>
                                    <br/>

                                    <h4>Software Developer I</h4>
                                    <h5>L3Harris Technologies:  May 2021 - July 2022</h5>

                                    <p>
                                    Worked on general Autonomous Surface Vehicles software ranging from high level mission processing to the low level trajectory generation.
                                    </p>
                                    <ul>
                                        <li>Implemented the handling of time/ maneuver constraints by adding services, evaluators, extensions, and expanders for each constraint type</li>
                                        <li>Contributed to the implementation of a communication layer that interfaced between our in house system and the customer’s system</li>
                                        <li>Assisted with creating a suite of regression testing for the mission pipeline and setting up a cron job run the suite nightly, emailing the results to team members</li>
                                    </ul>

                                    <br/>
                                    <br/>

                                    <h4>Software Developer Intern</h4>
                                    <h5>L3Harris Technologies:  June 2020 - May 2021</h5>

                                    <p>
                                    Assisted with the creation of the new Autonomous Mission System used to digest, validate, and execute user defined maritime missions.
                                    </p>
                                    <ul>
                                        <li>Helped design and implement a task coordinator that parsed missions for tasks/commands and forwarded the messages to the appropriate task client</li>
                                        <li>Unit tested multiple components of the new mission system </li>
                                    </ul>
                                </div>

                                {/** extra curricular block */}
                                <div className="resume-section">
                                    <h2>EXTRA-CURRICULAR</h2>

                                    <h4>CAPE</h4>
                                    <h5>Software Engineer:  2018 - 2020</h5>

                                    <p>
                                    CAPE is a student led organization focused on launching pico-satellites and weather balloons. The program's software team
                                    designs code in order to support the hardware team's payloads. These applications range anywhere from a satellite's firmware, 
                                    to websites that display data, to GUIs that interact with the projects.
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