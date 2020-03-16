import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Card } from "react-native-elements";

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

export default class TeamMemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
        <FlatList
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              title={null}
              image={{ url: "http://via.placeholder.com/160x160" }}
              containerStyle={{ padding: 0, width: 160 }}
            >
              <Text style={{ marginBottom: 10 }}>
                hello
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    );
  }
}