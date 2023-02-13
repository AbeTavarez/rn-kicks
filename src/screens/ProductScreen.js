import { FlatList, Image, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '../store/productSlice';

// we need the useDispatch and productSlice for the pressable

export default function ProductScreen() {
  const navigation = useNavigation();
  // access products data from redux store
  const products = useSelector((state) => state.products.products);
  //
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // dispatch action passing the item id as the payload
            dispatch(productSlice.actions.setSelectedProduct(item.id));
            navigation.navigate('Product Details');
          }}
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
