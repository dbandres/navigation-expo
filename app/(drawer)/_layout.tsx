import CustomDrawer from "@/components/share/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
    return (
        <Drawer
        drawerContent={CustomDrawer}
            screenOptions={{
                overlayColor: "rgba(0, 0, 0, 0.4)",
                drawerActiveTintColor: "indigo",
                headerShadowVisible: false,
                sceneStyle:{
                    backgroundColor: "white",
                },
                
            }}
        >
            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the url from root
                options={{
                    headerShown: false,
                    drawerLabel: 'Inicio',
                    title: 'Inicio',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Usuario',
                    title: 'Usuario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Horario',
                    title: 'Horario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="calendar" color={color} size={size} />
                    ),
                }}
            />
        </Drawer>
    )
}

export default DrawerLayout;