import React from "react";
import styles from "./App.module.scss";
import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./Components/Main";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div>
          <Layout>
            <Header className={styles.header} title=" ">
              <Navigation>
                <Link to="/"> Resume</Link>
                <Link to="/projects"> Projects</Link>
                <Link to="/contact"> Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="">
              <Navigation>
                <Link to="/"> Resume</Link>
                <Link to="/projects"> Projects</Link>
                <Link to="/contact"> Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
