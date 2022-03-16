import provinsiIndonesia from "./1provinsi";
import kabupatenIndonesia from "./2kabupaten";
import kecamatanIndonesia from "./3kecamatan";
import desaIndonesia from "./4desa";
import kodePosIndonesia from "./5kodePos";

class Indonesia {
  dataProvinsi;
  dataKabupaten;
  dataKecamatan;
  dataDesa;
  dataKodePos;

  /**
   * Provinsi
   */
  static async provinsi() {
    this.dataProvinsi = provinsiIndonesia;
    return this;
  }

  static async provinsiByID(params) {
    return this.dataProvinsi.filter((item) => item.prov_id === params);
  }

  static async provinsiByName(params) {
    return this.dataProvinsi.filter((item) => item.prov_name === params);
  }

  /**
   * Kabupaten
   */
  static async kabupaten() {
    this.dataKabupaten = kabupatenIndonesia;
    return this;
  }

  static async kabupatenById(params) {
    return this.dataKabupaten.filter((item) => item.city_id === params);
  }

  static async kabupatenByName(params) {
    return this.dataKabupaten.filter((item) => item.city_name === params);
  }

  static async kabupatenByProv(params) {
    return this.dataKabupaten.filter((item) => item.prov_id === params);
  }

  /**
   * Kecamatan
   */
  static async kecamatan() {
    this.dataKecamatan = kecamatanIndonesia;
    return this;
  }

  static async kecamatanById(params) {
    return this.dataKecamatan.filter((item) => item.dis_id === params);
  }

  static async kecamatanByKab(params) {
    return this.dataKecamatan.filter((item) => item.city_id === params);
  }

  /**
   * Desa
   */
  static async desa() {
    this.dataDesa = desaIndonesia;
    return this;
  }

  static async desaById(params) {
    return this.dataDesa.filter((item) => item.subdis_id === params);
  }

  static async desaByKec(params) {
    return this.dataDesa.filter((item) => item.dis_id === params);
  }

  /**
   * Kode Pos
   */
  static async kodePos() {
    this.dataKodePos = kodePosIndonesia;
    return this;
  }

  static async kodePos(params) {
    return this.dataKodePos.filter((item) => item.subdis_id === params);
  }
}

export default Indonesia;
