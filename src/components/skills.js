import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={2}>
                    <div style={{display: 'flex'}}>
                        <h5 style={{fontSize: '18px', opacity:'1'}}>{this.props.skill} </h5>
                    </div>
                </Cell>

                <Cell col={10}>
                    <div style={{display: 'flex', marginTop: '7px'}}>
                        <br />
                        <br/>
                        <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress}/> 
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;