import {Avatar, useTheme} from "react-native-paper";
import {faker, fakerAR} from "@faker-js/faker";
import {FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {LinearBackground} from "@/components";
import {
    AntDesign,
    FontAwesome, FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import {Link} from "expo-router";
import {format} from "date-fns";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Image} from "expo-image";

export default function Page() {
    const {bottom} = useSafeAreaInsets();
    const {colors} = useTheme();
    return (
        <LinearBackground>
            <View style={{flex: 1, paddingTop: 24}}>
                {/* Header */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: 24,
                        paddingTop: 16,
                        paddingBottom: 120,
                    }}
                >
                    {/* Notification Icon */}
                    <View
                        style={{
                            borderColor: "white",
                            borderRadius: 32,
                            borderWidth: 1,
                            padding: 12,
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                        }}
                    >
                        <FontAwesome name="bell" size={24} color="white"/>
                    </View>

                    {/* User Info */}
                    <View
                        style={{
                            flexDirection: "row-reverse",
                            alignItems: "center",
                            gap: 8,
                        }}
                    >
                        <Avatar.Image source={{uri: faker.image.avatar()}}/>
                        <View style={{alignItems: "flex-end"}}>
                            <Text style={{fontSize: 16, fontWeight: "700", color: "gray"}}>حياك اللّه 👋</Text>
                            <Text style={{fontSize: 24, fontWeight: "900", color: "white"}}>
                                {fakerAR.person.fullName()}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Score Section */}
                <View
                    style={{
                        padding: 8,
                        borderRadius: 24,
                        width: "90%",
                        alignSelf: "center",
                        position: "absolute",
                        zIndex: 2,
                        top: 140,
                        shadowColor: "gray",
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 10,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            borderTopEndRadius: 24,
                            borderTopLeftRadius: 24,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingVertical: 16,
                            gap: 8,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#FFB703",
                                padding: 2,
                                borderRadius: 50,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="crown-circle-outline"
                                size={24}
                                color="#F99300"
                            />
                        </View>
                        <Text style={{fontSize: 14, fontWeight: "600", color: "black"}}>
                            نقاطك الحالية
                        </Text>
                        <Text
                            style={{
                                letterSpacing: 2,
                                fontSize: 32,
                                fontWeight: "900",
                                color: "#21482A",
                            }}
                        >
                            23424
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#21482A",
                            height: 60,
                            borderBottomEndRadius: 24,
                            borderBottomLeftRadius: 24,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                width: "85%",
                                justifyContent: "space-between",
                            }}
                        >
                            <View
                                style={{
                                    borderColor: "white",
                                    borderRadius: 32,
                                    borderWidth: 1,
                                    paddingHorizontal: 12,
                                    paddingVertical: 4,
                                    alignSelf: "center",
                                    backgroundColor: "white",
                                }}
                            >
                                <Text
                                    style={{fontSize: 12, fontWeight: "900", color: "#F39C12"}}
                                >
                                    4.8
                                </Text>
                            </View>
                            <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
                                <Text style={{fontSize: 16, fontWeight: "400", color: "white"}}>
                                    المستوى : خبير
                                </Text>
                                <View
                                    style={{
                                        borderColor: "white",
                                        borderRadius: 50,
                                        padding: 4,
                                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name="crown-outline"
                                        size={24}
                                        color="white"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Main Content */}
                <View style={{backgroundColor: "#F7f7f8", flex: 1}}>
                    <View style={{height: 140}}/>
                    <ScrollView contentContainerStyle={{paddingBottom: 24}}>
                        <View
                            style={{
                                backgroundColor: "#F7f7f8",
                                paddingVertical: 16,
                                borderRadius: 16,
                                width: "90%",
                                alignSelf: "center",
                            }}
                        >
                            {/* New Listings */}
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 16,
                                    paddingHorizontal: 16,
                                }}
                            >
                                <Link href={'/protected/opportunities'}
                                      style={{fontSize: 16, fontWeight: "700", color: "green"}}>
                                    عرض الكل
                                </Link>
                                <Text style={{fontSize: 20, fontWeight: "700", color: "black"}}>
                                    الفرص الجديدة
                                </Text>
                            </View>
                            <FlatList
                                inverted
                                horizontal
                                showsHorizontalScrollIndicator={false}
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
                                                gap:17
                                            }}>
                                                {/* avatar & job & date */}
                                                <View style={{
                                                    flexDirection: 'row-reverse',
                                                    alignItems: 'center',
                                                    gap: 8
                                                }}>
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
                                                <View style={{
                                                    flexDirection: 'row-reverse',
                                                    alignItems: 'center',
                                                    gap: 4
                                                }}>
                                                    <View style={{
                                                        padding: 8,
                                                        backgroundColor: '#EDF7EF',
                                                        borderRadius: '50%'
                                                    }}>
                                                        <AntDesign name="calendar" size={24} color={colors.primary}/>
                                                    </View>
                                                    <View style={{alignItems: 'flex-end'}}>
                                                        <Text>{'المدة'}</Text>
                                                        <Text>{`${item.duration} شهور`}</Text>
                                                    </View>
                                                </View>
                                                {/*location*/}
                                                <View style={{
                                                    flexDirection: 'row-reverse',
                                                    alignItems: 'center',
                                                    gap: 4
                                                }}>
                                                    <View style={{
                                                        paddingVertical: 8,
                                                        paddingHorizontal: 10,
                                                        backgroundColor: '#EDF7EF',
                                                        borderRadius: '50%'
                                                    }}>
                                                        <FontAwesome name="map-marker" size={24}
                                                                     color={colors.primary}/>
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

                            {/* New Courses */}
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: 24,
                                    paddingHorizontal: 16,
                                }}
                            >
                                <Link href={'/protected/opportunities'} style={{fontSize: 16, fontWeight: "700", color: "green"}}>
                                    عرض الكل
                                </Link>
                                <Text style={{fontSize: 20, fontWeight: "700", color: "black"}}>
                                    الدورات الجديدة
                                </Text>
                            </View>
                            <FlatList
                                inverted
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={() => <Card/>}
                                data={Array.from({length: 10}, () => ({id: faker.string.uuid()}))}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </ScrollView>
                </View>

            </View>
        </LinearBackground>
    );
}

function Card() {
    return (
        <View
            style={{
                borderRadius: 24,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "gray",
                margin: 8,
            }}
        >
            <Image
                source={{uri: faker.image.personPortrait()}}
                style={{
                    height: 120,
                    width: 250,
                    backgroundColor: "gray",
                    borderRadius: 24,
                    margin: 12,
                }}
            />
            <View style={{padding: 12, alignItems: "flex-end"}}>
                <Text style={{fontSize: 16, fontWeight: "700", color: "#21482A"}}>
                    ادارة المخاطر
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        gap: 16,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 8,

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "700",
                                color: "#3F3F50",
                            }}
                        >
                            90 دقيقة
                        </Text>

                        <MaterialCommunityIcons
                            name="timer-outline"
                            size={24}
                            color="green"
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 8,

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "700",
                                color: "#3F3F50",
                            }}
                        >
                            مستوى متقدم
                        </Text>
                        <Ionicons
                            name="calendar-outline"
                            size={24}
                            color="green"
                        />
                    </View>
                </View>

            </View>

        </View>
    );
}
