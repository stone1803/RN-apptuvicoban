import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Dimensions } from "react-native";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import {Header} from "react-native-elements"
import SafeAreaView from "react-native-safe-area-view";
import {
  Card,
  Searchbar,  
  Avatar,
  Button,
  Title,
  Paragraph
} from "react-native-paper";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class Home extends Component {
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
  // Render Footer
  renderFooter = () => {
    try {
      // Check If Loading
      if (this.state.loading) {
        return <ActivityIndicator />;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: 10
        }}
      />
    );
  };

  renderItem1 = ({ item }) => {
    let {navigation}= this.props

    return (
      <TouchableOpacity
      title="Go to Details"
      onPress={() => navigation.navigate('Details',{item})}

      >
        <View style={style.Card}>
          <Card>
            <Card.Content>
              <Title style={{ padding: 3 }}>{item.tittle}</Title>
            </Card.Content>
            <Card.Cover source={{ uri: item.pic }} />
            <Paragraph style={{ padding: 3, marginLeft: 3 }}>
              {item.des}
            </Paragraph>

            <Card.Actions>
              <Button>Xem chi tiết</Button>
            </Card.Actions>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
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
        <View style={style.Home}>
          <View style={style.Header}>
            <Image
              style={{ width: 50, height: 50, marginTop: 5 }}
              source={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/apphuyendo.appspot.com/o/logohuyendo.png?alt=media&token=ee06f5dc-ddf0-4a79-b661-0335a67eb4c2"
              }}
            />
            <Text style={{ color: "gray" }}>Tử Vi Cơ Bản</Text>
          </View>
          <View style={style.Content}>
            <Searchbar
              style={{ marginTop: 5 }}
              placeholder="Search"
              // onChangeText={query => { this.setState({ firstQuery: query }); }}
              // value={firstQuery}
            />
            <FlatList
              data={this.props.tuvi}
              renderItem={this.renderItem1}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorComponent}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={this.renderFooter}
              onEndReachedThreshold={0}
              onEndReached={this.cong}
            />
            <Button onPress={() => this.cong(1)}>Xem chi tiết</Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

cong = (a = 1) => {
  console.log("phuc");
};
export default compose(
  firestoreConnect(props => [{ collection: "tuvi", limit: 100 }]),
  connect((state, props) => ({
    tuvi: state.firestoreReducer.ordered.tuvi
  }))
)(Home);

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
