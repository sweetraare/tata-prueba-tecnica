declare module "react-native-config" {
  export interface NativeConfig {
    API_URL: string;
    AUTHOR_ID: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
