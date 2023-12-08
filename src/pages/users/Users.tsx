import {GridColDef} from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import {useState} from "react";
import Add from "../../components/add/Add";
// import {useQuery} from "@tanstack/react-query";
import {userRows} from "../../data.ts";

const columns: GridColDef[] = [
    {field: "id", headerName: "ID", width: 90},
    {
        field: "img",
        headerName: "Аватар",
        width: 80,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt=""/>;
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "Имя",
        width: 120,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Фамилия",
        width: 120,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 190,
    },
    {
        field: "phone",
        type: "string",
        headerName: "Телефон",
        width: 150,
    },
    {
        field: "createdAt",
        headerName: "Зарегистрировался",
        width: 140,
        type: "string",
    },
    {
        field: "verified",
        headerName: "Проверено",
        width: 100,
        type: "boolean",
    },
];

const Users = () => {
    const [open, setOpen] = useState(false);

    // TEST THE API

    // const {isLoading, data} = useQuery({
    //     queryKey: ["allusers"],
    //     queryFn: () =>
    //         fetch("http://localhost:8800/api/users").then(
    //             (res) => res.json()
    //         ),
    // });

    return (
        <div className="users">
            <div className="info">
                <h1>Пользователи</h1>
                <button onClick={() => setOpen(true)}>Добавить нового пользователя</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows}/>
            {/* TEST THE API */}

            {/*{isLoading ? (*/}
            {/*    "Loading..."*/}
            {/*) : (*/}
            {/*    <DataTable slug="users" columns={columns} rows={data}/>*/}
            {/*)}*/}

            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>
    );
};

export default Users;
