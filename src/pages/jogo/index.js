import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { styles } from "./styles"
import { FlatList } from 'react-native-web';

export default function jogo() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
              
          </Text>
        </View>
        <View style={styles.box}>
        </View>
    </View>
  );
}