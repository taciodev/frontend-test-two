import styled from "styled-components";

export const FormPageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FormContainer = styled.form`
  min-height: 50vh;
  width: 18.75rem;
  padding: 2rem;
  border-radius: 0.3rem;
  border: 2px solid #aaa;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0 1rem;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 2.875rem;
  border: 0;
  border-radius: 8px;

  transition: 0.3s;

  &:hover {
    background: #f7f7f7;
  }
`;

export const Label = styled.label`
  font-size: 0.625rem;
`;

export const InputField = styled.input`
  outline: none;
  border: none;
  background: transparent;
`;

export const InputError = styled.button``;

export const Button = styled.button`
  width: 10rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  color: #fff;

  margin: 0.25rem;
  background-color: #f4511e;
  border-radius: 4px;
  border: none;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
`;

export const FormFooter = styled.div`
  width: 100%;
  height: 1.875rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
