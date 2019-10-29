import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contacts extends Component {
    render() {
        return(
            <div style = {{ margin: 'auto'}}>
                <Grid className="background">
                    <Cell col ={12}>
                        <div className="contact-fade">

                        <Grid id="contact-body">
                            {/** ----------------------------------- left column --------------------------------- */}
                            <Cell className="contact-left-col" id="contact-left" col={4}>
                            <h1>Contacts</h1>
                            <div>
                            <p>Phone Number: (337) 789 - 2610</p>
                            <p>Email: jennyquynhphuong@gmail.com</p>
                            <p>LinkedIn:&nbsp;
                                <a href="https://linkedin.com/in/jenny-quynh-nguyen" rel="noopener noreferrer" target="_blank" className="contact-links">
                                https://linkedin.com/in/jenny-quynh-nguyen
                                </a> 
                            </p>
                            </div>
                            </Cell>

                            {/** ----------------------------------- right column --------------------------------- */}
                            <Cell className="contact-right-col" col={8}>
                                {/** title */}
                                <h1>Chat with me anytime!</h1>

                                <p>
                                    I am currently seeking software internships in Lafayette, Louisiana for the upcoming summer 
                                    of 2020. I would love to become integrated into a team that will challenge me with relevent and purposeful
                                    projects. 
                                </p>

                                <p>
                                    If you are interested in having me as a part of your company, I'd appreciate any information you can give.
                                    Thank you for taking the time to get to know me!
                                </p>
                            </Cell>
                        </Grid>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contacts;