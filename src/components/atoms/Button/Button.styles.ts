import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #a259ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
