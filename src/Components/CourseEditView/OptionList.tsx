import React, { useState, useEffect } from 'react'
import { Space, Stack, Flex, Paper, Title, Text, Group, Button, Switch } from '@mantine/core'
import Option from './Option';

function OptionList(props) {

    console.log(props.options)

    const { onChange } = props;
    const [optionList, setOptionList] = useState([]);

    useEffect(() => {

        if (props.options) {
            setOptionList(props.options)
        }

    }, [])

    //Propagate up the changes
    useEffect(() => {
        console.log(optionList)
        onChange(optionList)
    }, [optionList])

    return (
        <>
            {optionList.map((option, index) => {
                return (
                    <>
                        <Option onChange={
                            (option) => {
                                const newOptions = [...optionList];
                                newOptions[index] = option;
                                setOptionList(newOptions);

                            }} option={option} key={index} index={index} />
                    </>
                )
            })}

        </>
    )

}

export default OptionList