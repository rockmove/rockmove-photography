import { createClient } from "microcms-js-sdk";

// microcms-js-sdkの初期化
export const microcmsClient = createClient({
  serviceDomain: process.env.NEXT_PUBLICK_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLICK_API_KEY!,
});
