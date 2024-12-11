import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-D1Lxz5WW.js";import{H as d}from"./Header-BuXUwpkJ.js";import{w as u}from"./appWrappers-jq9J687r.js";import"./HeaderLabel-CUta9EL7.js";import"./makeStyles-hAOovFw5.js";import"./defaultTheme-BunLuY5N.js";import"./Grid-CZbEklkL.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./capitalize-54-nqWy8.js";import"./withStyles-BH6xgRA5.js";import"./Typography-DV2KglCx.js";import"./Link-BOJ6K-VR.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-DXJrW9ju.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-L0gRZPYQ.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-Ctv1EYFg.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-B6iNlMty.js";import"./typography-CNdbWHIM.js";import"./Breadcrumbs-CXhQIUyP.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-qT6VuE4k.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-CUj1yL92.js";import"./Modal-DjSCd2wy.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-DHXjgkAG.js";import"./Paper-CaJ7gnMB.js";import"./Grow-Db_aHEvi.js";import"./useTheme-BSIvxS0n.js";import"./utils-DOaqmK15.js";import"./List-DVZcOGES.js";import"./ListContext-DydK1sOh.js";import"./ListItem-Bksz4D_1.js";import"./Page-DOGw-Trv.js";import"./useMediaQuery-BjX_Hs8Y.js";import"./Tooltip-aUpbOUye.js";import"./Popper-BRLaZCHX.js";import"./MockTranslationApi-BH5cK1Fp.js";import"./index-CFaqwFgm.js";import"./inherits-DIjo_dUR.js";import"./toArray-DE_XpoGA.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-r4uG88u0.js";import"./toString-C6iK1gA3.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-Cw-Xq2K7.js";import"./ThemeProvider-ltvhCDKo.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const _o={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
