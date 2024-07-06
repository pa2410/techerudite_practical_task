import React, { useState } from 'react';
import { ScrollView, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import Container from '../../../components/Container';
import { screenWidth, vs } from '../../../utils/styleUtils';
import Label from '../../../components/Label';
import Img from '../../../components/Img';
import images from '../../../utils/images';
import InputBox from '../../../components/InputBox';
import Btn from '../../../components/Btn';
import { AppNavigator } from '../../../navigators/NavActionts';
import styles from './styles';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from '../../../features/authSlice';

const Login = ({ navigation }) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const formData = new FormData();

            formData.append('email', email);
            formData.append('password', password);

            const headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');

            const options = {
                method: 'POST',
                headers: headers,
                body: formData,
            };

            const response = await fetch('http://3.7.81.243/projects/plie-api/public/api/login', options);
            const responseData = await response.json();

            console.log('responseData', responseData);

            if (response.ok) {
                await AsyncStorage.setItem('token', responseData?.data?.token);
                dispatch(setToken(responseData?.data?.token));
                navigation.dispatch(AppNavigator);
            } else {
                Alert.alert('Login Failed', 'Invalid phone number or password');
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container containerStyle={styles.container}>
            {isLoading ?
                (
                    <Container containerStyle={styles.loadingContainer}>
                        <ActivityIndicator size={"large"} color={"green"} />
                    </Container>
                )
                :
                (
                    <ScrollView contentContainerStyle={{ paddingBottom: vs(20) }}>
                        <ImageBackground source={images.BGImg} style={styles.imgBg}>
                            <Label labelSize={40} style={styles.headerTitle}>Pliē</Label>
                            <Img
                                imgSrc={images.galleryImg}
                                imgStyle={styles.imgStyleBGImg}
                            />
                        </ImageBackground>
                        <Container containerStyle={styles.mainContainer}>
                            <Container containerStyle={styles.container2}>
                                <Label labelSize={16} style={styles.emailTitle}>Email</Label>
                                <Container containerStyle={styles.textInputComponentStyle}>
                                    <InputBox
                                        placeholder='email@email.com'
                                        inputHeight={40}
                                        mpInput={{ ph: 10 }}
                                        value={email}
                                        onChangeText={setEmail}
                                        autoCapitalize='none'
                                        keyboardType='email-address'
                                        containerStyle={styles.emailTextInputStyle}
                                    />
                                </Container>

                                <Label labelSize={16} style={styles.passwordTitle}>Password</Label>
                                <Container containerStyle={styles.textInputComponentStyle}>
                                    <InputBox
                                        placeholder='Password'
                                        inputHeight={40}
                                        mpInput={{ ph: 10 }}
                                        value={password}
                                        onChangeText={setPassword}
                                        containerStyle={styles.passwordTextInputStyle}
                                        secureTextEntry={!passwordVisible}
                                        rightIcon={() => {
                                            return (
                                                <>
                                                    {!passwordVisible ?
                                                        <Img
                                                            imgSrc={images.hide}
                                                            imgStyle={{
                                                                width: 20,
                                                                height: 20,
                                                                resizeMode: 'contain'
                                                            }}
                                                            onPress={() => setPasswordVisible((prev) => !prev)}
                                                        />
                                                        :
                                                        <Img
                                                            imgSrc={images.view}
                                                            imgStyle={{
                                                                width: 20,
                                                                height: 20,
                                                                resizeMode: 'contain'
                                                            }}
                                                            onPress={() => setPasswordVisible((prev) => !prev)}
                                                        />
                                                    }
                                                </>
                                            )
                                        }}
                                    />
                                </Container>

                                <Container>
                                    <Label labelSize={12} style={styles.forgotPasswordText}>Forgot Password?</Label>
                                    <Btn
                                        title='Sign In'
                                        btnHeight={40}
                                        textColor='white'
                                        textSize={16}
                                        btnStyle={styles.signInBtnStyle}
                                        onPress={() => handleLogin()}
                                    />
                                    <Label labelSize={12} style={styles.noMemberTextStyle}>Not a member? <Label labelSize={12} style={styles.registerHereStyle}>Sign Up Here</Label></Label>
                                </Container>

                                <Container containerStyle={styles.socialLoginContainerStyle} mpContainer={{ mt: vs(30) }}>
                                    <Container width={screenWidth * 0.28} height={1} containerStyle={styles.leftOrLineStyle} />
                                    <Label mpLabel={{ mh: 10 }} style={styles.orText} labelSize={12} textColor={'#4F4F4F'}>Or sign in with</Label>
                                    <Container width={screenWidth * 0.28} height={1} containerStyle={styles.rightOrLineStyle} />
                                </Container>

                                <Container mpContainer={{ mt: vs(15) }} containerStyle={styles.container3}>
                                    <Img
                                        imgSrc={images.google_icon}
                                        imgStyle={styles.socialLoginImgStyle}
                                    />
                                    <Img
                                        imgSrc={images.apple_icon}
                                        imgStyle={styles.socialLoginImgStyle}
                                    />
                                    <Img
                                        imgSrc={images.fb_icon}
                                        imgStyle={styles.socialLoginImgStyle}
                                    />
                                </Container>

                                <Label labelSize={12} style={styles.guestTextStyle}>Enter as Guest</Label>

                            </Container>
                        </Container>
                    </ScrollView>
                )
            }
        </Container>
    );
};

export default Login;