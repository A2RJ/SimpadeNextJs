export default function Input() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
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
                  {/* nomor ID petugas */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="no_id_petugas">Nomor ID Petugas</label>
                      <input
                        type="text"
                        className="form-control"
                        id="no_id_petugas"
                        name="no_id_petugas"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* nama petugas */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="nama_petugas">Nama Petugas</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nama_petugas"
                        name="nama_petugas"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* alamat */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="alamat">Alamat</label>
                      <input
                        type="text"
                        className="form-control"
                        id="alamat"
                        name="alamat"
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
                  {/* NIK */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="nik">NIK</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nik"
                        name="nik"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* foto ktp */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="foto_ktp">Foto KTP</label>
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
                  {/* tlp */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="tlp">Nomor Telepon</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tlp"
                        name="tlp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  {/* tgl rekam */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="tgl_rekam">Tanggal Rekam</label>
                      <input
                        type="date"
                        className="form-control"
                        id="tgl_rekam"
                        name="tgl_rekam"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* tgl mutakhir */}
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="tgl_mutakhir">Tanggal Mutakhir</label>
                      <input
                        type="date"
                        className="form-control"
                        id="tgl_mutakhir"
                        name="tgl_mutakhir"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* upload pas foto */}
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
