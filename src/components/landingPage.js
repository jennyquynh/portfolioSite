import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../profile-pic.png';

class Landing extends Component {
    render() {
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col ={12}>
                        <img 
                        src={profile}
                        alt="Jenny Nguyen"
                        className="profile-pic"/>

                        <div className="banner-text">
                            <h1>Hi, I'm Jenny.
                                <p>
                                    Nice to meet you!
                                </p>
                            </h1>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;