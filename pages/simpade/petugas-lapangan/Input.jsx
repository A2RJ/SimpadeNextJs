import { TextInput, Button, Grid, Title, Textarea } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/hooks";

export async function getServerSideProps(){
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json);
    console.log(data);
  return {
    props: {
      data: data || [],
    },
  };
}

export default function Input() {
  const form = useForm({
    initialValues: {
      id_petugas: "",
      nama_petugas: "",
      alamat: "",
      kel: "",
      kec: "",
      kode_pos: "",
      nik: "",
      file_ktp: "",
      tlp: "",
      email: "",
      created_at: "",
      updated_at: "",
      pas_foto: "",
    },

    validationRules: {
      id_petugas: (value) => value.trim().length > 0,
      nama_petugas: (value) => value.trim().length > 0,
      alamat: (value) => value.trim().length > 0,
      kel: (value) => value.trim().length > 0,
      kec: (value) => value.trim().length > 0,
      kode_pos: (value) => value.trim().length > 0 && /^\d+$/.test(value),
      nik: (value) => value.trim().length > 0 && /^\d+$/.test(value),
      file_ktp: (value) => value.trim().length > 0,
      tlp: (value) => value.trim().length > 0 && /^\d+$/.test(value),
      email: (value) => value.trim().length > 0 && /^\S+@\S+$/.test(value),
      created_at: (value) => value !== "",
      updated_at: (value) => value !== "",
      pas_foto: (value) => value.trim().length > 0,
    },

    errorMessages: {
      id_petugas: "Id Petugas harus diisi",
      nama_petugas: "Nama Petugas harus diisi",
      alamat: "Alamat harus diisi",
      kel: "Kelurahan harus diisi",
      kec: "Kecamatan harus diisi",
      kode_pos: "Kode Pos harus diisi dan berupa angka",
      nik: "NIK harus diisi dan berupa angka",
      file_ktp: "File KTP harus diisi",
      tlp: "Telepon harus diisi dan berupa angka",
      email: "Email harus diisi dan berupa email",
      created_at: "Created At harus diisi",
      updated_at: "Updated At harus diisi",
      pas_foto: "Pas Foto harus diisi",
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
                  label="Id Petugas"
                  name="id_petugas"
                  required
                  onBlur={() => form.validateField("id_petugas")}
                  {...form.getInputProps("id_petugas")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Nama Petugas"
                  name="nama_petugas"
                  required
                  onBlur={() => form.validateField("nama_petugas")}
                  {...form.getInputProps("nama_petugas")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Alamat"
                  name="alamat"
                  required
                  onBlur={() => form.validateField("alamat")}
                  {...form.getInputProps("alamat")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Kelurahan"
                  name="kel"
                  required
                  onBlur={() => form.validateField("kel")}
                  {...form.getInputProps("kel")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Kecamatan"
                  name="kec"
                  required
                  onBlur={() => form.validateField("kec")}
                  {...form.getInputProps("kec")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Kode Pos"
                  name="kode_pos"
                  required
                  onBlur={() => form.validateField("kode_pos")}
                  {...form.getInputProps("kode_pos")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="NIK"
                  name="nik"
                  required
                  onBlur={() => form.validateField("nik")}
                  {...form.getInputProps("nik")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="File KTP"
                  name="file_ktp"
                  required
                  onBlur={() => form.validateField("file_ktp")}
                  {...form.getInputProps("file_ktp")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Telepon"
                  name="tlp"
                  required
                  onBlur={() => form.validateField("tlp")}
                  {...form.getInputProps("tlp")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label="Email"
                  name="email"
                  required
                  onBlur={() => form.validateField("email")}
                  {...form.getInputProps("email")}
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
                <TextInput
                  label="Pas Foto"
                  name="pas_foto"
                  required
                  onBlur={() => form.validateField("pas_foto")}
                  {...form.getInputProps("pas_foto")}
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
