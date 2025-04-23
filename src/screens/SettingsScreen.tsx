import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useThemeContext } from '../contexts/ThemeContext';

const SettingsScreen = ({ navigation }: any) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('@token');
    Alert.alert('Logout', 'Você saiu da aplicação.');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const { toggleTheme } = useThemeContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Configurações</Text>
      <Button title="Sair da conta" onPress={handleLogout} color="red" />

      <Button title="Alternar tema" onPress={toggleTheme} />
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
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
