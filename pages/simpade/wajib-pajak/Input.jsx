import { Button, Select, TextInput, Title } from "@mantine/core";

import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/hooks";
import Head from "next/head";
import { useState, useEffect } from "react";
import Indonesia from "../../../lib/indonesia";

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
      nomor_pelayanan: "",
      nama_wajib_pajak: "",
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
      kodepos: "",
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
      kabupaten: (value) => value !== "" || value !== null,
      kelurahan: (value) => value !== "" || value !== null,
      kecamatan: (value) => value !== "" || value !== null,
      kodepos: (value) => value !== "" && /^\d+$/.test(value),
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
      kabupaten: "Kelurahanurahan harus diisi",
      kelurahan: "Kelurahanurahan harus diisi",
      kecamatan: "Kecamatan harus diisi",
      kodepos: "Kode Pos harus diisi dan berupa angka",
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
        <title>Input Wajib Pajak</title>
      </Head>
      <h4 className="my-4 px-4 text-2xl">Data Wajib Pajak</h4>

      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
          <div className="grid-col-12 space-y-2">
            <TextInput
              required
              label="Nomor Pelayanan"
              placeholder=""
              onBlur={() => form.validateField("nomor_pelayanan")}
              {...form.getInputProps("nomor_pelayanan")}
            />
            <TextInput
              required
              label="Nama Wajib Pajak"
              placeholder=""
              onBlur={() => form.validateField("nama_wajib_pajak")}
              {...form.getInputProps("nama_wajib_pajak")}
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
              required
              label="NPWPD"
              placeholder=""
              onBlur={() => form.validateField("npwpd")}
              {...form.getInputProps("npwpd")}
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
              label="File Foto Depan Kantor"
              placeholder=""
              onBlur={() => form.validateField("file_foto_depan_kantor")}
              {...form.getInputProps("file_foto_depan_kantor")}
            />
            <TextInput
              required
              label="Surat Izin"
              placeholder=""
              onBlur={() => form.validateField("surat_izin")}
              {...form.getInputProps("surat_izin")}
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

            <h4 className="my-4 px-4 text-2xl">Informasi Outlet</h4>

            <TextInput
              required
              label="Jumlah Outlet"
              placeholder=""
              onBlur={() => form.validateField("jumlah_outlet")}
              {...form.getInputProps("jumlah_outlet")}
            />
            <TextInput
              required
              label="Jenis Outlet"
              placeholder=""
              onBlur={() => form.validateField("jenis_outlet")}
              {...form.getInputProps("jenis_outlet")}
            />
            <TextInput
              required
              label="Jenis Pajak"
              placeholder=""
              onBlur={() => form.validateField("jenis_pajak")}
              {...form.getInputProps("jenis_pajak")}
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
