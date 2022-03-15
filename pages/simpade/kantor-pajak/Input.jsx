import {
  TextInput,
  Button,
  Grid,
  Title,
  Textarea,
  Select,
  Modal,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/hooks";
import { useRef, useState } from "react";
import {
  kodePos,
  kotaKab,
  kecamatan,
  desaKel,
} from "../../../lib/indonesia";

export async function getServerSideProps() {
  const data = await kotaKab()
    .then((res) => res.json())
    .then((data) =>
      data.map((item) => {
        return {
          ...item,
          value: item.city_id,
          label: item.city_name,
        };
      })
    );

  return {
    props: {
      data: data || [],
    },
  };
}

export default function Input({ data }) {
  const [opened, setOpened] = useState(false);
  const refProv = useRef();
  const refKecamatan = useRef();
  const refDesaKel = useRef();
  const [selectedKecamatan, setKecamatan] = useState([]);
  const [selectedKelurahan, setKelurahan] = useState([]);

  const form = useForm({
    initialValues: {
      nama_pemda: "",
      kode_pemda: "",
      nomenklatur: "",
      alamat: "",
      kotakab: "",
      kecamatan: "",
      kelurahan: "",
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
      nama_pemda: (value) => value !== "",
      kode_pemda: (value) => value !== "",
      nomenklatur: (value) => value !== "",
      alamat: (value) => value !== "",
      kotakab: (value) => value !== "",
      kecamatan: (value) => value !== "",
      kelurahan: (value) => value !== "",
      kodepos: (value) => value !== "" && /^\d+$/.test(value),
      nama_kepinstansi: (value) => value !== "",
      tlp: (value) => value !== "" && /^\d+$/.test(value),
      email: (value) => value !== "" && /^\S+@\S+$/.test(value),
      file_logo: (value) => value !== "",
      file_kantor: (value) => value !== "",
      created_at: (value) => value !== "",
      updated_at: (value) => value !== "",
    },

    errorMessages: {
      nama_pemda: "Nama Pemda harus diisi",
      kode_pemda: "Kode Pemda harus diisi",
      nomenklatur: "Nomenklatur harus diisi",
      alamat: "Alamat harus diisi",
      kotakab: "Kota/Kabupaten harus diisi",
      kecamatan: "Kecamatan harus diisi",
      kelurahan: "Kelurahan harus diisi",
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

  const getKecamatan = async (e) => {
    const kec = await kecamatan()
      .then((data) => data.json())
      .then((data) => data.filter((item) => item.city_id === e))
      .then((data) =>
        data.map((item) => {
          return {
            ...item,
            value: item.dis_id,
            label: item.dis_name,
          };
        })
      );
    setKecamatan(kec);
    if (!e) {
      refKecamatan.current.focus();
      setKelurahan([]);
      refDesaKel.current.focus();
      refProv.current.focus();
    }
    form.setFieldValue("kodepos", "");
  };

  const getKelurahan = async (e) => {
    const kel = await desaKel()
      .then((data) => data.json())
      .then((data) => data.filter((item) => item.dis_id === e))
      .then((data) =>
        data.map((item) => {
          return {
            ...item,
            value: item.subdis_id,
            label: item.subdis_name,
          };
        })
      );
    setKelurahan(kel);
    form.setFieldValue("kodepos", "");
  };

  const getKodePos = async (e) => {
    const kel = await kodePos()
      .then((data) => data.json())
      .then((data) => data.filter((item) => item.subdis_id === e));
    form.setFieldValue("kodepos", kel.length > 0 ? kel[0].postal_code : "");
  };

  const handleSubmit = (values) => {
    setOpened(true)
    console.log(values);
    return (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {JSON.stringify(values)}
      </Modal>
    );
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
                <Textarea
                  placeholder=""
                  label="Alamat"
                  autosize
                  minRows={2}
                  maxRows={6}
                  onBlur={() => form.validateField("alamat")}
                  {...form.getInputProps("alamat")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Select
                  label="Kota/Kabupaten"
                  placeholder="Pilih"
                  dropdownPosition="bottom"
                  transition="pop-top-left"
                  transitionDuration={80}
                  transitionTimingFunction="ease"
                  searchable
                  clearable
                  data={data}
                  ref={refProv}
                  onChange={(e) => getKecamatan(e)}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Select
                  label="Kecamatan"
                  placeholder="Pilih"
                  dropdownPosition="bottom"
                  transition="pop-top-left"
                  transitionDuration={80}
                  transitionTimingFunction="ease"
                  searchable
                  clearable
                  data={selectedKecamatan}
                  ref={refKecamatan}
                  onChange={(e) => getKelurahan(e)}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Select
                  label="Kelurahan"
                  placeholder="Pilih"
                  dropdownPosition="bottom"
                  transition="pop-top-left"
                  transitionDuration={80}
                  transitionTimingFunction="ease"
                  searchable
                  clearable
                  data={selectedKelurahan}
                  ref={refDesaKel}
                  onChange={(e) => getKodePos(e)}
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
