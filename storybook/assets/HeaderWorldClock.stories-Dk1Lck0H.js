import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-BEqbUDmh.js";import{H as d}from"./Header-e6yf3tAi.js";import{w as u}from"./appWrappers-CT26PT20.js";import"./HeaderLabel-DNe62uCf.js";import"./makeStyles-DFHNDtjR.js";import"./defaultTheme-CzJIUhLY.js";import"./Grid-BsFNIMVV.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./capitalize-CDPu30qc.js";import"./withStyles-Cy0w16fh.js";import"./Typography-DtBgvzFq.js";import"./Link-CSDd0x4P.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-DXJrW9ju.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-BbjLfwJi.js";import"./createSvgIcon-s1DURs_u.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-ErQpyllY.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-4hiNbBw1.js";import"./typography-DzPlb7_1.js";import"./Breadcrumbs-CEPS-IZ1.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-DWNP_al0.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-sv14Y19J.js";import"./Modal-SXLhKrl2.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-DHXjgkAG.js";import"./Paper-BK9DXOUE.js";import"./Grow-SXlwBtiL.js";import"./useTheme-C1RDaILZ.js";import"./utils-Bbz8jn0C.js";import"./List-DYtqLDXv.js";import"./ListContext-DydK1sOh.js";import"./ListItem-D0kWGnse.js";import"./Page-w3IkmeGv.js";import"./useMediaQuery-JlhfXw1s.js";import"./Tooltip-B3WgSvIa.js";import"./Popper-BsN5-wvL.js";import"./MockTranslationApi-Bm0rhTQl.js";import"./index-CFaqwFgm.js";import"./inherits-Ax9O35oZ.js";import"./toArray-BIgjzDMT.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-r4uG88u0.js";import"./toString-C6iK1gA3.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-DDRFgeWI.js";import"./ThemeProvider-CVGcooNy.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const _o={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const Eo=["Default","TwentyFourHourClocks"];export{e as Default,t as TwentyFourHourClocks,Eo as __namedExportsOrder,_o as default};
