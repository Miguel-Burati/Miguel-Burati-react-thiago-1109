import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Detalhes from './Detalhes';

export default function App() {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Lista de Livros' >
        <Stack.Screen name='Lista de Livros' component={Home}/>
        <Stack.Screen name='Detalhes' component={Detalhes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}