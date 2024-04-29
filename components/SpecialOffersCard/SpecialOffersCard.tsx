import {View, StyleSheet} from 'react-native';
import HeadSection from "@/components/UI/HeadSection/HeadSection";
import SpecialOffersCarousel from "@/components/SpecialOffersCarousel/SpecialOffersCarousel";

const SpecialOffersCard = () => {
    return (
        <View style={styles.container}>
            <HeadSection title={"Special Offers"}/>
            <SpecialOffersCarousel/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 26,
    },
});

export default SpecialOffersCard;
