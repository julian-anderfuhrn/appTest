import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';

import RootNavigator from './navigations';
import { FONTS, COLORS } from './themes';

export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Montserrat-Bold.ttf'),
    [FONTS.bold]: require('../assets/fonts/Inter-Bold.ttf'),
    [FONTS.medium]: require('../assets/fonts/Inter-Medium.ttf'),
    [FONTS.light]: require('../assets/fonts/Inter-Light.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
