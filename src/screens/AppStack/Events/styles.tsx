import React from "react";
import { StyleSheet } from "react-native";
import { vs } from "../../../utils/styleUtils";
import { fonts } from "../../../utils/fonts";

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'white', height: vs(120), justifyContent: 'center'
    },
    headerTitle1: {
        fontFamily: fonts.regular, fontWeight: '600', color: '#0F0F0F'
    },
    headerTitle2: {
        fontFamily: fonts.medium, fontWeight: '400', color: '#0F0F0F40'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutStyleBtn: {
        width: "100%",
        backgroundColor: '#21D393',
        borderRadius: 4,
    }
});

export default styles;