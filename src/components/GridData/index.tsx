import React from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

import { IStore } from "../../interfaces/store/IStore";
import { ERequestStatus } from "../../enums/ERequestStatus";
import { columns } from "./columns";

const useStyles = makeStyles({
  div: {
    height: "90vh",
    width: "100%",
  },
});

const GridData: React.FC = () => {
  const classes = useStyles();

  const currentPhotos = useSelector(({ photos }: IStore) => photos.current);
  const isRequestingData = useSelector(
    ({ photos }: IStore) => photos.status === ERequestStatus.REQUESTED
  );

  return (
    <>
      <Backdrop className="fullScreen" open={isRequestingData}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.div}>
        {currentPhotos && (
          <DataGrid
            rows={currentPhotos}
            columns={columns}
            pageSize={10}
            autoHeight
          />
        )}
      </div>
    </>
  );
};

export { GridData };
