import React from "react";
import { TextInputProps, TextStyle, View, TextInput, Pressable, StyleProp, ViewStyle } from "react-native";
import { mpStyle, fs, screenWidth, vs } from "../utils/styleUtils";
import Container from "./Container";
import Label from "./Label";
import { fonts } from "../utils/fonts";

interface Props {
    placeholder: string,
    onPress?: () => void,
    inputHeight?: number,
    radius?: number,
    leftIcon?: () => void,
    rightIcon?: () => void,
    mpInput?: mpStyle,
    mpContainer?: mpStyle,
    textSize?: number,
    containerStyle?: StyleProp<ViewStyle>,
    inputStyle?: StyleProp<ViewStyle | TextStyle>,
    onBlur?: () => void,
    editable?: boolean,
    touched?: boolean,
    error?: boolean,
    mpErrorStyle: mpStyle,
    mpInputContainer: mpStyle,
}

const InputBox: React.FC<Props & TextInputProps> = ({
    onPress,
    inputHeight,
    radius = 5,
    textSize,
    leftIcon,
    rightIcon,
    mpInput,
    mpContainer,
    containerStyle,
    inputStyle,
    touched,
    errors,
    mpErrorStyle,
    mpInputContainer,
    ...restProps
}) => {
    return (
        <View style={{
            ...mpStyle({ ...mpContainer })
        }}>
            <Pressable
                style={[{
                    height: inputHeight && vs(inputHeight),
                    borderRadius: radius,
                    flexDirection: 'row',
                    alignItems: "center",
                    ...mpStyle({ ...mpInputContainer }),
                }, containerStyle]}
                onPress={onPress}
            >
                {leftIcon && leftIcon()}
                <TextInput
                    style={[{
                        width: '85%',
                        height: vs(40),
                        ...mpStyle({ ...mpInput }),
                        fontSize: textSize || 14,
                        fontFamily: fonts.regular,
                        color: 'black',
                        paddingVertical: 0
                    }, inputStyle]}
                    allowFontScaling={false}
                    {...restProps}
                />
                {rightIcon && rightIcon()}
            </Pressable>
            {touched && errors &&
                <Container>
                    <Label
                        labelSize={10}
                        mpLabel={{}}
                        style={{
                            color: 'red',
                            textAlign: 'left',
                            fontFamily: fonts.regular,
                        }}
                    >{errors}</Label>
                </Container>
            }

        </View>
    )
}

export default InputBox;