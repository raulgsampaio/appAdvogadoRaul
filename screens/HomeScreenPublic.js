import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { homePublic } from "../styles/homePublic";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreenPublic() {
  const navigation = useNavigation();

  const navLogin = () => {
    navigation.navigate("Login");
  };

  const navAccountForm = () => {
    navigation.navigate("AccountForm");
  };

  return (
    <ImageBackground
      source={require("../assets/justice-statue.png")}
      style={homePublic.container}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        style={homePublic.gradientOverlay}
        start={{ x: 0, y: 0.6 }}
        end={{ x: 0, y: 0 }}
        locations={[0.45, 0.75]}
      />
      <View style={homePublic.displayFlex2Columns}>
        <View>
          <TouchableOpacity onPress={navLogin} style={homePublic.button}>
            <Text style={homePublic.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={homePublic.linkingText} onPress={navAccountForm}>
            Cadastre-se
          </Text>
        </View>
        <View style={homePublic.displayFlex2Rows}>
          <Image
            style={homePublic.footerImg}
            source={require("../assets/leandro-silva.png")}
          />
          <Text style={homePublic.footerText}>LEANDRO SILVA</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
