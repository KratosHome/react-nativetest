import React from 'react';
import HeadSection from "@/components/UI/HeadSection/HeadSection";
import {View, StyleSheet} from "react-native";
import ProfileCard from "@/components/UI/ProfileCard/ProfileCard";
import {servicesData} from "@/mokData/servicesData";

const RecommendedServices = () => {
    return (
        <View style={styles.container}>
            <HeadSection title={"Recommended services"}/>
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

export default RecommendedServices;