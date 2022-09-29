import React, { useState } from "react";
import{
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Home(){
    let [AnoNasc, setAnoNasc] = useState();
    let [Idade, setIdade] = useState();

    function Calcular(){
        let resultado = (2022-AnoNasc)
        setIdade(resultado);
    }

    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Calculo da Idade</Text>
        <TextInput
         onChangeText={setAnoNasc}
         style={styles.campo}
        placeholder= "Digite o seu ano de nascimento"
        />

        <TouchableOpacity onPress={Calcular} style={styles.button}>
            <Text style={styles.buttontext}>Calcular</Text>
        </TouchableOpacity>

        <text style={styles.subtitulo}>Você tem {Idade} anos de idade</text>

    </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#B0E0E6',
        paddingVertical: 70,
        paddingHorizontal: 20,
    },

    titulo:{
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000'
    },

    subtitulo:{
      color: '#000',
      fontSize: 20, 
    },

    campo: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        marginTop: 30,
        borderRadius: 7,
        padding: 15
    },

    button:{
        backgroundColor:'#EE82f0',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },

    buttontext:{
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
    },
});