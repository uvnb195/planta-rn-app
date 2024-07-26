import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { colors } from './src/constants/colors';
import { fontStyles } from './src/constants/fonts';
import clsx from 'clsx';

export default function App() {
  const [fontLoaded] = useFonts({
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    robotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    robotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    robotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  })

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  if (!fontLoaded) {
    return null
  } else SplashScreen.hideAsync()

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar style="auto" />
      <View className='p-sm' />
      <View className='bg-black' />
      <Text className={clsx(fontStyles.h1Medium, 'text-main')}>working on your app!</Text>
      <Text className={fontStyles.h1Medium}>working on your app!</Text>
    </SafeAreaView>
  );
}
