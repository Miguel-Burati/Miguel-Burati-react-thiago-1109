import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tela1 from './Tela1';
import Tela2 from './Tela2';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Tela1}/>
        <Drawer.Screen name='Perfil' component={Tela2}/>
      </Drawer.Navigator >
    </NavigationContainer>
  );
}

