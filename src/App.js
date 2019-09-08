import React from 'react';
import Navbar from './components/Navbar';
import LineCharts from './components/LineCharts';
import PieChart from './components/PieChart';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
<div className="container">
        <Navbar/>
        <Switch>
        <Route path="/line_chart" component={LineCharts}/>
        <Route path="/pie_Chart" component={PieChart}/>
        <Route path="/" component={Home} exact/>
        <Route path="/home" component={Home} />
        <Route component={PageNotFound} />
        </Switch>
      </div>
  );
}

export default App;
