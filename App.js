import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import TaskCard from './TaskCard';

export default function App() {

  const [taskTitle, setTaskTitle] = useState(""); 
  const [taskDescription, setTaskDescription] = useState(""); 
  const [task, setTask] = useState([]); 
  const [alert1, setAlert1] = useState(false); 
  const [alert2, setAlert2] = useState(false); 

  const onMessage = () => {
    setAlert1(false);
    setAlert2(false);

    if (taskTitle !== "" && taskDescription.length >= 10) {
      setTask([
        ...task,
        {
          id: task.length + 1,
          title: taskTitle,
          description: taskDescription
        }
      ]);

      setTaskTitle(""); 
      setTaskDescription(""); 

    } else {
      if (!taskTitle.trim()) {
        setAlert1(true);
        setTimeout(() => {
          setAlert1(false);
        }, 4000);
      }

      if (taskDescription.length < 10) {
        setAlert2(true);
        setTimeout(() => {
          setAlert2(false);
        }, 4000);
      }
    }
  }

  const deleteTask = (index) => {
    const updatedTasks = [...task];
    updatedTasks.splice(index, 1);  
    setTask(updatedTasks);  
  }

  return (
    <View style={styles.container}> 
      <View style={styles.box}> 

        <Text style={styles.label}>Título</Text> 

        <TextInput 
          style={styles.input}
          placeholder='Digite o título da tarefa...'
          value={taskTitle}
          onChangeText={setTaskTitle} 
        />

        {alert1 ? <Text style={styles.errorText}>Necessário título</Text> : null}

        <Text style={styles.label}>Tarefa</Text> 

        <TextInput 
          style={[styles.input, styles.textArea]} 
          placeholder='Digite a descrição da tarefa...' 
          value={taskDescription} 
          onChangeText={setTaskDescription} 
        />

        {alert2 ? <Text style={styles.errorText}>Necessário mínimo 10 caracteres</Text> : null}

        <View style={styles.buttonContainer}>
          <Button 
            title="Adicionar Tarefa" 
            color="darkgreen"
            onPress={onMessage} 
          />
        </View>
      </View>

      <ScrollView style={styles.taskList}>
        {task.map((item, index) => (
          <TaskCard 
            key={index} 
            title={item.title} 
            description={item.description} 
            status={"Done"} 
            onClick={() => deleteTask(index)} 
          />
        ))}
      </ScrollView>

      {task.length > 0 && <View style={styles.separator} />} 
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
  taskList: {
    width: '100%',
    marginTop: 20,
  },
  separator: {
    marginTop: 16,
    width: "100%",
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});