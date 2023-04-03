import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  BackGroundPhoto: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  containerLogin: {
    paddingTop: 32,
    paddingBottom: 111,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
  },
  containerRegistration: {
    paddingTop: 92,
    paddingBottom: 45,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
  },
  title: {
    fontFamily: "Roboto-Medium",
    // fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 33,
    color: "#212121",
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  lastInput: {
    marginBottom: 43,
  },

  buttonMain: {
    height: 50,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
    marginBottom: 16,
  },
  buttonMainText: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 30,
    color: "#1B4371",
  },
  showPassLogin: {
    position: "absolute",
    top: 16,
    right: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  photoPlaceholder: {
    position: "absolute",
    transform: [{ translateX: -50 }, { translateY: -60 }],
    left: "50%",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  photoAdd: {
    position: "absolute",
    width: 25,
    height: 25,
    top: 81,
    left:107,
  },
});

export default styles;