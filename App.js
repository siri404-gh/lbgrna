import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Button, ButtonGroup, Header } from 'react-native-elements';
import Chart from './chart';
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

  render() {
    if (!this.state.transactions.length) return null;
    const transformedData = transform(this.state.transactions);
    return (
      <View>
        <Header
          containerStyle={{ backgroundColor: '#0a6441' }}
          centerComponent={{ text: 'Spending Insights', style: { color: '#fff', height: 30, fontSize: 20 } }} />
        <Text style={{ color: 'black', textAlign: "center", fontSize: 18, margin: 10 }}>{moment().format("MMMM YYYY")} spend</Text>
        <Chart />
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              containerStyle={{ width: 100, margin: 10 }}
              buttonStyle={{ borderColor: '#78B537', borderWidth: 2 }}
              title="Card debit"
              type="clear"
            />
            <Button
              containerStyle={{ width: 100, margin: 10 }}
              buttonStyle={{ borderColor: '#094C81', borderWidth: 2 }}
              title="Regular"
              type="clear"
            />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            containerStyle={{ width: 100,  margin: 10}}
            buttonStyle={{ borderColor: '#0A6441', borderWidth: 2}}
            title="Cashpoint"
            type="clear"
          />
          <Button
            containerStyle={{ width: 100, margin: 10 }}
            buttonStyle={{ borderColor: '#8B9194', borderWidth: 2 }}
            title="Other"
            type="clear"
          />
          </View>
        </View>
      </View>
    );
  }
}
