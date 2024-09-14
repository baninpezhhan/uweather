import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name ="آب و هوای شیراز"


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", fontSize:40 }}>
      <br-x />
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)",
        backgroundImage:'url("https://cdn.ituring.ir/research/50/back.jpg")',
        height:"1000"
       }}>

        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}

        <c-x>
        <br-x/>
           <f-20 style={{paddingRight:"0 10px"}}>آب و هوا</f-20>
           <br-x/>
           <f-cse>
            <f-cc style={{ height:80, width:300, backgroundColor:"pink", borderRadius:15}}>
            <img src = "https://cdn.ituring.ir/research/50/images%20%281%29.jpg"
            style={{height:30, objectFit:"contain"}} />
             <sp-2/>
             <f-cc>
               <f-14>طوری که هوا احساس میشود:</f-14>
               <sp-3/>
               <f-14>C</f-14>
               <f-14>°</f-14>
               <sp-4/>
               <f-14>{props.feelsLikeC}</f-14>
              </f-cc>
              </f-cc>
              

              <f-cc style={{ height:80, width:300, backgroundColor:"pink", borderRadius:15}}>
            <img src = "https://cdn.ituring.ir/research/50/images%20%281%29.jpg"
            style={{height:30, objectFit:"contain"}} />
             <sp-2/>
             <f-cc>
               <f-14>رطوبت:</f-14>
               <sp-3/>
               <f-14>%</f-14>
               <f-14>RH</f-14>
               <sp-4/>
               <f-14>{props.humidity}</f-14>
              </f-cc>
              </f-cc>
              </f-cse>
              <br-x/>
              
              <f-cse>
              <f-cc style={{ height:80, width:300, backgroundColor:"pink", borderRadius:15}}>
            <img src = "https://cdn.ituring.ir/research/50/images%20%281%29.jpg"
            style={{height:30, objectFit:"contain"}} />
             <sp-2/>
             <f-cc>
               <f-14>فشار:</f-14>
               <sp-3/>
               <sp-4/>
               <f-14>{props.pressure}</f-14>
              </f-cc>
              </f-cc>

              <f-cc style={{ height:80, width:300, backgroundColor:"pink", borderRadius:15}}>
            <img src = "https://cdn.ituring.ir/research/50/images%20%281%29.jpg"
            style={{height:30, objectFit:"contain"}} />
             <sp-2/>
             <f-cc>
               <f-14>تاریخ:</f-14>
               <sp-3/>
               <sp-4/>
               <f-14>{props.date}</f-14>
              </f-cc>
              </f-cc>
              <br-x/>
              </f-cse>
              <br-x/>
              <f-cc style={{width:"100%" , backgroundColor:"violet" }}>
                <f-13>تهیه شده توسط گروه پژوهشی تورینگ  </f-13>
              </f-cc>
         
         
        </c-x>

         {/* <div style={{ direction: "ltr"}}> */}
          {/* <span>Feels like: {props.feelsLikec}°C</span> */}
          {/* <br/> */}
          {/* <span>Humidity: {props.humidity} % RH </span> */}
          {/* <br/> */}
          {/* <span>Pressure: {props.pressure}</span> */}

          {/* <span>server data: {props.data}</span> */}
          {/* </div> */}
        
        </Window>
      </div>
  )
}

      
      


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let data = await( await fetch("https://cdn.ituring.ir/research/api/weather")).json()

    let feelsLikeC = data.current_condition[0].FeelsLikeC
    let humidity = data.current_condition[0].humidity
    let pressure = data.current_condition[0].pressure 
    let date =new Date().toLocaleDateString()


  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelsLikeC,
        humidity,
        pressure,
        date
        // nlangs,
      })
    },
  }
}