export interface IDataProps {
  children?: React.ReactNode;
  data?: {
    title: string | undefined;
    content: string | undefined;
    list?: { subTitle: string; text: string }[] | undefined;
  }[];
  onEnviarMensaje: (msg: number) => void;
}
