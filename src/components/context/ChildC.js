import React from 'react'
import { Context } from "./Parent"

const ChildC = (props) => {
    return (
        <>
            <Context.Consumer >
                {(data) => {
                    return <div>
                        <p>Getting direct data from parent into Child C using context </p>
                        <p>First Name: {data.fName}</p>
                        <p>Last Name: {data.lName}</p>
                    </div>
                }}
            </Context.Consumer>
            <p> getting final data from Parent to Child C using props <br /> {props.fromChildB}</p>
        </>
    )
}

export default ChildC
