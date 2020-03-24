import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions, Button } from "react-native";
import HTML from "react-native-render-html";

export default class NewDetail extends Component {
  render() {
    let { navigation } = this.props;

    let { item } = this.props.route.params;
    console.log(item);
    return (
      <ScrollView>
        <Button
          title="Về Lá Số Mẫu"
          onPress={() => navigation.navigate("Lá Số")}
        />

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
