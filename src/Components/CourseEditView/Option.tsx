import React, { useState, useEffect } from 'react'
import { Text, Group, Stack } from '@mantine/core'

import { useDebouncedValue } from '@mantine/hooks'

function Option(props) {

    const { option, index, onChange } = props;

    return (
        <>
            <Text fw="bold">Option {index + 1}
                {index === 0 ? " (Right Answer)" : " (Wrong Answer)"}
            </Text>
            <Group grow>
                <Stack>
                    {/* <input onChange={(evt) => {
                        handleOptionFieldChange(index, optionIndex, evt.target.value)
                    }} key={optionIndex} id={index} value={option} type="text" placeholder="Option" /> */}
                </Stack>
            </Group>
        </>
    )
}

export default Option