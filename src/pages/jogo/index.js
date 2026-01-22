import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { useState } from 'react';
import { styles } from "./styles"
import { FlatList, Image } from 'react-native';
import { TextInput } from 'react-native';

export default function jogo() {

  const [grid,setGrid] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])
  const [currentRow, setCurrentRow] = useState(0);
  const [currentWord, setCurrentWord] = useState("");



  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            source={require('../../../assets/option.png')}
            style={styles.option} />
          <Text style={styles.title}>
              Lettler <Text style={styles.titleDifferent}>Split</Text>
          </Text>

          <Image 
            source={require('../../../assets/user.png')}
            style={styles.perfil}
          />
        </View>

        <View style={styles.subTitle}>
          <Text style={styles.description}>
            Adivinhe a palavra!!
          </Text>
        </View>
        <View style={styles.keyboard}>
          <TextInput
                value={currentWord}
                onChangeText={setCurrentWord}
                maxLength={5}
                style={styles.keyBoardHolder}
              />
        </View>
        <View style={styles.box}>
          {grid.map((row, rowIndex) => (
            <View
              key={rowIndex}
              style={styles.rowLine}
            >
            
          {row.map((cell, colIndex) => (
            <View
              key={colIndex}
              style={[
                styles.rowCollunm,
                rowIndex === currentRow && { backgroundColor: "#dddddd" }
              ]}
            >
              <Text style={styles.placeHolder}>{(rowIndex === currentRow ? currentWord[colIndex] || "" : cell).toUpperCase()}</Text>
            </View>
          ))}
          </View>
          ))}
        </View>
    </View>
  );
}