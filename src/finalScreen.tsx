import { Text, Image, View, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import logo from '../assets/reactNativeLogo.png';
import Routes from './Routes';

const width = Dimensions.get('screen').width;

export default function finalScreen({ route }) {

    const nome = route.params?.name; // capturando o parametro que foi empurrado da tela anterior com a key name
    const color = route.params?.cor // capturando o parametro que foi empurrado da tela anterior com a key cor
    const nascimentData = route.params?.data; // capturando o parametro que foi empurrado da tela anterior com a key data
    const idade = route.params?.idade; // capturando o parametro que foi empurrado da tela anterior com a key idade

    // Pegando a data de hoje !
    var getCurrentDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return date + '-' + month + '-' + year;  // format: dd-mm-yyyy;
    }

    return (
        <View style={{ backgroundColor: "white", flex: 1, marginBottom: 30 }}>
            <Image source={logo} style={style.logo}></Image>
            <Text style={style.tittleLogo} >Teste de App</Text>
            <View style={style.container}>

                {/* Campo que amostra o nome na tela */}
                <Text style={{
                    fontSize: 42,
                    color: color,
                    paddingVertical: 10
                }} > {nome}
                </Text>

                {/* Campo que amostra a idade na tela */}

                <Text style={{
                    fontSize: 30,
                    color: color,
                    paddingVertical: 10

                }}>Você tem {'\n' + idade} Anos de Idade.
                </Text>

                {/* Campo que amostra qual cor é a preferida */}

                <Text style={
                    {
                        fontSize: 25,
                        color: color,
                        paddingVertical: 7
                    }
                }>A sua cor preferida é {color}
                </Text>

                <Text style={style.rodape}>Desenvolvido por Leandro Carlos ®</Text>
            </View>

        </View >
    )
}


// Estilização da página

const style = StyleSheet.create({

    container: {
        flex: 1,
        margin: 30,
        alignItems: "center",
    },

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
    rodape: {
        position: 'absolute',
        bottom: 0,
        color: "#959898"
    }
})