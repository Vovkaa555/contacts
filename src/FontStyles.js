import { createGlobalStyle } from 'styled-components';
import ApercuArabicProMediumWoff from './fonts/ApercuArabicPro/ApercuArabicPro-Medium.woff';
import ApercuArabicProMediumWoff2 from './fonts/ApercuArabicPro/ApercuArabicPro-Medium.woff2';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Apercu Arabic Pro';
  src: url(${ApercuArabicProMediumWoff2}) format('woff2'),
       url(${ApercuArabicProMediumWoff}) format('woff');
}
`;

export default FontStyles;
