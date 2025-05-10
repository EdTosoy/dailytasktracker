import { css } from '@emotion/react';

export const errorContainerStyle = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
`;

export const dismissButtonStyle = css`
  margin-top: 5px;
  background: white;
  color: red;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;
