import { ScrollView, Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Input } from "./src/components/Input";
import { Itens } from "./src/components/Itens";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

type Produto = {
  nome: string;
  preco: number;
};

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoAdd, setProdutoAdd] = useState("");
  const [precoAdd, setPrecoAdd] = useState("");

  function adicionarProduto() {
    if (produtoAdd.trim() === "" || precoAdd.trim() === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const precoNumero = parseFloat(precoAdd.replace(",", "."));
    if (isNaN(precoNumero)) {
      Alert.alert("Erro", "Digite um valor numérico válido para o preço!");
      return;
    }

    const novoProduto: Produto = {
      nome: produtoAdd,
      preco: precoNumero,
    };

    setProdutos([...produtos, novoProduto]);
    setProdutoAdd("");
    setPrecoAdd("");
  }

  function apagarItem(chave: number) {
    setProdutos(produtos.filter((_, index) => index !== chave));
  }

  const total = produtos.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calorias</Text>
      <View style={{flexDirection: "collum", alignItems: "center", gap:50  }}>
        
        <Input
          placeH="Digite o alimento"
          onChangeText={setProdutoAdd}
          value={produtoAdd}
          style={{ flex: 2 }}
        />
        
        <Input
          placeH="Digite as calorias"
          onChangeText={setPrecoAdd}
          value={precoAdd}
          keyboardType="numeric"
          style={{ flex: 1 }}
      />
        <Text style={styles.adicionaButton} onPress={adicionarProduto}>Adicionar</Text>
      </View>

      {/* Lista */}
      <View style={styles.containerList}>
        <View style={styles.titleItens}>
          <Text><FontAwesome6 name="circle-dot" size={20} color="black" />Item</Text>
          <Text><Feather name="check-circle" size={20} color="black" />Calorias</Text>
          <Text>Limpar</Text>
        </View>
        <ScrollView>
          {produtos.length === 0 ? (
            <Text
              style={{
                backgroundColor: '#ffffff',
                display: "flex",
                textAlign: "center",
                color: "#0000",
                marginTop: 150,
                fontSize: 20,
              }}
            >
              Não tem itens
            </Text>
          ) : (
            produtos.map((item, index) => (
              <Itens
                key={index}
                chave={index}
                name={`${item.nome} ${item.preco.toFixed(2)}kcal`}
                onDelete={apagarItem}
              />
            ))
          )}
        </ScrollView>
      </View>

      {/* Total */}
      <Text
        style={{
          borderColor: '#ffff',
          borderRadius: 12,
          backgroundColor: 'white',
          fontSize: 20,
          marginTop: 20,
          marginLeft:270,
          fontWeight: "bold",
          textAlign: 'center',
          width:130,
          padding:20,
        }}
      >
        {total.toFixed(2)} kcal
      </Text>
    </View>
  );
}
