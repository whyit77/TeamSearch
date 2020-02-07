// npm install @cawfree/react-native-heat-map
import HeatMap from "react-native-heat-map";

export default () => (
  <HeatMap
    pointerEvents="box-only"
    style={{
      flex: 1
    }}
    data={[
      [
        100, // x
        100, // y
        20 // intensity
      ]
    ]}
  />
);
