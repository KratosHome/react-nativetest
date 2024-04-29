import React, {useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import LocationIcon from "@/assets/images/LocationIcon";
import LocationIconNext from "@/assets/images/LocationIconNext";


const AddressSearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<TextInput>(null);

    const focusInput = () => {
        setIsFocused(true);
        inputRef.current?.focus();
    };

    const onBlur = () => {
        if (inputValue.trim() === '') {
            setIsFocused(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerInput} onPress={focusInput} activeOpacity={1}>
                <LocationIcon/>
                {!isFocused && inputValue === '' && (
                    <Text style={styles.placeholderText}>Search...</Text>
                )}
                <TextInput
                    ref={inputRef}
                    style={[styles.input, !isFocused && inputValue === '' && {opacity: 0}]}
                    placeholder={''} // Пустий плейсхолдер
                    value={inputValue}
                    onChangeText={setInputValue}
                    onFocus={() => setIsFocused(true)}
                    onBlur={onBlur}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.location}>
                <LocationIconNext/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 21,
    },
    containerInput: {
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 15,
        backgroundColor: '#F5F5F5',
        flex: 1,
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: '#545454',
    },
    placeholderText: {
        position: 'absolute',
        marginLeft: 34,
        color: '#545454',
        fontSize: 14,
        fontFamily: 'OutfitRegular',
    },
    location: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        marginLeft: 12,
        width: 61,
        height: 50,
        borderRadius: 8,
    }
});

export default AddressSearchBar;
