import React from 'react';



function MajorsMapAdmin(props) {
    return (
        <div>
            {props.coll.majors.map(major => {
                return (
                    <div>
                    <li class="list-group-item">
                        {major} 
                        <span value={props.coll._id} className="badge badge-danger mx-2">Delete</span> 
                        <span value={props.coll._id} className="badge badge-warning mx-2">Update</span> 
                    </li>
                    </div>
                )
            })}
        </div>
    )
}

export default MajorsMapAdmin;