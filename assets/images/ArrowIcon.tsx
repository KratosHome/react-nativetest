import Svg, {Path} from "react-native-svg";

const ArrowIcon = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M4 12L10 18M4 12L10 6M4 12L14.5 12M20 12L17.5 12" stroke="white" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
};

export default ArrowIcon;