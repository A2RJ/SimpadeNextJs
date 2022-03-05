const kecamatan = async () => {
    return fetch("http://localhost:3000/indonesia/kecamatan.json");
  };
  
  export { kecamatan };
  