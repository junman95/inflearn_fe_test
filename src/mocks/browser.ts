import { setupWorker } from "msw";
import { handlers } from "./handlers";

/**
 * MSW 워커를 설정합니다.
 */
export const worker = setupWorker(...handlers);
