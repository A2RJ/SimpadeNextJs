const kecamatan = async () => {
    return fetch("https://simpade-a2rj.vercel.app/indonesia/kecamatan.json");
  };
  
  export { kecamatan };
  