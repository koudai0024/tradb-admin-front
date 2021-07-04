import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import type { FieldProps } from "react-admin";

const useStyles = makeStyles({
  root: { width: 25, maxWidth: 25, maxHeight: 25 },
});

type PictureProps = {
  id: string;
  imageUrl: string;
};

export const PictureField: React.VFC<FieldProps<PictureProps>> = (props) => {
  const record = props.record;
  const classes = useStyles();
  return record ? (
    <img src={record.imageUrl} className={classes.root} alt="" />
  ) : (
    <p>not image</p>
  );
};
