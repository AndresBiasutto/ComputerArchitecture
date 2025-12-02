export interface IDataProps {
  children?: React.ReactNode;
  data: {
    title: string | undefined;
    content: string | undefined;
    list: { subTitle: string; text: string }[];
  }[];
  onEnviarMensaje: (msg: number) => void;
}
