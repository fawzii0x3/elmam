import {View, StyleSheet} from "react-native";
import {Logo} from "@/icons";
import PagerView from "react-native-pager-view";
import {Text} from "react-native-paper";
import {Image} from 'expo-image'
import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, useRouter} from "expo-router";
import {useRef} from "react";
import {useSharedValue} from "react-native-reanimated";
import {ProgressButton} from "@/components";
import {PagerViewOnPageScrollEvent} from "react-native-pager-view";


const Map = [
    {
        source: require('@/assets/screen1.png'),
        title: 'شارك بوقتك، اصنع فرقًا!🚀',
        description: 'سواء كنت تبحث عن فرصة تطوعية أو تحتاج لدعم في مشاريعك المجتمعية، يوفر تطبيقنا منصة تجمع بين المتطوعين والمؤسسات من أجل تحقيق الأثر الإيجابي."'
    },
    {
        source: require('@/assets/screen2.png'),
        title: 'كل مجهود له مكافأة 💰',
        description: 'سواء كنت تبحث عن فرصة تطوعية أو تحتاج لدعم في مشاريعك المجتمعية، يوفر تطبيقنا منصة تجمع بين المتطوعين والمؤسسات من أجل تحقيق الأثر الإيجابي."'
    },
    {
        source: require('@/assets/screen3.png'),
        title: 'تطوع يناسب شغفك ✨',
        description: 'استعرض فرص تطوعية تتناسب مع اهتماماتك ومهاراتك، وابدأ رحلتك نحو تعزيز مجتمعك وكسب خبرات جديدة'
    }
]

export default function Page() {
    const {push} = useRouter()
    const pagerRef = useRef<PagerView>(null);
    const pageCount = Map.length;
    const progress = useSharedValue(0);
    const onPageScroll = ({nativeEvent: {position, offset}}: PagerViewOnPageScrollEvent) => {
        progress.value = (position + offset) / (pageCount - 1);
    };

    const handleArrowPress = () => {
        if (pagerRef.current) {
            const currentPage = Math.floor(progress.value * (pageCount - 1));
            const nextPage = Math.min(currentPage + 1, pageCount - 1);
            pagerRef.current.setPage(nextPage);
            if (nextPage === pageCount - 1) {
                push('/auth/sign-in')
            }
        }
    };
    return (
        <LinearGradient
            style={{flex: 1}}
            colors={['#C8E5CF', '#fff']}
        >
            <SafeAreaView style={{flex: 1, paddingHorizontal: 24}}>
                <View style={{alignItems: 'center', paddingTop: 24}}>
                    <Logo/>
                </View>
                <PagerView style={styles.container} initialPage={0} layoutDirection={'rtl'} ref={pagerRef}
                           onPageScroll={onPageScroll}
                >
                    {Map.map((item, index) => (
                        <View style={styles.page} key={index + 1}>
                            <Image source={item.source} style={{height: 320, width: "100%"}}
                                   contentFit={'contain'}/>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 24,
                                    textAlign: 'center',
                                    lineHeight: 30,
                                }}>{item.title}</Text>
                                <Text style={{
                                    fontWeight: 'normal',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    lineHeight: 20,
                                    letterSpacing: 2
                                }}>{item.description}</Text>
                            </View>
                        </View>
                    ))}
                </PagerView>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <ProgressButton
                        onPress={handleArrowPress}
                        progressValue={progress}
                        size={50}
                        strokeWidth={5}
                    />
                    <Link style={{color: "#8a8aa3", padding: 10}} href={'/protected'}>
                        تخطي
                    </Link>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 20
    },
});
