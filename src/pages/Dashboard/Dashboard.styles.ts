import { css } from '@emotion/react';

export const containerStyle = css`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const gridStyle = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border: 1px solid #ddd;
  width: 100%;
`;

export const headerRowStyle = css`
  padding: 1rem 2rem;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  text-align: center;
  grid-column-end: span 2;
  display: flex;
  justify-content: space-between;
`;

export const subheaderCellStyle = css`
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  display: grid;
  place-items: center;
`;

export const subheaderGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  text-align: center;
`;

export const subheaderColumnStyle = css`
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;

export const subheaderTitleStyle = css`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const dataRowStyle = css`
  padding: 8px 2rem;
  border: 1px solid #ddd;
`;

export const dataGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ddd;
  text-align: center;
`;

export const dataCellStyle = css`
  padding: 8px;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;
