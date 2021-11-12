import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { title, onClick } = props;
};
