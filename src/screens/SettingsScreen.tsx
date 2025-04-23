import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../contexts/ThemeContext';

const SettingsScreen = ({ navigation }: any) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('@token');
    Alert.alert('Logout', 'Você saiu da aplicação.');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => toggleTheme()}>
        <Text style={styles.buttonText}>Alternar tema</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogout} onPress={() => handleLogout()}>
        <Text style={styles.buttonText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 16,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonLogout: {
    backgroundColor: 'red',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 16,
    width: '100%',
  },
});
