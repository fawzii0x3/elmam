import Svg, {
    SvgProps,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
import {Ref, forwardRef} from "react"

const SvgComponent = (props: SvgProps, ref: Ref<Svg>) => (
    <Svg
        width={522}
        height={522}
        viewBox="0 0 522 522"
        fill="none"
        ref={ref}
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M235.763 271.56 65.148 442.177l47.358 47.357a35.65 35.65 0 0 0 25.215 10.444 35.66 35.66 0 0 0 25.216-10.444l98.043-98.043 98.041 98.043a35.66 35.66 0 0 0 50.432 0l47.357-47.357L286.194 271.56a35.664 35.664 0 0 0-50.431 0"
            fill="url(#a)"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M235.763 32.56 65.148 203.177l47.358 47.357a35.65 35.65 0 0 0 25.215 10.444 35.66 35.66 0 0 0 25.216-10.444l98.043-98.043 98.041 98.043a35.66 35.66 0 0 0 50.432 0l47.357-47.357L286.194 32.56a35.66 35.66 0 0 0-50.431 0"
            fill="url(#b)"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={464.5}
                y1={439}
                x2={67}
                y2={436}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#18231E"/>
                <Stop offset={1} stopColor="#143E29"/>
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={464.5}
                y1={200}
                x2={67}
                y2={197}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#18231E"/>
                <Stop offset={1} stopColor="#143E29"/>
            </LinearGradient>
        </Defs>
    </Svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default ForwardRef
