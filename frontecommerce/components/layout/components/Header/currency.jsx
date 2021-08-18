import React from "react"

const currency = (props) => (
    <select>
    {
        props.currency.currency && props.currency.currency.map(i => (
            <option key={i.Title} value={i.Title}>{i.Title}</option>
        )) }
    
    
</select>
)

export default currency