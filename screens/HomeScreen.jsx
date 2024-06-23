import { StyleSheet, Text, View } from "react-native";
import ImageComponent from "shadow-card-rn";

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <ImageComponent
          title="Pizza"
          image={require("../assets/icon.png")}
          location="Detail"
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
