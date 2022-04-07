import { Button, Select, TextInput, Textarea } from "@mantine/core";

import { DatePicker } from "@mantine/dates";
import Head from "next/head";
import Indonesia from "../../../lib/indonesia";
import { useForm } from "@mantine/hooks";
import { useState, useEffect } from "react";

// export async function getServerSideProps() {
//   const kabupaten = await Indonesia.kabupaten().then((res) => {
//     return res.map((item) => {
//       return {
//         label: item.city_name,
//         value: item.city_id,
//       };
//     });
//   });

//   return {
//     props: {
//       kabupaten,
//     },
//   };
// }

export default function Input() {
  const [kabupaten, setKabupaten] = useState([]);
  const [selectKecamatan, setKecamatan] = useState([]);
  const [selectKelurahan, setKelurahan] = useState([]);

  useEffect(() => {
    (async () => {
      const kabupaten = await Indonesia.kabupaten().then((res) => {
        return res.map((item) => {
          return {
            label: item.city_name,
            value: item.city_id,
          };
        });
      });
      setKabupaten(kabupaten);
    })();
  }, [setKabupaten]);

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
      kotakab: (value) => value !== "" && value !== null,
      kecamatan: (value) => value !== "" && value !== null,
      kelurahan: (value) => value !== "" && value !== null,
      kodepos: (value) => value !== "" && value !== null && /^\d+$/.test(value),
      nama_kepinstansi: (value) => value !== "",
      tlp: (value) => value !== "" && /^\d+$/.test(value),
      email: (value) => value !== "" && /^\S+@\S+$/.test(value),
      file_logo: (value) => value !== "",
      file_kantor: (value) => value !== "",
      created_at: (value) => value !== "" && value !== null,
      updated_at: (value) => value !== "" && value !== null,
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
      created_at: "Tanggal rekam harus diisi",
      updated_at: "Tanggal update harus diisi",
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
    kodepos.length > 0
      ? form.setFieldValue("kodepos", kodepos[0].postal_code)
      : form.setFieldValue("kodepos", "");
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>Input Kantor Pajak</title>
      </Head>
      <div className="px-4">
        <h4 className="my-4 text-2xl">Instansi Pajak Daerah</h4>

        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid-col-12 space-y-2">
              <TextInput
                required
                label="Nama Pemerintah Daerah"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("nama_pemda")}
                {...form.getInputProps("nama_pemda")}
              />
              <TextInput
                required
                label="Kode Pemerintah Daerah"
                placeholder=""
                onBlur={() => form.validateField("kode_pemda")}
                {...form.getInputProps("kode_pemda")}
              />
              <TextInput
                required
                label="Nomenklatur"
                placeholder=""
                onBlur={() => form.validateField("nomenklatur")}
                {...form.getInputProps("nomenklatur")}
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
                <p className="text-[14px] text-red-500">
                  {form.errors.kotakab}
                </p>
              )}
              <Select
                searchable
                clearable
                allowDeselect
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

              <h4 className="my-4 px-4 text-2xl">Instansi Pajak Daerah</h4>

              <TextInput
                required
                label="Nama Kepala Instansi"
                placeholder=""
                onBlur={() => form.validateField("nama_kepinstansi")}
                {...form.getInputProps("nama_kepinstansi")}
              />
              <TextInput
                required
                label="Telepon"
                placeholder=""
                onBlur={() => form.validateField("tlp")}
                {...form.getInputProps("tlp")}
              />
              <TextInput
                required
                label="Email"
                placeholder=""
                onBlur={() => form.validateField("email")}
                {...form.getInputProps("email")}
              />
              <TextInput
                required
                label="File Logo"
                placeholder=""
                onBlur={() => form.validateField("file_logo")}
                {...form.getInputProps("file_logo")}
              />
              <TextInput
                required
                label="File Kantor"
                placeholder=""
                onBlur={() => form.validateField("file_kantor")}
                {...form.getInputProps("file_kantor")}
              />
            </div>
            <div className="grid-col-12 space-y-2">
              <DatePicker
                placeholder="Pick date"
                label="Tanggal Rekam"
                required
                {...form.getInputProps("created_at")}
              />
              <DatePicker
                placeholder="Pick date"
                label="Tanggal Update"
                required
                {...form.getInputProps("updated_at")}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button type="submit" color="primary" variant="outline">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
