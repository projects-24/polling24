import React from 'react'
import AppBar from 'funuicss/ui/appbar/AppBar'
import Logo from './Logo'
import { PiChartBar, PiChartDonut, PiList, PiListDuotone, PiProjectorScreen, PiTrendUp } from 'react-icons/pi'
import RowFlexUi from './RowFlex'
import Link from 'next/link'
import TextUi from './Text'

export default function NavBar() {
  return <AppBar 
  funcss='card height-70'
  fixedTop
  left={<Logo />}
  center={<RowFlexUi gap={2}>
    <Link href={'/dashboard'}>
    <RowFlexUi gap={0.2}> 
    <PiChartDonut /> <TextUi text="Dashboard" size='smaller' bold color='dark300' uppercase/>    
    </RowFlexUi> 
    </Link>
    <Link href={'/stats/regional'}>
   <RowFlexUi gap={0.2}>
   <PiChartBar /> <TextUi text="Regional Stats" size='smaller' bold color='dark300' uppercase/> 
   </RowFlexUi> 
    </Link>
    <Link href={'/more'}>
   <RowFlexUi gap={0.2}>
   <PiTrendUp /> <TextUi text="More Stats" size='smaller' bold color='dark300' uppercase/>
    </RowFlexUi> 
    </Link>
    <Link href={'/turnout'}>
   <RowFlexUi gap={0.2}>
   <PiProjectorScreen /> <TextUi text="Turn Out" size='smaller' bold color='dark300' uppercase/> 
   </RowFlexUi> 
    </Link>
    {/* <Link href={'/stats/regional'}>
    <TextUi text="Regional Stats" size='smaller' bold color='dark300' uppercase/>
    </Link> */}
  </RowFlexUi>}
  right={<img src='/ndc.png' height={'50px'} />}
  />
}
