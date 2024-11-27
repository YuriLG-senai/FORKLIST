import { CircleCheck } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TaskCard = ({ title, description, status, onClick }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <CircleCheck color="green" size={32} />
            </View>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.button} onPress={onClick}>
                <Text style={styles.buttonText}>{status === "Done" ? 'Deletar' : 'Check'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroudColor: "#fff",
        padding: 15,
        bordarRadius: 10,
        boxShadowColor: "#000",
        boxShadowOpacity: 0.1,
        boxShadowRadius: 5,
        elevation: 3,
        marginVertical: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        alignItems: 'center',
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#d33f49',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
    }
});

export default TaskCard;