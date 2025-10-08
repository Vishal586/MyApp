import React from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";

export default function WelcomePage() {
    return (
        <></>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8fafc", // similar to gray-50
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    content: {
        alignItems: "center",
        maxWidth: 400,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "linear-gradient(90deg, #2563eb, #4f46e5)", // gradient replacement
        color: "#2563eb", // fallback since RN Text can't render gradient directly
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
        color: "#6b7280", // muted foreground
        marginTop: 8,
    },
});