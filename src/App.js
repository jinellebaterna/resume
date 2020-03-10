import React from "react";
import styles from "./App.module.scss";
import {  Content } from "react-mdl";
import Main from "./Components/Main";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div>
            {/*<Layout>*/}
            {/*  <Header className={styles.header} title=" ">*/}
            {/*    <Navigation>*/}
            {/*      <Link to="/"> Resume</Link>*/}
            {/*      <Link to="/projects"> Projects</Link>*/}
            {/*    </Navigation>*/}
            {/*  </Header>*/}
            {/*  <Drawer title="">*/}
            {/*    <Navigation>*/}
            {/*      <div className={styles.container}/>*/}
            {/*      <Link to="/"> Resume</Link>*/}
            {/*      <Link to="/projects"> Projects</Link>*/}
            {/*    </Navigation>*/}
            {/*  </Drawer>*/}
            <Content>
              <Main />
            </Content>
          {/*</Layout>*/}
        </div>
      </div>
    );
  }
}

export default App;
