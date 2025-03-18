import {Tabs} from "expo-router";
import {useTheme} from "react-native-paper";
import {AntDesign, Entypo, Feather, Octicons} from "@expo/vector-icons";

export default function TabsLayout() {
    const {colors} = useTheme()
    return <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
    }}>
        <Tabs.Screen
            name={'profile'} options={{
            title: 'الملف الشخصي',
            tabBarIcon: (props) => <AntDesign name="user"  {...props} />
        }}
        />
        <Tabs.Screen
            name={'courses'} options={{
            title: 'الدورات',
            tabBarIcon: (props) => <Feather name="book-open" {...props} />
        }}
        />
        <Tabs.Screen
            name={'points'} options={{
            title: 'النقاط',
            tabBarIcon: (props) => <AntDesign name="staro"  {...props} />
        }}
        />
        <Tabs.Screen
            name={'discussions'} options={{
            title: 'المحادثات',
            tabBarIcon: (props) => <Octicons name="comment-discussion" {...props} />
        }}
        />
        <Tabs.Screen
            name={'index'} options={{
            title: 'الرئيسية',
            tabBarIcon: (props) => <Entypo name="home" {...props} />
        }}
        />
    </Tabs>
}
