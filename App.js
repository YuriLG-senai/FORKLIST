import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import TaskCard from './TaskCard';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>

        <Text style={styles.label}>     Usuario</Text>

        <TextInput style={styles.input}
          placeholder='Digite seu usuário...' />

        <Text style={styles.label}>      Senha</Text>

        <TextInput style={[styles.input, styles.textArea]}
          placeholder='Digite sua senha...' />

        <View style={styles.buttonContainer}>
          <Button title='Entrar' 
          style={styles.buttonGreen}
          color='darkgreen'
          onPress={
            () => {
              alert('HACKIADO COM SUCESSO')
            }
          }/>
        </View>
          <TaskCard  
          title={'Teste'} 
          desc={'Descrição do teste'} 
          status={'Done'} 
          onClick={()=>{alert('Deletar')}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  box: {
    width: '80%',
    padding: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 8,
 
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 16,
  },
  buttonGreen: {
    backgroundColor: 'darkgreen',
  },
});
