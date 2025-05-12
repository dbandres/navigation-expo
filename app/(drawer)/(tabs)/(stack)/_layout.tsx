import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";


const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeft = (canGoBack: boolean) => {
        if(canGoBack){
            router.back();
        }else{
            navigation.dispatch(DrawerActions.toggleDrawer);
        }
    }


    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle:{backgroundColor: "#ffffff"},
                    headerLeft: ({tintColor, canGoBack}) => (
                        <Ionicons
                            name={ canGoBack ? "arrow-back" : "grid-outline"}
                            size={18}
                            className="mr-2"
                            color={tintColor}
                            onPress={() => onHeaderLeft(canGoBack ?? false)}
                        />
                    )
            }}
           
        >
            <Stack.Screen 
                name="home/index" 
                options={{
                    title: "Home ",
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
                    title: "Profile ",
                }}
            />
            <Stack.Screen 
                name="settings/index" 
                options={{
                    title: "Settings ",
                }}
            />
        </Stack>
    )
}

export default StackLayout;