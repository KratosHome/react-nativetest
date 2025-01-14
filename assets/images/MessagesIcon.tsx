import {FC} from 'react';
import Svg, {Path} from "react-native-svg";

const MessagesIcon: FC<SvgProps> = ({color}) => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill={color}>
            <Path
                d="M10 9.16667V8.75M13.3333 9.16667V8.75M6.66667 9.16667V8.75M2.88667 14.0233C1.66667 13.0475 1.66667 12.3092 1.66667 9.16667C1.66667 6.02417 1.66667 4.4525 2.88667 3.47667C4.10833 2.5 6.07167 2.5 10 2.5C13.9283 2.5 15.8925 2.5 17.1125 3.47667C18.3333 4.4525 18.3333 6.02417 18.3333 9.16667C18.3333 12.3092 18.3333 13.0475 17.1125 14.0233C15.8933 15 13.9283 15 10 15C7.90833 15 6.83333 16.4483 5 17.5V14.8233C4.08833 14.6875 3.4175 14.4483 2.88667 14.0233Z"
                stroke="#545454" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
};

export default MessagesIcon;