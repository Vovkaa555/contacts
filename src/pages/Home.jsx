import React from 'react';
import Footer from '../components/Footer';
import RequestForm from '../components/RequestForm';

import {
  StyledBody,
  StyledEllipse,
  StyledCloud1,
  StyledCloud2,
  StyledCloud3,
  StyledCloud4,
  StyledCloud5,
  StyledCloud6,
  StyledCloud7,
  StyledCloud8,
  StyledCloud9,
  StyledCloud10,
  StyledMapBlock,
  StyledMapImage,
  StyledSmile1,
  StyledSmile2,
  StyledSmile3,
  StyledRequestForm,
  StyledFooter,
  StyledSmile4,
} from './HomeStyles';

import {
  MapImage,
  Cloud1,
  Cloud2,
  Cloud3,
  Cloud4,
  Cloud5,
  Cloud6,
  Cloud7,
  Cloud8,
  Cloud9,
  Cloud10,
  Smile1,
  Smile2,
  Smile3,
  Smile4,
} from '../assets/';

function Home() {
  return (
    <StyledBody>
      <StyledEllipse />
      <StyledCloud1 src={Cloud1} />
      <StyledCloud2 src={Cloud2} />
      <StyledCloud3 src={Cloud3} />
      <StyledCloud4 src={Cloud4} />
      <StyledCloud5 src={Cloud5} />
      <StyledCloud6 src={Cloud6} />
      <StyledCloud7 src={Cloud7} />
      <StyledCloud8 src={Cloud8} />
      <StyledCloud9 src={Cloud9} />
      <StyledCloud10 src={Cloud10} />
      <StyledMapBlock>
        <StyledMapImage src={MapImage} />
      </StyledMapBlock>
      <StyledSmile1 src={Smile1} />
      <StyledSmile2 src={Smile2} />
      <StyledSmile3 src={Smile3} />
      <StyledRequestForm>
        <RequestForm />
      </StyledRequestForm>
      <StyledFooter>
        <Footer />
      </StyledFooter>
      <StyledSmile4 src={Smile4} />
    </StyledBody>
  );
}

export default Home;
