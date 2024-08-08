//map
import "./style.css";
import React, { useState, useEffect } from 'react';
import Item from '../Item';

function ItemList() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timer = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        timer.then(() => {
            setIsMounted(true);
        });
    }, []);

    return <div id="ItemList">
        {isMounted ? (
            <div><Item/></div>
        ) : (
            <div><img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif" width="200px"/></div>
        )}
    </div>
}
export default ItemList;

