import Svg, {Path} from "react-native-svg";

const MoreInfoIcon = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M8.00006 12H8.01089" stroke="#545454" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <Path d="M12 12H12.0108" stroke="#545454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M15.9999 12H16.0108" stroke="#545454" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <Path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#545454" stroke-width="2"/>
        </Svg>
    );
};

export default MoreInfoIcon;