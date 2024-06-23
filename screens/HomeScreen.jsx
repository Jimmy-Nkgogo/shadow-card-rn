import { View } from "react-native";
import ImageCard from "shadow-card-rn";

const HomeScreen = () => {
  return (
    <View>
        <ImageCard
          title="Pizza"
          image={require("../assets/icon.png")} // add the image 
          location="Detail" // this is the name of the screen you want to navigate to
        />
    </View>
  );
};

export default HomeScreen;