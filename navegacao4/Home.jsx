import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

export default function Home({navigation}) {

    const LIVROS = [
        {
            id: 1,
            titulo: 'Demon Slayer',
            autor: 'Koyoharu Gotouge',
            capa: 'https://m.media-amazon.com/images/I/81ZNkhqRvVL._UF1000,1000_QL80_.jpg',
        },
        {
            id: 2,
            titulo: 'Jujutsu Kaisen',
            autor: 'Gege Akutami',
            capa: 'https://m.media-amazon.com/images/I/81TmHlRleJL.jpg',
        },
        {
            id: 3,
            titulo: 'Chainsaw Man',
            autor:  'Tatsuki Fujimoto',
            capa: 'https://static.wikia.nocookie.net/chainsaw-man/images/9/91/Chainsaw_Man_Volume_1.png/revision/latest?cb=20230116202801&path-prefix=pt-br'
        },
        {
            id: 4,
            titulo: 'Sousou no Frieren',
            autor: 'Kanehito Yamada',
            capa: 'https://m.media-amazon.com/images/I/81sphDUj6aS.jpg'
        },
        {
            id: 5,
            titulo: 'Shingeki no Kyojin',
            autor: 'Hajime Isayama',
            capa: 'https://upload.wikimedia.org/wikipedia/pt/e/e7/SnK_Volume1.png'
        },
        {
            id: 6,
            titulo: 'Hunter × Hunter',
            autor: 'Yoshihiro Togashi',
            capa: 'https://m.media-amazon.com/images/I/61NPpt5HC6L._UF1000,1000_QL80_.jpg'
        },
        {
            id: 7,
            titulo: 'Kōtetsujō no Kabaneri',
            autor: 'Ichirō Ōkouchi',
            capa: 'https://yukitvanimesblog.wordpress.com/wp-content/uploads/2019/07/e6c93-kabaneri.jpg?w=720'
        },
        {
            id: 8,
            titulo: 'SPY×FAMILY',
            autor: ' Tatsuya Endo, Kazuhiro Furuhashi',
            capa: 'https://m.media-amazon.com/images/I/81eVcxUwfRL._UF1000,1000_QL80_.jpg'
        },
    ];

    const Livro = ({item}) => (
        <View style={{backgroundColor:'white', padding:10, borderRadius:5, marginTop:20}}>
            <Text style={{fontSize:24, fontWeight:'bold'}}>{item.titulo}</Text>
            <Text>{item.autor}</Text>
            <TouchableOpacity 
                style={{width:100, height:30, backgroundColor:'#c2c2c2', borderRadius:5, alignSelf:'flex-end'}}
                onPress={() => navigation.navigate('Detalhes', {livro: item})}
            >
                <Text style={{margin:'auto'}}>Ver Detalhes</Text>
            </TouchableOpacity>
        </View>
    );

    return(
        <View style={{flex:1, padding:10, backgroundColor:'#e0e0e0'}}>
            <Text style={{fontSize:30, fontWeight:'bold', marginTop:40}}>Lista de Livros</Text>
            
                <FlatList
                    data={LIVROS}
                    renderItem={({item}) => <Livro item={item} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            
        </View>
    );
}