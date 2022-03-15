import provinsiIndonesia from "./1provinsi";
import kabupatenIndonesia from "./2kabupaten";
import kecamatanIndonesia from "./3kecamatan";
import desaIndonesia from "./4desa";
import kodePosIndonesia from "./5kodePos";

class Indonesia {
  constructor() {
    this.dataProvinsi;
    this.dataKabupaten;
    this.dataKecamatan;
    this.dataDesa;
    this.dataKodePos;
  }

  /**
   * Provinsi
   */
  static provinsi() {
    this.dataProvinsi = provinsiIndonesia;
    return this;
  }

  static provinsiByID(params) {
    return this.dataProvinsi.filter((item) => item.prov_id === params);
  }

  static provinsiByName(params) {
    return this.dataProvinsi.filter((item) => item.prov_name === params);
  }

  /**
   * Kabupaten
   */
  static kabupaten() {
    this.dataKabupaten = kabupatenIndonesia;
  }

  static kabupatenById(params) {
    return this.dataKabupaten.filter((item) => item.city_id === params);
  }

  static kabupatenByProv(params) {
    return this.dataKabupaten.filter((item) => item.prov_id === params);
  }

  /**
   * Kecamatan
   */
  static kecamatan() {
    this.dataKecamatan = kecamatanIndonesia;
    return this;
  }

  static kecamatanById(params) {
    return this.dataKecamatan.filter((item) => item.dis_id === params);
  }

  static kecamatanByKab(params) {
    return this.dataKecamatan.filter((item) => item.city_id === params);
  }

  /**
   * Desa
   */
  static desa() {
    this.dataDesa = desaIndonesia;
    return this;
  }

  static desaById(params) {
    return this.dataDesa.filter((item) => item.subdis_id === params);
  }

  static desaByKec(params) {
    return this.dataDesa.filter((item) => item.dis_id === params);
  }

  /**
   * Kode Pos
   */
  static kodePos() {
    this.dataKodePos = kodePosIndonesia;
  }

  static kodePos(params) {
    return this.dataKodePos.filter((item) => item.subdis_id === params);
  }
}

export default Indonesia;
