import { FlatList, Text, View } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

export default function ShoppingCart() {
  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
    </View>
  );
}
