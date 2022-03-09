import { appUrl } from "../../lib/config";

const kotaKab = async () => {
  return fetch(appUrl('/indonesia/kotakab.json'));
};

export { kotaKab };
