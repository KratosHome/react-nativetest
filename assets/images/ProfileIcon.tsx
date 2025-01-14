import React, {FC} from 'react';
import Svg, {Path} from "react-native-svg";

const ProfileIcon: FC<SvgProps> = ({color}) => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill={color}>
            <Path
                d="M10 8.33329C11.841 8.33329 13.3333 6.84091 13.3333 4.99996C13.3333 3.15901 11.841 1.66663 10 1.66663C8.15906 1.66663 6.66667 3.15901 6.66667 4.99996C6.66667 6.84091 8.15906 8.33329 10 8.33329Z"
                stroke="#545454" stroke-width="1.5"/>
            <Path
                d="M16.665 14.9999C16.6667 14.8633 16.6667 14.7241 16.6667 14.5833C16.6667 12.5124 13.6817 10.8333 10 10.8333C6.31834 10.8333 3.33334 12.5124 3.33334 14.5833C3.33334 16.6541 3.33334 18.3333 10 18.3333C11.8592 18.3333 13.2 18.2024 14.1667 17.9691"
                stroke="#545454" stroke-width="1.5" stroke-linecap="round"/>
        </Svg>
    );
};

export default ProfileIcon;