import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.darkGray,
  },
  products: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundText: {
    fontSize: 16,
    color: COLORS.darkGray,
  },
  clearIcon: {
    position: 'absolute',
    zIndex: 2,
    right: 5,
  },
  productsContent: {
    paddingVertical: 25,
    paddingHorizontal: 5,
  },
  productContainer: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    width: '45%',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
  },
  productDetail: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    color: COLORS.darkGray,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 5,
  },
});
