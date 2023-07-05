import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFaq, updateFaq } from "@/store/FaqSlice";

const style = {
  marginBottom: "30px",
};

const EditFaq = (props) => {
  const [item, setItem] = useState(props.item);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = () => {
    if (item?.id) {
      dispatch(updateFaq({ ...item, FaqId: item?.id }));
    } else {
      dispatch(addFaq(item));
    }
  };

  return (
    <>
      <h1 style={style}>FAQ</h1>
      <TextField
        label="Question"
        name="question"
        value={item?.question}
        onChange={handleChange}
        fullWidth
        sx={style}
      />

      <TextField
        label="Answer"
        name="answer"
        multiline
        rows={5}
        value={item?.answer}
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

export default EditFaq;
