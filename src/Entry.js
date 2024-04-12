import React from "react";
 let Entry = (props) => {
    return (
        <div>
            <h1>Entry Details Name {props.name}</h1>
        </div>
    )

    // return React.createElement('div' , {id : 'hello', className : 'dummyclass'},
    // React.createElement('h1',null, 'Hellon world')
    // )
}

export default Entry