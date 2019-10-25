import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import about from '../about_me.jpg';

class About extends Component {
    render() {
        return(
            <div style = {{ margin: 'auto'}}>
                <Grid id="aboutMe-background">
                    <div className="aboutMe-fade">
                        <Grid>
                            <Cell col ={8}>
                                <div className="aboutMe-body">
                                    <h3>Thank you for taking an interest in me!</h3>

                                    <p>I'm Jenny Nguyen, a current junior in computer science at the University of Louisiana at Lafayette. I have a passion for software
                                        development, whether it be simple mobile apps or large firmware projects.
                                    </p>

                                    <p>The largest part of my college career has been CAPE, an student organization at UL that develops satellites and weather balloons.
                                        Through CAPE I've learned how to work on a deadline, collaborate as a group, be a leader, take challenges head on, and most importantly, 
                                        the joy of completing a project with my team.
                                    </p>

                                    <p>In the upcoming years of my life, I hope to find a career that will challenge and inspire me in the same way that CAPE. I look forward to 
                                        diversifying my programming knowledge and being a part of meaningful projects!
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