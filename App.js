import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from './modules/header'
import Card from './modules/Card'

const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,LTC,USDT,BSV,BNB,EOS,XTZ&tsyms=RUB&api_key=795cc46ce79fbc10996f30199c732b450b2ebed60232992d77a0b5a8154ea918'

export default class App extends Component {
  state ={
    BTC: [],
    ETH: [],
    BCH: [],
    BSV: [],
    EOS: [],
    LTC: [],
    USDT: [],
    XRP: [],
    XTZ: [],
    loading: true,
  }

  async componentDidMount(){
  try {
    const foodApiCall = await fetch(url, {method: 'GET'});
    const crypto_list = await foodApiCall.json();
    this.setState({
      BTC: crypto_list.RAW.BTC.RUB,
      ETH: crypto_list.RAW.ETH.RUB,
      BCH: crypto_list.RAW.BCH.RUB,
      BSV: crypto_list.RAW.BSV.RUB,
      EOS: crypto_list.RAW.EOS.RUB,
      LTC: crypto_list.RAW.LTC.RUB,
      USDT: crypto_list.RAW.USDT.RUB,
      XRP: crypto_list.RAW.XRP.RUB,
      XTZ: crypto_list.RAW.XTZ.RUB,
      loading: false});
  } catch(err) {
    console.log("Error fetching data-----------", err);
  }
  }

  render(){
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <View>
            {console.log(this.state.BTC)}
            <Card info={this.state.BTC} />
            <Card info={this.state.ETH} />
            <Card info={this.state.BCH} />
            <Card info={this.state.BSV} />
            <Card info={this.state.EOS} />
            <Card info={this.state.LTC} />
            <Card info={this.state.USDT} />
            <Card info={this.state.XRP} />
            <Card info={this.state.XTZ} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
