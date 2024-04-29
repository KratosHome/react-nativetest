import {FC} from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";

const CategoryItem: FC<CategoryType> = ({title, IconComponent}) => (
    <TouchableOpacity style={styles.container}>
        <View style={styles.icon}>
            <IconComponent/>
        </View>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    container: {
        width: 75,
        alignItems: 'center',
        marginBottom: 38,
    },
    icon: {
        backgroundColor: 'black',
        width: 52,
        height: 52,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 8,
        color: '#545454',
        fontSize: 14,
        fontFamily: 'OutfitSemiBold',
    }
});
export default CategoryItem;