import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Event } from '../../components/Event';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { Itens } from '../../components/Itens';


export default function App() {

    const [list, setList] = useState<string[]>([])
    const [listName, setListName] = useState("")
    
    function handleAdd (){
        setList(prevState =>[...prevState, listName] )
        setListName('') 
    }

    return (
        
        <View style={styles.container}>
            <View style={styles.titulo_container}>
                <Text style={styles.text_titul}>Lista de Compra</Text>
            </View>
            <View style={styles.contener_person}>
                <Input placeH="digite o Produto"
                    onChageText={e => setListName(e)}
                    onPress={handleAdd}
                    value={listName}
                />
                <View style={styles.area} >
                    <ScrollView>
                        {
                            list.map(item => (
                                <Itens
                                    key={item}
                                    name{item}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}