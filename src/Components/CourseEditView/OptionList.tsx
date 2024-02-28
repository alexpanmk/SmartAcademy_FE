import React, { useState, useEffect } from 'react'

function OptionList(props) {

    const { options, handleOptionsChange } = props;
    const [options, setOptions] = useState();

    //Propagate up the changes
    useEffect(() => {


    }, [options])

    return (
        <div>OptionList</div>
    )
}

export default OptionList