import { ROOT_URL } from "../../lib/config";

const kecamatan = async () => {
    return fetch(`${ROOT_URL}/indonesia/kecamatan.json`);
  };
  
  export { kecamatan };
  