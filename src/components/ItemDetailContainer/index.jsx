import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { Loading } from '../Loading';

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
            <Loading/>
        )}
    </div>
}

export default ItemDetailContainer;
