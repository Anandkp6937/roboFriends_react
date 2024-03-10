import React from 'react'
const Card=({id,name,email})=>{
    return(
        <div className='bg-light-green dib br3 pa3 grow bw2 shadow-5 ma2'>
            <img src={`https://robohash.org/${id}?100x100`} alt='roboImg'/>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}
export default Card;