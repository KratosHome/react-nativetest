import {View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import {FC, useState} from "react";
import StarIcon from "@/assets/images/StarIcon";
import BookmarkIcon from "@/assets/images/BookmarkIcon";


const ProfileCard: FC<servicesType> = ({
                                           name,
                                           profession,
                                           price,
                                           rating,
                                           reviewCount,
                                           imageUrl
                                       }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const handleBookmarkPress = () => {
        setIsBookmarked(!isBookmarked);
    };
    return (
        <View style={styles.сontainer}>
            <View style={styles.imageContainer}>
                {imageLoading && (
                    <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} />
                )}
                <Image
                    source={{uri: imageUrl}}
                    style={styles.profileImage}
                    onLoad={() => setImageLoading(false)}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profession}>{profession}</Text>
                <Text style={styles.price}>₦ {price}</Text>
                <View style={styles.reviewContainer}>
                    <StarIcon/>
                    <Text style={styles.rating}>{rating}</Text>
                    <Text style={styles.reviewCount}>| {reviewCount} reviews</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleBookmarkPress}>
                <BookmarkIcon color={isBookmarked}/>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    сontainer: {
        flexDirection: 'row',
        marginBottom: 18,
        borderRadius: 15,
        paddingTop: 16,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
        backgroundColor: '#fff',
        shadowColor: 'rgb(149, 157, 165)',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.10,
        shadowRadius: 24,
        elevation: 8,
    },
    profileImage: {
        width: 99,
        height: 100,
        borderRadius: 8,
        marginRight: 14,
    },
    imageContainer: {
        width: 99,
        height: 100,
        borderRadius: 8,
        marginRight: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicator: {
        position: 'absolute',
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        color: '#545454',
        fontFamily: 'OutfitRegular',
        fontSize: 14,
    },
    profession: {
        fontSize: 16,
        fontFamily: 'OutfitSemiBold',
        color: '#000',
        marginTop: 11,
    },
    price: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'OutfitSemiBold',
        marginTop: 9,
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 9,
    },
    rating: {
        marginLeft: 8,
        fontSize: 10,
        color: '#545454',
        fontFamily: 'OutfitRegular',
    },
    reviewCount: {
        marginLeft: 5,
        fontSize: 10,
        color: '#545454',
        fontFamily: 'OutfitRegular',
    },
});


export default ProfileCard;