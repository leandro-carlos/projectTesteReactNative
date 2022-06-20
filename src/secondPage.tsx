import React, { useState } from 'react';
import { Image, View, Text, Button, Dimensions, StyleSheet, TouchableOpacity, Alert, TextInput, } from 'react-native'
import logo from '../assets/reactNativeLogo.png'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';


const width = Dimensions.get('screen').width;


export default function homePage() {

    const navigation = useNavigation();

    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const [nome, onChangeNome] = useState();


    // constante que captura a data selecionada 
    const onChange = (event, selectedDate) => {
        setShow(false);
        setDate(selectedDate);
        console.log(selectedDate);
    };

    // Quando setado true faz a função amostrar o calendário
    const showDatepicker = () => {
        setShow(true);
    };

    // Pegando a data completa de hoje pra exibir na tela
    const datacurrent = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    function currentIdade() {

        // Pegando data de Hoje
        var yearCurr = new Date().getFullYear();

        // Pegando data de nascimento

        var anoNasc = (date.getFullYear());

        var idade = yearCurr - anoNasc; // Calculando a diferença dos anos/idade
        return idade;
    }


    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Image source={logo} style={style.logo}></Image>
            <Text style={style.tittleLogo} >Teste de App</Text>
            <View style={style.container}>

                <TextInput style={style.input} placeholder='Nome' onChangeText={onChangeNome}></TextInput>
                <Text style={style.chooseColor} >Data de Nascimento: </Text>

                {/* Botão que abre o calendário*/}

                <TouchableOpacity onPress={showDatepicker} style={style.dateButton}>
                    <Text style={style.textinButton}>Selecione uma data</Text>
                </TouchableOpacity>

                <Text style={style.textDate}>  A sua data de nascimento é: </Text>
                <Text style={style.textDate}> {datacurrent} </Text >

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}

                <Text style={style.chooseColor}>Escolha sua cor preferida !</Text>


                {/* Inicio do container da seleção de cor */}

                <View style={style.linha}>

                    {/* Seleção das cores preferida */}

                    <TouchableOpacity // Red Color
                        activeOpacity={0.5}
                        style={style.redImage}
                        onPress={() => {
                            if (nome == null || nome == "") {
                                Alert.alert("Campos vazios", "Por favor o campo do seu nome!")
                            } else {
                                navigation.navigate('Tela 03', { name: nome, cor: "red", idade: currentIdade() })
                            }
                        }

                        }>
                    </TouchableOpacity>

                    <TouchableOpacity // Blue Color
                        activeOpacity={0.5}
                        style={style.blueImage}
                        onPress={() => {
                            if (nome == null || nome == "") {
                                Alert.alert("Campos vazios", "Por favor o campo do seu nome!")
                            } else {
                                navigation.navigate('Tela 03', { name: nome, cor: "blue", idade: currentIdade() })
                            }
                        }}>
                    </TouchableOpacity>

                    <TouchableOpacity // Green Color
                        activeOpacity={0.5}
                        style={style.greenImage}
                        onPress={() => {
                            if (nome == null || nome == "") {
                                Alert.alert("Campos vazios", "Por favor o campo do seu nome!")
                            } else {
                                navigation.navigate('Tela 03', { name: nome, cor: "green", idade: currentIdade() })

                            }
                        }}>
                    </TouchableOpacity>
                    {/* Fim do container */}
                </View>
                <Text style={style.rodape}>Desenvolvido por Leandro Carlos ®</Text>

            </View>
        </View>
    )
}


// Inicio da estilização do código

const style = StyleSheet.create({
    logo: {
        width: "100%",
        height: 1080 / 1920 * width,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

    },
    tittleLogo: {
        position: 'absolute',
        paddingHorizontal: 10,
        fontSize: 50,
        color: "white",
        borderRadius: 10,
        width: "100%",
        textAlign: "center",
        paddingTop: 165,
        fontWeight: "300"

    },

    container: {
        flex: 1,
        margin: 30,
        alignItems: "center",
        // backgroundColor: 'yellow'
    },
    input: {
        backgroundColor: "#F5F5F5",
        width: "80%",
        height: 35,
        color: "black",
        paddingLeft: 15,
        fontSize: 25,
        borderRadius: 10,
        marginVertical: 10,
        marginTop: 45
    },

    chooseColor: {
        fontSize: 26,
        marginVertical: 20
    },

    dateButton: {
        width: "50%",
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: "#62dafc",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    textinButton: {
        fontSize: 20,
        color: "black",
    },

    textDate: {
        fontSize: 21.5,
        marginTop: 20

    },

    linha: {
        flexDirection: 'row',
    },

    redImage: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        marginHorizontal: 15,
    },

    blueImage: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginHorizontal: 15,
    },

    greenImage: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        marginHorizontal: 15,
    },

    confirmButton: {
        width: 130,
        height: 40,
        backgroundColor: "green",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30
    },
    rodape: {
        position: 'absolute',
        bottom: 0,
        color: "#959898"
    }
})