//map
import "./style.css";
import React, { useState, useEffect } from 'react';
import Item from '../Item';
import { Loading } from "../Loading";

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
            <Loading/>
        )}
    </div>
}
export default ItemList;

