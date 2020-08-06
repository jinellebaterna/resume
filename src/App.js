import React from "react";
import styles from "./App.module.scss";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
       <BrowserRouter>
         <Header/>
         <div className={styles.content}>
           <Route exact path="/" component={Home} />
           <Route path="/projects" component={Projects} />
           <Route path="/resume" component={Resume} />
         </div>
       </BrowserRouter>
      </div>
    );
  }
}
export default App;
