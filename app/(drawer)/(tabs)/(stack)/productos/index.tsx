
import products from "@/app/store/products.store";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";



const Products = () => {
    return (
        <View className="flex flex-1 px-2">

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="mt-10 border-b border-gray-200">
                        <Text className="text-lg font-work-black">{item.title}</Text>
                        <Text className="text-sm text-gray-500">{item.description}</Text>
                        <View className="flex flex-row justify-between">
                            <Text className="text-lg font-bold">{item.price}</Text>
                            <Link href={`/productos/${item.id}`} className="text-primary">
                                Ver detalle
                            </Link>
                        </View>

                    </View>
                )}

            />
        </View>


    )
}

export default Products;