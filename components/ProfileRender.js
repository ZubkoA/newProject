import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/colors";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const ProfileRender = ({ post }) => {
  const navigation = useNavigation();

  function mapHandler() {
    navigation.navigate("Mapscreen", {
      geoLocation: post.location,
    });
  }
  function messageHandler() {
    navigation.navigate("CommentsScreen", {
      pickedUri: post.img,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: post.img }} style={styles.img} />
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.iconContainer}>
        <View>
          <Pressable onPress={messageHandler} style={styles.wrap}>
            <MaterialCommunityIcons
              name="message-reply"
              size={24}
              color={Colors.primary500}
            />
            <Text style={styles.text}>0</Text>
          </Pressable>

          {/* <AntDesign name="like2" size={24} color={Colors.primary500} />
          <Text style={styles.text}>{post.like}</Text> */}
        </View>
        <View>
          <Pressable style={styles.wrapLocation} onPress={mapHandler}>
            <SimpleLineIcons
              name="location-pin"
              size={24}
              color={Colors.second700}
            />
            <Text style={styles.text}>{post.locationTitle}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileRender;

const styles = StyleSheet.create({
  container: {
    marginBottom: 34,
  },
  imgContainer: {
    marginBottom: 8,
  },
  img: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0.3,
    color: Colors.textMain,
    marginBottom: 8,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 16,
    height: 24,
    justifyContent: "space-between",
  },
  wrap: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  wrapLocation: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  text: {
    fontFamily: "roboto-medium",
    fontSize: 16,
    lineHeight: 19,
    color: Colors.textMain,
  },
});
