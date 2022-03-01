import { TextInput, Button, Grid, Title, Textarea } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/hooks";

export default function Input() {
  const form = useForm({
    initialValues: {
      nomor_pelayanan: "",
      nama_wajib_pajak: "",
      kel: "",
      kec: "",
      kode_pos: "",
      npwpd: "",
      email: "",
      file_logo: "",
      file_foto_depan_kantor: "",
      surat_izin: "",
      created_at: "",
      updated_at: "",
      jumlah_outlet: "",
      jenis_outlet: "",
      jenis_pajak: "",
    },

    validationRules: {
      nomor_pelayanan: (value) => value !== "",
      nama_wajib_pajak: (value) => value !== "",
      kel: (value) => value !== "",
      kec: (value) => value !== "",
      kode_pos: (value) => value !== "" && /^\d+$/.test(value),
      npwpd: (value) => value !== "",
      email: (value) => value !== "" && /^\S+@\S+$/.test(value),
      file_logo: (value) => value !== "",
      file_foto_depan_kantor: (value) => value !== "",
      surat_izin: (value) => value !== "",
      created_at: (value) => value !== "",
      updated_at: (value) => value !== "",
      jumlah_outlet: (value) => value !== "",
      jenis_outlet: (value) => value !== "",
      jenis_pajak: (value) => value !== "",
    },

    errorMessages: {
      nomor_pelayanan: "Nomor Pelayanan harus diisi",
      nama_wajib_pajak: "Nama Wajib Pajak harus diisi",
      kel: "Kelurahan harus diisi",
      kec: "Kecamatan harus diisi",
      kode_pos: "Kode Pos harus diisi dan berupa angka",
      npwpd: "NPWPD harus diisi",
      email: "Email harus diisi dan berupa email",
      file_logo: "File Logo harus diisi",
      file_foto_depan_kantor: "File Foto Depan Kantor harus diisi",
      surat_izin: "Surat Izin harus diisi",
      created_at: "Tanggal Rekam harus diisi",
      updated_at: "Tanggal Mutakhir harus diisi",
      jumlah_outlet: "Jumlah Outlet harus diisi",
      jenis_outlet: "Jenis Outlet harus diisi",
      jenis_pajak: "Jenis Pajak harus diisi",
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Title
        order={3}
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        Data Wajib Pajak
      </Title>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Grid gutter={50}>
          <Grid.Col md={6} lg={6}>
            <Grid>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Nomor Pelayanan"
                  placeholder=""
                  onBlur={() => form.validateField("nomor_pelayanan")}
                  {...form.getInputProps("nomor_pelayanan")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Nama Wajib Pajak"
                  placeholder=""
                  onBlur={() => form.validateField("nama_wajib_pajak")}
                  {...form.getInputProps("nama_wajib_pajak")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Kelurahan"
                  placeholder=""
                  onBlur={() => form.validateField("kel")}
                  {...form.getInputProps("kel")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Kecamatan"
                  placeholder=""
                  onBlur={() => form.validateField("kec")}
                  {...form.getInputProps("kec")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Kode Pos"
                  placeholder=""
                  onBlur={() => form.validateField("kode_pos")}
                  {...form.getInputProps("kode_pos")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="NPWPD"
                  placeholder=""
                  onBlur={() => form.validateField("npwpd")}
                  {...form.getInputProps("npwpd")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Email"
                  placeholder=""
                  onBlur={() => form.validateField("email")}
                  {...form.getInputProps("email")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="File Logo"
                  placeholder=""
                  onBlur={() => form.validateField("file_logo")}
                  {...form.getInputProps("file_logo")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="File Foto Depan Kantor"
                  placeholder=""
                  onBlur={() => form.validateField("file_foto_depan_kantor")}
                  {...form.getInputProps("file_foto_depan_kantor")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Surat Izin"
                  placeholder=""
                  onBlur={() => form.validateField("surat_izin")}
                  {...form.getInputProps("surat_izin")}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col md={6} lg={6}>
            <Grid>
              <Grid.Col span={12}>
                <DatePicker
                  placeholder="Pick date"
                  label="Tanggal Rekam"
                  required
                  onBlur={() => form.validateField("created_at")}
                  {...form.getInputProps("created_at")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <DatePicker
                  placeholder="Pick date"
                  label="Tanggal Mutakhir"
                  required
                  onBlur={() => form.validateField("updated_at")}
                  {...form.getInputProps("updated_at")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Title
                  order={3}
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Informasi Outlet
                </Title>
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Jumlah Outlet"
                  placeholder=""
                  onBlur={() => form.validateField("jumlah_outlet")}
                  {...form.getInputProps("jumlah_outlet")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Jenis Outlet"
                  placeholder=""
                  onBlur={() => form.validateField("jenis_outlet")}
                  {...form.getInputProps("jenis_outlet")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Jenis Pajak"
                  placeholder=""
                  onBlur={() => form.validateField("jenis_pajak")}
                  {...form.getInputProps("jenis_pajak")}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "1rem",
          }}
        >
          <Button type="submit" color="primary" variant="outline">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
