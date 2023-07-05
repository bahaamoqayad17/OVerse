import Layout from "@/components/dashboard/Layout";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { updateHeader, updateSecondPage } from "@/store/HeaderSlice";
import { useDispatch, useSelector } from "react-redux";

const style = {
  marginBottom: "30px",
};

const Header = () => {
  const { header, secondPage } = useSelector((state) => state.home);
  const [item, setItem] = useState(header);
  const [itemSec, setItemSec] = useState(secondPage);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(secondPage?.image || "");
  const [desc1, setDesc1] = useState(secondPage.descriptions[0] || "");
  const [desc2, setDesc2] = useState(secondPage.descriptions[1] || "");
  const [desc3, setDesc3] = useState(secondPage.descriptions[2] || "");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSaveHeader = () => {
    dispatch(updateHeader(item));
  };

  const handleSaveSecond = () => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("title", itemSec?.title);

    formData.append("descriptions[0]", desc1);
    formData.append("descriptions[1]", desc2);
    formData.append("descriptions[2]", desc3);

    dispatch(updateSecondPage(formData));
  };

  return (
    <>
      <Box sx={{ p: 8 }}>
        <h1 style={style}>Header Section</h1>
        <TextField
          label="Title"
          name="title"
          value={item?.title}
          onChange={handleChange}
          fullWidth
          sx={style}
        />
        <TextField
          label="Description"
          name="description"
          multiline
          rows={5}
          value={item?.description}
          onChange={handleChange}
          fullWidth
          sx={style}
        />
        <TextField
          label="Call"
          name="call"
          value={item?.call}
          onChange={handleChange}
          fullWidth
          sx={style}
        />
        <TextField
          label="LinkedIn"
          name="LinkedIn"
          value={item?.LinkedIn}
          onChange={handleChange}
          fullWidth
          sx={style}
        />
        <TextField
          label="Facebook"
          name="facebook"
          value={item?.facebook}
          onChange={handleChange}
          fullWidth
          sx={style}
        />
        <TextField
          label="Instagram"
          name="instagram"
          value={item?.instagram}
          onChange={handleChange}
          fullWidth
          sx={style}
        />

        <Button sx={style} variant="contained" onClick={handleSaveHeader}>
          Save
        </Button>

        <Box>
          <h1 style={style}>Wallet Page Section</h1>
          <TextField
            label="Title"
            name="title"
            value={itemSec?.title}
            onChange={(e) => setItemSec({ ...itemSec, title: e.target.value })}
            fullWidth
            sx={style}
          />

          <TextField
            label={`Description`}
            multiline
            rows={5}
            value={desc1}
            fullWidth
            onChange={(e) => setDesc1(e.target.value)}
            sx={style}
          />
          <TextField
            label={`Description`}
            multiline
            rows={5}
            value={desc2}
            fullWidth
            onChange={(e) => setDesc2(e.target.value)}
            sx={style}
          />
          <TextField
            label={`Description`}
            multiline
            rows={5}
            value={desc3}
            fullWidth
            onChange={(e) => setDesc3(e.target.value)}
            sx={style}
          />
          <Box sx={style}>
            <input
              style={style}
              type="file"
              name="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file);
                setImageUrl(URL.createObjectURL(file));
              }}
            />

            {imageUrl && (
              <Box sx={style}>
                <img
                  src={imageUrl}
                  alt="Selected Image"
                  style={{ width: "100px", height: "auto" }}
                />
              </Box>
            )}
          </Box>
          <Button sx={style} variant="contained" onClick={handleSaveSecond}>
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
};

Header.getLayout = (page) => <Layout>{page}</Layout>;
export default Header;
