import AnimationUi from '@/ui/Animation'
import CardUi from '@/ui/Card'
import CircleUi from '@/ui/Circle'
import Content from '@/ui/Content'

import NavBar from '@/ui/NavBar'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import TurnOutGraph from '@/ui/TurnOutGraph'
import UiButton from '@/ui/button'
import SectionUI from '@/ui/section'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import { PiArrowRight, PiChecks, PiChecksDuotone, PiDiamondDuotone, PiGps, PiThumbsDown, PiTrashDuotone, PiUserCheck, PiUserCircleCheck, PiUsersDuotone, PiUsersFour } from 'react-icons/pi'

const MainChart = dynamic(()=>import("@/ui/MainGraph") ,{ssr:false})
const NDC_NPP = dynamic(()=>import("@/ui/NDC-NPP") ,{ssr:false})

export default function page() {
  
    const data = {
        'total_ballot_cast': 2000,
        'total_rejected_ballot_cast': 100,
        'total_registered_persons_polling_station': 1990,
        'total_registered_persons_polling_ec': 2000,
        'total_voter_present': 2000,
        'total_polling_stations': 200,
        'differences': 10
    }
    const docs = [
        {
            'number': data.total_ballot_cast,
            'title': 'Total Ballot Cast',
            'icon': <PiUsersDuotone />,
            'color': 'bg-pl'

        }
        ,
        {
            'number': data.total_rejected_ballot_cast,
            'title': 'Rejected Ballot Cast',
            'icon': <PiTrashDuotone />,
            'color': 'bg-sl'

        }
        ,
        {
            'number': data.total_registered_persons_polling_ec,
            'title': 'Registered persons(Electoral Commission)',
            'icon': <PiUserCheck />,
            'color': 'bg-pl'

        }
        ,
        {
            'number': data.total_registered_persons_polling_station,
            'title': 'Registered persons(Polling Stations)',
            'icon': <PiUsersFour />,
            'color': 'bg-pl'

        }
        ,
        {
            'number': data.total_voter_present,
            'title': 'Voter TurnOuts',
            'icon': <PiUserCircleCheck />,
            'color': 'bg-pl',
            'btn': (<Link href={'/turnout'}>
                <UiButton text={"More stats"} bold smaller bg={'bg-accent '} raised endIcon={<PiArrowRight />}/>
            </Link>)

        }
        ,
        {
            'number': data.total_polling_stations,
            'title': 'Poling Stations',
            'icon': <PiGps />,
            'color': 'bg-pl'

        }
      
    ]
    let all_paties = [
        {
            label:'NDC',
            y:500
        }
        ,
        {
            label:'NPP',
            y:300
        }
        ,
        {
            label:'APC',
            y:300
        }
        ,
        {
            label:'CPP',
            y:300
        }
        ,
        {
            label:'DFP',
            y:300
        }
        ,
        {
            label:'DPP',
            y:300
        }
        ,
        {
            label:'EGLE',
            y:300
        }
        ,
        {
            label:'PNC',
            y:300
        }
        ,
        {
            label:'LPG',
            y:300
        }
        ,
        {
            label:'NDP',
            y:300
        }
    ]
  return (
    <div>
        <NavBar />
        <Content>
         <RowFlexUi gap={1}>
            <div className='width-200'>
                <CardUi funcss={'height-200-min diff_card'}>
                <div>
                <div style={{marginTop:'-2rem'}}>
                <CircleUi size={3}  bg={'bg-sl'} >
                <PiThumbsDown />
                </CircleUi>
                </div>
                <SectionUI />
                <div>
                <TextUi text={data.differences} heading="h2" color={'dark400'} bold block/>
                <TextUi text={"Differences"} bold color='dark400'/>
                <SectionUI gap={2} />
                <TextUi text={"Based on Registered persons(Polling Stations) & Electoral Commision"} size='small'  color='dark400'/>
                </div>

                </div>
                </CardUi>
            </div>
            <div className="col">
            <div className='row'>
              {
                docs.map((res, index) => (
                    <div className="col sm-12 md-4 lg-4 padding margin-top-10" key={index}>
                   <AnimationUi>
                   <CardUi
                   funcss={'hover-up'}
                    body={
                        <div>
                              <div style={{marginTop:'-2rem'}}>
                                <CircleUi size={2.5} bg={res.color} >
                                    {res.icon}
                                </CircleUi>
                            </div>
                            <div>
                              <RowFlexUi gap={1} alignItems='flex-end'>
                                <div className="col">
                                <TextUi text={res.number} heading="h3" color={'dark300'} bold block/>
                                <TextUi text={res.title}   size='small' bold color='dark400'/>
                                </div>
                                {
                                    res.btn  &&
                                    res.btn
                                }
                              </RowFlexUi>
                            </div>
                          
                        </div>
                    }
                    />
                   </AnimationUi>
                </div>
                ))
              }
            </div>
            </div>
         </RowFlexUi>
            <AnimationUi>
            <MainChart data={all_paties}/>
            </AnimationUi>
            <AnimationUi>
                <TurnOutGraph />
            </AnimationUi>
            <AnimationUi>
            <NDC_NPP />
            </AnimationUi>
        </Content>
    </div>
  )
}
