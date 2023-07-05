import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeam, updateTeam } from "@/store/TeamSlice";

const style = {
  marginBottom: "30px",
};

const EditTeam = (props) => {
  const [item, setItem] = useState(props.item);

  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(props?.item?.avatar || "");

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
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
      formData.append("avatar", image);
    }
    formData.append("name", item?.name);
    formData.append("call", item?.call);
    formData.append("LinkedIn", item?.LinkedIn);
    formData.append("facebook", item?.facebook);
    formData.append("instagram", item?.instagram);
    formData.append("description", item?.description);

    if (item?.id) {
      formData.append("TeamId", item?.id);
      dispatch(updateTeam(formData));
    } else {
      dispatch(addTeam(formData));
    }
  };

  return (
    <>
      <h1 style={style}>About</h1>
      <TextField
        label="Name"
        name="name"
        value={item?.name}
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
          name="avatar"
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

      <Button sx={style} variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </>
  );
};

export default EditTeam;
