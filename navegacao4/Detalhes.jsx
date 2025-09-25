import { Text, View, Image, TouchableOpacity } from 'react-native';


export default function Detalhes({route, navigation}){

    const {livro} = route.params;

    return(
       <View style={{flex:1, padding:10, backgroundColor:'#e0e0e0'}}>
            <Text style={{fontSize:30, fontWeight:'bold', marginTop:40}}>Detalhes</Text>
            <View style={{ padding:10, backgroundColor:'white', borderRadius:5, marginTop:20}}>
                <Text style={{fontSize:24, fontWeight:'bold'}}>{livro.titulo}</Text>
                <Text >{livro.autor}</Text>            
                <Image 
                    source={{ uri: livro.capa }} 
                    style={{
                        width: 180,
                        height: 275,
                        borderRadius: 5,
                        alignSelf:'center',
                        margin:20
                    }}
                />
            </View>
            <TouchableOpacity 
                style={{width:200, height:35, backgroundColor:'#c2c2c2', borderRadius:5, alignSelf:'center',position:'absolute', bottom:10}}
                onPress={() => navigation.goBack()}
            >
                <Text style={{margin:'auto', fontSize:18}}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}