import { Tab, TabList } from '@tremor/react'
import React, { useState } from 'react'
import {HandThumbUpIcon,HandThumbDownIcon } from '@heroicons/react/24/solid'

export const TabListBase = () => {
    const [selectedView,setSelectedView] = useState(1)
  return (
    <TabList defaultValue={1} marginTop="mt-6">
        <Tab value={1} text="pestana 1" icon={HandThumbUpIcon}/>
        <Tab value={2} text="pestana 2" icon={HandThumbDownIcon}/>
        <Tab value={3} text="pestana 3"/>
    </TabList>
  )
}
