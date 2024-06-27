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

export default function District() {
    const data =
    {
        "data":[
            {
                "seriel_no": "001",
                "district": "Greater Accra",
                "district_code": "GA",
                "rejected": 100,
                "invalid": 500,
                "percent": "50%",
                "total": 1000,
                "NDC": 500,
                "NPP": 200,
                "APC": 100,
                "CPP": 50,
                "PNC": 25,
                "LPG": 75,
                "NDP": 50
            },
            {
                "seriel_no": "002",
                "district": "Ashanti",
                "district_code": "AS",
                "rejected": 150,
                "invalid": 600,
                "percent": "30%",
                "total": 1000,
                "NDC": 200,
                "NPP": 600,
                "APC": 50,
                "CPP": 50,
                "PNC": 25,
                "LPG": 50,
                "NDP": 25
            },
            {
                "seriel_no": "003",
                "district": "Bono",
                "district_code": "BO",
                "rejected": 200,
                "invalid": 700,
                "percent": "70%",
                "total": 1000,
                "NDC": 700,
                "NPP": 100,
                "APC": 50,
                "CPP": 50,
                "PNC": 25,
                "LPG": 50,
                "NDP": 25
            },
            {
                "seriel_no": "004",
                "district": "Bono East",
                "district_code": "BE",
                "rejected": 80,
                "invalid": 400,
                "percent": "40%",
                "total": 1000,
                "NDC": 400,
                "NPP": 300,
                "APC": 100,
                "CPP": 50,
                "PNC": 50,
                "LPG": 50,
                "NDP": 50
            },
            {
                "seriel_no": "005",
                "district": "Ahafo",
                "district_code": "AH",
                "rejected": 120,
                "invalid": 480,
                "percent": "48%",
                "total": 1000,
                "NDC": 480,
                "NPP": 250,
                "APC": 100,
                "CPP": 50,
                "PNC": 50,
                "LPG": 50,
                "NDP": 20
            },
            {
                "seriel_no": "006",
                "district": "Central",
                "district_code": "CE",
                "rejected": 90,
                "invalid": 450,
                "percent": "45%",
                "total": 1000,
                "NDC": 450,
                "NPP": 300,
                "APC": 50,
                "CPP": 50,
                "PNC": 50,
                "LPG": 50,
                "NDP": 50
            },
            {
                "seriel_no": "007",
                "district": "Eastern",
                "district_code": "EA",
                "rejected": 70,
                "invalid": 470,
                "percent": "47%",
                "total": 1000,
                "NDC": 470,
                "NPP": 200,
                "APC": 100,
                "CPP": 50,
                "PNC": 50,
                "LPG": 50,
                "NDP": 80
            },
            {
                "seriel_no": "008",
                "district": "Northern",
                "district_code": "NO",
                "rejected": 110,
                "invalid": 510,
                "percent": "51%",
                "total": 1000,
                "NDC": 510,
                "NPP": 200,
                "APC": 100,
                "CPP": 50,
                "PNC": 25,
                "LPG": 75,
                "NDP": 40
            },
            {
                "seriel_no": "009",
                "district": "Savannah",
                "district_code": "SA",
                "rejected": 50,
                "invalid": 350,
                "percent": "35%",
                "total": 1000,
                "NDC": 350,
                "NPP": 400,
                "APC": 100,
                "CPP": 50,
                "PNC": 50,
                "LPG": 25,
                "NDP": 25
            },
            {
                "seriel_no": "010",
                "district": "North East",
                "district_code": "NE",
                "rejected": 60,
                "invalid": 360,
                "percent": "36%",
                "total": 1000,
                "NDC": 360,
                "NPP": 300,
                "APC": 100,
                "CPP": 100,
                "PNC": 50,
                "LPG": 50,
                "NDP": 40
            },
            {
                "seriel_no": "011",
                "district": "Upper East",
                "district_code": "UE",
                "rejected": 140,
                "invalid": 340,
                "percent": "34%",
                "total": 1000,
                "NDC": 340,
                "NPP": 350,
                "APC": 100,
                "CPP": 50,
                "PNC": 75,
                "LPG": 50,
                "NDP": 35
            },
            {
                "seriel_no": "012",
                "district": "Upper West",
                "district_code": "UW",
                "rejected": 130,
                "invalid": 430,
                "percent": "43%",
                "total": 1000,
                "NDC": 430,
                "NPP": 300,
                "APC": 100,
                "CPP": 50,
                "PNC": 50,
                "LPG": 50,
                "NDP": 20
            },
            {
                "seriel_no": "013",
                "district": "Volta",
                "district_code": "VO",
                "rejected": 170,
                "invalid": 570,
                "percent": "57%",
                "total": 1000,
                "NDC": 570,
                "NPP": 200,
                "APC": 100,
                "CPP": 50,
                "PNC": 25,
                "LPG": 30,
                "NDP": 25
            },
            {
                "seriel_no": "014",
                "district": "Oti",
                "district_code": "OT",
                "rejected": 90,
                "invalid": 290,
                "percent": "29%",
                "total": 1000,
                "NDC": 290,
                "NPP": 400,
                "APC": 100,
                "CPP": 50,
                "PNC": 50,
                "LPG": 60,
                "NDP": 50
            },
            {
                "seriel_no": "015",
                "district": "Western",
                "district_code": "WE",
                "rejected": 100,
                "invalid": 400,
                "percent": "40%",
                "total": 1000,
                "NDC": 400,
                "NPP": 300,
                "APC": 100,
                "CPP": 50,
                "PNC": 50,
                "LPG": 50,
                "NDP": 50
            },
            {
                "seriel_no": "016",
                "district": "Western North",
                "district_code": "WN",
                "rejected": 110,
                "invalid": 410,
                "percent": "41%",
                "total": 1000,
                "NDC": 410,
                "NPP": 300,
                "APC": 100,
                "CPP": 50,
                "PNC": 50,
                "LPG": 50,
                "NDP": 40
            }
        ],
        "titles": ["Serial", "district", "Code", "Rejected", "Invalid", "Status", "NDC", "NPP", "APC", "CPP", "PNC", "LPG", "NDP"],
        "fields": ["seriel_no", "district", "district_code", "rejected", "invalid", ]
    }
    
  return (
    <div>
        <NavBar />
        <Content>
        <Header title={'District Statistics'} subtitle={"Check all district statistics"}/>

        <CardUi 
          funcss='roundEdgeSmall padding-20'
          body={
          <TableUI
          pageSize={16}
          funcss='text-small'
          data={data}
          filterableFields={['district' , 'district']}
          customColumns={[
            {
              title: 'Actions',
              render: (data) => (
             <div>
             <div className='circular_loader_container dark800'>
                <div 
                className={`circular_loader ${parseInt(data.percent.slice(0 , data.percent.indexOf("%"))) > 49 ? "green"  : "error"}`} 
                style={{height:data.percent}}>  </div>
            </div>
             </div>
              ),
            },
            {
              title: 'Actions',
              render: (data) => (
             <div>
                  <ToolTip>
                  <TextUi text={data.NDC} heading='h5' bold color='primary'/>
<Tip tip="top" animation="ScaleUp" duration={0.5} content={data.percent}/>
</ToolTip>
                
             </div>
              ),
            }
            ,
            {
              title: 'Actions',
              render: (data) => (
             <div>
                                  <ToolTip>
                                  <TextUi text={data.NPP} bold heading='h5' color='dark200'/>
<Tip tip="top" animation="ScaleUp" duration={0.5} content={data.percent}/>
</ToolTip>
             </div>
              ),
            }
            ,
            {
              title: 'Actions',
              render: (data) => (
             <div>
                <TextUi text={data.APC}/>
             </div>
              ),
            }
            ,
            {
              title: 'Actions',
              render: (data) => (
             <div>
                <TextUi text={data.CPP}/>
             </div>
              ),
            }
            ,
            {
              title: 'Actions',
              render: (data) => (
             <div>
                <TextUi text={data.PNC}/>
             </div>
              ),
            }
            ,
            {
              title: 'Actions',
              render: (data) => (
             <div>
                <TextUi text={data.LPG}/>
             </div>
              ),
            }
            ,
            {
              title: 'Actions',
              render: (data) => (
             <div>
                <TextUi text={data.NDP}/>
             </div>
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
