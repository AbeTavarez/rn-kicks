import { FlatList, Image, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import products from '../data/products';

export default function ProductScreen() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate('Product Details')}
          style={styles.itemContainer}
        >
          <Image
            source={{
              uri: item.image
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1
  },
  itemContainer: {
    width: '50%',
    padding: 1
  }
});
