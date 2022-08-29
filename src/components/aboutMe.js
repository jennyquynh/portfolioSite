import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import about from '../about_me.jpg';

class About extends Component {
    render() {
        return(
            <div style = {{ margin: 'auto'}}>
                <Grid id="aboutMe-background">
                    <div className="aboutMe-fade">
                        <Grid id="mobileAbout">
                            <Cell col ={8} id="aboutmeMobile">
                                <div className="aboutMe-body">
                                    <h3>Thank you for taking an interest in me!</h3>

                                    <p>I'm Jenny Nguyen, a current software developer that has been programming commercially for over two years now. I graduated in 2021 with 
                                        a bachelors degree in Computer Science.
                                    </p>

                                    <p>The largest part of my college career was CAPE, an student organization at UL that develops satellites and weather balloons.
                                        Through CAPE I learned how to work on a deadline, collaborate as a group, be a leader, take challenges head on, and most importantly, 
                                        the joy of completing a project with my team.
                                    </p>

                                    <p>After CAPE, the next chapter in my life was working for L3Harris Techonologies. I started my career there as an intern during my senior 
                                        year of college, and was eventually hired there full time. There, I gained experience working in a fast paced, time critical environment
                                        to produce autonomous maritime software. After a full year of contribution, I was promoted to a Software Developer II position.
                                    </p>
                                </div>
                            </Cell>

                            <Cell col={4}>
                                <div className="aboutPic">
                                    <img 
                                    src={about}
                                    alt="Jenny Nguyen"
                                    className="aboutMe-pic"/>
                                </div>
                            </Cell>
                        </Grid>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default About;