import styled from "styled-components";

type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const MenuButton = styled.button<MenuButtonProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 6px;
  width: 50px;
  height: 50px;
  border: 1px solid #9ca3af;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 50;

  &::before,
  &::after {
    content: "";
    width: 24px;
    height: 2px;
    background-color: #71717a;
    border-radius: 1px;
    transition: transform 0.3s, opacity 0.3s;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
      &::before {
        transform: translateY(4px) rotate(-45deg);
      }
      &::after {
        transform: translateY(-4px) rotate(45deg);
      }
      span {
        opacity: 0;
      }
    `}

  span {
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;
    bottom: 5%;
    left: 0;
    font-size: 0.5rem;
    line-height: 1rem;
    color: #1f2937;
  }
`;

// shouldForwardPropを使用してisOpenプロパティをDOM要素に渡さないように設定
MenuButton.shouldForwardProp = (prop) => prop !== "isOpen";

// コンポーネント本体
const MenuButtonComponent = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <MenuButton isOpen={isOpen} onClick={onClick}>
      <span>メニュー</span>
    </MenuButton>
  );
};

export default MenuButtonComponent;
