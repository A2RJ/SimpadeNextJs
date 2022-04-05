import { Button, Select, Textarea, TextInput } from "@mantine/core";

import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/hooks";
import Head from "next/head";
import { useState } from "react";
import Indonesia from "../../../lib/indonesia";

export async function getServerSideProps() {
  const kabupaten = await Indonesia.kabupaten().then((res) => {
    return res.map((item) => {
      return {
        label: item.city_name,
        value: item.city_id,
      };
    });
  });

  return {
    props: {
      kabupaten,
    },
  };
}

export default function Input({ kabupaten }) {
  const [selectKecamatan, setKecamatan] = useState([]);
  const [selectKelurahan, setKelurahan] = useState([]);

  const form = useForm({
    initialValues: {
      id_petugas: "",
      nama_petugas: "",
      alamat: "",
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
      kodepos: "",
      nik: "",
      file_ktp: "",
      tlp: "",
      email: "",
      created_at: "",
      updated_at: "",
      pas_foto: "",
    },

    validationRules: {
      id_petugas: (value) => value !== "",
      nama_petugas: (value) => value !== "",
      alamat: (value) => value !== "",
      kabupaten: (value) => value !== "" || value !== null,
      kelurahan: (value) => value !== "" || value !== null,
      kecamatan: (value) => value !== "" || value !== null,
      kodepos: (value) => value !== "" && /^\d+$/.test(value),
      nik: (value) => value !== "" && /^\d+$/.test(value),
      file_ktp: (value) => value !== "" || value !== null,
      tlp: (value) => value !== "" && /^\d+$/.test(value),
      email: (value) => value !== "" && /^\S+@\S+$/.test(value),
      created_at: (value) => value !== "",
      updated_at: (value) => value !== "",
      pas_foto: (value) => value !== "",
    },

    errorMessages: {
      id_petugas: "Id Petugas harus diisi",
      nama_petugas: "Nama Petugas harus diisi",
      alamat: "Alamat harus diisi",
      kabupaten: "Kelurahanurahan harus diisi",
      kelurahan: "Kelurahanurahan harus diisi",
      kecamatan: "Kecamatan harus diisi",
      kodepos: "Kode Pos harus diisi dan berupa angka",
      nik: "NIK harus diisi dan berupa angka",
      file_ktp: "File KTP harus diisi",
      tlp: "Telepon harus diisi dan berupa angka",
      email: "Email harus diisi dan berupa email",
      created_at: "Created At harus diisi",
      updated_at: "Updated At harus diisi",
      pas_foto: "Pas Foto harus diisi",
    },
  });

  const getKecamatan = async (e) => {
    form.setFieldValue("kotakab", e);
    const kecamatan = await Indonesia.kecamatanByKab(e).then((res) => {
      return res.map((item) => {
        return {
          label: item.dis_name,
          value: item.dis_id,
        };
      });
    });

    setKecamatan(kecamatan);
  };

  const getKelurahan = async (e) => {
    form.setFieldValue("kecamatan", e);
    const kelurahan = await Indonesia.kelurahanByKec(e).then((res) => {
      return res.map((item) => {
        return {
          label: item.subdis_name,
          value: item.subdis_id,
        };
      });
    });

    setKelurahan(kelurahan);
  };

  const getKodePos = async (e) => {
    form.setFieldValue("kelurahan", e);
    const kodepos = await Indonesia.kodeposByKel(e).then((res) => res);
    if (kodepos.length > 0)
      form.setFieldValue("kodepos", kodepos[0].postal_code);
    else form.setFieldValue("kodepos", "");
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>Input Petugas Lapangan</title>
      </Head>
      <h4 className="my-4 px-4 text-2xl">Input data petugas lapangan</h4>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
          <div className="grid-col-12 space-y-2">
            <TextInput
              label="Id Petugas"
              name="id_petugas"
              required
              onBlur={() => form.validateField("id_petugas")}
              {...form.getInputProps("id_petugas")}
            />
            <TextInput
              label="Nama Petugas"
              name="nama_petugas"
              required
              onBlur={() => form.validateField("nama_petugas")}
              {...form.getInputProps("nama_petugas")}
            />
            <Textarea
              required
              placeholder=""
              label="Alamat"
              autosize="autosize"
              minRows={2}
              maxRows={6}
              onBlur={() => form.validateField("alamat")}
              {...form.getInputProps("alamat")}
            />
            <Select
              searchable
              clearable
              allowDeselect
              required
              data={kabupaten}
              onChange={(e) => getKecamatan(e)}
              onBlur={() => form.validateField("kotakab")}
              label="Kota/Kabupaten"
              placeholder="Pilih"
              nothingFound="No options"
              dropdownPosition="bottom"
              transition="pop-top-left"
              transitionDuration={80}
              transitionTimingFunction="ease"
            />
            {form.errors.kotakab && (
              <p className="text-[14px] text-red-500">{form.errors.kotakab}</p>
            )}
            <Select
              searchable
              clearable
              allowDeselect
              required
              data={selectKecamatan}
              onChange={(e) => getKelurahan(e)}
              onBlur={() => form.validateField("kecamatan")}
              label="Kecamatan"
              placeholder="Pilih"
              nothingFound="No options"
              dropdownPosition="bottom"
              transition="pop-top-left"
              transitionDuration={80}
              transitionTimingFunction="ease"
            />
            {form.errors.kecamatan && (
              <p className="text-[14px] text-red-500">
                {form.errors.kecamatan}
              </p>
            )}
            <Select
              searchable
              clearable
              allowDeselect
              required
              data={selectKelurahan}
              onChange={(e) => getKodePos(e)}
              onBlur={() => form.validateField("kelurahan")}
              label="Kelurahan"
              placeholder="Pilih"
              nothingFound="No options"
              dropdownPosition="bottom"
              transition="pop-top-left"
              transitionDuration={80}
              transitionTimingFunction="ease"
            />
            {form.errors.kelurahan && (
              <p className="text-[14px] text-red-500">
                {form.errors.kelurahan}
              </p>
            )}
            <TextInput
              required
              label="Kode Pos"
              placeholder=""
              onBlur={() => form.validateField("kodepos")}
              {...form.getInputProps("kodepos")}
            />
            <TextInput
              label="NIK"
              name="nik"
              required
              onBlur={() => form.validateField("nik")}
              {...form.getInputProps("nik")}
            />
            <TextInput
              label="File KTP"
              name="file_ktp"
              required
              onBlur={() => form.validateField("file_ktp")}
              {...form.getInputProps("file_ktp")}
            />
            <TextInput
              label="Telepon"
              name="tlp"
              required
              onBlur={() => form.validateField("tlp")}
              {...form.getInputProps("tlp")}
            />
            <TextInput
              label="Email"
              name="email"
              required
              onBlur={() => form.validateField("email")}
              {...form.getInputProps("email")}
            />
          </div>
          <div className="grid-col-12 space-y-2">
            <DatePicker
              placeholder="Pick date"
              label="Tanggal Rekam"
              required
              onBlur={() => form.validateField("created_at")}
              {...form.getInputProps("created_at")}
            />
            <DatePicker
              placeholder="Pick date"
              label="Tanggal Mutakhir"
              required
              onBlur={() => form.validateField("updated_at")}
              {...form.getInputProps("updated_at")}
            />
            <TextInput
              label="Pas Foto"
              name="pas_foto"
              required
              onBlur={() => form.validateField("pas_foto")}
              {...form.getInputProps("pas_foto")}
            />
          </div>
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
        </div>
      </form>
    </>
  );
}
