import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import moment from 'moment';
import faker from 'faker';
import { transform } from './helpers';

export default class App extends Component {
  state = {
    transactions: []
  };
  componentDidMount() {
    const fromDate = moment().subtract(1, 'months').startOf('month');
    const toDate = moment().endOf('month');
    let fakeData = { transactions: [] };
    const randomTransactionTypes = ["DD", "SO", "BP", "DEB", "FPI", "FPO", "FEE", "TFR", "CPT", "MPO"];
    const randomMerchants = [];
    const randomAmounts = [];
    for (let i = 0; i < 25; i++) {
      randomMerchants[i] = faker.company.companyName();
      randomAmounts[i] = faker.commerce.price();
    }
    const randomPaymentTypes = ['money_in', 'money_out'];
    const randomize = arr => arr[Math.floor(Math.random() * arr.length)];

    for (let i = 0; i < 2000; i++) {
      fakeData.transactions.push({
        "date": faker.date.between(moment(fromDate, 'DD-MM-YYYY'), moment(toDate, 'DD-MM-YYYY')),
        "description": randomize(randomMerchants),
        "payment_type": randomize(randomTransactionTypes),
        [randomize(randomPaymentTypes)]: randomize(randomAmounts),
        "balance": faker.commerce.price(),
      });
    }
    this.setState({
      transactions: fakeData.transactions,
    });
  }
  buttonList(a){
    return(<TouchableOpacity onPress={this.handlPress}>
      <Text style={{ border: {a}, padding: 10, textAlign:'center', color: 'black', fontSize: 24 }}>Click Me!</Text>
      </TouchableOpacity>);
  }
  render() {
    if (!this.state.transactions.length) return null;
    const transformedData = transform(this.state.transactions);
    return (
      // <Button title="Learn More" color="black" />
      // <ScrollView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //   {transformedData.map(transaction => <Text>{transaction.keyword}</Text>)}
      // </ScrollView>
      <View>{this.buttonList('#000000')}</View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  }
})