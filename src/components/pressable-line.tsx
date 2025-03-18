import {Link, LinkProps} from "expo-router";
import React, {ReactElement} from "react";
import {TouchableOpacity, View} from "react-native";
import {Text} from "react-native-paper";
import {Entypo} from "@expo/vector-icons";

interface PressableLineProps extends LinkProps {
    text: string
    Icon: ReactElement
    textColor?: string
    CustomComponent?: ReactElement
}

export function PressableLine({text, Icon, textColor = '#3F3F50', CustomComponent, ...props}: PressableLineProps) {
    return <Link {...props} asChild>
        <TouchableOpacity
            style={{flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                <Text
                    style={{
                        fontWeight: '500',
                        fontSize: 16,
                        color: textColor
                    }}
                >{text}</Text>
                <View style={{
                    backgroundColor: '#fff',
                    width: 24 * 2,
                    height: 24 * 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: "50%",
                    borderColor: '#EBEBEF',
                    borderWidth: 1
                }}>
                    {Icon}
                </View>
            </View>
            {CustomComponent ? CustomComponent : <Entypo name="chevron-thin-left" size={24} color="#6C8799"/>}
        </TouchableOpacity>
    </Link>

}
