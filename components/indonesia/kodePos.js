import { ROOT_URL } from "../../lib/config";

const allKodePos = async () => {
  return fetch(`${ROOT_URL}/indonesia/kodepos.json`);
};
const kodePos = async () => {
  return fetch(`${ROOT_URL}/indonesia/kodepos.json`);
};


export { allKodePos, kodePos };
