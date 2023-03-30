import {
    useState
} from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ImageBackground
} from "react-native";
import styles from "./Styles"

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ keyboardHide, isKeyboardOpen, setIsKeyboardOpen }) => {
  const [loginState, setLoginState] = useState(initialState);
  const [secureEntry, setSecureEntry] = useState(true);
  const [inFocus, setInFocus] = useState("");

  const togglePass = () => {
    setSecureEntry(!secureEntry);
  };

  const onSignIn = (e) => {
    e.preventDefault();
    console.log(loginState);
    setLoginState(initialState);
  };

  return (
    <ImageBackground
          source={require("../assets/img/BackGroundPhoto.png")}
          style={styles.BackGroundPhoto}
        >
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View
        style={{
          ...styles.containerLogin,
          marginBottom: isKeyboardOpen ? -100 : 0,
        }}
      >
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          placeholder="Email address"
          style={{
            ...styles.input,
            borderColor: inFocus === "email" ? "#ff6c00" : "#E8E8E8",
          }}
          value={loginState.email}
          onChangeText={(value) =>
            setLoginState((prev) => ({ ...prev, email: value }))
          }
          onFocus={() => {
            setIsKeyboardOpen(true);
            setInFocus("email");
          }}
          onBlur={() => {
            setIsKeyboardOpen(false);
            setInFocus("");
          }}
        />
        <View>
          <TextInput
            placeholder="Password"
            style={[
              styles.input,
              {
                ...styles.lastInput,
                marginBottom: isKeyboardOpen ? 32 : 43,
                borderColor: inFocus === "password" ? "#ff6c00" : "#E8E8E8",
              },
            ]}
            value={loginState.password}
            secureTextEntry={secureEntry}
            onChangeText={(value) =>
              setLoginState((prev) => ({ ...prev, password: value }))
            }
            onFocus={() => {
              setIsKeyboardOpen(true);
              setInFocus("password");
            }}
            onBlur={() => {
              setIsKeyboardOpen(false);
              setInFocus("");
            }}
          />
          <Text style={styles.showPassLogin} onPress={togglePass}>
            Show
          </Text>
        </View>
        {!isKeyboardOpen && (
          <>
            <TouchableOpacity style={styles.buttonMain} onPress={onSignIn}>
              <Text style={styles.buttonMainText} onPress={keyboardHide}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Create Account</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      </KeyboardAvoidingView>
      </ImageBackground>
  );
};

export default LoginScreen;