import { View, Text, TextInput, } from "react-native";
import {AntDesign} from '@expo/vector-icons';
import {styles} from './styles';

type Props = {
    chave=number,
    name=string,
    onDelete: (chave:number)=>void;
}

export function Itens({chave,name, onDelete}:Props){
    return(
        <View>

        </View>
    )
}