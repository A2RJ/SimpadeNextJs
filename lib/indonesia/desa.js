import { appUrl } from "../../lib/config";

const desaKel = async () => {
    return fetch(appUrl('indonesia/desa.json'));
  };
  
  export { desaKel };
  