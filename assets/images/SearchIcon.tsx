import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

const SearchIcon = () => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <G clip-path="url(#clip0_1_111)">
                <Path
                    d="M7.875 14.625C11.6029 14.625 14.625 11.6029 14.625 7.875C14.625 4.14708 11.6029 1.125 7.875 1.125C4.14708 1.125 1.125 4.14708 1.125 7.875C1.125 11.6029 4.14708 14.625 7.875 14.625Z"
                    stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M12.9375 12.9375L16.875 16.875" stroke="#545454" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </G>
            <Defs>
                <ClipPath id="clip0_1_111">
                    <Rect width="18" height="18" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default SearchIcon;