'use client'
import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Section from 'funuicss/ui/specials/Section'
import Text from 'funuicss/ui/text/Text'
import  FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage';
import { PiPaperPlaneRight , PiKey, PiCheck } from 'react-icons/pi';
import IconicInput from 'funuicss/ui/input/Iconic'
import Link from 'next/link'
import InputUi from '@/ui/input';
import UiButton from '@/ui/button';
import Logo from '@/ui/Logo';
import SectionUI from '@/ui/section';

export default function Home() {
  return (
    <FullCenteredPage>
<div className='width-300-max fit'>
  <Logo />
  <SectionUI gap={2}/>
<div className="margin-bottom-40">
<Text
   text='Login'
   bold
   heading='h1'
   color='p'
   block
   />
   <Text
   text='Sign in to continue!'
   block
   bold 
   color='a4'
   />
</div>
<Section gap={1.5}>
   <InputUi type="email" fullWidth bordered label={"Email"} />
</Section>
<Section gap={1}>
   <InputUi type="password" fullWidth bordered label={"Password"}/>
</Section>


     <div className="section">
       <UiButton
       text={"Login"}
       raised
       fullWidth
       onClick={() => window.location.assign('/dashboard')}
       />
</div>

   

   </div>
</FullCenteredPage>
  )
}
