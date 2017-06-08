browser.browserAction.onClicked.addListener((tab) => {
  
  // window.open('https://web.whatsapp.com/', null, 'width=660,height=520');

  var win_whastapp = browser.windows.create({
                        url: ['https://web.whatsapp.com/'],
                        type: "panel",
                        height: 520,
                        width: 660
                    });

  // requires the "tabs" or "activeTab" permission
  console.log('WhatsApp Opened.');
});