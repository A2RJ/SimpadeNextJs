import { appUrl } from "../../lib/config";

const allKodePos = async () => {
  return fetch(appUrl("/indonesia/kodepos.json"));
};
const kodePos = async () => {
  return fetch(appUrl("/indonesia/kodepos.json"));
};

export { allKodePos, kodePos };
