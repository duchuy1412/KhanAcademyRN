import * as React from "react";
import { View } from "react-native";
import { Button, List, Divider, useTheme, Colors } from "react-native-paper";
import _l from "../../lib/i18n";
import { useSelector, useDispatch } from "react-redux";
import * as questionActions from "../../actions/questionAction";
import { useNavigation } from "@react-navigation/native";

const BottomBar = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { numberQuestion } = props;
  const indexQuestion = useSelector(
    (state) => state.questionReducer.indexCurrentQuestion
  );
  const correct = useSelector((state) => state.questionReducer.correct);
  const endPractice = useSelector((state) => state.questionReducer.endPractice);

  const dispatch = useDispatch();

  return (
    <View style={{ backgroundColor: colors.background, elevation: 10 }}>
      <Divider />
      <View
        style={{
          paddingHorizontal: 10,
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <List.Item
          left={(props) => {
            const items = [];
            for (let i = 0; i < numberQuestion; i++) {
              i < indexQuestion
                ? items.push(<RingItem key={i} correctly={true} />)
                : i == indexQuestion
                ? items.push(<RingItem key={i} currently={true} />)
                : items.push(<RingItem key={i} />);
            }

            return (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignContent: "center",
                  maxWidth: "50%",
                }}
              >
                {items}
              </View>
            );
          }}
          right={(props) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              {correct === null ? (
                <Button
                  color={colors.primary}
                  mode="contained"
                  onPress={() => {
                    dispatch(questionActions.checkAnswer());
                  }}
                >
                  {_l.t("Check")}
                </Button>
              ) : correct === false ? (
                <Button
                  color={colors.primary}
                  mode="contained"
                  onPress={() => {
                    dispatch(questionActions.tryAgain());
                  }}
                >
                  {/* {_l.t("Finish")} */}
                  Try again
                </Button>
              ) : endPractice === false ? (
                <Button
                  color={colors.primary}
                  mode="contained"
                  onPress={() => {
                    dispatch(questionActions.nextQuestion());
                  }}
                >
                  {_l.t("Next")}
                </Button>
              ) : (
                <Button
                  color={colors.primary}
                  mode="contained"
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  {_l.t("Finish")}
                </Button>
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
};

const RingItem = (props) => {
  return (
    <View
      style={[
        {
          height: 10,
          width: 10,
          margin: 2,
          borderRadius: 45,
          borderWidth: 2,
        },
        props.correctly
          ? { backgroundColor: Colors.green500, borderColor: Colors.green500 }
          : props.currently
          ? { borderColor: Colors.green500 }
          : { borderColor: Colors.grey500 },
      ]}
    />
  );
};

export default BottomBar;
