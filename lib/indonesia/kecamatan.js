import { appUrl } from "../../lib/config";

const kecamatan = async () => {
    return fetch(appUrl('/indonesia/kecamatan.json'));
  };
  
  export { kecamatan };
  