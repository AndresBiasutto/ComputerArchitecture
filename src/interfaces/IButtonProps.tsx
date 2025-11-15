export interface IButtonProps {
  btnName: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  bgColor?: string;
}