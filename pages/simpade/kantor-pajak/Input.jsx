import { TextInput, Button, Grid, Title, Textarea } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/hooks";

export default function Input() {
  const form = useForm({
    initialValues: {
      nama_pemda: "",
      kode_pemda: "",
      nomenklatur: "",
      alamat: "",
      kotakab: "",
      kodepos: "",
      nama_kepinstansi: "",
      tlp: "",
      email: "",
      file_logo: "",
      file_kantor: "",
      created_at: "",
      updated_at: "",
    },

    validationRules: {
      nama_pemda: (value) => value.trim().length > 0,
      kode_pemda: (value) => value.trim().length > 0,
      nomenklatur: (value) => value.trim().length > 0,
      alamat: (value) => value.trim().length > 0,
      kotakab: (value) => value.trim().length > 0,
      kodepos: (value) => value.trim().length > 0 && /^\d+$/.test(value),
      nama_kepinstansi: (value) => value.trim().length > 0,
      tlp: (value) => value.trim().length > 0 && /^\d+$/.test(value),
      email: (value) => value.trim().length > 0 && /^\S+@\S+$/.test(value),
      file_logo: (value) => value.trim().length > 0,
      file_kantor: (value) => value.trim().length > 0,
      created_at: (value) => value !== "",
      updated_at: (value) => value !== "",
    },

    errorMessages: {
      nama_pemda: "Nama Pemda harus diisi",
      kode_pemda: "Kode Pemda harus diisi",
      nomenklatur: "Nomenklatur harus diisi",
      alamat: "Alamat harus diisi",
      kotakab: "Kota/Kabupaten harus diisi",
      kodepos: "Kode Pos harus diisi dan berupa angka",
      nama_kepinstansi: "Nama Kepala Instansi harus diisi",
      tlp: "Telepon harus diisi dan berupa angka",
      email: "Email harus diisi dan berupa email",
      file_logo: "File Logo harus diisi",
      file_kantor: "File Kantor harus diisi",
      created_at: "Created At harus diisi",
      updated_at: "Updated At harus diisi",
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
        Instansi Pajak Daerah
      </Title>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Grid gutter={50}>
          <Grid.Col md={6} lg={6}>
            <Grid>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Nama Pemerintah Daerah"
                  placeholder=""
                  onBlur={() => form.validateField("nama_pemda")}
                  {...form.getInputProps("nama_pemda")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Kode Pemerintah Daerah"
                  placeholder=""
                  onBlur={() => form.validateField("kode_pemda")}
                  {...form.getInputProps("kode_pemda")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Nomenklatur"
                  placeholder=""
                  onBlur={() => form.validateField("nomenklatur")}
                  {...form.getInputProps("nomenklatur")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Alamat"
                  placeholder=""
                  onBlur={() => form.validateField("alamat")}
                  {...form.getInputProps("alamat")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Kota/Kabupaten"
                  placeholder=""
                  onBlur={() => form.validateField("kotakab")}
                  {...form.getInputProps("kotakab")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Kode Pos"
                  placeholder=""
                  onBlur={() => form.validateField("kodepos")}
                  {...form.getInputProps("kodepos")}
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
                  Pimpinan Instansi Pajak Daerah
                </Title>
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Nama Kepala Instansi"
                  placeholder=""
                  onBlur={() => form.validateField("nama_kepinstansi")}
                  {...form.getInputProps("nama_kepinstansi")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  required
                  label="Telepon"
                  placeholder=""
                  onBlur={() => form.validateField("tlp")}
                  {...form.getInputProps("tlp")}
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
                  label="File Kantor"
                  placeholder=""
                  onBlur={() => form.validateField("file_kantor")}
                  {...form.getInputProps("file_kantor")}
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
                  {...form.getInputProps("created_at")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <DatePicker
                  placeholder="Pick date"
                  label="Tanggal Update"
                  required
                  {...form.getInputProps("updated_at")}
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
