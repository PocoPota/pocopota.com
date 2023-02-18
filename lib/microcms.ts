import { createClient } from 'microcms-js-sdk';

export const microcms = createClient({
  serviceDomain: process.env.microcmsServerDomain || "",  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.microcmsApiKey || "",
});