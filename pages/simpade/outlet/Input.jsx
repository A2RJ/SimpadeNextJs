import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {
      data: [],
    },
  };
}

export default function Input() {
  const form = useForm({
    initialValues: {
      outlet_id: "",
      wp_main_id: "",
      jenis_pajak_id: "",
      status_outlet_id: "",
      nama_wp: "",
      nopd: "",
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
      kodepos: "",
      alamat_outlet: "",
      rt: "",
      rw: "",
      lat: "",
      lng: "",
    },

    validationRules: {
      outlet_id: (value) => value !== "",
      wp_main_id: (value) => value !== "",
      jenis_pajak_id: (value) => value !== "",
      status_outlet_id: (value) => value !== "",
      nama_wp: (value) => value !== "",
      nopd: (value) => value !== "",
      kabupaten: (value) => value !== "",
      kecamatan: (value) => value !== "",
      kelurahan: (value) => value !== "",
      kodepos: (value) => value !== "",
      alamat_outlet: (value) => value !== "",
      rt: (value) => value !== "",
      rw: (value) => value !== "",
      lat: (value) => value !== "",
      lng: (value) => value !== "",
    },

    errorMessages: {
      outlet_id: "Outlet ID harus diisi",
      wp_main_id: "WP Main ID harus diisi",
      jenis_pajak_id: "Jenis Pajak ID harus diisi",
      status_outlet_id: "Status Outlet ID harus diisi",
      nama_wp: "Nama WP harus diisi",
      nopd: "NOPD harus diisi",
      kabupaten: "Kabupaten harus diisi",
      kecamatan: "Kecamatan harus diisi",
      kelurahan: "Kelurahan harus diisi",
      kodepos: "Kode Pos harus diisi",
      alamat_outlet: "Alamat Outlet harus diisi",
      rt: "RT harus diisi",
      rw: "RW harus diisi",
      lat: "Lat harus diisi",
      lng: "Lng harus diisi",
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>Input data Outlet</title>
      </Head>
      <div className="px-4">
        <h1 className="my-4 text-2xl">Data Outlet</h1>

        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid-col-12 space-y-2">
              <TextInput
                required
                label="Outlet ID"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("outlet_id")}
                {...form.getInputProps("outlet_id")}
              />
              <TextInput
                required
                label="WP Main ID"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("wp_main_id")}
                {...form.getInputProps("wp_main_id")}
              />
              <TextInput
                required
                label="Jenis Pajak ID"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("jenis_pajak_id")}
                {...form.getInputProps("jenis_pajak_id")}
              />
              <TextInput
                required
                label="Status Outlet ID"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("status_outlet_id")}
                {...form.getInputProps("status_outlet_id")}
              />
              <TextInput
                required
                label="Nama WP"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("nama_wp")}
                {...form.getInputProps("nama_wp")}
              />
              <TextInput
                required
                label="NOPD"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("nopd")}
                {...form.getInputProps("nopd")}
              />
            </div>
            <div className="grid-col-12 space-y-2">
              <TextInput
                required
                label="Kabupaten"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("kabupaten")}
                {...form.getInputProps("kabupaten")}
              />
              <TextInput
                required
                label="Kecamatan"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("kecamatan")}
                {...form.getInputProps("kecamatan")}
              />
              <TextInput
                required
                label="Kelurahan"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("kelurahan")}
                {...form.getInputProps("kelurahan")}
              />
              <TextInput
                required
                label="Kode Pos"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("kodepos")}
                {...form.getInputProps("kodepos")}
              />
              <TextInput
                required
                label="Alamat Outlet"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("alamat_outlet")}
                {...form.getInputProps("alamat_outlet")}
              />
              <TextInput
                required
                label="RT"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("rt")}
                {...form.getInputProps("rt")}
              />
              <TextInput
                required
                label="RW"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("rw")}
                {...form.getInputProps("rw")}
              />
              <TextInput
                required
                label="Lat"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("lat")}
                {...form.getInputProps("lat")}
              />
              <TextInput
                required
                label="Lng"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("lng")}
                {...form.getInputProps("lng")}
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
