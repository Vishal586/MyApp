import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
// import Index from "../pages/Index"; // Removed for clarity
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Wrapper View to hold Login and Sign Up pages adjacently */}
            <View style={styles.authContainer}>
                <LoginPage />
                <SignUpPage />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    // New style to arrange login/signup pages horizontally
    authContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },
    root: {
        // This style might need to be adjusted in the LoginPage/SignUpPage components
        // to fit the new horizontal layout. e.g., by reducing width.
        width: "100%", // This will now be 100% of its parent in the row
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 20,
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        color: "#444",
    },
});