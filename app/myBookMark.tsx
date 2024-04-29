import {StyleSheet, View, SafeAreaView, TouchableOpacity, Text, FlatList} from 'react-native';
import {useNavigation} from 'expo-router';
import ArrowIcon from "@/assets/images/ArrowIcon";
import {Ionicons} from "@expo/vector-icons";
import HorizontalCategories from "@/components/UI/HorizontalCategories/HorizontalCategories";
import {servicesData} from "@/mokData/servicesData";
import ProfileCard from "@/components/UI/ProfileCard/ProfileCard";

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                        <ArrowIcon/>
                    </TouchableOpacity>
                    <Text style={styles.title}>My BookMark</Text>
                    <TouchableOpacity style={styles.morInfo}>
                        <Ionicons style={styles.icon} name="ellipsis-vertical-circle" size={24} color="#545454"/>
                    </TouchableOpacity>
                </View>
                <HorizontalCategories/>
                <FlatList
                    data={servicesData}
                    renderItem={({item}) => <ProfileCard
                        name={item.name}
                        profession={item.profession}
                        price={item.price}
                        rating={item.rating}
                        reviewCount={item.reviewCount}
                        imageUrl={item.imageUrl}
                    />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        marginHorizontal: 19,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 31
    },
    goBack: {
        padding: 12,
        backgroundColor: '#333',
        borderRadius: 8
    },
    title: {
        fontSize: 18,
        color: "#545454",
        fontFamily: 'OutfitRegular',
    },
    morInfo: {
        padding: 12,
        borderRadius: 8,
        borderColor: '#333',
        borderWidth: 1
    },
    icon: {
        transform: [{rotate: '90deg'}]
    },
});
