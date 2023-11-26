import "./users.scss";
import {DataTable} from "../../Companents/DataTable/DataTable.tsx";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {userRows} from "../../data.ts";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 150,
        renderCell: (params) => {
            return (
                <img src={params.row.img || "/noavatar.png"} alt="avatar"/>
            )
        }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
        type: "boolean",

    },
];

export const Users = () => {
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>
            <DataTable columns={columns}
                       rows={userRows}
                       slug="users"
            />
        </div>
    )
}