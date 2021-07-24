/*
Context provides a way to pass data through the component
tree without having to pass props down manually at every level.
*/

import React, { createContext } from 'react'
import ChildA from "./ChildA"

export const Context = createContext() // this is create context and should wrap into 

const data = {
    fName: "Purushottam",
    lName: "Lohani"
}

const Parent = () => {
    return (
        <>
            <Context.Provider value={data}>
                <ChildA fromParent="Parent Data" />
            </Context.Provider>
        </>
    )
}

export default Parent;