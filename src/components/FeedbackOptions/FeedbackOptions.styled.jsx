import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`

cursor: pointer;
  width: 80px;
  height: 40px;
  color: black;
  font-size: 16px;
  background-color: rgba(251, 255, 0, 0.596);
  border-radius: 10px;
   border: none;
  &:hover,
  &:focus {
    background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:active {
  background-color: rgb(247, 148, 68);
  box-shadow: -1px 0px 55px -5px rgba(0,0,0,0.54);
}
`;
