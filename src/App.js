import React from 'react';
import styled from 'styled-components';

import Home from './pages/Home';

const StyledPage = styled.div`
  width: 1440px;
  height: 1128px;
  position: relative;
  background: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
`;

function App() {
  return (
    <StyledPage>
      <Home />
    </StyledPage>
  );
}

export default App;
