import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar} from "react-native-paper";
import {faker, fakerAR} from '@faker-js/faker'
import {ScrollView, Text, View} from "react-native";
import {LinearBackground} from "@/components";
import {FontAwesome} from "@expo/vector-icons";

export default function Page() {
    return <LinearBackground>
        <SafeAreaView style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Avatar.Image source={{uri: faker.image.avatar()}}/>
                    <View>
                        <Text>حياك اللّه👋</Text>
                        <Text>{fakerAR.person.fullName()}</Text>
                    </View>
                </View>
                <View>
                    <FontAwesome name="bell" size={24} color="black"/>
                </View>
            </View>
            <ScrollView>
                {/*card*/}
                <View>

                </View>
                {/* new listing */}
                <View>
                </View>
                {/* new programs */}
            </ScrollView>
        </SafeAreaView>
    </LinearBackground>
}
