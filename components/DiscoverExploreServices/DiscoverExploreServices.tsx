import HeadSection from "@/components/UI/HeadSection/HeadSection";
import {View, StyleSheet} from "react-native";
import {servicesData} from "@/mokData/servicesData";
import ProfileCard from "@/components/UI/ProfileCard/ProfileCard";
import React from "react";
import HorizontalCategories from "@/components/UI/HorizontalCategories/HorizontalCategories";

const DiscoverExploreServices = () => {
    return (
        <View style={styles.container}>
            <HeadSection title={"Discover & Explore Services"}/>
            <HorizontalCategories/>
            {servicesData.map((item) =>
                <ProfileCard
                    key={item.id}
                    name={item.name}
                    profession={item.profession}
                    price={item.price}
                    rating={item.rating}
                    reviewCount={item.reviewCount}
                    imageUrl={item.imageUrl}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 14,
    },
});

export default DiscoverExploreServices;