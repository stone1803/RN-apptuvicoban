import React from "react";
import { StyleSheet, Text, View, Image,KeyboardAvoidingView} from "react-native";

import firebase from "../../Redux/Firebase/config";

// Initialize Firebase

import { TextInput, Button } from "react-native-paper";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
      uid: "",
      token: {}
    };
  }
  componentDidMount() {
    var currentUser;
    var that = this;
    listener = firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        currentUser = user;

        that.registerForPushNotificationsAsync();
      }

      listener();
    });
  }
  registerForPushNotificationsAsync = async () => {
    const { existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token)
    // POST the token to our backend so we can use it to send pushes from there
    var updates = {};
    updates["/expoToken"] = token;
    this.setState({
      token: updates
    });
    // let cityRef = db.collection('user').doc(this.state.uid);

    // await firebase.firestore().cityRef.update(updates)
    //call the push notification
  };

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          return firebase
            .firestore()
            .collection("user")
            .doc(res.user.uid)
            .set({
              fullName: this.state.fullName,
              email: this.state.email,
              createAc: Date.now(),
              uid: res.user.uid,
              token: this.state.token
            });
        })
 
      alert("Đăng ký thành công");
    } catch (error) {
      console.log(error.toString());
      alert(error.toString());
    }
  };

loginUser = (email, password) => {
  let {navigation}= this.props;
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log(user);
          alert("Đăng nhập thành công");

        });
    } catch (error) {
      console.log(error.toString());
    }
    navigation.goBack()

  };

  render() {
    return (
<KeyboardAvoidingView style={styles.container} behavior="position" >

      <View style={styles.container}>
        <Image
          style={{
            width: 100,
            height: 100,
            marginBottom: 5,
            marginTop: 20,
            alignSelf: "center"
          }}
          source={{
            uri:
              "https://firebasestorage.googleapis.com/v0/b/apphuyendo.appspot.com/o/logohuyendo.png?alt=media&token=ee06f5dc-ddf0-4a79-b661-0335a67eb4c2"
          }}
        />
        <View style={styles.Input}>

          <TextInput
            label="Họ Tên Bạn"
            value={this.state.text}
            onChangeText={fullName => this.setState({ fullName })}
          />

        </View>
        <View style={styles.Input}>
          <TextInput
            label="Địa chỉ email"
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.Input}>
          <TextInput
            label="Mật khẩu"
            value={this.state.text}
            onChangeText={password => this.setState({ password })}
          />

        </View>
        <View>
          <Button
            icon="account-arrow-left"
            mode="contained"
            style={styles.Button}
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          >
            Đăng Nhập
          </Button>
          <Button
            icon="onepassword"
            mode="contained"
            style={styles.Button}
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          >
            Đăng Ký
          </Button>
          <Text style={styles.Text}>
            SAO KHI ĐĂNG KÝ XONG BẠN VUI LÒNG ĐĂNG NHẬP NHÉ . THANK.
          </Text>
        </View>
      </View>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  Button: {
    marginTop: 10,
    backgroundColor: "#2191ed",
    width: 300,
    alignSelf: "center"
  },
  Input: {
    marginTop: 10,
    marginBottom: 10,
    width: 400,
    alignSelf: "center"
  },
  Text: {
    marginTop: 10,
    color: "gray",
    width: 400,
    alignSelf: "center",
    textAlign: "center"
  }
});
