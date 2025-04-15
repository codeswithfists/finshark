interface ImportMetaEnv {
    readonly VITE_FMP_API_KEY: string;
    // other environment variables go here...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }