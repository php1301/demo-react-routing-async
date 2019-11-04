import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import ListMovies from './pages/ListMovies';
import NavBar from './component/NavBar';
import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./template/HomeTemplate"
import AdminTemplate from './template/AdminTemplate';
import Admin from './Admin/Admin';
function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate exact={item.exact} path={item.path} Component={item.component} />
        )
      })
    }
  }
  const showMenuAdmin = (routes) =>{
    if (routes && routes.length > 0){
      return routes.map((item, index) =>{
        return (
          <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
        )
      })
    }
  }
  return (
    <div>
      <BrowserRouter> 
        <Switch>
          {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/list-movie" component={ListMovies} /> */}
      <Route exact path = "/admin" component={Admin}/>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
