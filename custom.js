// window.YellowMessengerPlugin.init({ host: 'https://r2.cloud.yellow.ai', view: 'compact', floatingIcon: false })

console.log('Here in custom JS----')
document.getElementById("ymDivCircle").style.cssText = `
bottom: 120px;
right: 0px !important;
display: flex !important;
background-color: #707070 !important;
border-radius: 0px !important;
`;

document.getElementById("ymDivBar").style.cssText = `
bottom: 168px !important;
`;

document.getElementById("ymFrameHolder").style.cssText = `
 bottom: 0 !important;
 right: 0px !important; // added
`;
