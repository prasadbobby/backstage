import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-DMhKqRW2.js";import{H as d}from"./Header-Cef2sA2K.js";import{w as u}from"./appWrappers-DInG0-sY.js";import"./HeaderLabel-CImTFxM0.js";import"./makeStyles-KqnVMpUC.js";import"./defaultTheme-GyRRohif.js";import"./Grid-BsoumTJs.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./capitalize-DNuq4SMo.js";import"./withStyles-hRWsWcSf.js";import"./Typography-CmHU44MI.js";import"./Link-Bc9hdYac.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-DXJrW9ju.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-BbjLfwJi.js";import"./createSvgIcon-3VCCnvFB.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-DTKcO19x.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-D4ToL4qj.js";import"./typography-ExXZm6u6.js";import"./Breadcrumbs-Ckg39o-Q.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-DdnLKCH9.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-D0JqRYDP.js";import"./Modal-vyVQSP7W.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-DHXjgkAG.js";import"./Paper-B582OAtR.js";import"./Grow-CaTvv5X4.js";import"./useTheme-CMxegO7z.js";import"./utils-DET75rXC.js";import"./List-D2TmsOdo.js";import"./ListContext-DydK1sOh.js";import"./ListItem-Ct-F_5f-.js";import"./Page-DW1H3Rrk.js";import"./useMediaQuery-dH3qJauD.js";import"./Tooltip-DxjgdROJ.js";import"./Popper-B0zse1_p.js";import"./MockTranslationApi-CNdm0swk.js";import"./index-CFaqwFgm.js";import"./inherits-C8kCcQiP.js";import"./toArray-CXCpiclr.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-r4uG88u0.js";import"./toString-C6iK1gA3.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-CMoB6S-Y.js";import"./ThemeProvider-DuLntjq3.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const _o={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
