import styled from '@emotion/styled'

export const Content = styled.form`
  max-width: 600px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  margin-top: 16px;
  border-radius: 8px;
  gap: 16px;
`

export const Select = styled.select`
  width: 300px;
  height: 44px;
  padding: 8px;
  border-radius: 8px;
  border: 1px;
  border-color: #ccc;
  outline: none;
  font-family: 'Roboto' sans-serif;
  cursor: pointer;

  &:focus {
    border-color: #7159c1;
  }
`

export const Option = styled.option`
  background-color: #fff;
`

export const Button = styled.button`
  width: 300px;
  height: 48px;
  background: #8b5cf6;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    opacity: 90%;
  }

  &:disabled {
    background-color: #babac0;
    cursor: not-allowed;
  }
`
