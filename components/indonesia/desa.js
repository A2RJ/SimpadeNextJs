import { ROOT_URL } from "../../lib/config";

const desaKel = async () => {
    return fetch(`${ROOT_URL}/indonesia/desa.json`);
  };
  
  export { desaKel };
  