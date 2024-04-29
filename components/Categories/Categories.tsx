import HeadSection from "@/components/UI/HeadSection/HeadSection";
import {View, StyleSheet} from "react-native";
import CategoryItem from "@/components/UI/CategoryItem/CategoryItem";
import {categoriesData} from "@/mokData/categoriesData";

const Categories = () => {
    return (
        <View style={styles.container}>
            <HeadSection title={"Categories"}/>
            <View style={styles.wrapper}>
                {categoriesData.map((item, index) =>
                    <CategoryItem key={index} title={item.title} IconComponent={item.IconComponent}/>
                )}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: 16
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    }
});


export default Categories;