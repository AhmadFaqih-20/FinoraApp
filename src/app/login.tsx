import { View, Text, Pressable, Image, TextInput, StyleSheet, Alert} from 'react-native';
import { useState } from 'react';
import { router } from "expo-router";
import { loginUser } from '../database/users/users';

const loginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        const trimnedEmail = email.trim();
      
        if (!trimnedEmail || password.trim()) {
            Alert.alert("Missing Fields", "Please fill in all fields.");
        }

        setLoading(true);
        try {
            const user = await loginUser(trimnedEmail, password);

            if(!user) {
              Alert.alert(
                "Login Failed",
                "Invalid email or password, Please try again.",
              );
              return;
            }

            setEmail("");
            setPassword("");
            router.push("/home");
        } catch (error) {
            console.error("Login error:", error);
            Alert.alert(
              "Error",
              "An unexpected error occurred while logging in. Please try again",
            );
        } finally {
            setLoading(false);
        }
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

      <View style={styles.signInForm}>
        <View style={styles.inputWrapper}>
          <Text> Email</Text>
          <TextInput
            style={styles.input}
            // value= {email}
            placeholder="Enter your email"
            onChangeText={setEmail}
            keyboardType="email-address"
            onFocus={() => { }}
            onBlur={() => {}}

          />
        </View>
        <View style={styles.inputWrapper}>
          <Text> Password</Text>
          <TextInput
            style={styles.input}
            // value={password}
            placeholder="Enter your password"
            onChangeText={setPassword}
            secureTextEntry
            onFocus={() => { }}
            onBlur={() => {}}
          />
        </View>
      </View>

      <View style={styles.formWrapper}>
        <Pressable onPress={toggleActivity}>
          <Text style={{
            opacity: 1,
          }}>{activity.completed ? "☑" : "☐"} Remember me
          </Text>
        </Pressable>
        <Text>Forget Password ?</Text>
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
        <Pressable onPress={() => { router.push("/register") }}>
          <Text style={{
            color: "#6d63ff"
          }}
          >
            Sign Up
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
    display: "flex",
  },

  formWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },

  signInForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    marginTop: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    paddingTop: 20,
  },

  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "100%",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#3333337d",
    paddingHorizontal: 13,
    paddingVertical: 18,
    borderRadius: 15,
    color: "#000000",
  },

});

export default login