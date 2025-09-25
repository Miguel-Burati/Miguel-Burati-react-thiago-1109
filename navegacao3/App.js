import { NavigationContainer } from '@react-navigation/native';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Detalhes from './Detalhes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Tela1}/>
        <Stack.Screen name='Detalhes' component={Detalhes}/>
        <Stack.Screen name='Perfil' component={Tela2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

