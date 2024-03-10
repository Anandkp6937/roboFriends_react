import React from 'react'
const Searchbox=({change})=>{
    return(
        <div className='pa3'>
            <input className="pa3 ba b--green bg-lightest-blue" type="text" onChange={change}placeholder='Search your robots'/>
        </div>
    )
}
export default Searchbox;