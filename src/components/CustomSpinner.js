import * as React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";

const CustomSpinner = (props) => {
  const { loading, ...attributes } = props;

  return (
    <Spinner
      visible={loading}
      customIndicator={
        <ActivityIndicator
          animating={true}
          size="large"
          color={Colors.red800}
        />
      }
    />
  );
};

export default CustomSpinner;
