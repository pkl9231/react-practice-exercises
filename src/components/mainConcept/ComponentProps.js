import React from 'react'
export const ComponentProps = (props) => {
    const { firstName, address } = props;
    return (
        <>
            <h1>First name from props : {firstName}</h1>
            <h1>Address from props : {address}</h1>
        </>
    )
}
