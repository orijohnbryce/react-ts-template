import React, { useContext } from 'react'
import { AppContext } from './App'


const ShowData = () => {

    const { data, name, setName } = useContext(AppContext)
    
    return (
        <div>
            <div> { name }</div>
            {data?.map((x: any) => {
                return <div key={x}> {x} </div>;
            })}
        </div>
    )
}

export default ShowData