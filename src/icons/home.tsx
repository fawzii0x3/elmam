import Svg, { SvgProps, Path, Mask } from "react-native-svg"
import { Ref, forwardRef } from "react"
const SvgComponent = (props: SvgProps, ref: Ref<Svg>) => (
    <Svg
        fill="none"
        viewBox="0 0 25 24"
        ref={ref}
        {...props}
    >
        <Path fill="#fff" d="M.6 0h24v24H.6z" />
        <Path
            fill="#1F7B58"
            stroke="#1F7B58"
            strokeWidth={1.5}
            d="M10.799 3.345c.992-.796 2.602-.794 3.613.011l6.546 5.237c.336.275.64.717.839 1.237s.267 1.052.202 1.482l-1.258 7.53v.002c-.23 1.314-1.521 2.406-2.841 2.406H7.3c-1.342 0-2.601-1.064-2.83-2.395v-.002l-1.26-7.537v-.001c-.074-.432-.01-.966.188-1.484s.505-.96.85-1.235h.001z"
            opacity={0.4}
        />
        <Mask id="a" fill="#fff">
            <Path d="M12.6 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75" />
        </Mask>
        <Path
            fill="#1F7B58"
            d="M12.6 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        />
        <Path
            fill="#1F7B58"
            d="M12.6 17.25c.418 0 .75.332.75.75h-3a2.255 2.255 0 0 0 2.25 2.25zm.75.75v-3h-3v3zm0-3c0 .418-.332.75-.75.75v-3A2.255 2.255 0 0 0 10.35 15zm-.75.75a.745.745 0 0 1-.75-.75h3a2.255 2.255 0 0 0-2.25-2.25zm-.75-.75v3h3v-3zm0 3c0-.418.332-.75.75-.75v3A2.255 2.255 0 0 0 14.85 18z"
            mask="url(#a)"
        />
    </Svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default ForwardRef
