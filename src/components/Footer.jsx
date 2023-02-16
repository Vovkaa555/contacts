import React from 'react';

import {
  StyledFooter,
  StyledLinkedinLogo,
  StyledTwitterLogo,
  StyledFacebookLogo,
  StyledLogoBar,
  StyledSmile5,
  StyledSmile6,
  StyledPinterestLogo,
} from './FooterStyles';
import { LinkedinLogo, TwitterLogo, FacebookLogo, Smile5, Smile6, PinterestLogo } from '../assets';

function Footer() {
  return (
    <StyledFooter>
      <StyledLogoBar>
        <StyledLinkedinLogo src={LinkedinLogo} />
        <StyledTwitterLogo src={TwitterLogo} />
        <StyledFacebookLogo src={FacebookLogo} />
        <StyledPinterestLogo src={PinterestLogo} />
      </StyledLogoBar>
      <StyledSmile5 src={Smile5} />
      <StyledSmile6 src={Smile6} />
    </StyledFooter>
  );
}

export default Footer;
