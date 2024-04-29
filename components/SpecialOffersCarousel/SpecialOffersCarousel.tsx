import {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Text, ImageBackground} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {offersData} from "@/mokData/offersData";
import {Image} from 'react-native';


const {width: screenWidth} = Dimensions.get('window');

const SpecialOffersCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<any>(null);

    const renderItem = ({item}: { item: any }) => {
        const offer = item as OfferProps;
        return (
            <View style={styles.containerCard}>
                <ImageBackground
                    source={require('../../assets/mokImg/backgroundSpecialOffersCard.png')}
                    style={styles.offerCard}
                >
                    <View style={[styles.flex1, styles.infoCard]}>
                        <Text style={styles.discountText}>{offer.discount}</Text>
                        <Text style={styles.offerTitle}>{offer.title}</Text>
                        <Text style={styles.offerDescription}>
                            {offer.description}
                        </Text>
                    </View>
                    <Image style={[styles.flex1, styles.img]} source={require('../../assets/mokImg/men.png')}/>
                </ImageBackground>
            </View>
        );
    };


    return (
        <View>
            <Carousel
                ref={carouselRef}
                vertical={false}
                data={offersData}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Pagination
                dotsLength={offersData.length}
                activeDotIndex={activeIndex}
                containerStyle={{
                    position: "absolute",
                    bottom: -10,
                    left: 0,
                    right: 0,
                    alignItems: 'center'
                }}
                dotStyle={{
                    width: 14,
                    height: 3,
                    borderRadius: 5,
                    backgroundColor: 'white',
                }}
                inactiveDotStyle={{
                    width: 4,
                    height: 4,
                    backgroundColor: 'white',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 26,
    },
    containerCard: {
        borderRadius: 20,
        overflow: 'hidden',
        height: 155,
        marginRight: 40,
    },
    offerCard: {
        flexDirection: "row",
    },
    flex1: {
        flex: 1,
    },
    infoCard: {
        paddingTop: 22,
        paddingLeft: 26,
    },
    discountText: {
        fontSize: 36,
        color: 'white',
        marginBottom: 5,
        fontFamily: 'OutfitExtraBold',
    },
    offerTitle: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'OutfitRegular',
        marginBottom: 7,
    },
    offerDescription: {
        fontSize: 11,
        fontFamily: 'OutfitRegular',
        color: 'white',
        marginBottom: 20,
    },
    img: {
        marginTop: 10,
        width: 180,
        height: 180,
        resizeMode: 'contain',
    }
});


export default SpecialOffersCarousel;
