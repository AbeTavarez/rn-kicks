import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
// redux
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';

// Screens
import ProductScreen from './screens/ProductScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';

// must initialize outside
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: '#fff' } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={{ headerRight: () => <CartButton /> }}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CartButton() {
  const navigation = useNavigation();
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <Pressable
      onPress={() => navigation.navigate('Cart')}
      style={{ flexDirection: 'row' }}
    >
      <FontAwesome5 name="shopping-cart" color="gray" size={18} />
      <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberOfItems}</Text>
    </Pressable>
  );
}
