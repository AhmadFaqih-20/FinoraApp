import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => { 
        if (fullName.trim() === "" && email.trim() === "" && password.trim() === "") {
        } {
            alert("Nama, Email, Password tidak boleh kosong!");
            return;
        } 
        
        setFullName("");
        setEmail("");
        setPassword("");
        
        alert("Berhasil membuat akun!");
        router.push("/home");
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarWrapper}>
                    <View style={styles.avatarContainer}>

                        <Image
                            source={require("../../assets/images/SignUp.png")}
                            style={{ width: 90, height: 90 }}
                        />
                    </View>
                    <View style={styles.plusBadged}>
                        <Text style={styles.plusText}>+</Text>
                    </View>
                </View>

                <Text style={styles.title}>Create Account</Text>
                <Text style={style2.subtitle}>
                    {" "}
                    Sign Up to get started with your dashboard</Text>
            </View>

            <View style={styles.signUpForm}>
                <View style={styles.inputWrapper}>
                    <Text> FullName</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                        onChangeText={() => {setFullName}}
                        onFocus={() => { }}
                        
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text> Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        onChangeText={() => {setEmail}}
                        onFocus={() => { }}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text> Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Create a password"
                        onChangeText={() => {setPassword}}
                        onFocus={() => { }}
                    />
                </View>
            </View>

            {/* <View style={styles.signUpForm}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput style={styles.input} placeholder='Enter your name' />

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder='Enter your email' />

                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder='Create a password' />
            </View> */}

            <Pressable
                // onPress={()=> {router.push("/register")}}
                onPress={handleSignUp}
                style={styles.signUpButton}>
                <Text style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 16,
                }}
                >
                    Create Account</Text>
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
                    Already have an account ?
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
        width: 90,
        height: 90,
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

    signUpButton: {
        backgroundColor: "#6d63ff",
        paddingVertical: 18,
        paddingHorizontal: 18,
        borderRadius: 9999,
        width: "100%",
        marginTop: 15,
        textAlign: "center",
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
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        marginTop: 20,
    },

    loginButton: {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        borderWidth: 1,
        borderColor: "#e5e5e5",
        textAlign: "center",
        paddingVertical: 18,
        paddingHorizontal: 18,
        borderRadius: 9999,
        width: 50,
        height: 50,
    },

    footer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 20,
    },

    plusBadged: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 30,
        height: 30,
        borderRadius: 90,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6d63ff",
    },

    plusText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },

    avatarWrapper: {
        position: "relative",
        width: 90,
        height: 90,
    },

    signUpForm: {
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
    },

});


export default register