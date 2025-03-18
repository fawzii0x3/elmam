import {View, TouchableOpacity} from "react-native";
import Svg, {Circle} from "react-native-svg";
import Animated, {
    useAnimatedProps,
    interpolate, SharedValue
} from "react-native-reanimated";
import {AntDesign} from "@expo/vector-icons";
import {useTheme} from "react-native-paper";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function ProgressButton({progressValue, size = 100, strokeWidth = 6, onPress}: {
    progressValue: SharedValue<number>;
    size?: number;
    strokeWidth?: number;
    onPress?: () => void;
}) {
    const {colors} = useTheme();
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: interpolate(
            progressValue.value,
            [0, 1],
            [circumference, 0]
        ),
    }));

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{width: size, height: size, alignItems: "center", justifyContent: "center"}}>
                <Svg width={size} height={size}>
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={colors.primary}
                        strokeWidth={strokeWidth}
                        fill="none"
                        opacity={0.2}
                    />
                    <AnimatedCircle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={colors.primary}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={circumference}
                        animatedProps={animatedProps}
                        strokeLinecap="round"
                    />
                </Svg>
                <View
                    style={{
                        position: "absolute",
                        width: size * 0.75,
                        height: size * 0.75,
                        borderRadius: size * 0.75 / 2,
                        backgroundColor: colors.primary,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <AntDesign name="left" size={size * 0.3} color="white"/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

