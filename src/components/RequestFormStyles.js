import styled from 'styled-components';

export const StyledRequestForm = styled.form`
  height: 575px;
  width: 563px;
  font-family: 'Apercu Arabic Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #2d2d2d;
  box-sizing: border-box;
`;

export const StyledTitle = styled.div`
  width: 563px;
  height: 58px;
  box-sizing: border-box;
  margin-bottom: 30px;
  & p {
    padding: 0;
    margin: 0;
    color: #3e3e3e;
    font-size: 40px;
    line-height: 46px;
    letter-spacing: normal;
  }
`;

export const StyledInputInfo = styled.input`
  box-sizing: border-box;
  height: 93px;
  width: 557px;
  border: 2px solid green;
  margin-bottom: 8px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding-left: 46px;
  margin-left: 3px;
  ::placeholder {
    color: #2d2d2d;
  }
`;
export const StyledNameError = styled.span`
  color: red;
  font-size: 16px;
  position: absolute;
  top: 155px;
  left: 25px;
`;
export const StyledMailError = styled.span`
  color: red;
  font-size: 16px;
  position: absolute;
  top: 255px;
  left: 25px;
`;

export const StyledInputMultiline = styled.textarea`
  box-sizing: border-box;
  display: flex;
  height: 189px;
  width: 557px;
  border: 2px solid green;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding-left: 46px;
  padding-top: 28px;
  padding-right: 10px;
  margin-left: 3px;
  resize: none;
  ::placeholder {
    color: #2d2d2d;
  }
`;

export const StyledMessageError = styled.span`
  color: red;
  font-size: 16px;
  position: absolute;
  top: 480px;
  left: 25px;
`;

export const StyledSubmit = styled.input`
  box-sizing: border-box;
  width: 218px;
  height: 73px;
  line-height: 130%;
  color: #ffffff;
  margin-top: 23px;
  background: #fad34f;
  border-radius: 500px;
  border: none;
  line-height: 18px;
  color: #ffffff;
  padding: 0;
  margin-left: 3px;
`;

export const StyledSubmitedMessage = styled.span`
  color: #00ff00;
  font-size: 18px;
  position: absolute;
  top: 530px;
  left: 250px;
`;
