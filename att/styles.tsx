import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d0d2d8',
    flex: 1,
    paddingBottom:50,
  },

  titulo: {
    marginTop: 50,
    fontSize: 30,
    color: '#2c46b1',
    textAlign: 'center',
    fontWeight: "bold",
  },

  containerList: {
    backgroundColor:'#ffffff',
    flex:1,
    borderColor: '#F2EFEB',
    borderWidth: 2,
    height: 500,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 25,
    marginBottom: 25,
  },

  adicionaButton:{
    backgroundColor:'#2c46b1',
    color: 'white',
    padding:10,
    height: 40,
    width:400,
    marginTop:10,
    borderRadius:12,
    textAlign: 'center'
  },
  titleItens:{
    flexDirection:'row',
    gap:15,
    paddingLeft:20,
  }
});
