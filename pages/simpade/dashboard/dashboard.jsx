import { Grid, Select } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  provinsi,
  provinsiById,
} from "../../../components/indonesia/indonesia";

export default function Dashboard() {
  const [prov, setprov] = useState([]);
  useEffect(() => {
    provinsi().then((data) =>
      setprov(
        data.map((item) => {
          return {
            ...item,
            value: item.prov_id,
            label: item.prov_name,
          };
        })
      )
    );
  }, []);

  const getProvinsi = (e) => {
    provinsiById(e).then((data) => console.log(data[0]));
  };

  return (
    <>
      <Select
        label="Pilih Kabupaten"
        placeholder="Pick one"
        data={prov}
        clearable
        searchable
        onChange={(e) => getProvinsi(e)}
      />
      {/* <Grid grow>
        <Grid.Col span={4}>
          <h1
            style={{
              backgroundColor: "#70cfd4",
              color: "white",
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              borderRadius: "0.5rem",
            }}
          >
            Dashboard
          </h1>
        </Grid.Col>
        <Grid.Col span={4}>
          <h1
            style={{
              backgroundColor: "#70cfd4",
              color: "white",
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              borderRadius: "0.5rem",
            }}
          >
            Dashboard
          </h1>
        </Grid.Col>
        <Grid.Col span={4}>
          <h1
            style={{
              backgroundColor: "#70cfd4",
              color: "white",
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              borderRadius: "0.5rem",
            }}
          >
            Dashboard
          </h1>
        </Grid.Col>
        <Grid.Col span={4}>
          <h1
            style={{
              backgroundColor: "#70cfd4",
              color: "white",
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              borderRadius: "0.5rem",
            }}
          >
            Dashboard
          </h1>
        </Grid.Col>
        <Grid.Col span={4}>
          <h1
            style={{
              backgroundColor: "#70cfd4",
              color: "white",
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              borderRadius: "0.5rem",
            }}
          >
            Dashboard
          </h1>
        </Grid.Col>
      </Grid> */}
    </>
  );
}
