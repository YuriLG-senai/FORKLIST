import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>

        <Text style={styles.label}>Nome da tarefa</Text>

        <TextInput style={styles.input}
          placeholder='Nome da tarefa' />

        <text style={styles.label}>Descrição da tarefa</text>

        <TextInput style={[styles.input, styles.textArea]}
          placeholder='Descrição da terefa' multiline />

        <View style={styles.buttonContainer}>
          <Button title='Salvar' 
          style={styles.buttonGreen}
          color='darkgreen'
          onPress={
            () => {
              alert('TA SALVADO MEU CRIA')
            }
          }/>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'top',
  },
  label: {
    fontSize: 10,
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  buttonContainer: {
    marginTop: 16
  },
  buttonGreen: {
    backgroundColor: 'darkgreen'
  }
});
