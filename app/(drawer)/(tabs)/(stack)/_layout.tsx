import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import { View } from "react-native";


const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeft = (canGoBack: boolean) => {
        if (canGoBack) {
            router.back();
        } else {
            navigation.dispatch(DrawerActions.toggleDrawer);
        }
    }


    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: { backgroundColor: "#ffffff" },
                headerLeft: ({ tintColor, canGoBack }) => (
                    <View className="flex items-center w-10 h-10 justify-center ">
                        <Ionicons
                            name={canGoBack ? "arrow-back" : "grid-outline"}
                            size={20}
                            color={"black"}
                            onPress={() => onHeaderLeft(canGoBack ?? false)}
                        />
                    </View>

                )
                /* headerLeft: () => (<Text>Hola</Text>) */
            }}

        >
            <Stack.Screen
                name="home/index"
                options={{
                    title: "Inicio",
                }}
            />
            <Stack.Screen
                name="productos/index"
                options={{
                    title: "Productos ",
                }}
            />
            <Stack.Screen
                name="profile/index"
                options={{
                    title: "Perfil",
                }}
            />
            <Stack.Screen
                name="settings/index"
                options={{
                    title: "Configuración",
                }}
            />
        </Stack>
    )
}

export default StackLayout;