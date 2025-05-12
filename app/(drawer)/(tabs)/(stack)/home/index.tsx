import CustomButtom from "@/components/share/CustomButtom";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { SafeAreaView, View } from "react-native";



const Home = () => {

    const navigation = useNavigation();

    const toggleDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer);
    }


    return (
        <SafeAreaView>
            <View className="px-10">
                <CustomButtom
                    children="Go Products"
                    color="primary"
                    onPress={() => router.push('/productos')}
                    className="mt-2"
                />
                <CustomButtom
                    children="Go Profile"
                    color="secondary"
                    onPress={() => router.push('/profile')}
                    className="mt-2"
                />

                <CustomButtom
                    children="Go Settings"
                    color="tertiary"
                    onPress={() => router.push('/settings')}
                    className="mt-2"
                />
                <CustomButtom
                    children="Abrir menú"
                    color="secondary"
                    className="mt-2"
                    onPress={toggleDrawer}
                />

                <Link href="/productos" asChild>
                    <CustomButtom
                        children="Go Products"
                        color="secondary"
                        onPress={() => router.push('/productos')}
                        className="mt-2"
                        variante="text-only"
                    />
                </Link>

            </View>
        </SafeAreaView>

    )
}

export default Home;