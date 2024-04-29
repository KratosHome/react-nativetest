import React from 'react';
import {View} from 'react-native'; // Додайте імпорт View з react-native
import {Tabs} from 'expo-router';
import {useClientOnlyValue} from '@/components/hooks/useClientOnlyValue';
import HomeIcon from "@/assets/images/HomeIcon";
import BookingsIcon from "@/assets/images/BookingsIcon";
import MessagesIcon from "@/assets/images/MessagesIcon";
import ProfileIcon from "@/assets/images/ProfileIcon";

// Компонент для індикатора активної вкладки
const ActiveIndicator = () => (
    <View style={{
        position: 'absolute',
        bottom: -30,
        width: 6,
        height: 6,
        borderRadius: 5,
        backgroundColor: '#000',
        alignSelf: 'center'
    }}/>
);

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#545454',
                tabBarInactiveTintColor: '#545454',
                headerShown: useClientOnlyValue(false, true),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({focused}) => (
                        <View>
                            <HomeIcon color={focused ? 'gray' : 'white'}/>
                            {focused && <ActiveIndicator/>}
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="Bookings"
                options={{
                    headerShown: false,
                    title: 'Bookings',
                    tabBarIcon: ({focused}) => (
                        <View>
                            <BookingsIcon color={focused ? 'gray' : 'white'}/>
                            {focused && <ActiveIndicator/>}
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="Messages"
                options={{
                    headerShown: false,
                    title: 'Messages',
                    tabBarIcon: ({focused}) => (
                        <View>
                            <MessagesIcon color={focused ? 'gray' : 'white'}/>
                            {focused && <ActiveIndicator/>}
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    headerShown: false,
                    title: 'Profile',
                    tabBarIcon: ({focused}) => (
                        <View>
                            <ProfileIcon color={focused ? 'gray' : 'white'}/>
                            {focused && <ActiveIndicator/>}
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}
