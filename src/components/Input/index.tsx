import { styles } from "./styles";





import AntDesign from '@expo/vector-icons/AntDesign';
import {Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

type Props = TextInputProps&{
    placeH:string,
}

export function Input({placeH, onChangeText, onPress, value}:Props) {
    return (
        <View style={styles.contener}>
            <TextInput
            style={styles.input}
            placeholder={placeH}
            placeholderTextColor={"#ada9a8"}
            onChangeText={onChangeText}
            value={value}
            />
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}><AntDesign name="pluscircleo" size={24} color="#ff8080" /></Text>
            </TouchableOpacity>
        </View>
    );
}