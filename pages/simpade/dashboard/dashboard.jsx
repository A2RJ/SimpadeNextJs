import {
  Button,
  Grid,
  Card,
  Image,
  Text,
  Badge,
  Group,
  useMantineTheme,
} from "@mantine/core";

export default function dashboard() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard Page</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Blank Page</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Title</h3>

            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus"></i>
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            Start creating your amazing application!{" "}
            <Button
              className="my-button "
              style={{ backgroundColor: "#000" }}
              mx={20}
            >
              My button
            </Button>
            <Grid>
              <Grid.Col md={6} lg={3} className="">
                1
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                2
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                3
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                4
              </Grid.Col>
            </Grid>
            <div style={{ width: 340, margin: "auto" }}>
              <Card shadow="sm" padding="lg">
                <Card.Section>
                  <Image src="./image.png" height={160} alt="Norway" />
                </Card.Section>

                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                >
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text
                  size="sm"
                  style={{ color: secondaryColor, lineHeight: 1.5 }}
                >
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with tours and activities on and around the fjords
                  of Norway
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                >
                  Book classic tour now
                </Button>
              </Card>
            </div>
          </div>
          <div className="card-footer">Footer</div>
        </div>
      </section>
    </div>
  );
}
