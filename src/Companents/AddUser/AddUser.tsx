import './addUser.scss';
import {GridColDef} from "@mui/x-data-grid";


type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AddUser = (props: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //axios.post(`/api/${slug}s`, {})
    }
    return (
        <div className="addUser">
            <div className="modal">
                <span className="close-btn" onClick={() => props.setOpen(false)}>X</span>
                <h2>Add new {props.slug}</h2>
                <form onSubmit={handleSubmit}>
                    {props.columns
                        .filter((item) => item.field !== "id" && item.field !== "avatar")
                        .map((column) => (
                            <div className="item">
                                <label>{column.headerName}</label>
                                <input type={column.type} placeholder={column.field}/>
                            </div>
                        ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}