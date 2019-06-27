import React  from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

import * as d3 from 'd3';

export class BarChart extends React.Component {
    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
     }

     componentDidMount() {
        this.createBarChart()
     }

     componentDidUpdate() {
        this.createBarChart()
     }

    createBarChart() {
        const node = this.node
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]])

    select(node)
        .selectAll('rect')
        .data(this.props.data)
        .enter()
        .append('rect')
    
    select(node)
        .selectAll('rect')
        .data(this.props.data)
        .exit()
        .remove()

    /*select(node)
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );*/
    
    select(node)
        .selectAll('rect')
        .data(this.props.data)
        .style('fill', '#fe9922')
        .attr('x', (d,i) => i * 25)
        .attr('y', d => this.props.size[1] - yScale(d))
        .attr('height', d => yScale(d))
        .attr('width', 25)
    }
    render() {
        return (
        <svg ref={node => this.node = node}
            width={500} height={500}>
        </svg>)
    }
}


/*
Because we’re importing D3 functions from modules, they don’t have the d3. prefix, 
instead they’re the imported function like scaleLinear.

In the constructor, you need to bind the component as the context to any new internal functions 
if you want access to this.props or this.state in that function (this doesn’t need to be done 
for any existing lifecycle functions) .

By executing this.createBarChart in componentDidMount and componentDidUpdate, whenever the 
component first mounts or receives new props/state fire the bar chart function.

this.node is set in the ref property of the svg element and acts as a reference to the actual 
DOM node generated by React, so you can hand that DOM node over to your D3 functionality.

size and data are passed down as props to the component, so you access them with this.props.size and 
this.props.data to your D3 code.

Render is just returning an SVG element waiting for your D3 code. Below we’ll see how to use React to 
generate the entire chart.
*/