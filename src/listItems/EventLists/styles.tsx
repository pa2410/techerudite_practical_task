import React from "react";
import { StyleSheet } from "react-native";
import { hs, vs } from "../../utils/styleUtils";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f2f2f2',
        backgroundColor: '#FFFFFF'
    },
    profileImgStyle: {
        width: hs(70),
        height: vs(70),
        borderRadius: 5,
        resizeMode: 'cover'
    },
    eventName: {
        fontWeight: '600', fontFamily: 'Gothic A1', color: '#181A1F'
    },
    container2: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: vs(5)
    },
    dateStyle: {
        fontFamily: 'Gothic A1', color: '#34A853'
    },
    citycountryStyle: {
        fontFamily: 'Gothic A1', color: '#6c757d', marginLeft: hs(15)
    },
    priceStyle: {
        fontWeight: '600', fontFamily: 'Gothic A1', color: '#181A1F', marginTop: vs(5)
    },
    container3: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: vs(10)
    },
    keywordsStyle: {
        fontFamily: 'Gothic A1', color: '#6c757d'
    },
    share_icon: {
        width: hs(22),
        height: vs(22),
        resizeMode: 'contain',
        marginRight: hs(10)
    },
    fav_icon: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain'
    },
    arrowIcon: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain'
    }
});

export default styles;