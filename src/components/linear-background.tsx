import type {PropsWithChildren} from "react";
import {LinearGradient} from 'expo-linear-gradient'
import {BackgroundArrows} from "@/icons";

export function LinearBackground({children}: PropsWithChildren) {
    return <LinearGradient
        style={{flex: 1}}
        colors={['#1B4232', '#257859']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
    >
        {/*<BackgroundArrows*/}
        {/*    style={{*/}
        {/*        position: 'absolute',*/}
        {/*        left: '50%',*/}
        {/*        top: 20,*/}
        {/*        transform: [{translateX: "-50%"}],*/}
        {/*    }}*/}
        {/*/>*/}
        {children}
    </LinearGradient>
}
