import { Button, Title, Select, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Indonesia from "../../../lib/indonesia";

export async function getServerSideProps() {
  const { dataKabupaten } = await Indonesia.kabupaten();
  const data = JSON.stringify(dataKabupaten);
  return {
    props: {
      data: data || [],
    },
  };
}

export default function Testing({ data }) {
  let provinsi = JSON.parse(data);

  const [selectedKecamatan, setKecamatan] = useState([]);
  const [selectedKelurahan, setKelurahan] = useState([]);

  const coba = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const getKecamatan = async (e) => {};

  const getKelurahan = async (e) => {};

  const getKodePos = async (e) => {};

  const onSubmit = (values) => {
    console.log(values);
  };

  const firstName = register("firstName", { required: "required", min: 8 });

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

      <form onSubmit={handleSubmit((values) => onSubmit(values))}>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="px-1">
            {/* nama pemda */}
            <div>
              <label
                htmlFor="nama_pemda"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Nama pemimpin daerah
              </label>
              <input
                type="text"
                id="nama_pemda"
                className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-200 sm:text-xs"
                {...register("nama_pemda", {
                  required: "required",
                })}
              />
              {errors.nama_pemda && (
                <p className="text-red-500">{errors.nama_pemda.message}</p>
              )}
            </div>
            {/* kode pemda */}
            <div>
              <label
                htmlFor="kode_pemda"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Kode pemerintah daerah
              </label>
              <input
                type="text"
                id="kode_pemda"
                className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-200 sm:text-xs"
                {...register("kode_pemda", {
                  required: "required",
                })}
              />
              {errors.kode_pemda && (
                <p className="text-red-500">{errors.kode_pemda.message}</p>
              )}
            </div>
            {/* nomenklatur */}
            <div>
              <label
                htmlFor="nomenklatur"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Nama pemimpin daerah
              </label>
              <input
                type="text"
                id="nomenklatur"
                className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-200 sm:text-xs"
                {...register("nomenklatur", {
                  required: "required",
                })}
              />
              {errors.nomenklatur && (
                <p className="text-red-500">{errors.nomenklatur.message}</p>
              )}
            </div>
            {/* alamat */}
            <div>
              <label
                htmlFor="alamat"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-200 sm:text-xs"
                {...register("alamat", {
                  required: "required",
                })}
              />
              {errors.alamat && (
                <p className="text-red-500">{errors.alamat.message}</p>
              )}
            </div>
            {/* pilih kabupaten */}
            <div>
              <label
                htmlFor="kabupaten"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Kabupaten
              </label>
              <Select
                label="Your favorite framework/library"
                placeholder="Pick one"
                searchable
                clearable
                nothingFound="No options"
                data={["React", "Angular", "Svelte", "Vue"]}
                onChange={(e) => {
                  e === getValues("firstName")
                    ? setValue("firstName", null)
                    : setValue("firstName", e);
                }}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
              <TextInput
                ref={coba}
                className=""
                placeholder="Your name"
                label="Full name"
                required
              />
            </div>
          </div>
          <div className="">
            <div className="">03</div>
            <div className="">04</div>
          </div>
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
      </form>
    </>
  );
}
