import React, { Component } from "react";
import { View, Text, Image, SafeAreaView, StyleSheet, Dimensions, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Card, ListItem, Button, Icon,Header} from "react-native-elements";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
const myProjectsReduxName = "myProjects";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      search: "",
      dataFireBase: "",
      fetching_from_server: false,
      limit: 10
    };
    this.offset = 1;
  }
  componentDidMount() {
    let { tuvi } = this.props;
    this.setState({
      dataFireBase: tuvi
    });
  }


  render() {
    if (this.props.lasomau) {
      let { navigation } = this.props

      return (
        <SafeAreaView style={[style.container, { backgroundColor: "#a1ccf7" }]}>
<Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content" // or directly
  centerComponent={{ text: 'VẠN SỰ TUỲ DUYÊN', style: { color: '#fff' } }}
  containerStyle={{
    backgroundColor: '#3D6DCC',
    justifyContent: 'space-around',
  }}
/>
          <View>
            <ScrollView>

              {
                this.props.lasomau.map((item, i) => {
                  return (

                    <TouchableOpacity key={i}
                      title="Go to Details"
                      onPress={() => navigation.navigate('Lá Số Chi Tiết', { item })}

                    >
                      <Card >
                        <View style={{ flexDirection: "row", margin: 5 }}>
                          <Image
                            style={{ width: 80, height: 80 }}
                            resizeMode="cover"
                            source={{ uri: item.pic }}
                          />
                          <View style={{ flex: 1, margin: 5 }}>
                            <Text style={{ marginLeft: 5 }}>{item.tittle}</Text>
                            <Text style={{ marginLeft: 5, marginTop: 3 }} >{item.des}</Text>

                          </View>

                        </View>
                      </Card>
                    </TouchableOpacity>
                  );
                })
              }
            </ScrollView>

          </View>

        </SafeAreaView>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

cong = (a = 1) => {
  console.log("phuc");
};
export default compose(
  firestoreConnect(props => [{ collection: "lasomau", limit: 100 }]),
  connect((state, props) => ({
    lasomau: state.firestoreReducer.ordered.lasomau
  }))
)(New);

// setup css
const style = StyleSheet.create({
  container: { flex: 1 },

  Home: {
    margin: 5,
    flex: 1
  },
  Header: {
    justifyContent: "center",
    alignItems: "center"
  },
  Content: {
    justifyContent: "center",
    alignItems: "center"
  },
  Card: {
    width: windowWidth / 1.1,
    marginTop: 5,
    padding: 2
  },
  Logo: {}
});
