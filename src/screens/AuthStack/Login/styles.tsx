import React from "react";
import { StyleSheet } from "react-native";
import { hs, vs } from "../../../utils/styleUtils";
import { fonts } from "../../../utils/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imgBg: {
        alignItems: 'center',
        width: "100%",
        height: vs(300)
    },
    headerTitle: {
        fontFamily: fonts.bold, marginTop: vs(30)
    },
    imgStyleBGImg: {
        width: hs(70),
        height: vs(70),
        resizeMode: 'contain',
        position: 'absolute',
        bottom: vs(40)
    },
    mainContainer: {
        flex: 1, backgroundColor: 'white'
    },
    container2: {
        marginHorizontal: hs(30)
    },
    emailTitle: {
        fontFamily: fonts.regular, fontWeight: '400', color: 'black', marginTop: vs(30)
    },
    textInputComponentStyle: {
        marginTop: vs(15)
    },
    emailTextInputStyle: {
        shadowOpacity: 0.5,
        elevation: 5,
        width: '100%',
        borderRadius: 4,
        backgroundColor: 'white',
    },
    passwordTitle: {
        fontFamily: fonts.regular, fontWeight: '400', color: 'black', marginTop: vs(30)
    },
    passwordTextInputStyle: {
        shadowOpacity: 0.5,
        elevation: 5,
        width: '100%',
        borderRadius: 4,
        backgroundColor: 'white',
    },
    forgotPasswordText: {
        alignSelf: 'flex-end', marginTop: vs(10), fontFamily: fonts.regular, fontWeight: '400', color: '#828282'
    },
    signInBtnStyle: {
        width: hs(100),
        backgroundColor: '#21D393',
        borderRadius: 4,
        alignSelf: 'flex-end',
        marginTop: vs(17)
    },
    noMemberTextStyle: {
        alignSelf: 'flex-end', marginTop: vs(12), fontFamily: fonts.regular, fontWeight: '400'
    },
    registerHereStyle: {
        textDecorationLine: 'underline', alignSelf: 'flex-end', marginTop: vs(12), fontFamily: fonts.regular, fontWeight: '400'
    },
    socialLoginContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftOrLineStyle: {
        backgroundColor: '#4F4F4F'
    },
    orText: {
        fontWeight: '400'
    },
    rightOrLineStyle: {
        backgroundColor: '#4F4F4F'
    },
    container3: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'
    },
    socialLoginImgStyle: {
        resizeMode: 'contain',
        width: hs(45),
        height: vs(45)
    },
    guestTextStyle: {
        alignSelf: 'flex-end', marginTop: vs(12), fontFamily: fonts.regular, fontWeight: '400', color: '#828282'
    }
})

export default styles;