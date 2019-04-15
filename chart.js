import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import all basic components
import PieChart from 'react-minimal-pie-chart';
// import pie to make pie chart

export default class App extends Component {
  render() {
    const chart_wh = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
 
    return (
        <PieChart
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    backgroundColor: 'white'
  },
});
