import './dataTable.scss';
import {DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid";
import {Link} from "react-router-dom";
import {useState} from "react";

type Props = {
    columns: GridColDef[];
    rows: Object[];
    slug: string;
}

export const DataTable = (props: Props) => {
    const [rows, setRows] = useState(props.rows)

    const handelDelete = (id: number) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    }

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="view"/>
                    </Link>
                    <div className="delete"
                         onClick={() => {
                             handelDelete(params.row.id)
                         }}
                    >
                        <img src="/delete.svg" alt="delete"/>
                    </div>
                </div>
            )
        }

    }

    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{toolbar: GridToolbar}}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: {debounceMs: 500},
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    )
}