import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class PieChart extends Component{

    constructor(props){
        super(props)
        this.state={
            labels: ['Stocks', 'Bonds', 'Assets'],
            datasets:[{
                data:[2860,2000,4000],
                backgroundColor:['red','blue','green']
            }]
        }
    }
    render(){
        return (
            <div>
                <h1>Pie Chart</h1>
                <Pie 
                    data={{
                        labels:this.state.labels,
                        datasets: this.state.datasets
                    }}
                    height='50%'
                />
                <br />
            </div>
        )
    }
}

export default PieChart;