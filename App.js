import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// Import Pages
import { AddProduct } from './Pages/AddProduct';
import { DetailMenu } from './Pages/DetailMenu';
import Menu from './Pages/Menu';
import { EditMenu } from './Pages/EditMenu';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Main'
        screenOptions={{ headerShown: false}}
      >
        <Stack.Screen 
          name='Main'
          component={Menu}
        />
        <Stack.Screen 
          name='DetailMenu'
          component={DetailMenu}
        />
        <Stack.Screen 
          name='AddProduct'
          component={AddProduct}
        />
        <Stack.Screen 
          name='EditMenu'
          component={EditMenu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}