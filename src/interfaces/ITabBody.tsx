export interface ITabBody {
  active: number;
  children?: React.ReactNode;
  tabs?: {
    title: string | undefined;
    content: string | undefined;
    list?: { subTitle: string; text: string }[] | undefined;
  }[];
}
