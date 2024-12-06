'use client'
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
import React, { useEffect, useState } from 'react'
import { PiArrowRight, PiChecks, PiChecksDuotone, PiDiamondDuotone, PiGps, PiThumbsDown, PiTrashDuotone, PiUserCheck, PiUserCircleCheck, PiUsersDuotone, PiUsersFour } from 'react-icons/pi'
import Axios from 'axios'
import { uri } from '@/functions/endpoint'
import InputUi from '@/ui/input'
import SectionLoad from '@/ui/SectionLoad'
const MainChart = dynamic(()=>import("@/ui/MainGraph") ,{ssr:false})
const NDC_NPP = dynamic(()=>import("@/ui/NDC-NPP") ,{ssr:false})
const ChartPie = dynamic(()=>import("@/ui/Pie") ,{ssr:false})

export default function Dashboard() {

  
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
    

    let [all_polling, setall_polling] = useState([])
    const [all_turnOuts, setall_turnOuts] = useState("")
    const [filteredTurnOuts, setfilteredTurnOuts] = useState("")
    useEffect(() => {
        Axios.get(`${uri}/voterturnout`)
        .then((res) => {
            const data = res.data;
            setall_turnOuts(data)
            const uniquePollingStations = [];
            data.forEach((mres) => {
                const pollingStation = {
                    text: mres.pollingStationName,
                    value: mres.pollingStationName,
                };
                // Check if the station is already in the list
                if (!uniquePollingStations.some(station => station.value === mres.pollingStationName)) {
                    uniquePollingStations.push(pollingStation);
                }
            });
            setall_polling(uniquePollingStations);
        })
        .catch((err) => console.log(err));
    }, []);
const [all_presidential, setall_presidential] = useState('')
const [all_paliamentary, setall_paliamentary] = useState('')
const [ndc_npp_presidential, setndc_npp_presidential] = useState("")
const [ndc_npp_parliamentary, setndc_npp_parliamentary] = useState('')
useEffect(() => {
  Axios.get(uri + "/statistics")
  .then((res) => {
    const data = res.data;
    // Convert the object into an array
   const presedential_arr = Object.entries(data.presidentialTotals).map(([label, value]) => ({
    label: label,
    y: Number(value) ,
        fill: label.toString().toLowerCase() == 'ndc' ? "#E2263C" : 
          label.toString().toLowerCase() == "npp" ? "#3b82f6" : "#0f766e"
   }));
    // Convert the object into an array
   const paliamentary_arr = Object.entries(data.parliamentaryTotals).map(([label, value]) => ({
    label: label,
    y: Number(value) ,
    fill: label.toString().toLowerCase() == 'haruna iddrisu (ndc)' ? "#E2263C" : 
          label.toString().toLowerCase() == "fuseine musah (npp)" ? "#3b82f6" : "#0f766e"
   }));



   setall_presidential(presedential_arr)
   setall_paliamentary(paliamentary_arr)
   setndc_npp_presidential(presedential_arr.filter(fdoc => fdoc.label.toLowerCase() == "ndc" || fdoc.label.toLowerCase() == "npp"))
   setndc_npp_parliamentary(paliamentary_arr.filter(fdoc => fdoc.label.toLowerCase() == "haruna iddrisu (ndc)" || fdoc.label.toLowerCase() == "fuseine musah (npp)"))
 
}).catch((err) => console.log(err));
}, [])

const [stats, setstats] = useState("")
useEffect(() => {
Axios.get(uri + '/pollstatistics')
.then(res => {
setstats(res.data)
}).catch((err) => console.log(err));
}, [])

    
  return (
    <div>
        <NavBar />
        <Content>
         <RowFlexUi gap={1} alignItems="flex-start">
            <div className='width-200'>
            {
                ndc_npp_presidential &&
                <ChartPie title={"Presidential"} data={ndc_npp_presidential}/>
              }

            </div>
      
            <div className="col">
           <div className="padding">
           <TextUi text="Dashboard" heading='h1' bold/>
           </div>
            <div className='row'>
            <div className="col sm-12 md-4 lg-4 padding margin-top-10">
                 {
                    stats ? 
                    <AnimationUi>
                    <CardUi
                    funcss={'hover-up'}
                     body={
                         <div>
                               <div style={{marginTop:'-2rem'}}>
                                 <CircleUi size={2.5} bg={"dark900 text-primary"} >
                                 <PiUsersDuotone />
                                 </CircleUi>
                             </div>
                             <div>
                               <RowFlexUi gap={1} alignItems='flex-end'>
                                 <div className="col">
                                 <TextUi text={stats.totalVotersBVD} heading="h3" color={'dark300'} bold block/>
                                 <TextUi text={"Total Ballots"}   size='small' bold color='dark400'/>
                                 </div>
                               </RowFlexUi>
                             </div>
                           
                         </div>
                     }
                     />
                    </AnimationUi>
                    : <>
                    <SectionLoad />
                    </>
                 }
                </div>
            <div className="col sm-12 md-4 lg-4 padding margin-top-10">
                 {
                    stats ? 
                    <AnimationUi>
                    <CardUi
                    funcss={'hover-up'}
                     body={
                         <div>
                               <div style={{marginTop:'-2rem'}}>
                                 <CircleUi size={2.5} bg={"dark900 text-primary"} >
                                 <CircleUi size={2.5} bg={"dark900 text-error"} >
                                 <PiThumbsDown />,
                                 </CircleUi>
                                 </CircleUi>
                             </div>
                             <div>
                               <RowFlexUi gap={1} alignItems='flex-end'>
                                 <div className="col">
                                 <TextUi text={stats.totalRejectedPresidential} heading="h3" color={'dark300'} bold block/>
                                 <TextUi text={"Rejected(Presidential)"}   size='small' bold color='dark400'/>
                                 </div>
                               </RowFlexUi>
                             </div>
                           
                         </div>
                     }
                     />
                    </AnimationUi>
                    : <>
                    <SectionLoad />
                    </>
                 }
                </div>
            <div className="col sm-12 md-4 lg-4 padding margin-top-10">
                 {
                    stats ? 
                    <AnimationUi>
                    <CardUi
                    funcss={'hover-up'}
                     body={
                         <div>
                               <div style={{marginTop:'-2rem'}}>
                                 <CircleUi size={2.5} bg={"dark900 text-error"} >
                                 <PiThumbsDown />
                                 </CircleUi>
                             </div>
                             <div>
                               <RowFlexUi gap={1} alignItems='flex-end'>
                                 <div className="col">
                                 <TextUi text={stats.totalRejectedParliamentary} heading="h3" color={'dark300'} bold block/>
                                 <TextUi text={"Rejected(Parliamentary)"}   size='small' bold color='dark400'/>
                                 </div>
                               </RowFlexUi>
                             </div>
                           
                         </div>
                     }
                     />
                    </AnimationUi>
                    : <>
                    <SectionLoad />
                    </>
                 }
                </div>
        
            </div>
            </div>
            <div className='width-200'>
            {
                ndc_npp_parliamentary &&
                <ChartPie title={"Parliamentary"} data={ndc_npp_parliamentary}/>
              }

            </div>
         </RowFlexUi>
            <AnimationUi>
                {
                    all_presidential &&
                    <MainChart title="Presidential" data={all_presidential}/>
                }
            </AnimationUi>
            <AnimationUi>
                {
                    all_paliamentary &&
                    <MainChart title="Parliamentary Seats" data={all_paliamentary}/>
                }
            </AnimationUi>
            <AnimationUi>
              {
                all_polling.length > 0 ?
                <TurnOutGraph
                rawData={filteredTurnOuts || all_turnOuts[0]}
                right={<InputUi
                    label="Polling Station"
                    select
                    options={all_polling}
                    onChange={(e) => {
                    const selectedStation = all_turnOuts.find(station => station.pollingStationName === e.target.value);
                    setfilteredTurnOuts(selectedStation);
                    }}
                  />}
                />
                : ""
              }
            </AnimationUi>
            {/* <AnimationUi>
            <NDC_NPP />
            </AnimationUi> */}
        </Content>
    </div>
  )
}
