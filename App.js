import {Component} from 'react';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Right,
  Lists,
  ListItem,
} from 'native-base';
import createaccount from './screen/createaccount';
import HomeScreen from './screen/HomeScreen';
import First from './screen/first';
import {NavBarCustom} from './screen/NavBarCustom';
import SignIn from './screen/SignIn';
import Shop_by_Category from './screen/Shop_by_Category';
import Your_Orders from './screen/Your_Orders';
import Buy_Again from './screen/Buy_Again';
import Your_Wish_List from './screen/Your_Wish_List';
import Your_Account from './screen/Your_Account';
import Amazon_Pay from './screen/Amazon_Pay';
import Try_Prime from './screen/Try_Prime';
import Sell_on_Amazon from './screen/Sell_on_Amazon';
import Programs_and_features from './screen/Programs_and_features';
import Fun_Zone from './screen/Fun_Zone';
import Language from './screen/Language';
import Notifications from './screen/Notifications';
import Settings from './screen/Settings';
import Customer_Service from './screen/Customer_Service';
const Drawer = createDrawerNavigator();
export default class app extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <NavBarCustom {...props} />}>
          <Drawer.Screen name="First" component={First} />
          <Drawer.Screen name="Hello. Sign In" component={SignIn} />
          <Drawer.Screen name="createaccount" component={createaccount} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Shop by Category" component={Shop_by_Category} />
          <Drawer.Screen name="Your Orders" component={Your_Orders} />
          <Drawer.Screen name="Buy Again" component={Buy_Again} />
          <Drawer.Screen name="Your Wish List" component={Your_Wish_List} />
          <Drawer.Screen name="Your Account" component={Your_Account} />
          <Drawer.Screen name="Amazon Pay" component={Amazon_Pay} />
          <Drawer.Screen name="Try Prime" component={Try_Prime} />
          <Drawer.Screen name="Sell on Amazon" component={Sell_on_Amazon} />
          <Drawer.Screen
            name="Programs and features"
            component={Programs_and_features}
          />
          <Drawer.Screen name="Fun Zone" component={Fun_Zone} />
          <Drawer.Screen name="Language A/क" component={Language} />
          <Drawer.Screen name="Your Notifications" component={Notifications} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Customer Service" component={Customer_Service} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
