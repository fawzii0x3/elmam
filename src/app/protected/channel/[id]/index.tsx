import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {Avatar, useTheme} from "react-native-paper";
import {faker, fakerAR} from '@faker-js/faker'
import { SectionList, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import {format, isToday, isYesterday} from 'date-fns'
import { Feather} from "@expo/vector-icons";
import { useRouter} from "expo-router";


const data = Array.from({length: 50}, () => ({
    id: faker.string.uuid(),
    displayName: fakerAR.person.fullName(),
    avatar: faker.image.avatar(),
    message: faker.word.words(),
    date: faker.date.recent(),
    isMe: faker.datatype.boolean(0.2)
}))

type GroupedData = { [key: string]: typeof data };

const groupedData = data.reduce((acc: GroupedData, item) => {
    const date = format(item.date, 'yyyy-MM-dd')
    if (!acc[date]) {
        acc[date] = []
    }
    acc[date].push(item)
    return acc
}, {} as GroupedData)


const sectionsNoNOrdered = Object.keys(groupedData).map((key) => ({
    title: key,
    data: groupedData[key]
}))

const sections = sectionsNoNOrdered.sort((a, b) => {
    return new Date(a.title).getTime() - new Date(b.title).getTime()
})

const ChatMessage = ({item, showAvatar}: { item: typeof data[0], showAvatar: boolean }) => {
    const isMe = item.isMe;

    return (
        <View style={[
            styles.messageContainer,
            isMe ? styles.myMessageContainer : styles.otherMessageContainer
        ]}>
            {!isMe && showAvatar && (
                <Avatar.Image
                    source={{uri: item.avatar}}
                    size={40}
                    style={styles.avatar}
                />
            )}

            <View style={[
                styles.messageContent,
                isMe ? styles.myMessageContent : styles.otherMessageContent
            ]}>
                {!isMe && showAvatar && (
                    <Text style={styles.senderName}>{item.displayName}</Text>
                )}

                <View style={[
                    styles.messageBubble,
                    isMe ? styles.myMessageBubble : styles.otherMessageBubble
                ]}>
                    <Text style={isMe ? styles.myMessageText : styles.otherMessageText}>
                        {item.message}
                    </Text>
                    <Text style={[
                        styles.timeText,
                        isMe ? styles.myTimeText : styles.otherTimeText
                    ]}>
                        {format(item.date, 'HH:mm')}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const ChatHeader = () => {
    const {back,canGoBack} = useRouter();
    const {colors} = useTheme();

    return (
        <View style={{
            flexDirection: 'row-reverse',
            alignItems: 'center',
            paddingTop: 16,
            paddingBottom: 16
        }}>
            <TouchableOpacity
                style={{
                    paddingRight: 16 + 24,
                    paddingLeft: 16,
                    paddingVertical: 16,
                }}
                onPress={() => {
                    if (canGoBack()) {
                        back()
                    }
                }}
            >
                <Feather
                    name="chevron-right" size={24} color="#ffffff"/>
            </TouchableOpacity>
            <Avatar.Image source={{uri: faker.image.avatar()}}/>
            <View style={{paddingRight: 16}}>
                <Text style={{
                    fontFamily: 'ar-bold',
                    fontSize: 18,
                    lineHeight: 30,
                    textAlign: 'center',
                    color: '#fff'
                }}>{fakerAR.person.fullName()}</Text>
            </View>
        </View>
    );
};

const formatSectionDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isToday(date)) return 'Today';
    if (isYesterday(date)) return 'Yesterday';
    return format(date, 'MMMM d, yyyy');
};

export default function Page() {
    const {bottom} = useSafeAreaInsets();
    const {colors} = useTheme();

    return (
        <SafeAreaView style={[styles.container]}>
            <ChatHeader/>
            <SectionList
                sections={sections}
                stickySectionHeadersEnabled={false}
                contentContainerStyle={{
                    backgroundColor: '#F7F7F8',
                    paddingHorizontal: 24,
                    paddingTop: 16,
                    gap: 16,
                    paddingBottom: bottom + 16,
                }}
                renderItem={({item, index, section}) => {
                    const prevItem = section.data[index - 1];
                    const showAvatar = !prevItem ||
                        prevItem.displayName !== item.displayName ||
                        item.date.getTime() - prevItem.date.getTime() > 5 * 60 * 1000;

                    return <ChatMessage item={item} showAvatar={!item.isMe && showAvatar}/>;
                }}
                renderSectionHeader={({section}) => (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>
                            {formatSectionDate(section.title)}
                        </Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    backButton: {
        marginRight: 16,
    },
    headerAvatar: {
        marginRight: 12,
    },
    headerName: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginHorizontal: 16,
        marginVertical: 4,
    },
    myMessageContainer: {
        justifyContent: 'flex-end',
    },
    otherMessageContainer: {
        justifyContent: 'flex-start',
    },
    avatar: {
        marginRight: 8,
    },
    messageContent: {
        maxWidth: '80%',
    },
    myMessageContent: {
        alignItems: 'flex-end',
    },
    otherMessageContent: {
        alignItems: 'flex-start',
    },
    senderName: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    messageBubble: {
        borderRadius: 16,
        padding: 12,
        marginBottom: 4,
    },
    myMessageBubble: {
        backgroundColor: '#DCF8C6',
        borderBottomRightRadius: 4,
    },
    otherMessageBubble: {
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 4,
        elevation: 1,
    },
    myMessageText: {
        color: '#000',
        fontSize: 16,
    },
    otherMessageText: {
        color: '#000',
        fontSize: 16,
    },
    timeText: {
        fontSize: 10,
        marginTop: 4,
    },
    myTimeText: {
        color: '#666',
        textAlign: 'right',
    },
    otherTimeText: {
        color: '#666',
    },
    sectionHeader: {
        alignSelf: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginVertical: 8,
    },
    sectionHeaderText: {
        fontSize: 12,
        color: '#666',
    },
});
