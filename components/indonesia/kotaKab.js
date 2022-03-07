const kotaKab = async () => {
  return fetch(`${ROOT_URL}/indonesia/kotakab.json`);
};

export { kotaKab };
