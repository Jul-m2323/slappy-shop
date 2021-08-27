import React, { useEffect } from 'react'
import ItemCard from './Item'

const getItems = () => {
    let newPromise = new Promise ((resolve) => {
        setTimeout(
            function(){
                resolve (<ItemCard/>)
            }
        )
    });
}
console.log(newPromise);