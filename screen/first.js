import React, {Component} from 'react';
import {TouchableHighlight, View, Text, Image, StatusBar} from 'react-native';

export default class First extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fffde8',
              flexDirection: 'column',
            }}>
            <View style={{paddingTop: 50, paddingBottom: 20}}>
              <Image
                style={{width: 200, height: 100}}
                source={require('../assets/homeLogo.jpeg')}
              />
            </View>
            <View style={{fontWeight: 'bold'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                Sign in to your account
              </Text>
            </View>
            <View style={{paddingTop: 5, marginLeft: -60}}>
              <Text style={{paddingTop: 5}}>View your wishlist</Text>
              <Text style={{paddingTop: 5}}>
                Find and reorder past purchases
              </Text>
              <Text style={{paddingTop: 5}}>Track your purchases</Text>
            </View>

            <View style={{marginTop: 20, width: '90%'}}>
              <TouchableHighlight
                style={{
                  backgroundColor: '#efeeda',
                  paddingVertical: 9,
                  borderRadius: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#dfdecb',
                }}
                underlayColor="#f4d67a"
                onPress={() =>
                  this.props.navigation.navigate('Hello. Sign In')
                }>
                <Text> Already a customer? SignIn </Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: 5, width: '90%'}}>
              <TouchableHighlight
                style={{
                  paddingVertical: 9,
                  backgroundColor: '#efeeda',
                  borderRadius: 1,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#dfdecb',
                }}
                underlayColor="#f4d67a"
                onPress={() => this.props.navigation.navigate('createaccount')}>
                <Text> New to amazon.in? Create an account </Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: 5, width: '90%'}}>
              <TouchableHighlight
                style={{
                  backgroundColor: '#efeeda',
                  paddingVertical: 9,
                  borderRadius: 1,
                  borderWidth: 1,
                  borderColor: '#dfdecb',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                underlayColor="#f4d67a"
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text> Skip SignIn ?</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </>
    );
  }
}
