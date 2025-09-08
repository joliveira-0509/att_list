import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Event } from '../../components/Event';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo_container}>
                <Text style={styles.text_titul}>Lista de Compra</Text>
            </View>
            <View style={styles.contener_person}>
                <View style={styles.contener_input}>
                    <TextInput style={styles.input} placeholder='Digite o Produto' placeholderTextColor={"grey"} />
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                    <AntDesign name="pluscircleo" size={24} color="#ff8080" />
                    </TouchableOpacity>
                </View>
                <View style={styles.area} >
                    <Event name='Maça'/>
                    <Event name="Banana"/>
                    <Event name="Melancia"/>
                </View>
            </View>
          <StatusBar style="auto" />
        </View>
    );
}