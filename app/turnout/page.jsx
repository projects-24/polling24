'use client'
import CardUi from '@/ui/Card'
import Content from '@/ui/Content'
import Header from '@/ui/Header'
import NavBar from '@/ui/NavBar'
import TableUI from '@/ui/Table'
import TextUi from '@/ui/Text'
import UiButton from '@/ui/button'
import React from 'react'
import ToolTip from 'funuicss/ui/tooltip/ToolTip'
import Button from 'funuicss/ui/button/Button'
import Tip from 'funuicss/ui/tooltip/Tip'
import RowFlexUi from '@/ui/RowFlex'

export default function Regional() {

let data ={
    "data": [
        {
            "polling_station": "CAPE COAST",
            "polling_station_code": "F0606",
            "constituancy": "CAPE COAST METROPOLIS",
            "region": "Central",
            "turnout": 450,
            "percentage_turnout": 90,
            "total_registered": 500,
            "updated": "14:45"
        },
        {
            "polling_station": "SUNYANI",
            "polling_station_code": "G0707",
            "constituancy": "SUNYANI MUNICIPAL",
            "region": "Bono",
            "turnout": 280,
            "percentage_turnout": 85,
            "total_registered": 330,
            "updated": "14:15"
        },
        {
            "polling_station": "TEMA",
            "polling_station_code": "H0808",
            "constituancy": "TEMA METROPOLIS",
            "region": "Greater Accra",
            "turnout": 600,
            "percentage_turnout": 60,
            "total_registered": 1000,
            "updated": "16:00"
        },
        {
            "polling_station": "HO",
            "polling_station_code": "I0909",
            "constituancy": "HO MUNICIPAL",
            "region": "Volta",
            "turnout": 150,
            "percentage_turnout": 50,
            "total_registered": 300,
            "updated": "13:30"
        },
        {
            "polling_station": "TAKORADI",
            "polling_station_code": "J1010",
            "constituancy": "SEKONDI-TAKORADI METROPOLIS",
            "region": "Western",
            "turnout": 450,
            "percentage_turnout": 75,
            "total_registered": 600,
            "updated": "15:45"
        },
        {
            "polling_station": "JOMORO",
            "polling_station_code": "A0101",
            "constituancy": "JOMORO",
            "region": "Greater Accra",
            "turnout": 300,
            "percentage_turnout": 100,
            "total_registered": 300,
            "updated": "14:30"
        },
        {
            "polling_station": "ADENTA",
            "polling_station_code": "B0202",
            "constituancy": "ADENTA",
            "region": "Greater Accra",
            "turnout": 450,
            "percentage_turnout": 90,
            "total_registered": 500,
            "updated": "15:00"
        },
        {
            "polling_station": "KASOA",
            "polling_station_code": "C0303",
            "constituancy": "AWUTU SENYA EAST",
            "region": "Central",
            "turnout": 200,
            "percentage_turnout": 100,
            "total_registered": 200,
            "updated": "13:45"
        },
        {
            "polling_station": "TAMALE",
            "polling_station_code": "D0404",
            "constituancy": "TAMALE METROPOLIS",
            "region": "Northern",
            "turnout": 600,
            "percentage_turnout": 75,
            "total_registered": 800,
            "updated": "16:20"
        },
        {
            "polling_station": "KUMASI",
            "polling_station_code": "E0505",
            "constituancy": "KUMASI METROPOLIS",
            "region": "Ashanti",
            "turnout": 720,
            "percentage_turnout": 90,
            "total_registered": 800,
            "updated": "15:30"
        }
    ],
    "titles": ["Polling Station", "Polling Code", "Constituancy", "Region", "Turnout", 'Registered' , ' Percentage TurnOut'],
    "fields": ["polling_station", "polling_station_code", "constituancy", "region", "turnout", 'total_registered']
}

  return (
    <div>
        <NavBar />
        <Content>
        <Header title={'Voter TurnOuts'} subtitle={"Check all polling stations turnout"}/>

        <CardUi 
          funcss='roundEdgeSmall padding-20'
          body={
          <TableUI
          pageSize={16}
          funcss='text-small'
          data={data}
          filterableFields={['region', 'constituancy']}
        customColumns={[
        {
            title: 'Actions',
            render: (data) => (
           <RowFlexUi gap={0.5} >
          <TextUi text={data.percentage_turnout + '%'} size='smaller' bold/>
          <div className={`_progress ${data.percentage_turnout > 85 ? 'success' : 'error'}`} style={{width:data.percentage_turnout}}></div>
           </RowFlexUi>
            ),
        }
        ]}
          />
          }
          />
        </Content>
    </div>
  )
}
