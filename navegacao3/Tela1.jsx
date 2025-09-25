import { Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function Tela1({navigation}) {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Home</Text>
            <Button 
                title='Ir para Detalhes' onPress={() => navigation.navigate('Detalhes', {produtoId: 101})}
            />
        </View>
    );
}