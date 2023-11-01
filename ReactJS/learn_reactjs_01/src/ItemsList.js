import React from 'react'
import LineItem from './LineItem'

const ItemsList = ({ items, handleCheck, handelDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handelDelete={handelDelete}
                />
            ))}
        </ul>
    )
}

export default ItemsList
