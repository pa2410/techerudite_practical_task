import React, { useEffect, useLayoutEffect, useState } from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import { useNavigation } from '@react-navigation/native';
import { vs } from '../../../utils/styleUtils';
import { ActivityIndicator, Alert, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EventLists from '../../../listItems/EventLists/EventLists';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../../../features/authSlice';
import { AuthNavigator } from '../../../navigators/NavActionts';
import Btn from '../../../components/Btn';

const Events = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

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

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            dispatch(logout());
            navigation.dispatch(AuthNavigator);
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    return (
        <Container containerStyle={{ flex: 1, backgroundColor: '#F2F2F2' }}>
            {isLoading ?
                (
                    <Container containerStyle={styles.loadingContainer}>
                        <ActivityIndicator size={"large"} color={"green"} />
                    </Container>
                )
                :
                (
                    <FlatList
                        data={eventData}
                        keyExtractor={(_, index) => index.toString()}
                        contentContainerStyle={{ paddingBottom: vs(20) }}
                        renderItem={({ item, index }) => {
                            return <EventLists item={item} index={index} />
                        }}
                    />
                )
            }
            <Btn
                title='Logout'
                btnHeight={45}
                textColor='white'
                onPress={handleLogout}
                btnStyle={styles.logoutStyleBtn}
            />
        </Container>
    );
};

export default Events;