import React, { useState, useEffect } from 'react'
import { Text, Group, Stack } from '@mantine/core'

import { useDebouncedValue } from '@mantine/hooks'

function Option(props) {

    const { option, index, onChange } = props


    const [optionText, setOptionText] = useState() // 
    const [dbOptionText] = useDebouncedValue(optionText, 200)

    useEffect(() => {
        setOptionText(option)
    }, [])

    useEffect(() => {

        console.log("Option: ", dbOptionText)
        onChange(optionText)
    }, [dbOptionText])

    return (
        <>
            <Text fw="bold">Option {index + 1}
                {index === 0 ? " (Right Answer)" : " (Wrong Answer)"}
            </Text>
            <Group grow>
                <Stack>
                    <input onChange={(evt) => {
                        setOptionText(evt.target.value)
                    }} value={optionText} type="text" placeholder="Option" />
                </Stack>
            </Group>
        </>
    )
}

export default Option