import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Colors } from 'react-native-paper';

import thunk from "redux-thunk";

import { Provider, useSelector } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootRecuder from "./Redux/Recuder/rootRecuder";
import firebase from "./Redux/Firebase/config";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
import {
  getFirebase,
  ReactReduxFirebaseProvider,
  isLoaded
} from "react-redux-firebase";
import {decode, encode} from 'base-64'

if (!global.btoa) {
global.btoa = encode;
}

if (!global.atob) {
global.atob = decode;
}
const middleWare = [thunk.withExtraArgument({ getFirestore, getFirebase })];
const store = createStore(
  rootRecuder,
  compose(applyMiddleware(...middleWare), reduxFirestore(firebase))
);
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebaseReducer.auth);
  if (!isLoaded(auth))
    return (
      <View style={styles.container}>
          <ActivityIndicator animating={true} color={Colors.blue400} />

        <Text>
          Hãy cảm ơn những lúc bạn gặp khó khăn, bởi nếu không có khó khăn, bạn
          sẽ không có cơ hội để hiểu mình và trải nghiệm cuộc sống
        </Text>
      </View>
    );
  return children;
}
const rrfConfig = {
  userProfile: "user",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  //enableClaims: true // Get custom claims along with the profile
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};
import * as Permissions from 'expo-permissions';
import Tuvi from "./Tuvi";

export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
        <Tuvi />

        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
