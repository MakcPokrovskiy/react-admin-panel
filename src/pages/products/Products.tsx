import './products.scss';
import {useState} from "react";
import {DataTable} from "../../Companents/DataTable/DataTable.tsx";
import {products} from "../../data.ts";
import {AddUser} from "../../Companents/AddUser/AddUser.tsx";
import {GridColDef} from "@mui/x-data-grid";


const columns: GridColDef[] = [
    {field: "id", headerName: "ID", width: 90},
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt=""/>;
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 100,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 120,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 100,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 100,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 130,
        type: "boolean",
    },
];

export const Products = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add New Products</button>
            </div>
            <DataTable columns={columns}
                       rows={products}
                       slug="products"
            />
            {open && <AddUser slug="product" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}