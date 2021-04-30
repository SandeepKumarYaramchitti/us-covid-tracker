import React, { useEffect} from "react";
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import {Switch,Route} from "react-router-dom"
import "./index.css";
import {LeftMenu} from "./components/leftmenu";
import {Home} from "./pages/home";
import {Case} from "./pages/cases";
import {Vaccine} from "./pages/vaccine";


const {Header, Content} = Layout;
function App() {

  useEffect(() => {
      fetch('https://api.opencovid.ca/other?stat=prov')
        .then(response => response.json())
        .then(data => {
            let provInfo = data.prov
            provInfo = provInfo.slice(0, provInfo.length - 1)
            localStorage.setItem("provinces",JSON.stringify(provInfo));
        })
        .catch((error) => {
          console.log(error)
        })

     fetch("https://api.opencovid.ca/summary")
        .then(response => response.json())
       .then(data => {
         var summaryInfo = data.summary;
         var filteredSummaryInfo = summaryInfo.filter((info)=>info.province!=="Repatriated");
        localStorage.setItem("summary",JSON.stringify(filteredSummaryInfo));
        })
        .catch((error) => {
            console.log(error);
        });

    
     //get the all canada data
     fetch("https://api.opencovid.ca/summary?loc=canada")
        .then(response => response.json())
       .then(data => {
         var summaryInfo = data.summary;
        localStorage.setItem("canadaData",JSON.stringify(summaryInfo));
        })
        .catch((error) => {
            console.log(error);
        });
  }, [])


  return (
    <>
    <Layout>
          {/* header */}
          <Header className="header">COVID-19 in USA</Header>
            <Layout >
              {/* left menu section */}
              <LeftMenu/>
              {/* center */}
                <Layout className="site-layout">
                  <Content
                    className="site-layout-background"
                    style={{
                      margin: '24px 16px',
                      padding: 24,
                      minHeight: "700px",
                    }}
                  >
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/case" component={Case} />
                      <Route path="/vaccine" component={Case} />
                      
                    </Switch>   

                  </Content>
              </Layout>
            </Layout>
      </Layout>
    </>
  );
}

export default App;
