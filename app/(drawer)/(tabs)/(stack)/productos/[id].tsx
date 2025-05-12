import products from "@/app/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";


const ProductScreen = () => {


    const {id} = useLocalSearchParams();
    const navigation = useNavigation();

    const product = products.find((product) => product.id === id);

    if (!product) {
        return <Redirect href="/productos" />
    }

    useEffect(() => {
        navigation.setOptions({
            title: product.title ?? "Producto",
        });
    }, [product]);

    return (
        <View className="px-5 mt-10">
            <Text className="text-2xl font-work-black">{product.title}</Text>
            <Text className="text-sm ">{product.description}</Text>
            <Text className="text-lg font-bold">{product.price}</Text>
        </View>
    )
}

export default ProductScreen;