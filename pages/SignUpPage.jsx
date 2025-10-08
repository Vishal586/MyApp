import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpPage() {
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.card}>
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={24} color="#9CA3AF" />
                    </TouchableOpacity>

                    {/* Header */}
                    <View style={styles.header}>
                        <View style={styles.logoContainer}>
                            <Ionicons name="cube" size={40} color="#A78BFA" />
                        </View>
                        <Text style={styles.title}>Create an Account</Text>
                        <Text style={styles.subtitle}>Enter your details to get started</Text>
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Username</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Your username"
                                placeholderTextColor="#6B7280"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="m@example.com"
                                placeholderTextColor="#6B7280"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="••••••••"
                                placeholderTextColor="#6B7280"
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity style={styles.signUpButton}>
                            <Text style={styles.signUpButtonText}>Sign Up</Text>
                        </TouchableOpacity>

                        {/* Login Link */}
                        <View style={styles.loginContainer}>
                            <Text style={styles.loginText}>
                                Already have an account?{' '}
                                <Text
                                    style={styles.loginLink}
                                    onPress={() => navigation.navigate('Login')}
                                >
                                    Log In
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b11d93ff',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        padding: 24,
        marginHorizontal: 'auto',
        maxWidth: 400,
        width: '100%',
        alignSelf: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 24,
        left: 24,
        zIndex: 10,
    },
    header: {
        alignItems: 'center',
        paddingTop: 48,
        paddingBottom: 8,
    },
    logoContainer: {
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#9CA3AF',
        textAlign: 'center',
    },
    form: {
        marginTop: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        color: '#FFFFFF',
        fontSize: 16,
    },
    signUpButton: {
        backgroundColor: '#7C3AED',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    signUpButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginContainer: {
        marginTop: 24,
        alignItems: 'center',
    },
    loginText: {
        color: '#9CA3AF',
        fontSize: 14,
    },
    loginLink: {
        color: '#A78BFA',
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
});