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
                  <Link href={'/stats/polling'}>
                  <div className="_card">
                        <TextUi text="VIEW" color='s' bold size='minified'/>
                        <TextUi text="Polling Station" heading='h1' bold color={'dark400'}/>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link href={'/stats/district'}>
                  <div className="_card">
                        <TextUi text="VIEW" color='s' bold size='minified'/>
                        <TextUi text="District Stats" heading='h1' bold color={'dark400'}/>
                    </div>
                  </Link>
                </div>
            </RowFlexUi>
        </Content>
    </div>
  )
}