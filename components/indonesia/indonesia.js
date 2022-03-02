const provinsi = async () => {
  return fetch("/indonesia/provinsi.json")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

const provinsiById = async (id) => {
  return fetch(`/indonesia/provinsi.json`)
    .then((response) => response.json())
    .then((data) => data.filter((item) => item.prov_id === id))
    .catch((error) => console.log(error));
};

export { provinsi, provinsiById };
