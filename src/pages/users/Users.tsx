import "./users.scss";
import {DataTable} from "../../Companents/DataTable/DataTable.tsx";
import {GridColDef} from "@mui/x-data-grid";
import {userRows} from "../../data.ts";
import {useState} from "react";
import {AddUser} from "../../Companents/AddUser/AddUser.tsx";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params) => {
            return (
                <img src={params.row.img || "/noavatar.png"} alt="avatar"/>
            )
        }
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 130,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 130,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 200,
    },
    {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 150,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 100,
        type: "string",
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 70,
        type: "boolean",
    },
];

export const Users = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable columns={columns}
                       rows={userRows}
                       slug="users"
            />
            {open && <AddUser slug="user" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}