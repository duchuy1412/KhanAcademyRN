import * as React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";

const CustomSpinner = (props) => {
  const { visible } = props;

  return (
    <Spinner
      visible={visible}
      overlayColor={"rgba(0, 0, 0, 0)"}
      customIndicator={
        <ActivityIndicator
          animating={true}
          size="large"
          color={Colors.blue500}
        />
      }
    />
  );
};

export default CustomSpinner;
