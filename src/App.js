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
        <Drawer title="Jenny Nguyen">
            <Navigation>
            <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
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
