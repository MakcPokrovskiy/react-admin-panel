import './product.scss';
import {Single} from "../../Companents/Single/Single.tsx";
import {singleProduct} from "../../data.ts";

export const Product = () => {

    //fetch data and send to single component
    return (
        <div className="product">
            <Single {...singleProduct}/>
        </div>
    )
}