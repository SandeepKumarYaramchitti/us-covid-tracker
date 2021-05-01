import React from 'react'
import './index.css'
import {InfoBox} from './infobox'
import {prettyPrintStat } from "../../utils/util";

export const Home = () => {

    const canadaData = JSON.parse(localStorage.getItem('canadaData'));


    return (
    <div className="canada">
        <div className="app_stats">
            <InfoBox
        backgroundColor="#266ac9"
        title="Total cases"
        cases={prettyPrintStat(canadaData[0].cases)+"  new"}
        total={prettyPrintStat(canadaData[0].cumulative_cases)} />
        
       <InfoBox
          title="Active cases"
          backgroundColor="purple"
          cases={prettyPrintStat(canadaData[0].active_cases_change)}
          total={prettyPrintStat(canadaData[0].active_cases)} />
        
       <InfoBox
          title="Total recovered"
          backgroundColor="#1bab52"
          cases={prettyPrintStat(canadaData[0].recovered)+"  new"}
          total={prettyPrintStat(canadaData[0].cumulative_recovered)} />
        
       <InfoBox
          title="Total deaths"
          backgroundColor="black"
       cases={prettyPrintStat(canadaData[0].deaths)+"  new"}
          total={prettyPrintStat(canadaData[0].cumulative_deaths)} />
        </div>
      <div className="app_stats">
       <InfoBox
          title="Vaccine doses administered"
          backgroundColor="#d40fb6"
       cases={prettyPrintStat(canadaData[0].avaccine)+"  new"}
          total={prettyPrintStat(canadaData[0].cumulative_avaccine)} />
      

       <InfoBox
          title="People fully vaccinated"
          backgroundColor="#50d60d"
          cases={prettyPrintStat(canadaData[0].cvaccine)+"  new"}
          total={prettyPrintStat(canadaData[0].cumulative_cvaccine)} />
        
       <InfoBox
        backgroundColor="#17b09e"
        title="Total testing"
        cases={prettyPrintStat(canadaData[0].testing)+"  new"}
        total={prettyPrintStat(canadaData[0].cumulative_testing)} />
            </div>
        </div>


    )
}