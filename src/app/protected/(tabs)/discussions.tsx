import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";

export default function Page() {
    return <SafeAreaView style={{flex: 1}}>
        <Link href={'/protected/opportunities'} >
            test
        </Link>
    </SafeAreaView>
}
