import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";


interface CustomButtomProps extends PressableProps {
    children: string;
    color: 'primary' | 'secondary' | 'tertiary';
    variante?: "contained" | "text-only";
    className?: string;
}
    


const CustomButtom = React.forwardRef (({children, color = "primary", onPress, onLongPress, variante = "contained", className } : CustomButtomProps, ref: React.Ref<View>) => {

    const btnColor ={
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color]

    const textColor  ={
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[color]

    if(variante === "text-only"){
        return (
            <Pressable
            className={`p-3 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
            ref={ref}
            >
                <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
            </Pressable>
        )
    }
    
    return (
        <Pressable
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
        >
            <Text className="text-white text-center">{children}</Text>
        </Pressable>
    )
})

export default CustomButtom;