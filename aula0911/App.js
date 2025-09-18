import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tela1 from './Tela1';
import Tela2 from './Tela2';

const Tab = createBottomTabNavigator()

 export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Tela 1" component={Tela1}/>
          <Tab.Screen name="Tela 2" component={Tela2}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
