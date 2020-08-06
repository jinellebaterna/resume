import React from "react";
import styles from "./App.module.scss";
import { Content, Layout } from "react-mdl";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
          <Layout>
            <Header/>
              <Navigation />
            <Content>
              <Main/>
            </Content>
          </Layout>
      </div>
    );
  }
}
export default App;
