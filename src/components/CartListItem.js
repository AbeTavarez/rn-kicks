import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CartListItem({ cartItem }) {
  const increaseQuantity = () => {};
  const decreaseQuantity = () => {};

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>{cartItem.size}</Text>

        <View style={styles.footer}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>$320.0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  image: {
    width: '40%',
    aspectRatio: 1
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10
  },
  name: {
    fontWeight: '500',
    fontSize: 18
  },
  size: {
    fontSize: 16,
    color: 'gray'
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'gray'
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: 'auto',
    fontWeight: '500'
  }
});
