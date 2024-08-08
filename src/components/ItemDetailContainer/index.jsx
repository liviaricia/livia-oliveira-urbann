import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';

function ItemDetailContainer() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        getItem.then(() => {
            setIsMounted(true);
        });
    }, []);


    return <div>
        {isMounted ? (
            <div><ItemDetail /></div>
        ) : (
            <div><img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif" width="200px" /></div>
        )}
    </div>
}

export default ItemDetailContainer;
