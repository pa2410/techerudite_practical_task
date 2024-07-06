import React from "react";
import { Text, Pressable, StyleProp, ViewStyle, TextStyle, PressableProps } from 'react-native'
import { mpStyle, vs } from "../utils/styleUtils";
import { fonts } from "../utils/fonts";

interface Props {
    title: string,
    onPress: () => void,
    btnStyle?: StyleProp<ViewStyle>
    mpBtn?: mpStyle,
    btnHeight?: number,
    radius?: number,
    textSize?: number,
    labelStyle?: StyleProp<TextStyle>,
    mpLabel?: mpStyle,
    textColor?: string,
    leftIcon?: () => void,
    rightIcon?: () => void
}

const Btn: React.FC<Props & PressableProps> = ({
    title,
    onPress,
    btnStyle,
    mpBtn,
    btnHeight,
    radius = 0,
    textSize,
    labelStyle,
    mpLabel,
    textColor,
    leftIcon,
    rightIcon,
    ...restProps
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[{
                height: vs(btnHeight || 30),
                ...mpStyle({ ...mpBtn }),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: radius,
                backgroundColor: 'black',
                flexDirection: 'row'
            }, btnStyle]}
            {...restProps}
        >
            {leftIcon ? leftIcon() : null}
            <Text
                style={[{
                    color: textColor,
                    fontFamily: fonts.regular,
                    fontSize: textSize || 12,
                    ...mpStyle({ ...mpLabel }),
                }, labelStyle]}
                allowFontScaling={false}
            >
                {title}
            </Text>
            {rightIcon ? rightIcon() : null}
        </Pressable>
    )
}

export default Btn;