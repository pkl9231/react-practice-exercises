import React from 'react'
import ChildC from "./ChildC"
const ChildB = (props) => {
    console.log("in Child B", props.fromChildA)
    return <>
       < ChildC fromChildB = {props.fromChildA} />
    </>
}

export default ChildB
