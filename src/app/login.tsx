import { View, Text, Pressable, Image, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { router } from "expo-router";

const login = () => {
  const [activity, setActivity] = useState({ completed: false });

  const handleSignIn = () => { router.push("/home") };
  const toggleActivity = () => {
    setActivity({ completed: !activity.completed });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>

          <Image
            source={require("../../assets/images/shieldCheck.png")}
            style={{ width: 120, height: 120 }}
          />
        </View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={style2.subtitle}>
          {" "}
          Log in to your account to continue</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder='Enter your email' />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder='Enter your password' />
      </View>

      <View style={styles.form}>
        <Pressable onPress={toggleActivity}>
          <Text>{activity.completed ? "☑" : "☐"} <Text style={{
            opacity: 0.5,
          }}>Remember me</Text>
            Forget Password ?
          </Text>
        </Pressable>
      </View>

      <Pressable
        // onPress={()=> {router.push("/register")}}
        onPress={handleSignIn}
        style={styles.startButton}>
        <Text style={{
          textAlign: "center",
          color: "white",
          fontSize: 16,
        }}
        >
          Sign In</Text>
      </Pressable>

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
        </Pressable>
        <Pressable style={styles.loginButton}>
          <Image source={require("../../assets/images/apple-icon.png")}
            style={{
              width: 24,
              height: 24,
            }} />
        </Pressable>
        <Pressable style={styles.loginButton}>
          <Image source={require("../../assets/images/facebook-logo.png")}
            style={{
              width: 24,
              height: 24,
            }} />
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={{
          opacity: 0.5,
        }}
        >
          Don't have an account ?
        </Text>
        <Pressable onPress={() => { router.push("/login") }}>
          <Text style={{
            color: "#6d63ff"
          }}
          >
            Sign In
          </Text>
        </Pressable>

      </View>

    </View>

  )
}

const style2 = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    opacity: 0.5,
    paddingHorizontal: 5,
    // marginHorizontal: 10,
    textAlign: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 40,
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
    width: 120,
    height: 120,
    borderRadius: 9999,
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
    marginTop: 30,
    width: "100%",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
    opacity: 0.2,
  },

  loginButtonContainer: {
    width: 62,
    height: 62,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 22,
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
    height: "100%",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 20,
  },

  form: {
    width: "100%",
    marginTop: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    paddingTop: 20,
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    opacity: 0.5,
  }

});

export default login