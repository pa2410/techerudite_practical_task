import React from "react";
import Container from "../../components/Container";
import Img from "../../components/Img";
import Label from "../../components/Label";
import images from "../../utils/images";
import { Linking } from "react-native";
import styles from "./styles";

interface eventItemProps {
    item: any;
    index: number;
}

const EventLists = ({ item, index }: eventItemProps) => {

    const shareUrlHandler = (url: string) => {
        return Linking.openURL(url);
    }

    return (
        <Container
            mpContainer={{ pv: 10, mt: 15, mh: 15 }}
            key={index.toString()}
            containerStyle={styles.container}>
            <Container mpContainer={{ mh: 10 }} containerStyle={{ flexDirection: 'row' }}>
                <Img
                    imgSrc={{ uri: item?.event_profile_img }}
                    imgStyle={styles.profileImgStyle}
                />
                <Container mpContainer={{ mh: 10 }} containerStyle={{ flex: 1 }}>
                    <Label labelSize={16} style={styles.eventName}>{item?.event_name}</Label>
                    <Container containerStyle={styles.container2}>
                        <Label labelSize={12} style={styles.dateStyle}>{item?.readable_from_date} - {!item?.readable_to_date ? 'N/A' : item?.readable_to_date}</Label>
                        <Label labelSize={12} style={styles.citycountryStyle}>{item?.city}, {item?.country}</Label>
                    </Container>
                    <Label labelSize={13} style={styles.priceStyle}>{!item.price ? 'N/A' : `€${item?.price}`}</Label>
                    <Container containerStyle={styles.container3}>
                        {
                            item?.keywords?.map((item: any, index: number) => {
                                return (
                                    <Label labelSize={12} key={index} style={styles.keywordsStyle}>{item}</Label>
                                )
                            })
                        }
                        <Container containerStyle={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Img
                                imgSrc={images.share_icon}
                                imgStyle={styles.share_icon}
                                onPress={() => shareUrlHandler(item?.event_url)}
                            />
                            <Img
                                imgSrc={images.header_outline_icon}
                                imgStyle={styles.fav_icon}
                            />
                        </Container>
                    </Container>
                </Container>
                <Img
                    imgSrc={images.arrow_icon}
                    imgStyle={styles.arrowIcon}
                />
            </Container>
        </Container>
    )
}

export default EventLists;