import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      bg400: string;
      bg600: string;
      wrd400: string;
      wrd600: string;
      acc900: string;
    };
    font: {
      family: string;
    };
  }
}
