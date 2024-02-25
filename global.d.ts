import 'styled-components';

declare const isDev: boolean;
declare const baseURL: string;

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    backGroundColor: string;
  }
}
