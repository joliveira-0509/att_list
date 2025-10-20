import { View, Text } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { styles } from "./styles";

type Props = {
  chave: number;
  name: string;
  onDelete: (chave: number) => void;
};

export function Itens({ chave, name, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <EvilIcons name="trash" size={24} color="black" onPress={() => onDelete(chave)} />
    </View>
  );
}
