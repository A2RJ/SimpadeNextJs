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
      afe_id: "",
      produk_afe_id: "",
      kategori_afe_id: "",
      status_id: "",
      afe_status_id: "",
      tanggal_install: "",
      tanggal_aktif: "",
      wp_view: "",
      serial_number: "",
      tanggal_produksi: "",
      tanggal_deliver: "",
    },

    validationRules: {
      afe_id: (value) => value !== "",
      produk_afe_id: (value) => value !== "",
      kategori_afe_id: (value) => value !== "",
      status_id: (value) => value !== "",
      afe_status_id: (value) => value !== "",
      tanggal_install: (value) => value !== "",
      tanggal_aktif: (value) => value !== "",
      wp_view: (value) => value !== "",
      serial_number: (value) => value !== "",
      tanggal_produksi: (value) => value !== "",
      tanggal_deliver: (value) => value !== "",
    },

    errorMessages: {
      afe_id: "Pilih AFE",
      produk_afe_id: "Pilih Produk AFE",
      kategori_afe_id: "Pilih Kategori AFE",
      status_id: "Pilih Status",
      afe_status_id: "Pilih Status AFE",
      tanggal_install: "Pilih Tanggal Install",
      tanggal_aktif: "Pilih Tanggal Aktif",
      wp_view: "Pilih WP View",
      serial_number: "Pilih Serial Number",
      tanggal_produksi: "Pilih Tanggal Produksi",
      tanggal_deliver: "Pilih Tanggal Deliver",
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>Input data AFE</title>
      </Head>
      <div className="px-4">
        <h1 className="my-4 text-2xl">Data AFE</h1>

        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid-col-12 space-y-2">
              <TextInput
                required
                label="AFE ID"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("afe_id")}
                {...form.getInputProps("afe_id")}
              />
              <TextInput
                required
                label="Produk AFE ID"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("produk_afe_id")}
                {...form.getInputProps("produk_afe_id")}
              />
              <TextInput
                required
                label="Kategori AFE ID"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("kategori_afe_id")}
                {...form.getInputProps("kategori_afe_id")}
              />
              <TextInput
                required
                label="Status ID"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("status_id")}
                {...form.getInputProps("status_id")}
              />{" "}
              <TextInput
                required
                label="Status AFE ID"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("afe_status_id")}
                {...form.getInputProps("afe_status_id")}
              />
              <TextInput
                required
                label="Tanggal Install"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("tanggal_install")}
                {...form.getInputProps("tanggal_install")}
              />
            </div>
            <div className="grid-col-12 space-y-2">
              <TextInput
                required
                label="Tanggal Aktif"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("tanggal_aktif")}
                {...form.getInputProps("tanggal_aktif")}
              />
              <TextInput
                required
                label="WP View"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("wp_view")}
                {...form.getInputProps("wp_view")}
              />
              <TextInput
                required
                label="Serial Number"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("serial_number")}
                {...form.getInputProps("serial_number")}
              />
              <TextInput
                required
                label="Tanggal Produksi"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("tanggal_produksi")}
                {...form.getInputProps("tanggal_produksi")}
              />
              <TextInput
                required
                label="Tanggal Deliver"
                placeholder=""
                className="rounded-full"
                onBlur={() => form.validateField("tanggal_deliver")}
                {...form.getInputProps("tanggal_deliver")}
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
