import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

const CleaningIcon = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_1_162)">
                <Path d="M10.5 12.75V2.25C10.5 1.425 11.175 0.75 12 0.75C12.825 0.75 13.5 1.425 13.5 2.25V12.75"
                      stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <Path d="M10.5 10.5H13.5" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <Path
                    d="M19.5 23.25H4.5L6.525 13.95C6.675 13.275 7.275 12.75 8.025 12.75H16.125C16.8 12.75 17.475 13.275 17.625 13.95L19.5 23.25Z"
                    stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <Path d="M6.75 15.75H17.25" stroke="white" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M8.25 20.25V22.5" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <Path d="M15.75 21.75V22.5" stroke="white" stroke-width="2" stroke-miterlimit="10"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </G>
            <Defs>
                <ClipPath id="clip0_1_162">
                    <Rect width="24" height="24" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default CleaningIcon;