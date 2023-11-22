//styles
import './menu.scss';

//RRD
import {Link} from "react-router-dom";

//data
import {menu} from "../../data.ts";

export const Menu = () => {
    return (
        <div className='menu'>
            {
                menu.map(elem => {
                    return (
                        <div className="item" key={elem.id}>
                            <span className="title">{elem.title}</span>
                            {
                                elem.listItems.map(listItem => {
                                    return (
                                        <Link to={listItem.url} className="listItem" key={listItem.id}>
                                            <img src={listItem.icon} alt="home"/>
                                            <span className="listItemTitle">{listItem.title}</span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}