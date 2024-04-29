import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {useColorScheme} from '@/components/hooks/useColorScheme';

export {ErrorBoundary,} from 'expo-router';

export const unstable_settings = {
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        OutfitBlack: require('../assets/fonts/Outfit-Black.ttf'),
        OutfitBold: require('../assets/fonts/Outfit-Bold.ttf'),
        OutfitExtraBold: require('../assets/fonts/Outfit-ExtraBold.ttf'),
        OutfitExtraLight: require('../assets/fonts/Outfit-ExtraLight.ttf'),
        OutfitLight: require('../assets/fonts/Outfit-Light.ttf'),
        OutfitMedium: require('../assets/fonts/Outfit-Medium.ttf'),
        OutfitRegular: require('../assets/fonts/Outfit-Regular.ttf'),
        OutfitSemiBold: require('../assets/fonts/Outfit-SemiBold.ttf'),
        OutfitThin: require('../assets/fonts/Outfit-Thin.ttf'),
        ...FontAwesome.font,
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav/>;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="modal" options={{presentation: 'modal'}}/>
                <Stack.Screen name="myBookMark" options={{headerShown: false}}/>
            </Stack>
        </ThemeProvider>
    );
}
