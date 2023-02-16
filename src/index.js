import React from 'react';
import ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';

import App from './App';
import FontStyles from './FontStyles';

const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Normalize />
    <FontStyles />
    <StyledBody>
      <App />
    </StyledBody>
  </React.StrictMode>,
);
