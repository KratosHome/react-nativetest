import React, {useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';
import SearchIcon from "@/assets/images/SearchIcon";
import FilterIcon from "@/assets/images/FilterIcon";

type SearchInputProps = {
    onSearch?: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({onSearch}) => {
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
        <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.row} onPress={focusInput} activeOpacity={1}>
                <SearchIcon/>
                {!isFocused && inputValue === '' && (
                    <Text style={styles.placeholderText}>Search...</Text>
                )}
                <TextInput
                    ref={inputRef}
                    style={[styles.input, !isFocused && inputValue === '' && {opacity: 0}]}
                    placeholder={''}
                    value={inputValue}
                    onChangeText={setInputValue}
                    onFocus={() => setIsFocused(true)}
                    onBlur={onBlur}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter} onPress={onSearch}>
                <FilterIcon/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 13,
        marginTop: 21,
        backgroundColor: '#F5F5F5',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginLeft: 24
    },
    input: {
        marginLeft: 12,
        flex: 1,
    },
    filter: {
        marginRight: 10
    },
    placeholderText: {
        position: 'absolute',
        marginLeft: 34,
        color: '#545454',
        fontSize: 14,
        fontFamily: 'OutfitRegular',
    },
});

export default SearchInput;
