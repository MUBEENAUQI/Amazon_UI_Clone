import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Drawer, Text} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
export function NavBarCustom(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={{flex: 1}}>
          <DrawerItem
            style={{
              backgroundColor: '#94dfd8',
              fontFamily: 'notoserif',
              fontSize: 20,
              height: 65,
              fontWeight: 'bold',
              marginLeft: -5,
              marginRight: -10,
              marginTop: -4,
            }}
            label="Hello. Sign In"
            onPress={() => {
              props.navigation.navigate('Hello. Sign In');
            }}
          />
          <DrawerItem
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            label="Shop by Category"
            onPress={() => {
              props.navigation.navigate('Shop by Category');
            }}
          />
        </Drawer.Section>
        <Drawer.Section style={{flex: 1}}>
          <DrawerItem
            label="Your Orders"
            onPress={() => {
              props.navigation.navigate('Your Orders');
            }}
          />
          <DrawerItem
            label="Buy Again"
            onPress={() => {
              props.navigation.navigate('Buy Again');
            }}
          />
          <DrawerItem
            label="Your Wish List"
            onPress={() => {
              props.navigation.navigate('Your Wish List');
            }}
          />
          <DrawerItem
            label="Your Account"
            onPress={() => {
              props.navigation.navigate('Your Account');
            }}
          />
          <DrawerItem
            label="Amazon Pay"
            onPress={() => {
              props.navigation.navigate('Amazon Pay');
            }}
          />
          <DrawerItem
            label="Try Prime"
            onPress={() => {
              props.navigation.navigate('Try Prime');
            }}
          />
          <DrawerItem
            label="Sell on Amazon"
            onPress={() => {
              props.navigation.navigate('Sell on Amazon');
            }}
          />
          <DrawerItem
            label="Programs and features           >"
            onPress={() => {
              props.navigation.navigate('Programs and features');
            }}
          />
          <DrawerItem
            label="Fun Zone"
            onPress={() => {
              props.navigation.navigate('Fun Zone');
            }}
          />
        </Drawer.Section>
        <Drawer.Section style={{flex: 1}}>
          <DrawerItem
            label="Language A/क"
            onPress={() => {
              props.navigation.navigate('Language A/क');
            }}
          />
          <DrawerItem
            label="Your Notifications"
            onPress={() => {
              props.navigation.navigate('Your Notifications');
            }}
          />
          <DrawerItem
            label="Settings                                    >"
            onPress={() => {
              props.navigation.navigate('Settings ');
            }}
          />
          <DrawerItem
            label="Customer Service"
            onPress={() => {
              props.navigation.navigate('Customer Service');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}
