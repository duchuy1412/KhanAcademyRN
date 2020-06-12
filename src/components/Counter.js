import React from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import { acc } from "react-native-reanimated";
import * as actionCreators from "../actions";

class Counter extends React.Component {
  render() {
    return (
      <View>
        <Button onPress={this.props.onIncrement} title="INCREMENT" />
        <Text>{this.props.acc.count}</Text>
        <Button onPress={this.props.onDecrement} title="DECREMENT" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    acc: state.account,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actionCreators.increase()),
    onDecrement: () => dispatch(actionCreators.decrease()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
