const xapi = require('xapi');



function SystemStart(){
  console.log("Starting...");
  
  xapi.config
  .get('Video Input Connector 2 Quality').then((Quality) => {
  console.log(Quality);
   if(Quality === "Sharpness")
    {
      xapi.command('userinterface extensions widget setvalue',{
          'value': 2,
          'WidgetID': 'Motion/Sharpness'
      });

      }
      else
      {
         xapi.command('userinterface extensions widget setvalue',{
          'value': 1,
          'WidgetID': 'Motion/Sharpness'
      });
      }
    });
}


function listenForPopUp(){
xapi.event.on('UserInterface Extensions Event PageOpened', (event) => {
        console.log('event', event.PageId);
  
  if(event.PageId === 'Presentation')
{
 xapi.config
  .get('Video Input Connector 2 Quality').then((Quality) => {
  console.log(Quality);
   if(Quality === "Sharpness")
    {
      //console.log("sharpness");
      xapi.command('userinterface extensions widget setvalue',{
          'value': 2,
          'WidgetID': 'Motion/Sharpness'
            
      });

      }
      else
      {
        // console.log("Motion");
         xapi.command('userinterface extensions widget setvalue',{
          'value': 1,
          'WidgetID': 'Motion/Sharpness'
      });
      }
    });
}
 });
}


function videoQuality() {

 xapi.event.on('UserInterface Extensions Widget Action', (event) => {

    console.log(event);
    
    if(event.WidgetId === 'Motion/Sharpness' & event.Value === '1' & event.Type === 'pressed')
    {
      console.log("Motion Selected");
      
      xapi.config.set('Video Input Connector 2 Quality', "Motion")
      .catch((error) => { console.error(error); });
       setTimeout(SystemStart, 1450);
      setTimeout(SystemStart, 2000);
    
    
    }
    if(event.WidgetId === 'Motion/Sharpness' & event.Value === '2' & event.Type === 'pressed')
    {
      console.log("Sharpness Selected");
      
      xapi.config
      .set('Video Input Connector 2 Quality', 'Sharpness')
      .catch((error) => { console.error(error); });
      setTimeout(SystemStart, 1450);
      setTimeout(SystemStart, 2000);
      
   }
  });
}

      

SystemStart();
videoQuality();
listenForPopUp();