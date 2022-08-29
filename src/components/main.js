import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from "./landingPage";
import AboutMe from './aboutMe';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/portfolioSite" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;