import React, { useEffect, useLayoutEffect, useState } from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import { useNavigation } from '@react-navigation/native';
import { vs } from '../../../utils/styleUtils';
import { ActivityIndicator, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import EventLists from '../../../listItems/EventLists/EventLists';
import styles from './styles';

const Events = () => {

    const navigation = useNavigation();

    const [eventData, setEventData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const token = useSelector((state: RootState) => state.auth.token);

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => {
                return renderHeader();
            }
        })
    }, []);

    const renderHeader = () => {
        return (
            <Container containerStyle={styles.headerContainer}>
                <Label labelSize={26} mpLabel={{ ml: 20 }} style={styles.headerTitle1}>Hello Renzo!</Label>
                <Label labelSize={16} mpLabel={{ ml: 20, mt: 5 }} style={styles.headerTitle2}>Are you ready to dance?</Label>
            </Container>
        )
    }

    useEffect(() => {
        handleEventList();
    }, []);

    const handleEventList = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://3.7.81.243/projects/plie-api/public/api/events-listing', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            const responseData = await response.json();
            setEventData(responseData?.data?.events);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Container containerStyle={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            <FlatList
                data={eventData}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: vs(20) }}
                renderItem={({ item, index }) => {
                    return <EventLists item={item} index={index}/>
                }}
            />

            {isLoading && <ActivityIndicator size={"large"} color={"green"} />}
        </Container>
    );
};

export default Events;