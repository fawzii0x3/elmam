import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {Avatar, useTheme} from "react-native-paper";
import {faker, fakerAR} from '@faker-js/faker'
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {format} from 'date-fns'
import {AntDesign, Feather, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import {Link, useRouter} from "expo-router";

export default function Page() {
    const {top, bottom} = useSafeAreaInsets()
    const {colors} = useTheme()
    const {canGoBack, back} = useRouter()
    return (
        <SafeAreaView style={{flex: 1}} edges={['top']}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 24,
                paddingTop: 16,
                paddingBottom: top
            }}>
                <View style={{padding: 10 + 12 + 1}}/>
                <Text style={{
                    fontFamily: 'ar-bold',
                    fontSize: 18,
                    lineHeight: 30,
                    textAlign: 'center',
                    color: '#fff'
                }}>الفرص</Text>
                <TouchableOpacity
                    onPress={() => {
                        if (canGoBack()) {
                            back()
                        }
                    }}
                    style={{borderWidth: 1, borderColor: '#fff', borderRadius: "50%", padding: 10}}>
                    <Feather
                        name="chevron-right" size={24} color="#ffffff"/>
                </TouchableOpacity>
            </View>
            <FlatList
                contentContainerStyle={{
                    backgroundColor: '#F7F7F8',
                    paddingHorizontal: 24,
                    paddingTop: 16,
                    gap: 16,
                    paddingBottom: bottom + 16
                }}
                data={Array.from({length: 50}, () => ({
                    id: faker.string.uuid(),
                    job: fakerAR.person.jobArea(),
                    date: faker.date.recent(),
                    duration: faker.number.int({
                        min: 1,
                        max: 12
                    }),
                    location: fakerAR.location.city(),
                    image: faker.image.avatar(),
                    cost: faker.finance.amount(),
                }))}
                renderItem={({item}) => {
                    return <Link href={`/protected/opportunities/${item.id}`} asChild>
                        <TouchableOpacity style={{
                            gap: 17,
                            borderRadius: 16,
                            borderWidth: 1,
                            padding: 20,
                            borderColor: '#EBEBEF',
                            backgroundColor: '#fff'
                        }}>
                            {/* title */}
                            <View style={{
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                {/* avatar & job & date */}
                                <View style={{flexDirection: 'row-reverse', alignItems: 'center', gap: 8}}>
                                    <Avatar.Image source={{uri: item.image}}/>
                                    <View style={{alignItems: 'flex-end',}}>
                                        <Text>{item.job}</Text>
                                        <Text>{format(new Date(item.date), 'dd/MM/yyyy')}</Text>
                                    </View>
                                </View>
                                {/* cost */}
                                <View style={{
                                    backgroundColor: '#4FAC63',
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    borderRadius: 50,
                                    paddingVertical: 4,
                                    paddingHorizontal: 8,
                                    gap: 4
                                }}>
                                    <FontAwesome5 name="coins" size={24} color="#F99300"/>
                                    <Text
                                        style={{color: '#fff'}}
                                    >{item.cost}</Text>
                                </View>
                            </View>
                            {/* location & duration */}
                            <View style={{
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 16
                            }}>
                                {/*duration*/}
                                <View style={{flexDirection: 'row-reverse', alignItems: 'center', gap: 4}}>
                                    <View style={{padding: 8, backgroundColor: '#EDF7EF', borderRadius: '50%'}}>
                                        <AntDesign name="calendar" size={24} color={colors.primary}/>
                                    </View>
                                    <View style={{alignItems: 'flex-end'}}>
                                        <Text>{'المدة'}</Text>
                                        <Text>{`${item.duration} شهور`}</Text>
                                    </View>
                                </View>
                                {/*location*/}
                                <View style={{flexDirection: 'row-reverse', alignItems: 'center', gap: 4}}>
                                    <View style={{
                                        paddingVertical: 8,
                                        paddingHorizontal: 10,
                                        backgroundColor: '#EDF7EF',
                                        borderRadius: '50%'
                                    }}>
                                        <FontAwesome name="map-marker" size={24} color={colors.primary}/>
                                    </View>
                                    <View style={{alignItems: 'flex-end'}}>
                                        <Text>{'الموقع'}</Text>
                                        <Text>{item.location}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Link>
                }}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}
