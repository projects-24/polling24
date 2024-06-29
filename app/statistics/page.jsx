import AnimationUi from '@/ui/Animation'
import Content from '@/ui/Content'
import Header from '@/ui/Header'
import NavBar from '@/ui/NavBar'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import Link from 'next/link'
import React from 'react'

export default function More() {
  return (
    <div>
        <NavBar />
        <Content>
            <Header title={"Select your Option"} subtitle={"Select between the polling stations and districts to view statistics"}/>
            <RowFlexUi gap={2}>
                <div className="col">
                  <Link href={'/stats/regional'}>
                 <AnimationUi>
                 <div className="_card">
                        <TextUi text="VIEW" color='s' bold size='minified'/>
                        <TextUi text="Regional Stats" heading='h1' bold color={'dark400'}/>
                    </div>
                 </AnimationUi>
                  </Link>
                </div>
                <div className="col">
                  <Link href={'/stats/polling'}>
                 <AnimationUi>
                 <div className="_card">
                        <TextUi text="VIEW" color='s' bold size='minified'/>
                        <TextUi text="Constituancy" heading='h1' bold color={'dark400'}/>
                    </div>
                 </AnimationUi>
                  </Link>
                </div>
                <div className="col">
                  <Link href={'/stats/district'}>
                 <AnimationUi>
                 <div className="_card">
                        <TextUi text="VIEW" color='s' bold size='minified'/>
                        <TextUi text="District Stats" heading='h1' bold color={'dark400'}/>
                    </div>
                 </AnimationUi>
                  </Link>
                </div>
            </RowFlexUi>
        </Content>
    </div>
  )
}
