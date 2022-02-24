export default function Input() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="content-wrapper">
      <div className="card card-primary p-2">
        <div className="card-header">
          <h3 className="card-title">Input data Wajib Pajak</h3>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="card-header">
            <h3 className="card-title">Data Wajib Pajak</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <div className="row">
                  {/* nomor pelayanan */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="nomor_pelayanan">Nomor Pelayanan</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nomor_pelayanan"
                        name="nomor_pelayanan"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* nama wajib pajak */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="nama_wp">Nama Wajib Pajak</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nama_wp"
                        name="nama_wp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* alamat wajib pajak */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="alamat_wp">Alamat Wajib Pajak</label>
                      <input
                        type="text"
                        className="form-control"
                        id="alamat_wp"
                        name="alamat_wp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* kelurahan */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="kelurahan">Kelurahan</label>
                      <input
                        type="text"
                        className="form-control"
                        id="kelurahan"
                        name="kelurahan"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* kecamatan */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="kecamatan">Kecamatan</label>
                      <input
                        type="text"
                        className="form-control"
                        id="kecamatan"
                        name="kecamatan"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* kode pos */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="kode_pos">Kode Pos</label>
                      <input
                        type="text"
                        className="form-control"
                        id="kode_pos"
                        name="kode_pos"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* NPWPD */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="npwpd">NPWPD</label>
                      <input
                        type="text"
                        className="form-control"
                        id="npwpd"
                        name="npwpd"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* logo file */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="logo">Logo File</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="logo"
                            name="logo"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="logo"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* foto depan file */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="foto_depan">Foto Depan</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="foto_depan"
                            name="foto_depan"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="foto_depan"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* surat izin file */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="surat_izin">Surat Izin</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="surat_izin"
                            name="surat_izin"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="surat_izin"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  {/* tanggal rekam */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="tgl_rekam">Tanggal Rekam</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tgl_rekam"
                        name="tgl_rekam"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* tanggal mutakhir */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="tgl_mutakhir">Tanggal Mutakhir</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tgl_mutakhir"
                        name="tgl_mutakhir"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* Informasi outlet */}
                  <div className="col-sm-12 card-header">
                    <h3 className="card-title">Informasi Outlet</h3>
                  </div>
                  {/* jumlah outlet */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="jumlah_outlet">Jumlah Outlet</label>
                      <input
                        type="text"
                        className="form-control"
                        id="jumlah_outlet"
                        name="jumlah_outlet"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* Jenis outlet */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="jenis_outlet">Jenis Outlet</label>
                      <select
                        className="form-control"
                        id="jenis_outlet"
                        name="jenis_outlet"
                      >
                        <option value="">Pilih Jenis Outlet</option>
                        <option value="1">Outlet Perusahaan</option>
                        <option value="2">Outlet Perorangan</option>
                      </select>
                    </div>
                  </div>
                  {/* Jenis pajak */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="jenis_pajak">Jenis Pajak</label>
                      <select
                        className="form-control"
                        id="jenis_pajak"
                        name="jenis_pajak"
                      >
                        <option value="">Pilih Jenis Pajak</option>
                        <option value="1">Pajak Penghasilan</option>
                        <option value="2">Pajak Penghasilan dan PPh</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary float-right">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
