import React, { Component } from 'react';
import LineChart from './LineChart';

class LineCharts extends Component{
    render(){
        return (<LineChart data={data} width={width} height={height} />)
    }
}

const width = 500, height = 350, margin = 20
  const data = [
    {a: 1, b: 3},
    {a: 2, b: 4},
    {a: 3, b: 8.5},
    {a: 4, b: 8.7},
    {a: 5, b: 9} ]

export default LineCharts;