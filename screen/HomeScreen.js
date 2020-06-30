import * as React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Card,
  Left,
  Body,
  cardBody,
  CardItem,
  Button,
  Input,
  Container,
  Content,
} from 'native-base';
import Swiper from 'react-native-swiper';

import FeatherI from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#66ccce" barStyle="dark-content" />

        <SafeAreaView>
          <ScrollView
            style={{backgroundColor: '#fff'}}
            contentInsetAdjustmentBehavior="automatic">
            <Container style={{flex: 1}}>
              <View>
                <LinearGradient
                  colors={['#84d8e3', '#a5e6d0']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}>
                  <View style={{height: 110, flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row', height: 60}}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.dispatch(
                            DrawerActions.toggleDrawer(),
                          )
                        }>
                        <FeatherI
                          name="menu"
                          size={23}
                          color="black"
                          style={{
                            marginTop: 20,
                            marginLeft: 20,
                          }}
                        />
                      </TouchableOpacity>
                      <Image
                        resizeMode="contain"
                        style={{height: 70, marginTop: 5, marginLeft: -5}}
                        source={require('../assets/logo.jpeg')}
                      />

                      <FeatherI
                        name="shopping-cart"
                        size={23}
                        color="black"
                        style={{
                          marginTop: 20,
                          marginLeft: 110,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: '#fff',
                        width: '95%',
                        height: 38,
                        margin: 10,
                        marginTop: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        paddingHorizontal: 10,
                        borderColor: '1px solid grey',
                        flexDirection: 'row',
                      }}>
                      <FeatherI name="search" size={20} color="#666666" />
                      <Input
                        style={{fontSize: 20, marginLeft: 5}}
                        placeholder="Search"
                      />
                      <Text
                        style={{
                          color: '#acacac',
                          marginRight: 6,
                          fontWeight: '400',
                          fontSize: 30,
                        }}>
                        l
                      </Text>
                      <FeatherI name="camera" size={20} color="grey" />
                    </View>
                  </View>
                </LinearGradient>
              </View>
              <Content style={{backgroundColor: '#c0d9d9'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 45,
                    backgroundColor: '#66ccce',
                    alignItems: 'center',
                  }}>
                  <FeatherI
                    name="map-pin"
                    size={21}
                    color="black"
                    style={{marginLeft: 15}}
                  />
                  <Text style={{marginLeft: 5, fontSize: 15}}>
                    Select a location to see product availability
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    height: 80,
                    width: '100%',
                    marginTop: 3,
                  }}>
                  <Image
                    style={{flex: 1, height: undefined, width: undefined}}
                    source={require('../assets/menu0.jpeg')}
                  />
                  <Image
                    style={{flex: 1, height: undefined, width: undefined}}
                    source={require('../assets/menu1.jpeg')}
                  />
                  <Image
                    style={{flex: 1, height: undefined, width: undefined}}
                    source={require('../assets/menu2.jpeg')}
                  />
                  <Image
                    style={{flex: 1, height: undefined, width: undefined}}
                    source={require('../assets/menu3.jpeg')}
                  />
                  <Image
                    style={{flex: 1, height: undefined, width: undefined}}
                    source={require('../assets/menu4.jpeg')}
                  />
                </View>
                <View
                  style={{
                    height: 150,

                    marginTop: 4,
                  }}>
                  <Swiper
                    autoplay={true}
                    showsPagination={false}
                    style={{
                      height: 170,
                    }}>
                    <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: undefined, width: undefined}}
                        source={require('../assets/swipe1.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: undefined, width: undefined}}
                        source={require('../assets/swipe2.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: undefined, width: undefined}}
                        source={require('../assets/swipe3.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: undefined, width: undefined}}
                        source={require('../assets/swipe4.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: undefined, width: undefined}}
                        source={require('../assets/swipe5.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: undefined, width: undefined}}
                        source={require('../assets/swipe6.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: undefined, width: undefined}}
                        source={require('../assets/swipe7.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: undefined, width: undefined}}
                        source={require('../assets/swipe8.jpeg')}
                      />
                    </View>
                  </Swiper>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    height: 130,
                    width: '100%',
                    marginTop: 7,
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'notoserif',
                      fontSize: 20,
                      marginLeft: 6,
                      marginTop: 5,
                    }}>
                    Sign in for the best experience
                  </Text>
                  <Button
                    onPress={() =>
                      this.props.navigation.navigate('Hello. Sign In')
                    }
                    style={{
                      backgroundColor: '#faa419',
                      alignContent: 'center',
                      justifyContent: 'center',
                      marginTop: 15,
                      marginLeft: 10,
                      marginRight: 10,
                    }}>
                    <Text style={{fontSize: 20}}>Sign In</Text>
                  </Button>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('createaccount')
                      }
                      style={{
                        marginTop: 13,
                        fontSize: 16,
                        marginLeft: 10,
                        color: '#377fbb',
                      }}>
                      Create an account
                    </Text>
                    <IonIcon
                      name="ios-arrow-forward"
                      size={13}
                      color="#377fbb"
                      style={{
                        marginTop: 15,
                        marginLeft: 218,
                      }}
                    />
                  </View>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={false}>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 125,
                      marginTop: 5,
                    }}>
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu11.jpeg')}
                    />
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu12.jpeg')}
                    />
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu13.jpeg')}
                    />
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu14.jpeg')}
                    />
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu15.jpeg')}
                    />
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu16.jpeg')}
                    />
                  </View>
                </ScrollView>

                <View style={{marginTop: -5}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: 20, marginLeft: -1}}>
                          Household essentials | Amazon Brands & more
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{padding: 8}}>
                      <Image
                        source={require('../assets/householdimg1.jpeg')}
                        style={{
                          height: 360,
                          width: null,
                          flex: 1,

                          marginBottom: 10,
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>
                <View
                  style={{
                    marginBottom: 4,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 17,
                        marginTop: 5,
                        fontWeight: '350',
                      }}>
                      Boost your device performance with computer upgrade
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box1.1.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>SSD</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box1.2.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>RAM</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 7,
                        }}
                        source={require('../assets/box1.3.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Graphics card</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box1.4.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Explore All</Text>
                    </View>
                  </View>
                </View>

                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={false}>
                  <View
                    style={{
                      flexDirection: 'column',
                      height: 190,

                      backgroundColor: '#fef3f1',
                    }}>
                    <View>
                      <Text style={{fontSize: 20, margin: 3, marginLeft: 10}}>
                        Shop from top categories
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 5,
                      }}>
                      <View
                        style={{
                          marginLeft: 10,
                          marginTop: 3,
                          flexDirection: 'column',
                          width: 110,
                        }}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu21.jpeg')}
                        />
                        <Text>Explore all offers</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: 110}}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu22.jpeg')}
                        />
                        <Text>Mobiles and accessories</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: 110}}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu23.jpeg')}
                        />
                        <Text>Electronics and accessories</Text>
                      </View>
                      <View style={{width: 110, flexDirection: 'column'}}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu24.jpeg')}
                        />
                        <Text>ACs, Furniture and more</Text>
                      </View>
                      <View style={{width: 110, flexDirection: 'column'}}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu25.jpeg')}
                        />
                        <Text>Home and Kitchen appliances</Text>
                      </View>
                      <View style={{width: 110, flexDirection: 'column'}}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu26.jpeg')}
                        />
                        <Text>Toys, baby products & more</Text>
                      </View>
                      <View style={{width: 110, flexDirection: 'column'}}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu27.jpeg')}
                        />
                        <Text>Books, gaming & more</Text>
                      </View>
                      <View style={{width: 110, flexDirection: 'column'}}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu28.jpeg')}
                        />
                        <Text>Smart TVs</Text>
                      </View>
                      <View style={{width: 110, flexDirection: 'column'}}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu29.jpeg')}
                        />
                        <Text>Watches, bags & more</Text>
                      </View>
                      <View style={{width: 110, flexDirection: 'column'}}>
                        <Image
                          style={{height: 120, width: 95}}
                          source={require('../assets/menu20.jpeg')}
                        />
                        <Text>Alexa devices & more</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
                <View
                  style={{
                    marginBottom: 4,
                    marginTop: 6,
                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 17,
                        marginTop: 5,
                        fontWeight: '350',
                      }}>
                      Home storage and organization products
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box2.1.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Laundry organization</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box2.2.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Closet organisation</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 150,
                          width: 150,
                          margin: 8,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box2.3.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Dustinbins</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box2.4.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Storage units</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', height: 45}}>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('createaccount')
                      }
                      style={{
                        marginTop: 13,
                        fontSize: 16,
                        marginLeft: 10,
                        color: '#377fbb',
                      }}>
                      See more
                    </Text>
                    <IonIcon
                      name="ios-arrow-forward"
                      size={13}
                      color="#377fbb"
                      style={{
                        marginTop: 15,
                        marginLeft: 218,
                      }}
                    />
                  </View>
                </View>

                <View style={{marginTop: -5}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: 20, marginLeft: -1}}>
                          Echo dot with Alexa | Listen to music, news & more
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{padding: 8}}>
                      <Image
                        source={require('../assets/big2.jpeg')}
                        style={{
                          height: 360,
                          width: null,
                          flex: 1,

                          marginBottom: 10,
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>
                <View
                  style={{
                    marginBottom: 5,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 17,
                        marginTop: 5,
                        fontWeight: '350',
                      }}>
                      Join Prime to enjoy benefits
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 150,
                          width: 150,
                          margin: 8,
                          marginBottom: 3,
                          marginLeft: 19,
                        }}
                        source={require('../assets/box3.1.jpeg')}
                      />
                      <Text style={{marginLeft: 19}}>Gaming with Prime</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box3.2.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Prime Video</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box3.3.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Prime Music</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box3.4.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>FREE delivery</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', height: 45}}>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('createaccount')
                      }
                      style={{
                        marginTop: 13,
                        fontSize: 16,
                        marginLeft: 10,
                        color: '#377fbb',
                      }}>
                      See more
                    </Text>
                    <IonIcon
                      name="ios-arrow-forward"
                      size={13}
                      color="#377fbb"
                      style={{
                        marginTop: 15,
                        marginLeft: 218,
                      }}
                    />
                  </View>
                </View>
                <View style={{marginTop: -5}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: 20, marginLeft: -1}}>
                          Customers' Most Loved Fashion | 4 star+ rated, 100+
                          reviews
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{padding: 8}}>
                      <Image
                        source={require('../assets/big3.jpeg')}
                        style={{
                          height: 360,
                          width: null,
                          flex: 1,

                          marginBottom: 10,
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>
                <View
                  style={{
                    marginBottom: 5,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 17,
                        marginTop: 5,
                        fontWeight: '400',
                      }}>
                      Starting
                    </Text>
                    <FontAwesomeI
                      name="rupee"
                      size={16}
                      color="black"
                      style={{marginTop: 10, marginLeft: 7}}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 2,
                        marginTop: 5,
                        fontWeight: '400',
                      }}>
                      249 | Clothing, footwear & more
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box4.1.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Women's apparel</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box4.2.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Men's apparel</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box4.3.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Shoes & handbags</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box4.4.jpeg')}
                      />
                      <Text style={{marginLeft: 8, marginLeft: -2}}>
                        Save more with coupons
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('createaccount')
                      }
                      style={{
                        marginTop: 13,
                        fontSize: 16,
                        marginLeft: 10,
                        color: '#377fbb',
                      }}>
                      See more
                    </Text>
                    <IonIcon
                      name="ios-arrow-forward"
                      size={13}
                      color="#377fbb"
                      style={{
                        marginTop: 15,
                        marginLeft: 218,
                      }}
                    />
                  </View>
                </View>
                <View style={{marginTop: -5}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: 20}}>
                          Track your way to a healthy lifestyle | Wearable
                          devices
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{padding: 8}}>
                      <Image
                        source={require('../assets/big4.jpeg')}
                        style={{
                          height: 360,
                          width: null,
                          flex: 1,

                          marginBottom: 10,
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>
                <View
                  style={{
                    marginBottom: 5,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 17,
                        marginTop: 5,
                        fontWeight: '400',
                      }}>
                      Alexa enabled devices & more
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box6.1.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Echo Dot</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box6.2.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Fire TV Stick</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box6.3.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Echo Show 5</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box6.4.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Kindle E-readers</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', height: 45}}>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('createaccount')
                      }
                      style={{
                        marginTop: 13,
                        fontSize: 16,
                        marginLeft: 10,
                        color: '#377fbb',
                      }}>
                      See more
                    </Text>
                    <IonIcon
                      name="ios-arrow-forward"
                      size={13}
                      color="#377fbb"
                      style={{
                        marginTop: 15,
                        marginLeft: 218,
                      }}
                    />
                  </View>
                </View>
                <View style={{marginTop: -5}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: 20, marginLeft: -2}}>
                          Up to 50% off| Mobile mounts, selfie sticks & more
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{padding: 8}}>
                      <Image
                        source={require('../assets/big5.jpeg')}
                        style={{
                          height: 360,
                          width: null,
                          flex: 1,

                          marginBottom: 10,
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>
                <View
                  style={{
                    marginBottom: 5,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 17,
                        marginTop: 5,
                        fontWeight: '400',
                      }}>
                      All your academics needs at one place
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box5.1.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>College textbooks</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box5.2.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Exam prep books</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 17,
                        }}
                        source={require('../assets/box5.3.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Student supplies</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: 160,
                          width: 160,
                          margin: 5,
                          marginBottom: 3,
                          marginLeft: 8,
                        }}
                        source={require('../assets/box5.4.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Student laptops</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row', height: 45}}>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('createaccount')
                      }
                      style={{
                        marginTop: 13,
                        fontSize: 16,
                        marginLeft: 10,

                        color: '#377fbb',
                      }}>
                      See more
                    </Text>
                    <IonIcon
                      name="ios-arrow-forward"
                      size={13}
                      color="#377fbb"
                      style={{
                        marginTop: 15,
                        marginLeft: 218,
                      }}
                    />
                  </View>
                </View>
              </Content>
            </Container>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
