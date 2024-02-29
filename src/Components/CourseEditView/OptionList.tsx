import React, { useState, useEffect } from 'react'
import { Space, Stack, Flex, Paper, Title, Text, Group, Button, Switch } from '@mantine/core'
import Option from './Option';

function OptionList(props) {
    const { options, onChange } = props;
    const [optionList, setOptionList] = useState(options);


    //Propagate up the changes
    useEffect(() => {
        onChange(optionList)
    }, [optionList])

    return (
        <>
            {options.map((option, index) => {
                return <Option onChange={
                    (option) => {
                        const newOptions = [...options];
                        newOptions[index] = option;

                        setOptionList(newOptions);

                        console.log(newOptions[index])
                    }} option={option} key={index} index={index} />
            })}

        </>
    )

}

export default OptionList