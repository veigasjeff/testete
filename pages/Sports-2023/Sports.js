



import Head from 'next/head';
import ShareThis from '@components/ShareThis';
import WorldClock from '@components/WorldClock';




const SportsTable = () => {

  const sports = [
    {
      name: 'Soccer',
      channels: [
       
        {
          name: '  beIN Sports 1 France (CH-116)  ',
          link: '../../../../Channel/Ch116',
          logo: '/bein1-french.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          name: '  beIN Sports 4 Turkey (CH-67)   ',
          link: '../../../../Channel/Ch67',
          logo: '/bein-eng4.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          name: '  beIN Sports HD 2 (CH-92)  ',
          link: '../../../../Channel/Ch92',
          logo: '/bein-eng2.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
      ],
      description: '19:45 France Ligue 2 : Guingamp vs Bordeaux.',
    },
    {
     
      channels: [
        {
          
          name: ' BT Sport 1 UK (CH-31)  ',
          link: '../../../../Channel/Ch31',
          logo: '/bt1.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  SuperSport Football (CH-56)   ',
          link: '../../../../Channel/Ch56',
          logo: '/suppersports.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  DAZN1 DE (CH-426)   ',
          link: '../../../../Channel/Ch426',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' Sport TV2 Portugal (CH-74)  ',
          link: '../../../../Channel/Ch74',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  C More Fotball (CH-747)   ',
          link: '../../../../Channel/Ch747',
          logo: '/cmore-football.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Arena Sport 3 Premium (CH-139)   ',
          link: '../../../../Channel/Ch139',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Eleven Sports 1 Poland (CH-71)   ',
          link: '../../../../Channel/Ch71',
          logo: '/eleven1.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' beIN Sports MAX 5 France (CH-495) ',
          link: '../../../../Channel/Ch495',
          logo: '/beinMAX.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "18:45",
          endTime: "20:00" ,  
          startDate: new Date("2023-04-03T18:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
      ],
      description: '19:45 Italy Serie A : Sassuolo vs Torino.',
    },
    {
     
      channels: [
        {
          
          name: ' USA Network (CH-343)  ',
          link: '../../../../Channel/Ch343',
          logo: '/usa.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Sky Sports Premier League (CH-130)   ',
          link: '../../../../Channel/Ch130',
          logo: '/sky-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Astro SuperSport 3 (CH-125)  ',
          link: '../../../../Channel/Ch125',
          logo: '/astrosports.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Canal+ Foot (CH-463)   ',
          link: '../../../../Channel/Ch463',
          logo: '/canal+foot.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' Sky Sports Main Event (CH-38)   ',
          link: '../../../../Channel/Ch338',
          logo: '/sky-mainevent.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' DAZN1 ES (CH-445)   ',
          link: '../../../../Channel/Ch445',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' beIN Sports MENA English 1 (CH-61)  ',
          link: '../../../../Channel/Ch61',
          logo: '/bein-eng1.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' beIN Sports MENA Premium 1 (CH-98)   ',
          link: '../../../../Channel/Ch98',
          logo: '/bein1-premium.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  ESPN SUR (CH-149)  ',
          link: '../../../../Channel/Ch149',
          logo: '/espn.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
      ],
      description: '20:00 England Premier League : Everton vs Tottenham Hotspur.',
    },
    {
     
      channels: [
        {
          
          name: ' Viaplay Sports 1 UK (CH-451)',
          link: '../../../../Channel/Ch451',
          logo: '/viaplay-xtra.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  SuperSport Laliga (CH-415)',
          link: '../../../../Channel/Ch415',
          logo: '/suppersports.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Canal+ Sport 2 Poland (CH-73) ',
          link: '../../../../Channel/Ch73',
          logo: '/Canal+2.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  beIN Sports MENA English 2 (CH-90)',
          link: '../../../../Channel/Ch90',
          logo: '/bein-eng2.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' beIN Sports MAX 4 France (CH-494) ',
          link: '../../../../Channel/Ch494',
          logo: '/beinMAX.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  ESPN4 BR (CH-85)',
          link: '../../../../Channel/Ch85',
          logo: '/espn-brazil.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
      ],
      description: '20:00 Spain La Liga : Valencia vs Rayo Vallecano.',
    },
    {
     
      channels: [
        {
          
          name: '   LaLiga SmartBank TV (CH-539)   ',
          link: '../../../../Channel/Ch539',
          logo: '/laliga-smartbanktv.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        },
        {
          
          name: ' #Vamos Spain (CH-521)  ',
          link: '../../../../Channel/Ch521',
          logo: '/vamos.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        },
        {
          
          name: 'beIN Sports MAX 7 France (CH-497) ',
          link: '../../../../Channel/Ch497',
          logo: '/beinMAX.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        },
        {
          
          name: '   MAX Sport 2 Bulgaria (CH-473)',
          link: '../../../../Channel/Ch473',
          logo: '/max-sport4.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-03",
          startTime: "19:00",
          endTime: "21:00" ,  
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        },
      ],
      description: '20:00 Spain Segunda Division : Albacete vs Las Palmas.',
    },
   

  // Cricket tabel timezone**********************************************************************************
    {
      name: 'Cricket',
      channels: [
            {
          name: 'Sky Sports Cricket (CH-65) ',
          link: '../../../../Channel/Ch65',
          logo: '/sky-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-03",
          startTime: "14:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-03T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' SuperSport Cricket (CH-368)',
          link: '../../../../Channel/Ch368',
          logo: '/suppersports.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-03",
          startTime: "14:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-03T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'Willow Cricket (CH-346)',
          link: '../../../../Channel/Ch346',
          logo: '/willow.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-03",
          startTime: "14:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-03T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Astro Cricket (CH-370)',
          link: '../../../../Channel/Ch370',
          logo: '/astrosports.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-03",
          startTime: "14:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-03T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Fox Cricket (CH-369)',
          link: '../../../../Channel/Ch369',
          logo: '/fox-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-03",
          startTime: "14:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-03T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Sky Sport 3 NZ (CH-590)',
          link: '../../../../Channel/Ch590',
          logo: '/sky-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-03",
          startTime: "14:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-03T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '15:00 Indian Premier League : Chennai Super Kings vs Lucknow Super Giants.',
    },
   
    
   // Wrestling tabel timezone**********************************************************************************
   
  
      {
     name: 'Wrestling',
       channels: [
          {
           name: 'BT Sport 2 UK (CH-32) ',
           link: '../../../../Channel/Ch32',
          logo: '/bt2.webp',
          logo1: '/wwe.webp',
          date: "2023-04-03",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-03T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
         },
         {
          name: 'USA Network (CH-343)',
          link: '../../../../Channel/Ch343',
         logo: '/usa.webp',
         logo1: '/wwe.webp',
         date: "2023-04-03",
         startTime:"00:00",
         endTime: "02:00",
         startDate: new Date("2023-04-03T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
         endDate: new Date("2023-04-03T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
       ],
  
        description: '01:00 WWE Monday Night RAW.',
      },
    
  // Snooker tabel timezone**********************************************************************************
 
     {
       name: 'Snooker',
      channels: [
        
         {
          name: ' Viaplay Xtra UK (CH-597) ',
          link: '../../../../Channel/Ch597',
          logo: '/viaplay-xtra.webp',
          logo1: '/snooker.webp',
          date: "2023-04-03",
          startTime:"17:30",
          endTime: "18:30",
          startDate: new Date("2023-04-03T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
          },
       ],
       description: '18:30 LIVE Ultimate Pool Champions League.',
     },
    
  
  
  // Tennis tabel timezone**********************************************************************************
    {
      name: 'Tennis',
      channels: [
        {
          name: 'beIN Sports HD 5 (CH-95) ',
          link: '../../../../Channel/Ch95',
          logo: '/bein-eng5.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"11:00",
          endTime: "12:00",
          startDate: new Date("2023-04-03T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      
     
      ],
      description: '12:00 ATP 250 Estoril.  ',
    },
    {
      
      channels: [
        {
          name: 'Sport Klub 2 Serbia (CH-102) ',
          link: '../../../../Channel/Ch102',
          logo: '/sport-klub.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"12:30",
          endTime: "13:30",
          startDate: new Date("2023-04-03T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      
     
      ],
      description: '13:30 ATP 250 Marakech.  ',
    },
    {
      
      channels: [
        {
          name: 'Tennis Channel (CH-40) ',
          link: '../../../../Channel/Ch40',
          logo: '/tennis-logo.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"19:00",
          endTime: "21:00",
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'SuperSport Tennis (CH-423)  ',
          link: '../../../../Channel/Ch423',
          logo: '/suppersports.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"19:00",
          endTime: "21:00",
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'CANAL+ Sport 2 Poland (CH-73)',
          link: '../../../../Channel/Ch73',
          logo: '/Canal+2.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"19:00",
          endTime: "21:00",
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'Sport Klub 1 Serbia (CH-101) ',
          link: '../../../../Channel/Ch101',
          logo: '/sport-klub.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"19:00",
          endTime: "21:00",
          startDate: new Date("2023-04-03T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
     
      ],
      description: '20:00 WTA Charleston Early Rounds.  ',
    },
    {
      
      channels: [
        {
          name: 'Tennis Channel (CH-40) ',
          link: '../../../../Channel/Ch40',
          logo: '/tennis-logo.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"22:00",
          endTime: "23:59",
          startDate: new Date("2023-04-03T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'SuperSport Tennis (CH-423)  ',
          link: '../../../../Channel/Ch423',
          logo: '/suppersports.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"22:00",
          endTime: "23:59",
          startDate: new Date("2023-04-03T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'CANAL+ Sport 2 Poland (CH-73)',
          link: '../../../../Channel/Ch73',
          logo: '/Canal+2.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"22:00",
          endTime: "23:59",
          startDate: new Date("2023-04-03T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'Sport Klub 2 Serbia (CH-102) ',
          link: '../../../../Channel/Ch102',
          logo: '/sport-klub.webp',
          logo1: '/tennis.webp',
          date: "2023-04-03",
          startTime:"22:00",
          endTime: "23:59",
          startDate: new Date("2023-04-03T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
     
      ],
      description: '23:00 WTA Charleston Early Rounds.  ',
    },




// Badminton tabel timezone**********************************************************************************
/*
{
  name: 'Badminton',
  channels: [
    {
      name: 'BT Sport 6 UK (CH-23)',
      link: '../../../../Channel/Ch23',
      logo: '/bt1.webp',
      logo1: '/badminton.webp',
      date: "2023-04-01",
      startTime:"11:00",
      endTime: "13:00",
      startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Astro SuperSport 4 (CH-126)',
      link: '../../../../Channel/Ch126',
      logo: '/astrosports.webp',
      logo1: '/badminton.webp',
      date: "2023-04-01",
      startTime:"11:00",
      endTime: "12:00", 
      startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
  ],
  description: '12:00 BWF World Tour | Spain Masters - Semi Finals.',
},


*/
// Motorsport tabel timezone**********************************************************************************
/*

{
  name: 'Motorsport',

  channels: [
   
    {
      name: ' BT Sport 2 UK (CH-32)  ',
      link: '../../../../Channel/Ch33',
      logo: '/bt2.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"13:00",
      endTime: "15:00",
      startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Sky Sport MotoGP IT (CH-59)   ',
      link: '../../../../Channel/Ch59',
      logo: '/sky-motorgp.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"13:00",
      endTime: "15:00",
      startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: ' DAZN 1 ES (CH-445)   ',
      link: '../../../../Channel/Ch445',
      logo: '/dazn.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"13:00",
      endTime: "15:00",
      startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Sport TV4 Portugal (CH-289)  ',
      link: '../../../../Channel/Ch289',
      logo: '/sport-tv5-portugal.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"13:00",
      endTime: "15:00",
      startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  SuperSport Motorsport (CH-424)  ',
      link: '../../../../Channel/Ch424',
      logo: '/suppersports.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"13:00",
      endTime: "15:00",
      startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Canal+ Sport360 (CH-464)  ',
      link: '../../../../Channel/Ch464',
      logo: '/canal+.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"13:00",
      endTime: "15:00",
      startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  ESPN4 BR (CH-85)   ',
      link: '../../../../Channel/Ch85',
      logo: '/espn-brazil.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"13:00",
      endTime: "15:00",
      startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
  ],
  description: '14:00 MotoGP : Grand Prix of Argentina - Qualifying.',
},

*/

// Basketball tabel timezone**********************************************************************************

    {
      name: 'Basketball',
      channels: [
        {
          name: 'BT Sport 2 UK (CH-32) ',
          link: '../../../../Channel/Ch32',
          logo: '/bt2.webp',
          logo1: '/basketball.webp',
          date: "2023-04-04",
          startTime:"01:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' CBS USA (CH-52) ',
          link: '../../../../Channel/Ch52',
          logo: '/cbs.webp',
          logo1: '/basketball.webp',
          date: "2023-04-04",
          startTime:"01:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'TSN1 (CH-111)  ',
          link: '../../../../Channel/Ch111',
          logo: '/tsn.webp',
          logo1: '/basketball.webp',
          date: "2023-04-04",
          startTime:"01:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'ESPN 1 NL (CH-379) ',
          link: '../../../../Channel/Ch379',
          logo: '/espn-nl.webp',
          logo1: '/basketball.webp',
          date: "2023-04-04",
          startTime:"01:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'beIN Sports 1 France (CH-116) ',
          link: '../../../../Channel/Ch116',
          logo: '/bein1-french.webp',
          logo1: '/basketball.webp',
          date: "2023-04-04",
          startTime:"01:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' ESPN BR (CH-81) ',
          link: '../../../../Channel/Ch81',
          logo: '/espn-brazil.webp',
          logo1: '/basketball.webp',
          date: "2023-04-04",
          startTime:"01:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '02:00 NCAA 2023 NCAA Mens Basketball Tournament Final: Connecticut vs. San Diego State.',
    },
   
  
    // Golf tabel timezone**********************************************************************************
  
    {
      name: 'Golf',
      channels: [
        {
          name: 'Sky Sports Golf (CH-70) ',
          link: '../../../../Channel/Ch70',
          logo: '/sky-golf.webp',
          logo1: '/golf.webp',
          date: "2023-04-03",
          startTime:"16:00",
          endTime: "18:00",
          startDate: new Date("2023-04-03T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
             
      ],
      description: '17:00 Live Masters: On The Range.',
    },
    {
      
      channels: [
        {
          name: 'Sky Sports Golf (CH-70) ',
          link: '../../../../Channel/Ch70',
          logo: '/sky-golf.webp',
          logo1: '/golf.webp',
          date: "2023-04-03",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-04-03T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
   
      ],
      description: '19:00 Live From The Masters.',
    },
  

 // Cycling tabel timezone**********************************************************************************
  

    {
      name: 'Cycling',
      channels: [
       
        {
          name: ' Eurosport 1 UK (CH-41)  ',
        link: '../../../../Channel/Ch41',
        logo: '/eurosport1.webp',
        logo1: '/cycling.webp',
        date: "2023-04-03",
        startTime:"13:30",
        endTime: "15:00",
        startDate: new Date("2023-04-03T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-04-03T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '  Eurosport 1 Poland (CH-57)   ',
        link: '../../../../Channel/Ch57',
        logo: '/eurosport1.webp',
        logo1: '/cycling.webp',
        date: "2023-04-03",
        startTime:"13:30",
        endTime: "15:00",
        startDate: new Date("2023-04-03T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-04-03T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Eurosport 1 ES (CH-524) ',
        link: '../../../../Channel/Ch524',
        logo: '/eurosport1.webp',
        logo1: '/cycling.webp',
        date: "2023-04-03",
        startTime:"13:30",
        endTime: "15:00",
        startDate: new Date("2023-04-03T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-04-03T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '14:30 Tour of the Basque Country | 1st stage.',
    },
   
  
  
    // Baseball tabel timezone**********************************************************************************
  
   /*
    {
      name: 'Baseball',
      channels: [
        {
        name: ' MLB Network USA (CH-399) ',
        link: '../../../../Channel/Ch399',
        logo: '/mlb.webp',
        logo1: '/baseball.webp',
        date: "2023-03-25",
        startTime:"18:05",
        endTime: "20:00",
        startDate: new Date("2023-03-25T18:05:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '18:05 MLB : New York Mets vs Atlanta Braves.',
    },
    {
       channels: [
        {
        name: '  Bally Sports Midwest (CH-9) ',
        link: '../../../../Channel/Ch09',
        logo: '/bally-sports.webp',
        logo1: '/baseball.webp',
        date: "2023-03-25",
        startTime:"18:05",
        endTime: "20:00",
        startDate: new Date("2023-03-25T18:05:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        ],
     description: '18:05 MLB : Toronto Blue Jays vs Minnesota Twins.',
   },
 
*/
// Boxing tabel timezone**********************************************************************************
 /* 
   
{
  name: 'Boxing',
  channels: [
    {
      name: ' DAZN UK (CH-69) ',
      link: '../../../../Channel/Ch69',
      logo: '/dazn.webp',
      logo1: '/boxing.webp',
      date: "2023-04-01",
      startTime:"18:00",
      endTime: "20:00",
      startDate: new Date("2023-04-01T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' DAZN 2 ES (CH-446)  ',
      link: '../../../../Channel/Ch446',
      logo: '/dazn.webp',
      logo1: '/boxing.webp',
      date: "2023-04-01",
      startTime:"18:00",
      endTime: "20:00",
      startDate: new Date("2023-04-01T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' DAZN1 DE (CH-426) ',
      link: '../../../../Channel/Ch426',
      logo: '/dazn.webp',
      logo1: '/boxing.webp',
      date: "2023-04-01",
      startTime:"18:00",
      endTime: "20:00",
      startDate: new Date("2023-04-01T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    
  ],
  description: '19:00 Fight Night : Anthony Joshua vs Jermaine Franklin.',
},



// Darts tabel timezone**********************************************************************************
  
  
{
  name: 'Darts',
  channels: [
    {
      name: ' Viaplay Sports 2 UK (CH-550) ',
      link: '../../../../Channel/Ch550',
      logo: '/viaplay-xtra.webp',
      logo1: '/darts.webp',
      date: "2023-04-01",
      startTime:"11:00",
      endTime: "13:00",
      startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    
  ],
  description: '12:00 International Darts Open - Day 2 Session 1.',
},
{
  
  channels: [
    {
      name: 'Viaplay Xtra UK (CH-597)  ',
      link: '../../../../Channel/Ch597',
      logo: '/viaplay-xtra.webp',
      logo1: '/darts.webp',
      date: "2023-04-01",
      startTime:"17:00",
      endTime: "19:00",
      startDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
   
  ],
  description: '18:00 International Darts Open - Day 2 Session 2.',
},

*/
  // Futsal tabel timezone**********************************************************************************
  
   
    {
      name: 'Futsal',
      channels: [
        {
          name: 'Digi Sport 2 Romania (CH-401)',
          link: '../../../../Channel/Ch401',
          logo: '/digi2.webp',
          logo1: '/futsal.webp',
          date: "2023-04-03",
          startTime:"14:30",
          endTime: "15:30",
          startDate: new Date("2023-04-03T14:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T15:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '15:30 Romania Liga 1 : Luceafarul Buzau FC vs. FK Odorheiu Secuiesc.',
    },
    {
      
      channels: [
        {
          name: 'TVP Sport Poland HD (CH-128)',
          link: '../../../../Channel/Ch128',
          logo: '/tvp-sport.webp',
          logo1: '/futsal.webp',
          date: "2023-04-03",
          startTime:"16:30",
          endTime: "17:30",
          startDate: new Date("2023-04-03T16:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '17:15 Poland Ekstraklasa : Constract Lubawa vs. Futsal Leszno.',
    },
  
  // Horse Racing tabel timezone**********************************************************************************
  
  
    {
      name: 'Horse Racing',
      channels: [
        {
          name: 'Sky Sports Racing UK (CH-554) ',
          link: '../../../../Channel/Ch554',
          logo: '/sky-racing.webp',
          logo1: '/horse-racing.webp',
          date: "2023-04-03",
          startTime:"12:00",
          endTime: "13:00",
          startDate: new Date("2023-04-03T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '13:00 Live racing from around the UK.',
    },  
    {
     
      channels: [
        {
          name: 'Racing TV UK (CH-556) ',
          link: '../../../../Channel/Ch556',
          logo: '/racinguk.webp',
          logo1: '/horse-racing.webp',
          date: "2023-04-03",
          startTime:"12:00",
          endTime: "13:00",
          startDate: new Date("2023-04-03T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '13:00 Live Racing from Ludlow.',
    }, 
    {
     
      channels: [
        {
          name: ' SuperSport Variety 3 (CH-418) ',
          link: '../../../../Channel/Ch418',
          logo: '/suppersports.webp',
          logo1: '/horse-racing.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '00:00 Florida Derby-23 .',
    }, 
  

  // Ice Hockey tabel timezone**********************************************************************************
  

  
    {
      name: 'Ice Hockey',
      channels: [
        {
          name: '  Viaplay Sports 1 UK (CH-451) ',
          link: '../../../../Channel/Ch451',
          logo: '/viaplay.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-04",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sky Sport Mix DE (CH-557)  ',
          link: '../../../../Channel/Ch557',
          logo: '/sky-mix.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-04",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '  Sky Sport Top Event DE (CH-556)   ',
          link: '../../../../Channel/Ch556',
          logo: '/sky-mainevent.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-04",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' ESPN 2 NL (CH-386)  ',
          link: '../../../../Channel/Ch386',
          logo: '/espn2nl.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-04",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sport Klub 3 Serbia (CH-103) ',
          link: '../../../../Channel/Ch103',
          logo: '/sport-klub.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-04",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-04T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '01:00 NHL : Minnesota Wild vs Vegas Golden Knights.',
    }, 
    {
      
      channels: [
        {
          name: ' Viaplay Sports 2 UK (CH-550)  ',
          link: '../../../../Channel/Ch550',
          logo: '/viaplay.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-04",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-04T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '  V Sport Premium Sweden (CH-17)   ',
          link: '../../../../Channel/Ch17',
          logo: '/vsports.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-04",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-04T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '  Sport 5 Stars Israel (CH-147) ',
          link: '../../../../Channel/Ch147',
          logo: '/sport5-israel.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-04",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-04T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-04T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '01:30 NHL : Dallas Stars vs Nashville Predators.',
    }, 


  // Ice Skating tabel timezone**********************************************************************************

 /* 
  {
    name: 'Ice Skating',
    channels: [
      {
        name: ' Eurosport 1 UK (CH-41) ',
        link: '../../../../Channel/Ch41',
        logo: '/euro1.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      {
        name: ' Eurosport 1 Poland (CH-57)  ',
        link: '../../../../Channel/Ch57',
        logo: '/eurosport1.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      {
        name: ' Eurosport 1 ES (CH-524) ',
        link: '../../../../Channel/Ch524',
        logo: '/eurosport1-es.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
    ],
    description: '09:15 ISU World Figure Skating Championships | Mens Free Skate (World Feed).',
  }, 
  {

    channels: [
      {
        name: ' Mens Free Skate USA Network (CH-343)  ',
        link: '../../../../Channel/Ch343',
        logo: '/usa.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      {
        name: '  Polsat Sport Poland (CH-47)  ',
        link: '../../../../Channel/Ch47',
        logo: '/polsat.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      
    ],
    description: '11:30 ISU World Figure Skating Championships.',
  }, 
  
*/

  // WaterPolo tabel timezone**********************************************************************************

 /* 
  {
    name: 'WaterPolo',
    channels: [
      {
        name: ' Arena Sport 2 Croatia HD (CH-433) ',
        link: '../../../../Channel/Ch433',
        logo: '/arena-sport.webp',
        logo1: '/water-polo.webp',
        date: "2023-03-25",
        startTime:"18:00",
        endTime: "19:00",
        startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
     
    ],
    description: '18:00 Adriatic League : Vk Jadran Split vs. Radnicki Kragujevac.',
  }, 
  {
    
    channels: [
      {
        name: ' Arena Sport 2 Croatia HD (CH-433) ',
        link: '../../../../Channel/Ch433',
        logo: '/arena-sport.webp',
        logo1: '/water-polo.webp',
        date: "2023-03-25",
        startTime:"20:00",
        endTime: "21:00",
        startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      {
        name: ' Arena Sport 1 Serbia (CH-429)  ',
        link: '../../../../Channel/Ch429',
        logo: '/arena-sport.webp',
        logo1: '/water-polo.webp',
        date: "2023-03-25",
        startTime:"20:00",
        endTime: "21:00",
        startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },     
    ],
    description: '20:00 Adriatic League : Vk Novi Beograd vs. VK Jug Co.',
  }, 



*/

  
  // Handball tabel timezone**********************************************************************************

  /*
    {
      name: 'Handball',
      channels: [
        {
          name: ' Sky Sport Mix DE (CH-557)',
          link: '../../../../Channel/Ch557',
          logo: '/sky-mix.webp',
          logo1: '/handball.webp',
          date: "2023-04-01",
          startTime:"17:30",
          endTime: "18:30",
          startDate: new Date("2023-04-01T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '17:30 Handball-Bundesliga : HSG Wetzlar vs Minden.',
    }, 
    {
     
      channels: [
        {
          name: ' TVP Sport Poland (CH-128)',
          link: '../../../../Channel/Ch128',
          logo: '/tvp.webp',
          logo1: '/handball.webp',
          date: "2023-04-01",
          startTime:"19:15",
          endTime: "21:00",
          startDate: new Date("2023-04-01T19:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '19:15 Superliga : Piotrkowianin Piotrkow vs Kalisz.',
    },
   */



 // Volleyball tabel timezone**********************************************************************************



    {
      name: 'Volleyball',
      channels: [
        {
          name: 'Polsat Sport Poland (CH-47)',
          link: '../../../../Channel/Ch47',
          logo: '/polsat.webp',
          logo1: '/volleyball.webp',
          date: "2023-04-03",
          startTime:"15:30",
          endTime: "16:30",
          startDate: new Date("2023-04-03T15:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-03T16:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '16:30 PlusLiga : Bielsko-Biala vs Slepsk Suwalki.',
    }, 
    {
     
      channels: [
        {
          name: 'Polsat Sport Poland (CH-47)',
          link: '../../../../Channel/Ch47',
          logo: '/polsat.webp',
          logo1: '/volleyball.webp',
          date: "2023-04-03",
          startTime:"18:30",
          endTime: "19:30",
          startDate: new Date("2023-04-03T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-03T19:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '19:30 PlusLiga : Politechnika Lublin vs Belchatow.',
    }, 
  

// Rugby tabel timezone**********************************************************************************


{
  name: 'Rugby',
  channels: [
 
    {
      name: ' SuperSport Rugby (CH-421)',
      link: '../../../../Channel/Ch421',
      logo: '/suppersports.webp',
      logo1: '/rugby.webp',
      date: "2023-04-03",
      startTime:"14:45",
      endTime: "16:45",
      startDate: new Date("2023-04-03T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-03T16:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  ],
  description: '15:45 Varsity Cup - 23 CUT vs UCT.',
}, 
{
 
  channels: [
 
    {
      name: ' SuperSport Rugby (CH-421)',
      link: '../../../../Channel/Ch421',
      logo: '/suppersports.webp',
      logo1: '/rugby.webp',
      date: "2023-04-03",
      startTime:"16:55",
      endTime: "18:00",
      startDate: new Date("2023-04-03T16:55:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-03T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  ],
  description: '17:55 Varsity Cup - 23 Maties vs UFS Shimlas.',
}, 

  
    {
      name: 'Winter Sports',
      channels: [
    
         {
          name: 'TSN1 (CH-111)  ',
          link: '../../../../Channel/Ch111',
          logo: '/tsn.webp',
          logo1: '/winter-sports.webp',
          date: "2023-04-03",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-04-03T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: 'TSN5 (CH-115) ',
          link: '../../../../Channel/Ch115',
          logo: '/tsn.webp',
          logo1: '/winter-sports.webp',
          date: "2023-04-03",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-04-03T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-03T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '19:00 2023 World Mens Curling Championship : Canada vs. Japan.',
    }, 

  
  ];

  return (
   
<div>
<Head>
    <title>Uwatch4free??? | Watch Movies, TV-Series & Sports Live Online Free.</title>
    <meta name="robots" content="index, follow" />  
    <meta name="revisit-after" content="1 days" />
   
   <meta name="description" content="Uwatch4free??? -  Watch Movies, TV-Series & Sports Live Online Free." />
   <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="keywords" content="Uwatch4free, daddylive, daddylivehs.sx, Uwatch4free.com, streaming free, livetv, freetvchannels, onlinetv, tvchannelsfree, watchtvlive, online tv channels, updated live stream, live sports streaming, stream sports live, watch live sports online, live sports online Live sports TV, free sports streaming, live sports channels, sports streaming services, online sports streaming, sports live stream free, sports live TV, live cricket streaming, live football streaming, live basketball streaming, live baseball streaming, live soccer streaming, live NHL streaming, live NFL streaming, live tennis streaming, live MMA streaming" />
   <meta property="og:locale" content="en_US" />   

   <meta property="og:site_name" content="Uwatch4free??? | Watch Movies, TV-Series & Sports Live Online Free. " />
   <meta property="og:type" content="website" />
   <meta property="og:image:height" content="1280"/>
   <meta property="og:image:width" content="720"/>
   <meta property="og:title" content="Uwatch4free??? | Watch Movies, TV-Series & Sports Live Online Free. " />
   <meta property="og:description" content="Uwatch4free??? | Watch Movies, TV-Series & Sports Live Online Free. " />
   <meta property="og:url" content="https://uwatch4free.vercel.app/" />
   <meta property="og:image:type" content="image/jpeg" />
   <meta property="og:image" content="https://uwatch4free.vercel.app/og_image.jpg" />
   <meta property="og:image:secure_url" content="https://uwatch4free.vercel.app/og_image.jpg" />
   <meta name="twitter:card" content="summary_large_image" />
   <meta name="twitter:title" content="Uwatch4free??? " />
   <meta name="twitter:description" content=" Uwatch4free??? -  Watch Movies, TV-Series & Sports Live Online Free. " />
   <meta name="twitter:image" content="https://uwatch4free.vercel.app/og_image.jpg" />
   <meta name="google-site-verification" content="4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0" />
<link rel="alternate" hrefLang="en-gb" 	href="https://uwatch4free.vercel.app/"/>
<link rel="alternate" hrefLang="en-ca" 	href="https://uwatch4free.vercel.app/"/>
<link rel="alternate" hrefLang="en-au" 	href="https://uwatch4free.vercel.app/"/>
<link rel="alternate" hrefLang="en-se" 	href="https://uwatch4free.vercel.app/"/>
<link rel="alternate" hrefLang="en-fr" 	href="https://uwatch4free.vercel.app/"/>
<link rel="alternate" hrefLang="en-dk" 	href="https://uwatch4free.vercel.app/"/>
<link rel="alternate" hrefLang="en-no" 	href="https://uwatch4free.vercel.app/"/>
<link rel="alternate" hrefLang="x-default" 	href="https://uwatch4free.vercel.app/"/>

<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
<link rel="icon" type="image/webp" sizes="32x32" href="/favicon-32x32.webp" />
<link rel="icon" type="image/webp" sizes="16x16" href="/favicon-16x16.webp" />
<link rel="manifest" href="/site.webmanifest"></link>

<link rel="canonical" href="https://uwatch4free.vercel.app/Sports-2023" />

  </Head>



<div className="bg-gray-600 ">

<div className="flex mx-10  px-10 text-blue-600 text-center ">
    <a href="/">
               <button className="close-button  mx-10" >
               <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 " >  Close</h2>  
          </button></a>
          </div>
    <div>

    <h1 className="text-center font-bold text-white text-2xl py-3 px-4">Monday 03rd April 2023 - Schedule Time UK GMT+1
          </h1>
      

    <div className="container mx-auto  px-4 sm:px-6 lg:px-20">
       
    <table className="w-full table-auto my-1 ">
   
      <thead>
        <tr>
      

         
        </tr>
      </thead>
      <tbody>
  {sports.map((sport) => (
    <tr key={sport.name}>
      <td>
        <div className="text-3xl font-bold text-center leading-none tracking-tight flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-gray-900 group bg-gradient-to-br from-green-600 to-white-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:orange-white dark:text-orange focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 bg-white dark:bg-gray-900 ">
          {sport.name}
        </div>

        <div className="text-xl font-bold text-center leading-none tracking-tight text-white">
          <WorldClock /> </div>
          <div className="text-2xl font-bold text-center leading-none tracking-tight text-blue-500">
           
          {sport.description}
          </div>
          <div className="text-2xl mt-5 font-bold text-center leading-none tracking-tight text-black">
          <p>Channel Broadcasting </p>
        </div>
        {sport.channels.map((channel) => {
          
          const now = new Date();

          // Set the timezone to UTC
        const options = { timeZone: 'UTC' };

      
// Convert the game's date, start time and end time to UTC
const gameDate = new Date(channel.date + "T" + channel.startTime + ":00Z");
const gameEndDate = new Date(channel.date + "T" + channel.endTime + ":00Z");

// Convert the game's start and end time to the local timezone
const startLocalTime = gameDate.toLocaleString('en-US', options);
const endLocalTime = gameEndDate.toLocaleString('en-US', options);

// Assign the converted end time to the endTime variable
const endTime = gameEndDate.toLocaleString('en-US', options);
            
          let status = "";
          let statusclassName = "";
          if (now > gameEndDate) {
            status = "Finished";
            statusclassName = "text-red-500";
          } else if (now >= gameDate && now <= gameEndDate) {
            status = "Live";
            statusclassName = "text-green-500";
          } else if (now < gameDate) {
            status = "Upcoming";
            statusclassName = "text-yellow-500";
          } else {
            status = "Ended";
            statusclassName = "text-red-500";
          }
          return (
            <div key={channel.id}>
              <a
                className="flex items-center lazyload rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-105 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 "
                href={channel.link}
              >
                <img src={channel.logo} className="w-10 h-10 mr-2 " loading="lazy" alt={channel.name} />
                {channel.name}
                <img src={channel.logo1} className="w-10 h-10 mr-2 " loading="lazy" alt={channel.name} />
              </a>
              <div><h2 className="text-2xl font-bold text-center text-yellow-500 leading-none tracking-tight inlineflex items-center ">Current Game Status</h2> <h1 className={`text-3xl font-bold text-center leading-none tracking-tight inline-flex items-center ${status === 'Finished' ? 'text-red-500' : status === 'Ended' ? 'text-red-500': status === 'Live' ? 'text-green-500' : 'text-yellow-500'  }  blink`}>
  {status}
</h1></div> {/* Display the game status */}
            </div>
          )
        })}
        <style jsx>{`
    .blink {
      animation: blinker 1s cubic-bezier(.5, 0, 1, 1) infinite alternate;
    }

    @keyframes blinker {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  `}</style>

      </td>
    </tr>
  ))}
</tbody>
    </table>
    </div>
    </div>
    < ShareThis async defer />
    </div>
    </div>
  );
}

export default SportsTable;
