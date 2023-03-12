import { Card, Tab, TabList } from '@tremor/react'
import React, { useState } from 'react'
import {HandThumbUpIcon,HandThumbDownIcon} from '@heroicons/react/24/solid'

const TabListBase = () => {
    const [selectedView,setSelectedView] = useState(1)
    return (
    <>
    <TabList 
    handleSelect={value => setSelectedView(value)}
    defaultValue={selectedView} 
    marginTop="mt-6"
    >
        <Tab value={1} text="pestana 1" icon={HandThumbUpIcon}/>
        <Tab value={2} text="pestana 2" icon={HandThumbDownIcon}/>
    </TabList>

    {/* usamos las llames por que pondremos codigo js */}
    {selectedView === 1 ? (
        //if
        <Card>
            <div className='h-28 bg-emerald-300'> </div>
        </Card>

    ) : (
        //else
        <Card>
            <div className='h-28 bg-blue-700'> </div>
        </Card>
    )

        




    }
    </>
  )
}

export default TabListBase