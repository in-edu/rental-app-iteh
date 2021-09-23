import React, { useState } from "react";
import { useSelector } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Slider from "../common/Slider";

const Home = (props) => {
  const { id, info, price, name, street, filename } = props.home1;
  const { addLikedHome, deleteHome, liked } = props;
  const [readMore, setReadMore] = useState(false);
  const backendUrl = "http://127.0.0.1:8000/images/";
  const user = useSelector((state) => state.userReducer);

  const [successMode, setSuccessMode] = useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  function editHome(id) {
    props.history.push("/form-home/" + id);
  }
  function handleClose() {
    setOpen(false);
  }
  function handleAgree() {
    setSuccessMode(true);
    deleteHome(id);
  }
  return (
    <article className="single-apartment">
      <Slider home_id={id} style={{ maxWidth: "100%" }} />
      {/* <img src={backendUrl + filename} alt={name}></img> */}
      <footer>
        <div className="apartment-info">
          <h4>{name}</h4>
          <p>{props.home1.category}</p>
          <h4 className="apartment-price">${price}</h4>
        </div>
        <div className="apartment-contact">
          <p>{street}</p>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 40)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
          <a href={"/apartment/" + id}> | Full view</a>
        </p>
        {user.isAdmin && (
          <button className="delete-btn" onClick={() => editHome(id)}>
            {" "}
            EDIT
          </button>
        )}
        {user.isAdmin && (
          <button className="delete-btn" onClick={() => setOpen(true)}>
            {" "}
            DELETE
          </button>
        )}

        {!user.isAdmin && (
          <button
            className="delete-btn"
            onClick={() => addLikedHome(id)}
            disabled={liked}
          >
            {" "}
            interested
          </button>
        )}
        <div>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              Brisanje apartmana
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {successMode
                  ? "Uspesno ste izbrisali apartman!"
                  : "Da li zaista zelite za izbriste apartman?"}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                {successMode ? "Povratak na pocetnu stranu" : "Ne"}
              </Button>
              {!successMode && (
                <Button onClick={handleAgree} color="primary" autoFocus>
                  Da
                </Button>
              )}
            </DialogActions>
          </Dialog>
        </div>
      </footer>
    </article>
  );
};

export default Home;
