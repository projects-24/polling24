import AnimationUi from '@/ui/Animation'
import CardUi from '@/ui/Card'
import CircleUi from '@/ui/Circle'
import Content from '@/ui/Content'

import NavBar from '@/ui/NavBar'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import dynamic from 'next/dynamic'
import React from 'react'
import { PiChecks, PiChecksDuotone, PiDiamondDuotone, PiGps, PiTrashDuotone, PiUserCheck, PiUserCircleCheck, PiUsersDuotone, PiUsersFour } from 'react-icons/pi'

const MainChart = dynamic(()=>import("@/ui/MainGraph") ,{ssr:false})
const NDC_NPP = dynamic(()=>import("@/ui/NDC-NPP") ,{ssr:false})

export default function page() {
  
    const data = {
        'total_ballot_cast': 2080,
        'total_rejected_ballot_cast': 200,
        'total_registered_persons_polling_station': 3000,
        'total_registered_persons_polling_ec': 300,
        'total_voter_present': 1200,
        'total_polling_stations': 200,
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
            'title': 'Registered persons(EC)',
            'icon': <PiUserCheck />,
            'color': 'bg-pl'

        }
        ,
        {
            'number': data.total_registered_persons_polling_station,
            'title': 'Registered persons(PS)',
            'icon': <PiUsersFour />,
            'color': 'bg-pl'

        }
        ,
        {
            'number': data.total_voter_present,
            'title': 'Voters Present',
            'icon': <PiUserCircleCheck />,
            'color': 'bg-pl'

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
            <div className='row'>
              {
                docs.map((res, index) => (
                    <div className="col sm-12 md-2 lg-2 padding" key={index}>
                   <AnimationUi>
                   <CardUi
                   funcss={'hover-up'}
                    body={
                        <div>
                              <div style={{marginTop:'-2rem'}}>
                                <CircleUi size={3} bg={res.color} >
                                    {res.icon}
                                </CircleUi>
                            </div>
                            <div>
                                <TextUi text={res.number} heading="h2" color={'dark300'} bold block/>
                                <TextUi text={res.title}   size='small' bold color='dark400'/>
                            </div>
                          
                        </div>
                    }
                    />
                   </AnimationUi>
                </div>
                ))
              }
            </div>
            <AnimationUi>
            <MainChart data={all_paties}/>
            </AnimationUi>
            <AnimationUi>
            <NDC_NPP />
            </AnimationUi>
        </Content>
    </div>
  )
}
