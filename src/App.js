import React from "react";
import styles from "./App.module.scss";
import { Content, Layout, Header, Navigation } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./Components/Main/Main";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div>
          <Layout>
            <Header className={styles.header} title=" ">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
              </Navigation>
            </Header>
            <Content>
              <Main/>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}
export default App;
