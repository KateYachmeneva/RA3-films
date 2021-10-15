/* eslint-disable no-mixed-operators */
import Star from "./Star/Star";
import './Stars.css';



let ids = require('short-id')
const Stars = (props) => {
    const quantityStars = props.count;
if (typeof quantityStars != "number" || quantityStars < 1 && quantityStars > 5)
{
    return null;
}
console.log(typeof quantityStars)
const generateStars = [...Array(quantityStars).keys()].map(star => <Star key = {ids.generate()} />)
console.log(generateStars)
return (
    <ul className='card-body-stars u-clearfix'>
    {generateStars}
    </ul>
);
}
export default Stars;