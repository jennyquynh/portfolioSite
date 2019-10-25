import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color nav-bar title" title={<Link className= "landingLink" to="/portfolioSite">Jenny Nguyen</Link>} scroll>
            <Navigation> 
                <Link id= "navLink" to="/aboutme">About Me</Link>
                <Link id= "navLink" to="/resume">Resume</Link>
                <Link id= "navLink" to="/projects">Projects</Link>
                <Link id= "navLink" to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link id= "landingLinkMobileTitle" to="/portfolioSite">Jenny Nguyen</Link>}>
            <Navigation>
                <Link id= "landingLinkMobile" to="/aboutme">About Me</Link>
                <Link id= "landingLinkMobile" to="/resume">Resume</Link>
                <Link id= "landingLinkMobile" to="/projects">Projects</Link>
                <Link id= "landingLinkMobile"to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
