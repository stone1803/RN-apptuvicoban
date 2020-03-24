import React, { Component } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import HTML from "react-native-render-html";

export default class TuviDetail extends Component {
  render() {
    let { item } = this.props.route.params;
    return (
      <ScrollView>
        <View>
          <HTML
            html={item.content}
            imagesMaxWidth={Dimensions.get("window").width}
          />
        </View>
      </ScrollView>
    );
  }
}
