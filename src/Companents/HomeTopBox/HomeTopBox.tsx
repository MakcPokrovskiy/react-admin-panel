//style
import './hometopbox.scss';

//data
import {topDealUsers} from "../../data.ts";

export const HomeTopBox = () => {
    return (
        <div className="homeTopBox">
            <h2>Top Deals</h2>
            <ul className="list">
                {
                    topDealUsers.map(user => {
                        return (
                            <li className="listItem" key={user.id}>
                                <div className="user">
                                    <img src={user.img} alt="user-avatar"/>
                                    <div className="userContent">
                                        <span className="userName">{user.username}</span>
                                        <span className="email">{user.email}</span>
                                    </div>
                                </div>
                                <span className="amount">${user.amount}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}