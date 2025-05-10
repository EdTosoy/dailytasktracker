import { css } from '@emotion/react';

export const containerStyle = css`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const gridStyle = css`
  display: grid;
  grid-template-columns: 1fr;
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
  align-items: center;
`;

export const dataRowStyle = css`
  padding: 8px 2rem;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const clickableWorkListStyle = css`
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const modalContentStyle = css`
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 0.2rem 1rem;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const modalGridStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 20px;
  min-height: 100%;
`;

export const modalRowStyle = css`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: center;
`;

export const modalInputStyle = css`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`;

export const listItemStyle = css`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eee;
`;

export const dateGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const sectionGridStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

export const sectionHeaderStyle = css`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
`;

export const modalActionsStyle = css`
  display: flex;
  justify-content: center;
  padding: 16px 2rem;
  gap: 16px;
`;

export const modalStyle = css`
  max-height: 90vh;
  padding: 1rem;
`;

export const modalHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem;
`;
