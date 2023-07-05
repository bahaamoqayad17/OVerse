import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeature, updateFeature } from "@/store/FeatureSlice";

const style = {
  marginBottom: "30px",
};

const EditFeature = (props) => {
  const [item, setItem] = useState(props.item);

  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(props?.item?.icon || "");

  const handleChange = (e) => {
    if (e.target.name === "icon") {
      const file = e.target.files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    } else {
      const { name, value } = e.target;
      setItem({ ...item, [name]: value });
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    if (image) {
      formData.append("icon", image);
    }
    formData.append("title", item?.title);
    formData.append("description", item?.description);

    if (item?.id) {
      formData.append("FeatureId", item?.id);
      dispatch(updateFeature(formData));
    } else {
      dispatch(addFeature(formData));
    }
  };

  return (
    <>
      <h1 style={style}>Feature</h1>
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

      <Box sx={style}>
        <input
          type="file"
          name="icon"
          onChange={handleChange}
          accept="image/*"
          required
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

      <Button sx={style} variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </>
  );
};

export default EditFeature;
