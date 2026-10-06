  import { Image, Pressable, View, StyleSheet, Text } from "react-native";
  import { useSafeAreaInsets } from "react-native-safe-area-context";
  import {router} from "expo-router";

  export default function Index() {
    const insets = useSafeAreaInsets();

    const handleGetStarted = () => {router.push("/register")};
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>

            <Image
              source={require("../../assets/images/Landing.png")}
              style={{ width: 180, height: 180 }}
            />
          </View>
          <Text style={styles.title}>Welcome to Finora</Text>
          <Text style={style2.subtitle}>
            {" "}
            Explore a modern experience build for speed and simplicity</Text>
          <Pressable 
          // onPress={()=> {router.push("/register")}}
          onPress={handleGetStarted}
          style={styles.startButton}>
            <Text style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
            }}
            >
              Get Started</Text>
          </Pressable>
        </View>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text>Or</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.loginButtonContainer}>
          <Pressable style={styles.loginButton}>
            <Image source={require("../../assets/images/google-icon.png")}
              style={{
                width: 24,
                height: 24,
              }} />
            <Text>Continue with Google</Text>
          </Pressable>
          <Pressable style={styles.loginButton}>
            <Image source={require("../../assets/images/apple-icon.png")}
              style={{
                width: 24,
                height: 24,
              }} />
            <Text>Continue with Apple</Text>
          </Pressable>
          <Pressable style={styles.loginButton}>
            <Image source={require("../../assets/images/facebook-logo.png")}
              style={{
                width: 24,
                height: 24,
              }} />
            <Text>Continue with Facebook</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={{
            opacity: 0.5,
          }}
          >
            Already have an account ?
          </Text>
          <Pressable onPress={() => {router.push("/login")}}>
            <Text style={{
              color: "#6d63ff"
            }}
            >
              Sign In
            </Text>
          </Pressable>

        </View>

      </View>
    );
  }

  const style2 = StyleSheet.create({
    subtitle: {
      fontSize: 20,
      opacity: 0.5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      textAlign: "center",
    },
  });

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingTop: 50,
      backgroundColor: "white",
      height: "100%",
    },

    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      width: "100%",
    },

    avatarContainer: {
      width: 180,
      height: 180,
      borderRadius: 9999,
      backgroundColor: "#f3f3f3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      paddingTop: 20,
    },

    title: {
      fontSize: 42,
      fontWeight: "bold",
    },

    startButton: {
      backgroundColor: "#6d63ff",
      paddingVertical: 18,
      paddingHorizontal: 18,
      borderRadius: 9999,
      width: "100%",
      marginTop: 20,
    },

    divider: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      marginTop: 20,
      width: "100%",
    },

    line: {
      flex: 1,
      height: 1,
      backgroundColor: "black",
      opacity: 0.2,
    },

    loginButtonContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: 12,
      marginTop: 20,
    },

    loginButton: {
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      borderWidth: 1,
      borderColor: "#e5e5e5",
      textAlign: "center",
      paddingVertical: 18,
      paddingHorizontal: 18,
      borderRadius: 9999,
      width: "100%",
    },

    footer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      marginTop: 20,
    }

  });
