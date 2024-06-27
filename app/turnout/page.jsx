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

export default function Regional() {

let data ={
    "data": [
        {
            "party": "NDC",
            "party_code": "N01",
            "district": "District 1",
            "region": "Greater Accra",
            "turnout": 4000,
            "updated": "2024-06-27"
        },
        {
            "party": "NPP",
            "party_code": "N02",
            "district": "District 2",
            "region": "Ashanti",
            "turnout": 3000,
            "updated": "2024-06-27"
        },
        {
            "party": "APC",
            "party_code": "N03",
            "district": "District 3",
            "region": "Bono",
            "turnout": 1200,
            "updated": "2024-06-27"
        },
        {
            "party": "CPP",
            "party_code": "N04",
            "district": "District 4",
            "region": "Bono East",
            "turnout": 1800,
            "updated": "2024-06-27"
        },
        {
            "party": "PNC",
            "party_code": "N05",
            "district": "District 5",
            "region": "Ahafo",
            "turnout": 900,
            "updated": "2024-06-27"
        },
        {
            "party": "LPG",
            "party_code": "N06",
            "district": "District 6",
            "region": "Central",
            "turnout": 2100,
            "updated": "2024-06-27"
        },
        {
            "party": "NDP",
            "party_code": "N07",
            "district": "District 7",
            "region": "Eastern",
            "turnout": 2700,
            "updated": "2024-06-27"
        },
        {
            "party": "NDC",
            "party_code": "N01",
            "district": "District 8",
            "region": "Northern",
            "turnout": 2400,
            "updated": "2024-06-27"
        },
        {
            "party": "NPP",
            "party_code": "N02",
            "district": "District 9",
            "region": "Savannah",
            "turnout": 600,
            "updated": "2024-06-27"
        },
        {
            "party": "APC",
            "party_code": "N03",
            "district": "District 10",
            "region": "North East",
            "turnout": 720,
            "updated": "2024-06-27"
        },
        {
            "party": "CPP",
            "party_code": "N04",
            "district": "District 11",
            "region": "Upper East",
            "turnout": 1320,
            "updated": "2024-06-27"
        },
        {
            "party": "PNC",
            "party_code": "N05",
            "district": "District 12",
            "region": "Upper West",
            "turnout": 1080,
            "updated": "2024-06-27"
        },
        {
            "party": "LPG",
            "party_code": "N06",
            "district": "District 13",
            "region": "Volta",
            "turnout": 1500,
            "updated": "2024-06-27"
        },
        {
            "party": "NDP",
            "party_code": "N07",
            "district": "District 14",
            "region": "Oti",
            "turnout": 660,
            "updated": "2024-06-27"
        },
        {
            "party": "NDC",
            "party_code": "N01",
            "district": "District 15",
            "region": "Western",
            "turnout": 2220,
            "updated": "2024-06-27"
        },
        {
            "party": "NPP",
            "party_code": "N02",
            "district": "District 16",
            "region": "Western North",
            "turnout": 780,
            "updated": "2024-06-27"
        }
    ],
    "titles": ["Party", "Party Code", "District", "Region", "Turnout", "Updated"],
    "fields": ["party", "party_code", "district", "region", "turnout", "updated"]
}

  return (
    <div>
        <NavBar />
        <Content>
        <Header title={'Voter TurnOut'} subtitle={"Check all regional statistics"}/>

        <CardUi 
          funcss='roundEdgeSmall padding-20'
          body={
          <TableUI
          pageSize={16}
          funcss='text-small text-bold'
          data={data}
          filterableFields={['region', 'district']}
          />
          }
          />
        </Content>
    </div>
  )
}
