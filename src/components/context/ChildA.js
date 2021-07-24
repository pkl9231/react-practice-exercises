import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
    console.log("In Child A", props.fromParent)
    return <>
        <h1>Child A</h1>
         < ChildB fromChildA = {props.fromParent}/>
    </>
}

export default ChildA