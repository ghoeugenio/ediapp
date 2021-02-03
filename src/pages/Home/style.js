import React from 'react';
import Styled from 'styled-components/native';

import { ScrollView } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Home_Styles = Styled.ScrollView`
    background:#212121;
`

export const Home_Text = Styled.Text`
    text-align: center;
    color: #FFEB3B;
    padding: 60px;
    font-family: serif;
`