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
     <PiChartDonut /> <TextUi text="Dashboard" size='small' bold color='dark300' uppercase/>
    </Link>
    <Link href={'/stats/regional'}>
    <PiChartBar /> <TextUi text="Regional Stats" size='small' bold color='dark300' uppercase/>
    </Link>
    <Link href={'/more'}>
    <PiTrendUp /> <TextUi text="More Stats" size='small' bold color='dark300' uppercase/>
    </Link>
    <Link href={'/turnout'}>
    <PiProjectorScreen /> <TextUi text="Turn Out" size='small' bold color='dark300' uppercase/>
    </Link>
    {/* <Link href={'/stats/regional'}>
    <TextUi text="Regional Stats" size='small' bold color='dark300' uppercase/>
    </Link> */}
  </RowFlexUi>}
  right={<img src='/ndc.png' height={'60px'} />}
  />
}
