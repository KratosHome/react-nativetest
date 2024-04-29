import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType} from 'react-native';
import Notification from "@/assets/images/NotificationIcon";
import Bookmark from "@/assets/images/BookmarkIcon";

interface GreetingSectionProps {
    name: string;
    avatar: ImageSourcePropType;
};

const GreetingSection: FC<GreetingSectionProps> = ({name, avatar}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    source={avatar}
                    style={styles.profilePic}
                />
                <View>
                    <View style={styles.row}>
                        <Text style={styles.greetingText}>Good Morning</Text>
                        <Image
                            source={require('../../assets/images/heand.png')}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.nameText}>{name}</Text>
                </View>
            </View>
            <View style={[styles.row, styles.gap]}>
                <TouchableOpacity>
                    <Notification/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Bookmark/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePic: {
        width: 42,
        height: 42,
        borderRadius: 25,
        marginRight: 8,
    },
    greetingText: {
        fontSize: 14,
        color: "#545454",
        fontFamily: 'OutfitRegular',
    },
    nameText: {
        fontSize: 16,
        fontFamily: 'OutfitRegular',
    },
    icon: {
        marginLeft: 5,
    },
    gap: {
        gap: 13
    }
});

export default GreetingSection;
