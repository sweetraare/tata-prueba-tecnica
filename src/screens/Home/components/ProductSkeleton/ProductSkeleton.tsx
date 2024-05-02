import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

function ProductSkeleton(): React.JSX.Element {
  const sv = useSharedValue(0);

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(1, {
        duration: 500,
      }),
      -1,
    );
  }, []);
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      sv.value,
      [0, 1],
      [
        "lightgray",
        "darkgray",
      ],
      "RGB",
      { gamma: 2.2 },
    ),
  }));

  return <Animated.View style={[styles.container, animatedStyle]}>
  </Animated.View>;
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default ProductSkeleton;
