import {Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import {useState} from "react";
import {horizontalCategoriesData} from "@/mokData/horizontalCategoriesData";

type CategoryType = {
    id: string;
    name: string;
};

const HorizontalCategories = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('1');

    const renderCategory = ({item}: { item: CategoryType }) => {
        const isSelected = item.id === selectedCategoryId;

        return (
            <TouchableOpacity
                style={[styles.categoryItem, isSelected && styles.selectedCategoryItem]}
                onPress={() => setSelectedCategoryId(item.id)}
            >
                <Text style={[styles.categoryText, isSelected && styles.selectedCategoryText]}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            horizontal
            data={horizontalCategoriesData}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}
        />
    );
};

const styles = StyleSheet.create({
    categoryItem: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 50,
        marginBottom: 10,
    },
    selectedCategoryItem: {
        backgroundColor: '#000000',
    },
    categoryText: {
        color: '#545454',
        fontSize: 14,
        fontFamily: 'OutfitRegular',
    },
    selectedCategoryText: {
        color: '#ffffff',
        fontSize: 14,
        fontFamily: 'OutfitRegular',
    },
    scrollViewContainer: {
        paddingHorizontal: 15,
    },
});

export default HorizontalCategories;