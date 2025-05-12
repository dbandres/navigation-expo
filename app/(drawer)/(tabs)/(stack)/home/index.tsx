import CustomButtom from "@/components/share/CustomButtom";
import { router } from "expo-router";
import { SafeAreaView, View } from "react-native";



const Home = () => {

    return (
        <SafeAreaView>
            <View className="px-10">
                <CustomButtom
                    children="Productos"
                    color="primary"
                    onPress={() => router.push('/productos')}
                    className="mt-2"
                />
                <CustomButtom
                    children="Perfil"
                    color="secondary"
                    onPress={() => router.push('/profile')}
                    className="mt-2"
                />

                <CustomButtom
                    children="Configuración"
                    color="tertiary"
                    onPress={() => router.push('/settings')}
                    className="mt-2"
                />

            </View>
        </SafeAreaView>

    )
}

export default Home;