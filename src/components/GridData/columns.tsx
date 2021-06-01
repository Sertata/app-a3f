import { GridColDef } from "@material-ui/data-grid";
import Link from "@material-ui/core/Link";

const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 100 },
  { field: "albumId", headerName: "albumId", width: 200 },
  { field: "title", headerName: "Title", width: 400 },
  {
    field: "thumbnailUrl",
    headerName: "thumbnailUrl",
    width: 400,
    renderCell: (params) => {
      return (
        <span
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={params.row.thumbnailUrl} alt={params.row.title} />
        </span>
      );
    },
  },
  {
    field: "url",
    headerName: "url",
    width: 400,
    renderCell: (params) => {
      return (
        <Link href={params.row.url} target="_blank">
          {params.row.url}
        </Link>
      );
    },
  },
];

export { columns };
