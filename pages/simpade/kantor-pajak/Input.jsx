export default function Input() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="content-wrapper">
      <div className="card card-primary p-2">
        <div className="card-header">
          <h3 className="card-title">Input data Kantor Pajak</h3>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="card-header">
            <h3 className="card-title">Instansi Pajak Daerah</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="nama_pemerintah_daerah">
                    Nama Pemerintah Daerah
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nama_pemerintah_daerah"
                    name="nama_pemerintah_daerah"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="tanggal_rekam">Tanggal Rekam</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tanggal_rekam"
                    name="tanggal_rekam"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="tanggal_mutakhir">Tanggal Mutakhir</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tanggal_mutakhir"
                    name="tanggal_mutakhir"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="kode_pemda">Kode Pemerintah Daerah</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kode_pemda"
                    name="kode_pemda"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="nomenklatur">
                    Nomenklatur Instansi Pajak Daerah
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nomenklatur"
                    name="nomenklatur"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
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
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="kota_kab">Kota/Kab</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kota_kab"
                    name="kota_kab"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-3">
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
            </div>
          </div>
          <div className="card-header">
            <h3 className="card-title">Pimpinan Instansi Pajak Daerah</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="kep_inst">Nama Kepala Instansi</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kep_inst"
                    name="kep_inst"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="tlp">Nomor Telepon</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tlp"
                    name="tlp"
                    placeholder=""
                  />
                  {/* help text */}
                  <small className="text-danger">*Contoh small text</small>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="email">Alamat email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="logo_pemda">Logo Pemrintah Daerah</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="logo_pemda"
                        name="logo_pemda"
                      />
                      <label
                        className="custom-file-label"
                       htmlFor="exampleInputFile"
                      >
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label htmlFor="foto_instansi_pemda">
                    Foto Kantor Instansi Pajak Daerah
                  </label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="foto_instansi_pemda"
                        name="foto_instansi_pemda"
                      />
                      <label
                        className="custom-file-label"
                       htmlFor="exampleInputFile"
                      >
                        Choose file
                      </label>
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
