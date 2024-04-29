import React, {FC} from 'react';
import {View, StyleSheet, Text} from "react-native";
import {Link} from "@react-navigation/native";

interface HeadSectionProps {
    title: string;
}

const HeadSection: FC<HeadSectionProps> = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Link to="/myBookMark">
                <Text style={styles.seeAll}>See All</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: 'OutfitSemiBold',
        color: "#000"
    },
    seeAll: {
        fontSize: 14,
        fontFamily: 'OutfitRegular',
        color: '#545454',
    }
});


export default HeadSection;