import { Link } from "react-router-dom";

export default function ProductCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td>
{/* //     add Link here and keep the data-testid="brand" on Link tag       */}
<Link to={`/products/${id}`}data-testid="brand" style={{color:"green"}}>{brand}</Link>
            </td>
            <td data-testid="category">{category}
            </td>
            <td data-testid="price">{price}
            </td>
                    </tr>
    )
}
