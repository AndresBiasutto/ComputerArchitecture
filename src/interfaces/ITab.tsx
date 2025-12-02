export interface ITab {
  active: number;
  setActive: (index: number) => void;
  tabs?: { title?: string; content?: string; }[];
}
