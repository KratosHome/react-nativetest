import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import GreetingSection from "@/components/GreetingSection/GreetingSection";
import SearchInput from "@/components/SearchInput/SearchInput";
import {userData} from "@/mokData/userData";
import AddressSearchBar from "@/components/AddressSearchBar/AddressSearchBar";
import SpecialOffersCard from "@/components/SpecialOffersCard/SpecialOffersCard";
import Categories from "@/components/Categories/Categories";
import RecommendedServices from "@/components/RecommendedServices/RecommendedServices";
import DiscoverExploreServices from "@/components/DiscoverExploreServices/DiscoverExploreServices";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <GreetingSection name={userData.name} avatar={userData.img}/>
                    <SearchInput/>
                    <AddressSearchBar/>
                    <SpecialOffersCard/>
                    <Categories/>
                    <RecommendedServices/>
                    <DiscoverExploreServices/>
                </ScrollView>
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
    }
});
