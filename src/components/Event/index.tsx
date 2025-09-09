import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
    name:string,  // não obrigatório o uso do name (name?:string)
    onClick?: ()=>void,
}

export function Event({name}:Props) {
    return (
        <View style={styles.contener}>
            <AntDesign style={styles.botaolist} name="checkcircle" size={24} color="black" />
            <Text style={styles.textEvent}>{name}</Text>
        </View>
    );
}