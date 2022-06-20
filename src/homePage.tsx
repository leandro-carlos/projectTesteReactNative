import { Text, Image, View, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import logo from '../assets/reactNativeLogo.png';
import { useNavigation } from '@react-navigation/native';


const width = Dimensions.get('screen').width;

export default function homePage() {

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Image source={logo} style={style.logo}></Image>
            <Text style={style.tittleLogo} >Teste de App</Text>
            <View style={style.container}>

                <Text style={style.questionData}>Data de Hoje</Text>
                <View style={style.data}>

                    <Text>Data: </Text>
                    <TextInput style={style.inputData} keyboardType={'numeric'}></TextInput>
                </View>
                <View style={style.mes}>
                    <Text>Mês: </Text>
                    <TextInput style={style.inputData} keyboardType={'numeric'}></TextInput>
                </View>
                <View style={style.ano}>
                    <Text>Ano: </Text>
                    <TextInput style={style.inputData} keyboardType={'numeric'}></TextInput>
                </View>

                <View style={{ paddingVertical: 30 }}>
                    <Button title='Confirmar' onPress={() => navigation.navigate('Cadastro')}></Button>
                </View>
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

    questionData: {
        fontSize: 34,
        fontWeight: "200"
    },

    data: {
        flexDirection: 'row',
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 25
    },

    mes: {
        flexDirection: 'row',
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 25
    },

    ano: {
        flexDirection: 'row',
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 25
    },

    inputData: {
        backgroundColor: "#F5F5F5",
        width: "80%",
        height: 30,
        color: "black",
        paddingLeft: 15,
        fontSize: 25
    }
    , rodape: {
        position: 'absolute',
        bottom: 0,
        color: "#959898"
    }
});
