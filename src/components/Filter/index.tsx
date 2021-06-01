import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { TextField, makeStyles } from "@material-ui/core";

import { getPhotos, resetPhotos } from "../../store/photos/slices";

const useStyles = makeStyles({
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "auto",
  },
});

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [albumId, setAlbumId] = useState<number | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    return () => {
      setErr(false);
      setAlbumId(null);
      dispatch(resetPhotos());
    };
  }, [dispatch]);

  const handleChange = (e: any) => {
    if (isNaN(+e.target.value)) {
      setErr(true);
    } else {
      setAlbumId(+e.target.value);
      setErr(false);
    }
  };

  const handleGetPhotos = () => {
    if (typeof albumId === "number") {
      dispatch(getPhotos({ albumId }));
    }
  };

  return (
    <div className={classes.div}>
      <TextField
        value={albumId ?? ""}
        variant="outlined"
        onChange={handleChange}
        error={err}
        label={err && "Incorrect entry"}
        placeholder="Enter album number"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleGetPhotos}
        size="large"
      >
        Click
      </Button>
    </div>
  );
};

export { Filter };
