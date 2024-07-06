import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';

const Favourites = () => {
    return (
        <Container containerStyle={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Label>Favourites</Label>
        </Container>
    );
};

export default Favourites;
