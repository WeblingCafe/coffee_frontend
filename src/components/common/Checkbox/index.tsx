import styled, { css } from 'styled-components';

interface ICheckbox {
  id: string;
  name: string;
  header?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export default function CheckBox({ id, name, active, header, onClick }: ICheckbox) {
  return (
    <>
      <CheckBoxContainer
        id={id}
        type="checkbox"
        name={name}
        checked={active}
        header={header}
        onClick={() => onClick()}
      />
      <label htmlFor={name} />
    </>
  );
}

interface ICheckBox {
  header?: boolean;
  active?: boolean;
}

const CheckBoxContainer = styled.input<ICheckBox>`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  border-radius: 10px;
  border: 1px solid #c0c0c0;
  background-color: white;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      border-color: #15aedb;
      background-color: #15aedb;
    `}

  ${({ header }) =>
    header &&
    css`
      // border-color: white;
      background-color: white;

      // background-color: #15aedb;
    `}
`;
