import React from "react";
import styles from "./App.module.scss";
import { Content, Layout, Header } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div>
          <Layout>
            <Header className={styles.header} title=" ">
              <Navigation />
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
