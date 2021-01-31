export interface ITextLinkProps {
  color?: string;
  url: string;
  size: "H1" | "H2" | "T1" | "T2" | "T3";
  text: string | JSX.Element;
  textAlign?: "left" | "center" | "right";
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
}

export interface IStyles {
  color?: string;
  textAlign?: "left" | "center" | "right";
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
}
