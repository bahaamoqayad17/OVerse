import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import DynamicModal from "@/components/GlobalComponents/DynamicModel";
import DataTable from "@/components/GlobalComponents/DataTable";
import Search from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Layout from "@/components/dashboard/Layout";
import { getFeatures } from "@/store/FeatureSlice";
import { useDispatch, useSelector } from "react-redux";
const Page = () => {
  const { features, loading } = useSelector((state) => state.features);
  const getPagination = (page, limit) => {
    page++;
  };
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const handleOpenModel = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    dispatch(getFeatures());
  }, []);

  return (
    <>
      <Head>
        <title>{`${process.env.APP_NAME} | Features`}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mb: 5,
              }}
            >
              <Typography sx={{ m: 1 }} variant="h3">
                All Features
              </Typography>
              <Box sx={{ m: 1 }}>
                <DynamicModal
                  setOpenModal={setOpenModal}
                  open={openModal}
                  model="features"
                />

                <Button
                  onClick={handleOpenModel}
                  color="primary"
                  variant="contained"
                >
                  Add Feature
                </Button>
              </Box>
            </Box>
            {/* <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Box sx={{ maxWidth: 500 }}>
                    <TextField
                      onKeyPress={(e) => search(e)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SvgIcon color="action" fontSize="small">
                              <Search />
                            </SvgIcon>
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Search Team Member"
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box> */}
          </Box>
          <Box sx={{ mt: 3 }}>
            <DataTable
              getPagination={getPagination}
              model={"features"}
              items={features}
              loading={loading}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
