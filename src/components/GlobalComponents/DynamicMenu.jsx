import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DynamicModal from "./DynamicModel";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { resources } from "@/lib/resources";
import { useDispatch } from "react-redux";

export default function DynamicMenu({ item, model }) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpenModal(false);
  };

  const handleOpenMenu = () => {
    setOpenModal(true);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item ?")) {
      dispatch(resources[model].remove(item.id));
    } else {
      return;
    }
  };

  return (
    <>
      <DynamicModal
        item={item}
        setOpenModal={setOpenModal}
        open={openModal}
        model={model}
      />
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickMenu}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleOpenMenu}>
          <EditIcon fontSize="small" />
          &nbsp; {t("edit")}
        </MenuItem>
        {/* <MenuItem>
          <Link href={{ pathname: `/${model}/${item._id}` }}>
            <p style={{ color: "#000", textDecoration: "none" }}>
              <ShowIcon fontSize="small" />
              &nbsp; {t("show")}
            </p>
          </Link>
        </MenuItem> */}
        <MenuItem onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
          &nbsp; {t("delete")}
        </MenuItem>
      </Menu>
    </>
  );
}
