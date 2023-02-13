import { FlatList, Text, View, StyleSheet, Pressable } from 'react-native';
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => <ShoppingCartTotals />}
      />
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Checkout</Text>
      </Pressable>
    </>
  );
}

const ShoppingCartTotals = () => (
  <View>
    <View style={styles.totalsContainer}>
      {/* SUBTOTAL  */}
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>$789.00</Text>
      </View>
      {/* DELIVERY  */}
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>$789.00</Text>
      </View>
      {/* TOTAL  */}
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>$789.00</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  text: {
    fontSize: 16,
    color: 'gray'
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#000',
    bottom: 30,
    width: '90%',
    padding: 20,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  }
});
