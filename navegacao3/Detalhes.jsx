import { Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function Detalhes({route, navigation}) {
    const {produtoId} = route.params;
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Detalhes</Text>
            <Text>ID do Produto: {produtoId}</Text>
            <Button title='Ir para o Perfil' onPress={() => navigation.navigate('Perfil')} />
        </View>
    );
}