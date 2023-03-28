import Head from 'next/head';
import ShareThis from '@components/ShareThis';
import WorldClock from '@components/WorldClock';
import Translate from '@components/Translate';



const SportsTable = () => {

  const sports = [
    {
      name: 'Soccer',
      channels: [
       
        {
          name: ' iFollow (CH-166) ',
          link: '../../../../Channel/Ch468',
          logo: '/ifollow.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "16:00",
          endTime: "18:00" ,  
          startDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          name: ' Nova Sport Bulgaria (CH-468) ',
          link: '../../../../Channel/Ch468',
          logo: '/nova-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "16:00",
          endTime: "18:00" ,  
          startDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        
        {
          name: ' Arena Sport 3 Premium (CH-139)',
          link: '../../../../Channel/Ch139',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "16:00",
          endTime: "18:00" ,  
          startDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'Sportdigital Germany (CH-571) ',
          link: '../../../../Channel/Ch571',
          logo: '/sportdigital.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "16:00",
          endTime: "18:00" ,  
          startDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
            
      ],
      description: '16:00 England League One : Peterborough United vs Derby County.',
    },
    {
     
      channels: [
        {
          
          name: ' Fox Soccer Plus (CH-756) ',
          link: '../../../../Channel/Ch756',
          logo: '/fox-sports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Viaplay Sports 1 UK (CH-451) ',
          link: '../../../../Channel/Ch451',
          logo: '/viaplay-xtra.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  DAZN1 DE (CH-426) ',
          link: '../../../../Channel/Ch426',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Arena Sport 1 Premium (CH-134)',
          link: '../../../../Channel/Ch134',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  DAZN1 DE (CH-426) ',
          link: '../../../../Channel/Ch426',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  L Equipe France (CH-645) ',
          link: '../../../../Channel/Ch645',
          logo: '/lequipe.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' SuperSport Premier League (CH-414)',
          link: '../../../../Channel/Ch414',
          logo: '/supersport-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Sport TV1 Portugal (CH-49) ',
          link: '../../../../Channel/Ch49',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Polsat Sport Extra Poland (CH-50)  ',
          link: '../../../../Channel/Ch50',
          logo: '/polsat.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Astro SuperSport 3 (CH-125) ',
          link: '../../../../Channel/Ch125',
          logo: '/astrosports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Diema Sport 3 Bulgaria (CH-467)  ',
          link: '../../../../Channel/Ch467',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '   Ziggo Voetbal NL (CH-398)  ',
          link: '../../../../Channel/Ch398',
          logo: '/ziggo-voetball.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  DAZN1 DE (CH-426) ',
          link: '../../../../Channel/Ch426',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Sportv Brasil (Ch-78) ',
          link: '../../../../Channel/Ch78',
          logo: '/sportstv.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '   ESPN SUR (CH-149)  ',
          link: '../../../../Channel/Ch149',
          logo: '/Espn-p.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },  
        {
          
          name: ' Digi Sport 1 Romania (CH-400) ',
          link: '../../../../Channel/Ch400',
          logo: '/digi1.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        }, 
        {
          
          name: '  Sport 1 Israel (CH-140) ',
          link: '../../../../Channel/Ch140',
          logo: '/sport-israel.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "15:00",
          endTime: "17:00", 
          startDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },  
      ],
      description: '15:00 UEFA Euro Qualifying : Scotland vs Cyprus.',
    },
    {
      
      channels: [
       
        {
          name: ' Sky Sports Premier League (CH-130)  ',
          link: '../../../../Channel/Ch130',
          logo: '/sky-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "16:00",
          endTime: "18:00" ,  
          startDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          name: ' Sky Sports Football (CH-35) ',
          link: '../../../../Channel/Ch35',
          logo: '/sky-football.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "16:00",
          endTime: "18:00" ,  
          startDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        
        {
          name: ' Sky Sport Premier League DE (CH-1)',
          link: '../../../../Channel/Ch01',
          logo: '/sky-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "16:00",
          endTime: "18:00" ,  
          startDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'Sky Sports Main Event (CH-38) ',
          link: '../../../../Channel/Ch38',
          logo: '/sky-mainevent.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "16:00",
          endTime: "18:00" ,  
          startDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'ESPN BR (CH-81)',
          link: '../../../../Channel/Ch81',
          logo: '/espn-brazil.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "16:00",
          endTime: "18:00" ,  
          startDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        }, 
      ],
      description: '16:00 England Womens Super League : Tottenham Hotspur vs Arsenal.',
    },
    {
      
      channels: [
        {
          
          name: '  Fox Soccer Plus (CH-756)   ',
          link: '../../../../Channel/Ch756',
          logo: '/fox-sports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  TRT 1 Turkey (CH-3) ',
          link: '../../../../Channel/Ch03',
          logo: '/trt-spor2.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  DAZN1 DE (CH-426)  ',
          link: '../../../../Channel/Ch426',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  SuperSport Variety 4 (CH-419)   ',
          link: '../../../../Channel/Ch419',
          logo: '/suppersports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  Arena Sport 2 Premium (CH-135)  ',
          link: '../../../../Channel/Ch135',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '   Polsat Sport Premium 1 Poland (CH-5)   ',
          link: '../../../../Channel/Ch05',
          logo: '/polsat.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  Astro Supersport 1 (CH-123) ',
          link: '../../../../Channel/Ch123',
          logo: '/astrosports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' Diema Sport 2 Bulgaria (CH-466) ',
          link: '../../../../Channel/Ch466',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: 'Astro SuperSport 1 (CH-123)  ',
          link: '../../../../Channel/Ch123',
          logo: '/astro5.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  Diema Sport 3 Bulgaria (CH-467)   ',
          link: '../../../../Channel/Ch467',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  Digi Sport 3 Romania (CH-402)  ',
          link: '../../../../Channel/Ch402',
          logo: '/digi3.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  Sport 2 Israel (CH-141) ',
          link: '../../../../Channel/Ch141',
          logo: '/sport2-israel.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '18:00 UEFA Euro Qualifying : Armenia vs Turkey.',
    },
    {
      
      channels: [
        {
          
          name: '  Fox Sports 2 USA (CH-758)',
          link: '../../../../Channel/Ch758',
          logo: '/fox-sports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' Viaplay Sports 1 UK (CH-451)  ',
          link: '../../../../Channel/Ch451',
          logo: '/viaplay-xtra.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' DAZN2 DE (CH-427)   ',
          link: '../../../../Channel/Ch427',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '   SuperSport Premier League (CH-414)  ',
          link: '../../../../Channel/Ch414',
          logo: '/supersport-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' Arena Sport 1 Premium (CH-134)  ',
          link: '../../../../Channel/Ch134',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '   Sport TV1 Portugal (CH-49)  ',
          link: '../../../../Channel/Ch49',
          logo: '/sportstv1.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  Polsat Sport Premium 2 Poland (CH-30)',
          link: '../../../../Channel/Ch30',
          logo: '/polsat.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' Diema Sport 2 Bulgaria (CH-467) ',
          link: '../../../../Channel/Ch467',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: 'Astro SuperSport 2 (CH-124)  ',
          link: '../../../../Channel/Ch124',
          logo: '/astrosports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  SuperSport MaXimo 1 (CH-572)   ',
          link: '../../../../Channel/Ch572',
          logo: '/supersport-maximo.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '   Sportv Brasil (Ch-78)   ',
          link: '../../../../Channel/Ch78',
          logo: '/sportstv.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  Sport 2 Israel (CH-140) ',
          link: '../../../../Channel/Ch140',
          logo: '/sport2-israel.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' ESPN SUR (CH-149) ',
          link: '../../../../Channel/Ch149',
          logo: '/Espn-p.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' Digi Sport 1 Romania (CH-400)',
          link: '../../../../Channel/Ch',
          logo: '/digi1.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '18:00 UEFA Euro Qualifying : Belarus vs Switzerland.',
    },
    {
      
      channels: [
        {
          
          name: ' SuperSport Football (CH-56)',
          link: '../../../../Channel/Ch56',
          logo: '/suppersports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' Sport TV5 Portugal (CH-290)  ',
          link: '../../../../Channel/Ch290',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  Diema Sport Bulgaria (CH-465)  ',
          link: '../../../../Channel/Ch465',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' Digi Sport 2 Romania (CH-401) ',
          link: '../../../../Channel/Ch401',
          logo: '/digi2.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
          {
          
          name: '  Sport 2 Israel (CH-144) ',
          link: '../../../../Channel/Ch144',
          logo: '/sport2-israel.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:00",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
    
      ],
      description: '18:00 UEFA Euro Qualifying : Israel vs Kosovo.',
    },
    {
      
      channels: [
        {
          
          name: ' Sky Sports Premier League (CH-130) ',
          link: '../../../../Channel/Ch130',
          logo: '/sky-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:30",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  Sky Sports Football (CH-35) ',
          link: '../../../../Channel/Ch35',
          logo: '/sky-football.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:30",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' Sky Sport Premier League DE (CH-1)  ',
          link: '../../../../Channel/Ch01',
          logo: '/sky-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:30",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' Sky Sports Main Event (CH-38)  ',
          link: '../../../../Channel/Ch38',
          logo: '/sky-mainevent.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:30",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },  
      ],
      description: '18:30 England Womens Super League : Manchester United vs West Ham United.',
    },
    {
      
      channels: [
        {
          
          name: ' LaLiga SmartBank TV (CH-539)  ',
          link: '../../../../Channel/Ch539',
          logo: '/laliga-smartbanktv.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:30",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: ' Eleven Sports 4 Portugal (CH-458) ',
          link: '../../../../Channel/Ch458',
          logo: '/eleven1.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:30",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          
          name: '  beIN Sports MAX 4 France (CH-494)  ',
          link: '../../../../Channel/Ch494',
          logo: '/bein-sports-max4.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "18:30",
          endTime: "20:00", 
          startDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      
      ],
      description: '18:30 Spain Segunda Division : Deportivo Alav??s vs Tenerife.',
    },
    {
     
      channels: [
        {
          
          name: ' Fox Sports 2 USA (CH-758) ',
          link: '../../../../Channel/Ch758',
          logo: '/fox-sports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Viaplay Sports 2 UK (CH-550) ',
          link: '../../../../Channel/Ch550',
          logo: '/viaplay-xtra.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  DAZN1 DE (CH-426) ',
          link: '../../../../Channel/Ch426',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Arena Sport 1 Premium (CH-134)',
          link: '../../../../Channel/Ch134',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        },
     
        {
          
          name: '  L Equipe France (CH-645) ',
          link: '../../../../Channel/Ch645',
          logo: '/lequipe.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })      
        },
        {
          
          name: '  SuperSport Laliga (CH-415)',
          link: '../../../../Channel/Ch415',
          logo: '/supersport-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Sport TV1 Portugal (CH-49) ',
          link: '../../../../Channel/Ch49',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Polsat Sport Extra Poland (CH-50)  ',
          link: '../../../../Channel/Ch50',
          logo: '/polsat.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Astro SuperSport 3 (CH-125) ',
          link: '../../../../Channel/Ch125',
          logo: '/astrosports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        },
        {
          
          name: ' Diema Sport 3 Bulgaria (CH-467)  ',
          link: '../../../../Channel/Ch467',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        
        {
          
          name: '  Sportv Brasil (Ch-78) ',
          link: '../../../../Channel/Ch78',
          logo: '/sportstv.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Diema Sport 3 Bulgaria (CH-467) ',
          link: '../../../../Channel/Ch467',
          logo: '/digi3.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })       
        },  
        {
          
          name: ' Digi Sport 1 Romania (CH-400) ',
          link: '../../../../Channel/Ch400',
          logo: '/digi1.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        }, 
        {
          
          name: '  Sport 4 Israel (CH-143) ',
          link: '../../../../Channel/Ch143',
          logo: '/sport-israel.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },  
      ],
      description: '20:45 UEFA Euro Qualifying : Spain vs Norway.',
    },
    {
     
      channels: [
        {
          
          name: ' Viaplay Sports 1 UK (CH-451)  ',
          link: '../../../../Channel/Ch451',
          logo: '/viaplay-xtra.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Viaplay Sports 2 UK (CH-550) ',
          link: '../../../../Channel/Ch550',
          logo: '/viaplay-xtra.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Nova TV Croatia (CH-2)  ',
          link: '../../../../Channel/Ch02',
          logo: '/nova-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' DAZN2 DE (CH-427)',
          link: '../../../../Channel/Ch427',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        },
     
        {
          
          name: '  SuperSport Premier League (CH-414) ',
          link: '../../../../Channel/Ch414',
          logo: '/supersport-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })      
        },
        {
          
          name: '  SuperSport Laliga (CH-415)',
          link: '../../../../Channel/Ch415',
          logo: '/supersport-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Arena Sport 3 Premium (CH-139)  ',
          link: '../../../../Channel/Ch139',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Polsat Sport Extra Poland (CH-5)  ',
          link: '../../../../Channel/Ch05',
          logo: '/polsat.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Sport TV2 Portugal (CH-74) ',
          link: '../../../../Channel/Ch74',
          logo: '/spotrstv2.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        },
        {
          
          name: ' Sportv Brasil (Ch-78)  ',
          link: '../../../../Channel/Ch78',
          logo: '/sportstv.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        
        {
          
          name: '   Astro Supersport 1 (CH-123)  ',
          link: '../../../../Channel/Ch123',
          logo: '/astrosports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Diema Sport 3 Bulgaria (CH-466) ',
          link: '../../../../Channel/Ch467',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })       
        },  
        {
          
          name: ' Digi Sport 3 Romania (CH-402) ',
          link: '../../../../Channel/Ch402',
          logo: '/digi3.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })     
        }, 
        {
          
          name: '  Sport 4 Israel (CH-141) ',
          link: '../../../../Channel/Ch141',
          logo: '/sport-israel.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },  
      ],
      description: '20:45 UEFA Euro Qualifying : Croatia vs Wales.',
    },
    {
     
      channels: [
        {
          
          name: '  SuperSport Football (CH-56)  ',
          link: '../../../../Channel/Ch56',
          logo: '/suppersports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Sport TV6 Portugal (CH-291) ',
          link: '../../../../Channel/Ch291',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Antena 1 Romania (CH-107) ',
          link: '../../../../Channel/Ch107',
          logo: '/antena.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Sport 4 Israel (CH-140) ',
          link: '../../../../Channel/Ch140',
          logo: '/sport-israel.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },  
      ],
      description: '20:45 UEFA Euro Qualifying : Andorra vs Romania.',
    },
    {
     
      channels: [
        {
          
          name: '  Fox Soccer Plus (CH-756) ',
          link: '../../../../Channel/Ch756',
          logo: '/fox-sports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  SuperSport PSL (CH-413)  ',
          link: '../../../../Channel/Ch413',
          logo: '/suppersports.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '   Sport TV5 Portugal (CH-290)',
          link: '../../../../Channel/Ch290',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Sport 4 Israel (CH-142) ',
          link: '../../../../Channel/Ch142',
          logo: '/sport-israel.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: ' Polsat Sport Premium 2 Poland (CH-30)',
          link: '../../../../Channel/Ch30',
          logo: '/polsat.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },  
        {
          
          name: ' SuperSport MaXimo 1 (CH-572) ',
          link: '../../../../Channel/Ch572',
          logo: '/supersport-maximo.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },  
        {
          
          name: ' Diema Sport Bulgaria (CH-465)',
          link: '../../../../Channel/Ch465',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Digi Sport 2 Romania (CH-401)',
          link: '../../../../Channel/Ch401',
          logo: '/digi2.webp',
          logo1: '/soccer.webp', 
          date: "2023-03-25",
          startTime: "20:45",
          endTime: "22:00", 
          startDate: new Date("2023-03-25T20:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-22T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },  
      ],
      description: '20:45 Friendly : Germany vs Peru.',
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
          date: "2023-03-25",
          startTime: "13:00",
          endTime: "15:00",  
          startDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' SuperSport Cricket (CH-368)',
          link: '../../../../Channel/Ch368',
          logo: '/suppersports.webp',
          logo1: '/cricket.webp',  
          date: "2023-03-25",
          startTime: "13:00",
          endTime: "15:00",  
          startDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'Willow Cricket (CH-346)',
          link: '../../../../Channel/Ch346',
          logo: '/willow.webp',
          logo1: '/cricket.webp',  
          date: "2023-03-25",
          startTime: "13:00",
          endTime: "15:00",  
          startDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Astro Cricket (CH-370)',
          link: '../../../../Channel/Ch370',
          logo: '/astrosports.webp',
          logo1: '/cricket.webp',  
          date: "2023-03-25",
          startTime: "13:00",
          endTime: "15:00",  
          startDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'Sky Sports Main Event (CH-38)',
          link: '../../../../Channel/Ch38',
          logo: '/sky-mainevent.webp',
          logo1: '/cricket.webp',  
          date: "2023-03-25",
          startTime: "13:00",
          endTime: "15:00",  
          startDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '13:00 1st T20I : South Africa vs West Indies.',
    },

   // Wrestling tabel timezone**********************************************************************************
   
  
      {
     name: 'Wrestling',
       channels: [
          {
           name: 'TNT USA (CH-338)',
           link: '../../../../Channel/Ch338',
          logo: '/tnt.webp',
          logo1: '/wwe.webp',
          date: "2023-03-26",
          startTime:"03:00",
          endTime: "04:00",
          startDate: new Date("2023-03-26T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
         },
      
       ],
  
        description: '03:00 All Elite Wrestling: Rampage - Season 3, Episode 12.',
      },
    
  
  /*
     {
       name: 'Snooker',
      channels: [
        {
         name: 'Viaplay Xtra UK (CH-597)',
         link: '../../../../Channel/Ch597',
         logo: '/viaplay-xtra.webp',
         logo1: '/snooker.webp',
         },
       ],
       description: '19:30 Ultimate Pool Champions League.',
     },
  
  */
  
  // Tennis tabel timezone**********************************************************************************
    {
      name: 'Tennis',
      channels: [
        {
          name: 'Tennis Channel (CH-40) ',
          link: '../../../../Channel/Ch40',
          logo: '/tennis-logo.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN2 (CH-112)  ',
          link: '../../../../Channel/Ch112',
          logo: '/tsn.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN5 (CH-115)  ',
          link: '../../../../Channel/Ch115',
          logo: '/tsn.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'SuperSport Tennis (CH-423)  ',
          link: '../../../../Channel/Ch423',
          logo: '/suppersports.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
              
        {
          name: '  beIN Sports MENA 5 (CH-95) ',
          link: '../../../../Channel/Ch95',
          logo: '/bein-arabia.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'Eleven Sports 1 Portugal (CH-455)  ',
          link: '../../../../Channel/Ch455',
          logo: '/eleven1.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Polsat Sport Poland (CH-47)',
          link: '../../../../Channel/Ch47',
          logo: '/polsat.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '   Polsat Sport News Poland (CH-129) ',
          link: '../../../../Channel/Ch129',
          logo: '/polsat.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '  Sport Klub 1 Serbia (CH-101) ',
          link: '../../../../Channel/Ch101',
          logo: '/sport-klub.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' ESPN2 SUR (CH-150) ',
          link: '../../../../Channel/Ch150',
          logo: '/espn2.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      ],
      description: '18:00 2023 Miami Open Tennis | WTA Third Round & ATP Second Round.  ',
    },
    {
      
      channels: [
        {
          name: 'Tennis Channel (CH-40) ',
          link: '../../../../Channel/Ch40',
          logo: '/tennis-logo.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN2 (CH-112)  ',
          link: '../../../../Channel/Ch112',
          logo: '/tsn.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN5 (CH-115)  ',
          link: '../../../../Channel/Ch115',
          logo: '/tsn.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'SuperSport Tennis (CH-423)  ',
          link: '../../../../Channel/Ch423',
          logo: '/suppersports.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
              
        {
          name: 'Eleven Sports 1 Portugal (CH-455)  ',
          link: '../../../../Channel/Ch455',
          logo: '/eleven1.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' CANAL+ SPORT Poland (CH-48)',
          link: '../../../../Channel/Ch48',
          logo: '/canal+.webp',
          logo1: '/tennis.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
            
      ],
      description: '20:00 ATP/WTA Early Round Coverage, Day 4.',
    },
  
    {
      
      channels: [
        {
          name: 'Tennis Channel (CH-40) ',
          link: '../../../../Channel/Ch40',
          logo: '/tennis-logo.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-26T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN2 (CH-112)  ',
          link: '../../../../Channel/Ch112',
          logo: '/tsn.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-26T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN5 (CH-115)  ',
          link: '../../../../Channel/Ch115',
          logo: '/tsn.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-26T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'SuperSport Tennis (CH-423)  ',
          link: '../../../../Channel/Ch423',
          logo: '/suppersports.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-26T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
              
        {
          name: 'Eleven Sports 1 Portugal (CH-455)  ',
          link: '../../../../Channel/Ch455',
          logo: '/eleven1.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-26T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
                  
      ],
      description: '00:00 2023 Miami Open Tennis | ATP Second Round, WTA Third Round.',
    },
    {
      
      channels: [
        {
          name: 'Tennis Channel (CH-40) ',
          link: '../../../../Channel/Ch40',
          logo: '/tennis-logo.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"02:00",
          endTime: "04:00",
          startDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN2 (CH-112)  ',
          link: '../../../../Channel/Ch112',
          logo: '/tsn.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"02:00",
          endTime: "04:00",
          startDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN5 (CH-115)  ',
          link: '../../../../Channel/Ch115',
          logo: '/tsn.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"02:00",
          endTime: "04:00",
          startDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'SuperSport Tennis (CH-423)  ',
          link: '../../../../Channel/Ch423',
          logo: '/suppersports.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"02:00",
          endTime: "04:00",
          startDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
              
        {
          name: 'Eleven Sports 1 Portugal (CH-455)  ',
          link: '../../../../Channel/Ch455',
          logo: '/eleven1.webp',
          logo1: '/tennis.webp',
          date: "2023-03-26",
          startTime:"02:00",
          endTime: "04:00",
          startDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
                  
      ],
      description: '02:00 WTA 1000 Miami.',
    },



// Badminton tabel timezone**********************************************************************************

{
  name: 'Badminton',
  channels: [
    {
      name: 'BT Sport 6 UK (CH-11)',
      link: '../../../../Channel/Ch11',
      logo: '/bt1.webp',
      logo1: '/badminton.webp',
      date: "2023-03-25",
      startTime:"14:00",
      endTime: "16:00",
      startDate: new Date("2023-03-25T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Astro SuperSport 4 (CH-126)',
      link: '../../../../Channel/Ch126',
      logo: '/astrosports.webp',
      logo1: '/badminton.webp',
      date: "2023-03-25",
      startTime:"14:00",
      endTime: "16:00",
      startDate: new Date("2023-03-25T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
  ],
  description: '14:00 BWF World Tour : Swiss Open - Semi Finals.',
},
{
 
  channels: [
    {
      name: 'BT Sport 2 UK (CH-32)',
      link: '../../../../Channel/Ch32',
      logo: '/bt1.webp',
      logo1: '/badminton.webp',
      date: "2023-03-25",
      startTime:"17:00",
      endTime: "19:00",
      startDate: new Date("2023-03-25T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
   
  ],
  description: '17:00 BWF World Tour : Swiss Open - Semi Finals.',
},



// Motorsport tabel timezone**********************************************************************************


{
  name: 'Motorsport',

  channels: [
   
    {
      name: ' Sky Sport MotoGP IT (CH-55)  ',
      link: '../../../../Channel/Ch55',
      logo: '/Sky-Sport-MotoGP.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"09:40",
      endTime: "10:00",
      startDate: new Date("2023-03-25T09:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: ' Sport TV4 Portugal (CH-289)  ',
      link: '../../../../Channel/Ch289',
      logo: '/sport-tv5-portugal.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"09:40",
      endTime: "10:00",
      startDate: new Date("2023-03-25T09:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: ' Canal+ Sport360 (CH-464) ',
      link: '../../../../Channel/Ch464',
      logo: '/canal+.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"09:40",
      endTime: "10:00",
      startDate: new Date("2023-03-25T09:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Polsat Sport Premium 2 Poland (CH-30)  ',
      link: '../../../../Channel/Ch30',
      logo: '/polsat.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"09:40",
      endTime: "10:00",
      startDate: new Date("2023-03-25T09:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: ' Sport Klub 3 Serbia (CH-103) ',
      link: '../../../../Channel/Ch103',
      logo: '/sport-klub.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"09:40",
      endTime: "10:00",
      startDate: new Date("2023-03-25T09:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  beIN Sports MENA 6 (CH-96)  ',
      link: '../../../../Channel/Ch96',
      logo: '/bein-arabia.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"09:40",
      endTime: "10:00",
      startDate: new Date("2023-03-25T09:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: ' beIN Sports MENA English 3 (CH-46) ',
      link: '../../../../Channel/Ch46',
      logo: '/bein-eng3.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"09:40",
      endTime: "10:00",
      startDate: new Date("2023-03-25T09:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport 5 Live Israel (CH-146) ',
      link: '../../../../Channel/Ch146',
      logo: '/sport5-israel.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"09:40",
      endTime: "10:00",
      startDate: new Date("2023-03-25T09:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
  ],
  description: '09:40 Moto3 : Free Practice 3 - GP Portugal.',
},
{
  
  channels: [
   
    {
      name: ' Sky Sport MotoGP IT (CH-55)  ',
      link: '../../../../Channel/Ch55',
      logo: '/Sky-Sport-MotoGP.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"10:25",
      endTime: "11:25",
      startDate: new Date("2023-03-25T10:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport TV4 Portugal (CH-289)  ',
      link: '../../../../Channel/Ch289',
      logo: '/sport-tv5-portugal.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"10:25",
      endTime: "11:25",
      startDate: new Date("2023-03-25T10:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Canal+ Sport360 (CH-464) ',
      link: '../../../../Channel/Ch464',
      logo: '/canal+.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"10:25",
      endTime: "11:25",
      startDate: new Date("2023-03-25T10:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  Polsat Sport Premium 2 Poland (CH-30)  ',
      link: '../../../../Channel/Ch30',
      logo: '/polsat.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"10:25",
      endTime: "11:25",
      startDate: new Date("2023-03-25T10:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport Klub 3 Serbia (CH-103) ',
      link: '../../../../Channel/Ch103',
      logo: '/sport-klub.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"10:25",
      endTime: "11:25",
      startDate: new Date("2023-03-25T10:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  beIN Sports MENA 6 (CH-96)  ',
      link: '../../../../Channel/Ch96',
      logo: '/bein-arabia.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"10:25",
      endTime: "11:25",
      startDate: new Date("2023-03-25T10:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
    },
    {
      name: ' beIN Sports MENA English 3 (CH-46) ',
      link: '../../../../Channel/Ch46',
      logo: '/bein-eng3.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"10:25",
      endTime: "11:25",
      startDate: new Date("2023-03-25T10:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport 5 Live Israel (CH-146) ',
      link: '../../../../Channel/Ch146',
      logo: '/sport5-israel.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"10:25",
      endTime: "11:25",
      startDate: new Date("2023-03-25T10:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
  ],
  description: '10:25 Moto2 : Treinos Livres 3 - GP Portugal.',
},  
{
  
  channels: [
   
    {
      name: ' BT Sport 2 UK (CH-32)  ',
      link: '../../../../Channel/Ch32',
      logo: '/bt2.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:10",
      endTime: "12:10",
      startDate: new Date("2023-03-25T11:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sky Sport MotoGP IT (CH-55)  ',
      link: '../../../../Channel/Ch55',
      logo: '/Sky-Sport-MotoGP.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:10",
      endTime: "12:10",
      startDate: new Date("2023-03-25T11:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport TV4 Portugal (CH-289)  ',
      link: '../../../../Channel/Ch289',
      logo: '/sport-tv5-portugal.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:10",
      endTime: "12:10",
      startDate: new Date("2023-03-25T11:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Canal+ Sport360 (CH-464) ',
      link: '../../../../Channel/Ch464',
      logo: '/canal+.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:10",
      endTime: "12:10",
      startDate: new Date("2023-03-25T11:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
    },
    {
      name: '  Polsat Sport Premium 2 Poland (CH-30)  ',
      link: '../../../../Channel/Ch30',
      logo: '/polsat.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:10",
      endTime: "12:10",
      startDate: new Date("2023-03-25T11:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
    },
    {
      name: ' Sport Klub 3 Serbia (CH-103) ',
      link: '../../../../Channel/Ch103',
      logo: '/sport-klub.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:10",
      endTime: "12:10",
      startDate: new Date("2023-03-25T11:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
    },
    {
      name: '  beIN Sports MENA 6 (CH-96)  ',
      link: '../../../../Channel/Ch96',
      logo: '/bein-arabia.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:10",
      endTime: "12:10",
      startDate: new Date("2023-03-25T11:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' beIN Sports MENA English 3 (CH-46) ',
      link: '../../../../Channel/Ch46',
      logo: '/bein-eng3.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:10",
      endTime: "12:10",
      startDate: new Date("2023-03-25T11:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport 5 Live Israel (CH-146) ',
      link: '../../../../Channel/Ch146',
      logo: '/sport5-israel.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:10",
      endTime: "12:10",
      startDate: new Date("2023-03-25T11:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
  ],
  description: '11:10 MotoGP : Grand Prix of Portugal - MotoGP Qualifying.',
},  
{
  
  channels: [
   
    {
      name: ' Ziggo Racing NL (CH-396)   ',
      link: '../../../../Channel/Ch396',
      logo: '/ziggo-racing.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:25",
      endTime: "12:25",
      startDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Eleven Sports 1 Portugal (CH-455) ',
      link: '../../../../Channel/Ch455',
      logo: '/eleven1.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:25",
      endTime: "12:25",
      startDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  SuperSport Action (CH-420)  ',
      link: '../../../../Channel/Ch420',
      logo: '/suppersports.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"11:25",
      endTime: "12:25",
      startDate: new Date("2023-03-25T11:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:25:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
   
  ],
  description: '11:25 Formula E : ePrix Sao Paulo | Vrije Training 2.',
},  
{
  
  channels: [
   
    {
      name: ' Ziggo Racing NL (CH-396)   ',
      link: '../../../../Channel/Ch396',
      logo: '/ziggo-racing.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:30",
      endTime: "14:30",
      startDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Eleven Sports 1 Portugal (CH-455) ',
      link: '../../../../Channel/Ch455',
      logo: '/eleven1.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:30",
      endTime: "14:30",
      startDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  SuperSport Action (CH-424)  ',
      link: '../../../../Channel/Ch424',
      logo: '/suppersports.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:30",
      endTime: "14:30",
      startDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
   
  ],
  description: '13:30 Formula E : Sao Paulo, qualifications.',
},  
{
  
  channels: [
   
     {
      name: ' Sky Sport MotoGP IT (CH-55)  ',
      link: '../../../../Channel/Ch55',
      logo: '/Sky-Sport-MotoGP.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:45",
      endTime: "14:45",
      startDate: new Date("2023-03-25T13:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport TV4 Portugal (CH-289)  ',
      link: '../../../../Channel/Ch289',
      logo: '/sport-tv5-portugal.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:45",
      endTime: "14:45",
      startDate: new Date("2023-03-25T13:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
   
    {
      name: '  Polsat Sport Premium 2 Poland (CH-30)  ',
      link: '../../../../Channel/Ch30',
      logo: '/polsat.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:45",
      endTime: "14:45",
      startDate: new Date("2023-03-25T13:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport Klub 3 Serbia (CH-103) ',
      link: '../../../../Channel/Ch103',
      logo: '/sport-klub.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:45",
      endTime: "14:45",
      startDate: new Date("2023-03-25T13:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  beIN Sports MENA 6 (CH-96)  ',
      link: '../../../../Channel/Ch96',
      logo: '/bein-arabia.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:45",
      endTime: "14:45",
      startDate: new Date("2023-03-25T13:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' beIN Sports MENA English 3 (CH-46) ',
      link: '../../../../Channel/Ch46',
      logo: '/bein-eng3.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:45",
      endTime: "14:45",
      startDate: new Date("2023-03-25T13:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport 5 Live Israel (CH-146) ',
      link: '../../../../Channel/Ch146',
      logo: '/sport5-israel.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:45",
      endTime: "14:45",
      startDate: new Date("2023-03-25T13:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Canal+ Sport360 (CH-464) ',
      link: '../../../../Channel/Ch464',
      logo: '/canal+.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"13:45",
      endTime: "14:45",
      startDate: new Date("2023-03-25T13:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
  ],
  description: '13:45 Moto3 : Portuguese GP | Qualifying.',
}, 
{
  
  channels: [
   
     {
      name: ' Sky Sport MotoGP IT (CH-55)  ',
      link: '../../../../Channel/Ch55',
      logo: '/Sky-Sport-MotoGP.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"14:45",
      endTime: "15:45",
      startDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport TV4 Portugal (CH-289)  ',
      link: '../../../../Channel/Ch289',
      logo: '/sport-tv5-portugal.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"14:45",
      endTime: "15:45",
      startDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
   
    {
      name: '  Polsat Sport Premium 2 Poland (CH-30)  ',
      link: '../../../../Channel/Ch30',
      logo: '/polsat.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"14:45",
      endTime: "15:45",
      startDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport Klub 3 Serbia (CH-103) ',
      link: '../../../../Channel/Ch103',
      logo: '/sport-klub.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"14:45",
      endTime: "15:45",
      startDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  beIN Sports MENA 6 (CH-96)  ',
      link: '../../../../Channel/Ch96',
      logo: '/bein-arabia.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"14:45",
      endTime: "15:45",
      startDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
    },
    {
      name: ' beIN Sports MENA English 3 (CH-46) ',
      link: '../../../../Channel/Ch46',
      logo: '/bein-eng3.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"14:45",
      endTime: "15:45",
      startDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport 5 Live Israel (CH-146) ',
      link: '../../../../Channel/Ch146',
      logo: '/sport5-israel.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"14:45",
      endTime: "15:45",
      startDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Canal+ Sport360 (CH-464) ',
      link: '../../../../Channel/Ch464',
      logo: '/canal+.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"14:45",
      endTime: "15:45",
      startDate: new Date("2023-03-25T14:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
  ],
  description: '14:45 Moto2 : Portugal Qualifying.',
}, 
{
  
  channels: [
   
     {
      name: ' Sky Sport MotoGP IT (CH-55)  ',
      link: '../../../../Channel/Ch55',
      logo: '/Sky-Sport-MotoGP.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"15:45",
      endTime: "16:45",
      startDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
    },
    {
      name: ' Sport TV4 Portugal (CH-289)  ',
      link: '../../../../Channel/Ch289',
      logo: '/sport-tv5-portugal.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"15:45",
      endTime: "16:45",
      startDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
   
    {
      name: '  Polsat Sport Premium 2 Poland (CH-30)  ',
      link: '../../../../Channel/Ch30',
      logo: '/polsat.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"15:45",
      endTime: "16:45",
      startDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport Klub 3 Serbia (CH-103) ',
      link: '../../../../Channel/Ch103',
      logo: '/sport-klub.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"15:45",
      endTime: "16:45",
      startDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  beIN Sports MENA 6 (CH-96)  ',
      link: '../../../../Channel/Ch96',
      logo: '/bein-arabia.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"15:45",
      endTime: "16:45",
      startDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' beIN Sports MENA English 3 (CH-46) ',
      link: '../../../../Channel/Ch46',
      logo: '/bein-eng3.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"15:45",
      endTime: "16:45",
      startDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Sport 5 Live Israel (CH-146) ',
      link: '../../../../Channel/Ch146',
      logo: '/sport5-israel.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"15:45",
      endTime: "16:45",
      startDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Canal+ Sport360 (CH-464) ',
      link: '../../../../Channel/Ch464',
      logo: '/canal+.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"15:45",
      endTime: "16:45",
      startDate: new Date("2023-03-25T15:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T16:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
  ],
  description: '15:45 Grand Prix of Portugal - MotoGP Sprint Race.',
},
{
  
  channels: [
   
     {
      name: ' CBS USA (CH-52)  ',
      link: '../../../../Channel/Ch52',
      logo: '/cbs.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"17:30",
      endTime: "18:30",
      startDate: new Date("2023-03-25T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' TSN3 (CH-113)  ',
      link: '../../../../Channel/Ch113',
      logo: '/tsn.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"17:30",
      endTime: "18:30",
      startDate: new Date("2023-03-25T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
    },
   
    {
      name: ' Eurosport 2 UK (CH-42)  ',
      link: '../../../../Channel/Ch42',
      logo: '/eurosports2.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"17:30",
      endTime: "18:30",
      startDate: new Date("2023-03-25T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  Eurosport 2 Poland (CH-58)  ',
      link: '../../../../Channel/Ch58',
      logo: '/euro2.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"17:30",
      endTime: "18:30",
      startDate: new Date("2023-03-25T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  Eurosport 2 ES (CH-525)  ',
      link: '../../../../Channel/Ch525',
      logo: '/eurosport1-es.webp',
      logo1: '/motorsports.webp',
      date: "2023-03-25",
      startTime:"17:30",
      endTime: "18:30",
      startDate: new Date("2023-03-25T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
 
  ],
  description: '17:30 FIA Formula E Racing Round 6: Sao Paulo E-Prix.',
},






// Basketball tabel timezone**********************************************************************************
/*
    {
      name: 'Basketball',
      channels: [
        {
          name: 'Polsat Sport News Poland (CH-129)',
          link: '../../../../Channel/Ch129',
          logo: '/polsat.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"17:30",
          endTime: "19:00",
          startDate: new Date("2023-03-25T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '17:30 Polish Basketball League : Czarni Slupsk vs Spojnia Stargard.',
    },
    {
      
      channels: [
        {
          name: 'Magenta Sport (CH-13)',
          link: '../../../../Channel/Ch13',
          logo: '/magenta-sport.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"19:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'DAZN 2 ES (CH-446)  ',
          link: '../../../../Channel/Ch446',
          logo: '/dazn.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"19:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Sport Klub 1 Serbia (CH-101) ',
          link: '../../../../Channel/Ch101',
          logo: '/sport-klub.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"19:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Sky Sport Arena Italy (CH-462)',
          link: '../../../../Channel/Ch462',
          logo: '/sky-arena.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"19:00",
          endTime: "20:00",
          startDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '19:00 Euroleague : Crvena zvezda vs Baskonia.',
    },
    {
      
      channels: [
        {
          name: 'Magenta Sport (CH-14) ',
          link: '../../../../Channel/Ch14',
          logo: '/magenta-sport.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"19:30",
          endTime: "21:00",
          startDate: new Date("2023-03-25T19:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          name: ' DAZN 1 ES (CH-445)  ',
          link: '../../../../Channel/Ch445',
          logo: '/dazn.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"19:30",
          endTime: "21:00",
          startDate: new Date("2023-03-25T19:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Max Sport 2 Bulgaria (CH-473)',
          link: '../../../../Channel/Ch473',
          logo: '/max-sport4.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"19:30",
          endTime: "21:00",
          startDate: new Date("2023-03-25T19:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: '  Sport Klub 4 Serbia (CH-104)',
          link: '../../../../Channel/Ch104',
          logo: '/sport-klub.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"19:30",
          endTime: "21:00",
          startDate: new Date("2023-03-25T19:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '19:30 Euroleague : Panathinaikos vs Barcelona.',
    },
    {
      
      channels: [
        {
          name: 'Magenta Sport (CH-15) ',
          link: '../../../../Channel/Ch15',
          logo: '/magenta-sport.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T20:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '  DAZN 3 ES (CH-447)  ',
          link: '../../../../Channel/Ch447',
          logo: '/dazn.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T20:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '  Sport 5 Plus Israel (CH-145)',
          link: '../../../../Channel/Ch145',
          logo: '/sport5-israel.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T20:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Sport Klub HD Serbia (CH-453)',
          link: '../../../../Channel/Ch453',
          logo: '/sport-klub.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T20:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '20:00 Euroleague : Alba Berlin vs Anadolu Efes.',
    },
    {
      
      channels: [
        {
          name: 'Magenta Sport (CH-16) ',
          link: '../../../../Channel/Ch16',
          logo: '/magenta-sport.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T20:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '  DAZN 4 ES (CH-448)  ',
          link: '../../../../Channel/Ch448',
          logo: '/dazn.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T20:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '  Sport 5 Plus Israel (CH-144)',
          link: '../../../../Channel/Ch144',
          logo: '/sport5-israel.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T20:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Sport Klub 3 Serbia (CH-103)',
          link: '../../../../Channel/Ch103',
          logo: '/sport-klub.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T20:03:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '20:00 Euroleague : Lyon-Villeurbanne vs Maccabi Tel Aviv.',
    },
    {
      
      channels: [
        {
          name: 'Bally Sports Florida (CH-9)',
          link: '../../../../Channel/Ch09',
          logo: '/bally-sports.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
       
      ],
      description: '00:00 NBA : Orlando Magic vs New York Knicks.',
    },
    {
      
      channels: [
        {
          name: 'Sportsnet 360 (CH-10) ',
          link: '../../../../Channel/Ch10',
          logo: '/sportsnet.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-03-25T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'Movistar Deportes Spain (CH-436) ',
          link: '../../../../Channel/Ch436',
          logo: '/movistar-deportes.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-03-25T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Sport TV2 Portugal (CH-74) ',
          link: '../../../../Channel/Ch74',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-03-25T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'beIN Sports 1 France (CH-116) ',
          link: '../../../../Channel/Ch116',
          logo: '/bein1-french.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-03-25T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'beIN Sports MENA Premium 3 (CH-100) ',
          link: '../../../../Channel/Ch100',
          logo: '/bein3-premium.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-03-25T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'beIN Sports MENA English 3 (CH-46)',
          link: '../../../../Channel/Ch46',
          logo: '/bein-eng3.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-03-25T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Astro SuperSport 4 (CH-126)',
          link: '../../../../Channel/Ch126',
          logo: '/astrosports.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-03-25T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      ],
      description: '00:30 NBA : Brooklyn Nets vs Cleveland Cavaliers.',
    },
    {
      
      channels: [
        {
          name: '  Bally Sports New Orleans (CH-13)',
          link: '../../../../Channel/Ch13',
          logo: '/bally-sports.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"01:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T01:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      
      ],
      description: '01:00 NBA : New Orleans Pelicans vs Charlotte Hornets.',
    },
    {
      
      channels: [
        {
          name: ' Sportsnet 360 (CH-14) ',
          link: '../../../../Channel/Ch14',
          logo: '/sportsnet.webp',
          logo1: '/basketball.webp',
          date: "2023-03-25",
          startTime:"03:30",
          endTime: "05:00",
          startDate: new Date("2023-03-25T03:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T05:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      ],
      description: '03:30 NBA : Los Angeles Clippers vs Oklahoma City Thunder.',
    },
  */
  
    // Golf tabel timezone**********************************************************************************
  
    {
      name: 'Golf',
      channels: [
        {
          name: 'Sky Sports Golf (CH-70) ',
          link: '../../../../Channel/Ch70',
          logo: '/sky-golf.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"12:30",
          endTime: "13:30",
          startDate: new Date("2023-03-25T11:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Movistar Golf (CH-528)  ',
          link: '../../../../Channel/Ch528',
          logo: '/movistar.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"12:30",
          endTime: "13:30",
          startDate: new Date("2023-03-25T11:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Sport TV3 Portugal (CH-454)   ',
          link: '../../../../Channel/Ch454',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"12:30",
          endTime: "13:30",
          startDate: new Date("2023-03-25T11:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '  SuperSport Golf (CH-422) ',
          link: '../../../../Channel/Ch422',
          logo: '/suppersports.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"12:30",
          endTime: "13:30",
          startDate: new Date("2023-03-25T11:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Sky Sports Main Event (CH-38) ',
          link: '../../../../Channel/Ch38',
          logo: '/sky-mainevent.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"12:30",
          endTime: "13:30",
          startDate: new Date("2023-03-25T11:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      ],
      description: '12:30 WGC-Dell Match Play.',
    },
    {
      
      channels: [
        {
          name: 'NBC USA (CH-53)',
          link: '../../../../Channel/Ch53',
          logo: '/nbc.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"12:30",
          endTime: "13:30",
          startDate: new Date("2023-03-25T11:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      
      ],
      description: '17:00 WGC - Dell Technologies Match Play, Quarterfinals.',
    },
    {
      
      channels: [
        {
          name: 'SuperSport Variety 1 (CH-416)',
          link: '../../../../Channel/Ch416',
          logo: '/nbc.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"22:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      
      ],
      description: '22:00 PGA Champions 23 The Galleri D2.',
    },
    {
     
      channels: [
        {
          name: 'Sky Sports Golf (CH-70) ',
          link: '../../../../Channel/Ch70',
          logo: '/sky-golf.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"22:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Movistar Golf (CH-528)  ',
          link: '../../../../Channel/Ch528',
          logo: '/movistar.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"22:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Sport TV3 Portugal (CH-454)   ',
          link: '../../../../Channel/Ch454',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"22:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '  SuperSport Golf (CH-422) ',
          link: '../../../../Channel/Ch422',
          logo: '/suppersports.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"22:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Sky Sports Main Event (CH-38) ',
          link: '../../../../Channel/Ch38',
          logo: '/sky-mainevent.webp',
          logo1: '/golf.webp',
          date: "2023-03-25",
          startTime:"22:00",
          endTime: "23:00",
          startDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      ],
      description: '22:00 LPGA Drive On Championship.',
    },


 // Cycling tabel timezone**********************************************************************************
  

    {
      name: 'Cycling',
      channels: [
       
        {
          name: ' SuperSport Variety 1 (CH-416) ',
        link: '../../../../Channel/Ch416',
        logo: '/suppersports.webp',
        logo1: '/cycling.webp',
        date: "2023-03-25",
        startTime:"07:30",
        endTime: "08:30",
        startDate: new Date("2023-03-25T07:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T08:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '07:30 Absa Cape Epic - 23: Stage 6.',
    },
    {
      
      channels: [
       
        {
          name: ' Eurosport 2 UK (CH-42) ',
        link: '../../../../Channel/Ch42',
        logo: '/euro2.webp',
        logo1: '/cycling.webp',
        date: "2023-03-25",
        startTime:"15:15",
        endTime: "16:30",
        startDate: new Date("2023-03-25T15:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T16:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '  Eurosport 2 Poland (CH-58) ',
        link: '../../../../Channel/Ch58',
        logo: '/eurosports2.webp',
        logo1: '/cycling.webp',
        date: "2023-03-25",
        startTime:"15:15",
        endTime: "16:30",
        startDate: new Date("2023-03-25T15:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T16:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '  Eurosport 2 ES (CH-525) ',
        link: '../../../../Channel/Ch525',
        logo: '/eurosport1-es.webp',
        logo1: '/cycling.webp',
        date: "2023-03-25",
        startTime:"15:15",
        endTime: "16:30",
        startDate: new Date("2023-03-25T15:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T16:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '15:15 Tour of Catalunya | 6th stage | Martorell - Molins de Rei (177 km).',
    },
  
  
  
    // Baseball tabel timezone**********************************************************************************
  
   
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
        {
          name: ' beIN Sports MENA English 3 (CH-46)',
          link: '../../../../Channel/Ch46',
          logo: '/bein-eng3.webp',
          logo1: '/baseball.webp',
          date: "2023-03-25",
          startTime:"18:05",
          endTime: "20:00",
          startDate: new Date("2023-03-25T18:05:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
          },
      ],
      description: '18:05 MLB : New York Yankees vs St. Louis Cardinals.',
    },
    {
      channels: [
       {
       name: ' Sportsnet Ontario (CH-10) ',
       link: '../../../../Channel/Ch10',
       logo: '/sportsnet.webp',
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
   {
    channels: [
     {
     name: '  Bally Sports Arizona (CH-11) ',
     link: '../../../../Channel/Ch11',
     logo: '/bally-sports.webp',
     logo1: '/baseball.webp',
     date: "2023-03-25",
     startTime:"21:05",
     endTime: "23:00",
     startDate: new Date("2023-03-25T21:05:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
     endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
     },
    
   ],
   description: '21:05 MLB : Arizona Diamondbacks vs Chicago Cubs.',
 },
 {
  channels: [
   {
   name: ' NBCS Chicago (CH-12)',
   link: '../../../../Channel/Ch399',
   logo: '/nbcs-chicago.webp',
   logo1: '/baseball.webp',
   date: "2023-03-25",
   startTime:"21:05",
   endTime: "23:00",
   startDate: new Date("2023-03-25T21:05:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
   endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
   },
  
 ],
 description: '21:05 MLB : San Francisco Giants vs Chicago White Sox.',
},
{
  channels: [
   {
   name: '  MLB Network USA (CH-399)  ',
   link: '../../../../Channel/Ch399',
   logo: '/mlb.webp',
   logo1: '/baseball.webp',
   date: "2023-03-25",
   startTime:"21:10",
   endTime: "23:00",
   startDate: new Date("2023-03-25T21:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
   endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
   },
  
 ],
 description: '21:10 MLB : Kansas City Royals vs San Diego Padres.',
},
{
  channels: [
   {
   name: 'NBCS Bay Area (CH-1)',
   link: '../../../../Channel/Ch01',
   logo: '/nbcs-bay-area.webp',
   logo1: '/baseball.webp',
   date: "2023-03-25",
   startTime:"02:05",
   endTime: "03:00",
   startDate: new Date("2023-03-25T02:05:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
   endDate: new Date("2023-03-25T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
   },
  
 ],
 description: '02:05 MLB : Cleveland Guardians vs San Francisco Giants.',
},

{
  channels: [
   {
   name: '  MLB Network USA (CH-399) ',
   link: '../../../../Channel/Ch399',
   logo: '/mlb.webp',
   logo1: '/baseball.webp',
   date: "2023-03-25",
   startTime:"02:05",
   endTime: "03:00",
   startDate: new Date("2023-03-25T02:05:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
   endDate: new Date("2023-03-25T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
   },
  
 ],
 description: '02:05 MLB : Oakland Athletics vs Texas Rangers.',
},
{
  channels: [
   {
   name: '  ACC Network USA (CH-664)  ',
   link: '../../../../Channel/Ch664',
   logo: '/acc-network.webp',
   logo1: '/baseball.webp',
   date: "2023-03-25",
   startTime:"00:00",
   endTime: "02:00",
   startDate: new Date("2023-03-25T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
   endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
   },
  
 ],
 description: '00:00 NCAA College Baseball : Duke vs. North Carolina (Chapel Hill).',
},
{
  channels: [
   {
   name: '  SEC Network USA (CH-385)  ',
   link: '../../../../Channel/Ch385',
   logo: '/sec.webp',
   logo1: '/baseball.webp',
   date: "2023-03-25",
   startTime:"00:00",
   endTime: "02:00",
   startDate: new Date("2023-03-25T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
   endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
   },
  
 ],
 description: '00:00 NCAA College Softball : Kennesaw State vs. Georgia.',
},

// Boxing tabel timezone**********************************************************************************
  
   
{
  name: 'Boxing',
  channels: [
    {
      name: 'Polsat Sport Fight Poland (CH-7) ',
      link: '../../../../Channel/Ch07',
      logo: '/polsat.webp',
      logo1: '/boxing.webp',
      date: "2023-03-25",
      startTime:"19:00",
      endTime: "20:30",
      startDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T20:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    
  ],
  description: '19:00 Gala 2 in Bialystok super middleweight fight: Przemys??aw Gorgo?? vs Damian Kiwior.',
},
{
 
  channels: [
    {
      name: 'Sky PPV Feed (CH-59) ',
      link: '../../../../Channel/Ch59',
      logo: '/Sky-boxing.webp',
      logo1: '/boxing.webp',
      date: "2023-03-25",
      startTime:"20:00",
      endTime: "21:00",
      startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'Sky Sports Action (CH-37) ',
      link: '../../../../Channel/Ch37',
      logo: '/sky-action.webp',
      logo1: '/boxing.webp',
      date: "2023-03-25",
      startTime:"20:00",
      endTime: "21:00",
      startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' CANAL+ Sport 2 Poland (CH-73)',
      link: '../../../../Channel/Ch73',
      logo: '/Canal+2.webp',
      logo1: '/boxing.webp',
      date: "2023-03-25",
      startTime:"20:00",
      endTime: "21:00",
      startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'Match TV Russia (CH-127) ',
      link: '../../../../Channel/Ch127',
      logo: '/matchtv-russia.webp',
      logo1: '/boxing.webp',
      date: "2023-03-25",
      startTime:"20:00",
      endTime: "21:00",
      startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  ],
  description: '20:00 IBF Title Fights : Lawrence Okolie vs David Light.',
},
{
 
  channels: [
    {
      name: 'BT Sport 1 UK (CH-31)  ',
      link: '../../../../Channel/Ch127',
      logo: '/bt1.webp',
      logo1: '/boxing.webp',
      date: "2023-03-25",
      startTime:"21:00",
      endTime: "22:00",
      startDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' RMC Sport 1 France (CH-119) ',
      link: '../../../../Channel/Ch119',
      logo: '/rmc-sports.webp',
      logo1: '/boxing.webp',
      date: "2023-03-25",
      startTime:"21:00",
      endTime: "22:00",
      startDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' MAX Sport 3 Bulgaria (CH-474) ',
      link: '../../../../Channel/Ch474',
      logo: '/max-sport4.webp',
      logo1: '/boxing.webp',
      date: "2023-03-25",
      startTime:"21:00",
      endTime: "22:00",
      startDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: '  Sport Klub 3 Serbia (CH-103)',
      link: '../../../../Channel/Ch103',
      logo: '/sport-klub.webp',
      logo1: '/boxing.webp',
      date: "2023-03-25",
      startTime:"21:00",
      endTime: "22:00",
      startDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  ],
  description: '21:00 BT Sport Fight Night : Nathan Heaney vs Jack Flatley.',
},
{
 
  channels: [
    {
      name: 'DAZN UK (CH-68) ',
      link: '../../../../Channel/Ch68',
      logo: '/dazn.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"01:00",
      endTime: "02:00",
      startDate: new Date("2023-03-26T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
   
  ],
  description: '01:00 Fight Night : Jose Zepeda vs Neeraj Goyat.',
},
{
 
  channels: [
    {
      name: 'Combate Brasil (CH-89) ',
      link: '../../../../Channel/Ch89',
      logo: '/combate-brasil.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"01:00",
      endTime: "02:00",
      startDate: new Date("2023-03-26T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
   
  ],
  description: '01:00 WGP 68: All-Star Gp Finals.',
},
{
 
  channels: [
    {
      name: 'ESPN USA (CH-44)  ',
      link: '../../../../Channel/Ch44',
      logo: '/espn.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"03:00",
      endTime: "04:00",
      startDate: new Date("2023-03-26T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'Sky Sports Action (CH-37) ',
      link: '../../../../Channel/Ch37',
      logo: '/sky-action.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"03:00",
      endTime: "04:00",
      startDate: new Date("2023-03-26T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' TSN3 (CH-113) ',
      link: '../../../../Channel/Ch113',
      logo: '/tsn.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"03:00",
      endTime: "04:00",
      startDate: new Date("2023-03-26T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'beIN Sports 1 France (CH-116) ',
      link: '../../../../Channel/Ch116',
      logo: '/bein1-french.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"03:00",
      endTime: "04:00",
      startDate: new Date("2023-03-26T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'TVP Sport Poland (CH-128)  ',
      link: '../../../../Channel/Ch128',
      logo: '/tvp.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"03:00",
      endTime: "04:00",
      startDate: new Date("2023-03-26T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'Sky Sports Main Event (CH-38)',
      link: '../../../../Channel/Ch38',
      logo: '/sky-mainevent.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"03:00",
      endTime: "04:00",
      startDate: new Date("2023-03-26T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'Combate Brasil (CH-89) ',
      link: '../../../../Channel/Ch89',
      logo: '/combate-brasil.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"03:00",
      endTime: "04:00",
      startDate: new Date("2023-03-26T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
   
  ],
  description: '03:00 Boxing Super lightweight : Jose Carlos Ramirez vs Richard Commey .',
},
{
 
  channels: [

    {
      name: 'Sky PPV Feed (CH-69)',
      link: '../../../../Channel/Ch69',
      logo: '/Sky-boxing.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"04:00",
      endTime: "05:00",
      startDate: new Date("2023-03-26T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'Polsat Sport Poland (CH-47)',
      link: '../../../../Channel/Ch47',
      logo: '/polsat.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"04:00",
      endTime: "05:00",
      startDate: new Date("2023-03-26T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' RMC Sport 1 France (CH-119) ',
      link: '../../../../Channel/Ch119',
      logo: '/rmc-sports.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"04:00",
      endTime: "05:00",
      startDate: new Date("2023-03-26T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' SuperSport Action (CH-420) ',
      link: '../../../../Channel/Ch420',
      logo: '/suppersports.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"04:00",
      endTime: "05:00",
      startDate: new Date("2023-03-26T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' ESPN2 SUR (CH-150) ',
      link: '../../../../Channel/Ch150',
      logo: '/espn2.webp',
      logo1: '/boxing.webp',
      date: "2023-03-26",
      startTime:"04:00",
      endTime: "05:00",
      startDate: new Date("2023-03-26T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-26T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  ],
  description: '04:00 Boxing Super middleweight : David Benavidez vs Caleb Plant Showtime.',
},




// Darts tabel timezone**********************************************************************************
  
   
{
  name: 'Darts',
  channels: [
    {
      name: 'Channel 5 UK (CH-355)  ',
      link: '../../../../Channel/Ch355',
      logo: '/channel5.webp',
      logo1: '/darts.webp',
      date: "2023-03-25",
      startTime:"13:00",
      endTime: "14:00",
      startDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'SPORT1 Germany (CH-641) ',
      link: '../../../../Channel/Ch641',
      logo: '/sports1.webp',
      logo1: '/darts.webp',
      date: "2023-03-25",
      startTime:"13:00",
      endTime: "14:00",
      startDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'DAZN2 DE (CH-427) ',
      link: '../../../../Channel/Ch427',
      logo: '/dazn.webp',
      logo1: '/darts.webp',
      date: "2023-03-25",
      startTime:"13:00",
      endTime: "14:00",
      startDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },   
  ],
  description: '13:00 European Darts Open - Day 2 Session 1.',
},
{
  
  channels: [
    {
      name: 'Viaplay Xtra UK (CH-597)  ',
      link: '../../../../Channel/Ch597',
      logo: '/viaplay-xtra.webp',
      logo1: '/darts.webp',
      date: "2023-03-25",
      startTime:"20:40",
      endTime: "22:00",
      startDate: new Date("2023-03-25T20:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'SPORT1 Germany (CH-641) ',
      link: '../../../../Channel/Ch641',
      logo: '/sports1.webp',
      logo1: '/darts.webp',
      date: "2023-03-25",
      startTime:"20:40",
      endTime: "22:00",
      startDate: new Date("2023-03-25T20:40:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
       
  ],
  description: '19:00 European Darts Open - Day 2 Session 2.',
},


  // Futsal tabel timezone**********************************************************************************
  
   
    {
      name: 'Futsal',
      channels: [
        {
          name: 'BT Sport 3 UK (CH-33)',
          link: '../../../../Channel/Ch33',
          logo: '/bt3.webp',
          logo1: '/futsal.webp',
          date: "2023-03-25",
          startTime:"11:15",
          endTime: "12:30",
          startDate: new Date("2023-03-25T11:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '11:15 The FA National Futsal Series : Birmingham WLV Women vs London Helvecia Futsal Club Ladies.',
    },
    {
      
      channels: [
        {
          name: 'BT Sport 5 UK (CH-29)',
          link: '../../../../Channel/Ch29',
          logo: '/bt3.webp',
          logo1: '/futsal.webp',
          date: "2023-03-25",
          startTime:"13:30",
          endTime: "14:30",
          startDate: new Date("2023-03-25T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T14:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '13:30 The FA National Futsal Series : Bolton Futsal Club Women vs Bloomsbury Futsal Women.',
    },
    {
      
      channels: [
        {
          name: 'Sport TV2 Portugal (CH-74)',
          link: '../../../../Channel/Ch74',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/futsal.webp',
          date: "2023-03-25",
          startTime:"18:00",
          endTime: "19:00",
          startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '18:00 Liga SportZone : Caxinas Poca Barca vs Benfica.',
    },
    {
      
      channels: [
        {
          name: 'Canal 11 Portugal (CH-540)',
          link: '../../../../Channel/Ch540',
          logo: '/canal+.webp',
          logo1: '/futsal.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "21:00",
          startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '20:00 Liga SportZone : Lombos vs Futsal Azemeis.',
    },
  
  // Horse Racing tabel timezone**********************************************************************************
  
  
    {
      name: 'Horse Racing',
      channels: [
        {
          name: ' SuperSport Variety 3 (CH-418) ',
          link: '../../../../Channel/Ch418',
          logo: '/suppersports.webp',
          logo1: '/horse-racing.webp',
          date: "2023-03-25",
          startTime:"14:00",
          endTime: "16:00",
          startDate: new Date("2023-03-25T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '12:00 Dubai World Cup - 23.',
    },  
    {
     
      channels: [
        {
          name: ' FOX Sports 2 USA (CH-758) ',
          link: '../../../../Channel/Ch758',
          logo: '/fox-sports.webp',
          logo1: '/horse-racing.webp',
          date: "2023-03-25",
          startTime:"12:00",
          endTime: "13:00",
          startDate: new Date("2023-03-25T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '12:00 Dubai World Cup - 23.',
    }, 
    {
     
      channels: [
        {
          name: ' Racing TV UK (CH-555)',
          link: '../../../../Channel/Ch555',
          logo: '/racinguk.webp',
          logo1: '/horse-racing.webp',
          date: "2023-03-25",
          startTime:"13:00",
          endTime: "14:00",
          startDate: new Date("2023-03-25T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '13:45 Live Racing from Kelso, Newbury and Curragh.',
    }, 
    {
     
      channels: [
        {
          name: ' Sky Sports Racing UK (CH-554)',
          link: '../../../../Channel/Ch554',
          logo: '/sky-racing.webp',
          logo1: '/horse-racing.webp',
          date: "2023-03-25",
          startTime:"14:00",
          endTime: "15:00",
          startDate: new Date("2023-03-25T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '14:00 Live racing from around the UK.',
    }, 
    {
     
      channels: [
        {
          name: '  ITV 4 UK (CH-353)',
          link: '../../../../Channel/Ch353',
          logo: '/itv4.webp',
          logo1: '/horse-racing.webp',
          date: "2023-03-25",
          startTime:"14:10",
          endTime: "15:10",
          startDate: new Date("2023-03-25T14:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T15:10:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '14:10 Live Racing from Kelso and Newbury.',
    }, 
    {
     
      channels: [
        {
          name: '  UAE ITV 4 UK (CH-353)',
          link: '../../../../Channel/Ch353',
          logo: '/itv4.webp',
          logo1: '/horse-racing.webp',
          date: "2023-03-25",
          startTime:"17:00",
          endTime: "18:00",
          startDate: new Date("2023-03-25T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '17:00 Live Horse racing from Meydan Raceourse,.',
    }, 

  // Ice Hockey tabel timezone**********************************************************************************
  
  /*
  
    {
      name: 'Ice Hockey',
      channels: [
        {
          name: ' Viaplay Sports 1 UK (CH-451)   ',
          link: '../../../../Channel/Ch451',
          logo: '/viaplay-xtra.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"01:00",
          endTime: "02:30",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '   ESPN USA (CH-44)   ',
          link: '../../../../Channel/Ch44',
          logo: '/espn.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"01:00",
          endTime: "02:30",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sport Klub 3 Serbia (CH-103)  ',
          link: '../../../../Channel/Ch103',
          logo: '/sport-klub.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"01:00",
          endTime: "02:30",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      
      ],
      description: '23:30 NHL : Philadelphia Flyers vs Minnesota Wild.',
    }, 
    {
     
      channels: [
        {
          name: 'NBCS Chicago (CH-15) ',
          link: '../../../../Channel/Ch15',
          logo: '/nbcs-chicago.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
            
      ],
      description: '00:00 NHL : Washington Capitals vs Chicago Blackhawks.',
    }, 
    {
     
      channels: [
        {
          name: 'ESPN+ USA (CH-16)  ',
          link: '../../../../Channel/Ch16',
          logo: '/espn.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' TSN2 (CH-112) ',
          link: '../../../../Channel/Ch112',
          logo: '/tsn.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },   
      ],
      description: '00:00 NHL : Boston Bruins vs Montreal Canadiens.',
    }, 

    {
      
      channels: [
        {
          name: ' Viaplay Sports 2 UK (CH-550) ',
          link: '../../../../Channel/Ch550',
          logo: '/viaplay-xtra.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
          },
          {
          name: ' ESPN 2 NL (CH-386) ',
          link: '../../../../Channel/Ch336',
          logo: '/espn-nl.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
          },
        {
          name: '  Sport TV6 Portugal (CH-291) ',
          link: '../../../../Channel/Ch291',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '  Sky Sport Mix DE (CH-557) ',
          link: '../../../../Channel/Ch557',
          logo: '/sky-mix.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
          },
        {
          name: ' Sky Sport Top Event DE (CH-556)',
          link: '../../../../Channel/Ch556',
          logo: '/sky-mainevent.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sport Klub HD Serbia (CH-453) ',
          link: '../../../../Channel/Ch453',
          logo: '/sport-klub.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '00:00 NHL : Carolina Hurricanes vs New York Rangers.',
    }, 
    {
     
      channels: [
        {
          name: 'Bally Sports Sun (CH-3)  ',
          link: '../../../../Channel/Ch03',
          logo: '/bally-sports.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: 'TSN5 (CH-115) ',
          link: '../../../../Channel/Ch15',
          logo: '/tsn.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },    
      ],
      description: '00:00 NHL : Ottawa Senators vs Tampa Bay Lightning.',
    }, 
    {
     
      channels: [
        {
          name: 'Sportsnet Ontario (CH-4) ',
          link: '../../../../Channel/Ch04',
          logo: '/sportsnet.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
            
      ],
      description: '00:00 NHL : Florida Panthers vs Toronto Maple Leafs.',
    }, 
    {
     
      channels: [
        {
          name: 'Bally Sports Midwest (CH-5) ',
          link: '../../../../Channel/Ch05',
          logo: '/bally-sports.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
            
      ],
      description: '00:00 NHL : Detroit Red Wings vs St. Louis Blues.',
    }, 
   
    {
     
      channels: [
        {
          name: ' Sportsnet West (CH-7) ',
          link: '../../../../Channel/Ch07',
          logo: '/sportsnet.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"02:00",
          endTime: "03:00",
          startDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
            
      ],
      description: '02:00 NHL : Calgary Flames vs Vegas Golden Knights.',
    }, 
    {
     
      channels: [
        {
          name: ' ESPN USA (CH-44)  ',
          link: '../../../../Channel/Ch44',
          logo: '/espn.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"02:00",
          endTime: "03:00",
          startDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sportsnet Ontario (CH-8)',
          link: '../../../../Channel/Ch08',
          logo: '/sportsnet.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"02:00",
          endTime: "03:00",
          startDate: new Date("2023-03-25T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },    
      ],
      description: '02:00 NHL : Dallas Stars vs Pittsburgh Penguins.',
    }, 
    {
     
      channels: [
        {
          name: 'NBCS California (CH-17) ',
          link: '../../../../Channel/Ch17',
          logo: '/nbcs-california.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"03:00",
          endTime: "04:00",
          startDate: new Date("2023-03-25T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
            
      ],
      description: '03:00 NHL : Vancouver Canucks vs San Jose Sharks.',
    }, 
    {
     
      channels: [
        {
          name: 'Bally Sports West (CH-18) ',
          link: '../../../../Channel/Ch18',
          logo: '/bally-sports.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"03:00",
          endTime: "04:00",
          startDate: new Date("2023-03-25T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' TSN3 (CH-113)',
          link: '../../../../Channel/Ch113',
          logo: '/tsn.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"03:00",
          endTime: "04:00",
          startDate: new Date("2023-03-25T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sport 5 Star Israel (CH-147) ',
          link: '../../../../Channel/Ch147',
          logo: '/sport5-israel.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-03-25",
          startTime:"03:00",
          endTime: "04:00",
          startDate: new Date("2023-03-25T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },   
      ],
      description: '03:00 NHL : Anaheim Ducks vs Winnipeg Jets.',
    }, 
*/
  // Ice Skating tabel timezone**********************************************************************************

  
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
  


  // WaterPolo tabel timezone**********************************************************************************

  
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





  
  // Handball tabel timezone**********************************************************************************

  
    {
      name: 'Handball',
      channels: [
        {
          name: ' Sky Sport Top Event DE (CH-556)',
          link: '../../../../Channel/Ch556',
          logo: '/sky-mainevent.webp',
          logo1: '/handball.webp',
          date: "2023-03-25",
          startTime:"17:30",
          endTime: "18:300",
          startDate: new Date("2023-03-25T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sky Sport Mix DE (CH-557)',
          link: '../../../../Channel/Ch557',
          logo: '/sky-mix.webp',
          logo1: '/handball.webp',
          date: "2023-03-25",
          startTime:"17:30",
          endTime: "18:300",
          startDate: new Date("2023-03-25T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '17:30 Handball-Bundesliga : Minden vs Goppingen.',
    }, 
  
 // Volleyball tabel timezone**********************************************************************************



    {
      name: 'Volleyball',
      channels: [
        {
          name: 'Canal Portugal (CH-718)',
          link: '../../../../Channel/Ch718',
          logo: '/canal.webp',
          logo1: '/volleyball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "21:00",
          startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '20:00 Divisao Women : AJM/FC Porto W vs Ponta Delgada W Porto.',
    }, 
    {
      
      channels: [
        {
          name: 'beIN Sports 2 France HD (CH-117)',
          link: '../../../../Channel/Ch117',
          logo: '/bein2-french.webp',
          logo1: '/volleyball.webp',
          date: "2023-03-25",
          startTime:"20:00",
          endTime: "21:00",
          startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '20:00 France Ligue A : St. Nazaire VB vs. Narbonne Volley.',
    }, 
    {
      
      channels: [
        {
          name: ' Rai Sport+ HD (CH-153)',
          link: '../../../../Channel/Ch153',
          logo: '/rai-sports.webp',
          logo1: '/volleyball.webp',
          date: "2023-03-25",
          startTime:"20:30",
          endTime: "21:00",
          startDate: new Date("2023-03-25T20:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '20:30 Italy Serie A1 Women : Cuneo Granda Volley vs. Pallavolo Scandicci.',
    }, 
    {
      
      channels: [
        {
          name: ' Polsat Sport Poland (CH-47)',
          link: '../../../../Channel/Ch47',
          logo: '/polsat.webp',
          logo1: '/volleyball.webp',
          date: "2023-03-25",
          startTime:"20:30",
          endTime: "21:00",
          startDate: new Date("2023-03-25T20:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '20:30 PlusLiga : Cuprum vs Politechnika Lublin.',
    }, 
    {
      
      channels: [
        {
          name: ' Sportv2 Brasil (CH-79)',
          link: '../../../../Channel/Ch79',
          logo: '/sportstv.webp',
          logo1: '/volleyball.webp',
          date: "2023-03-25",
          startTime:"20:30",
          endTime: "21:00",
          startDate: new Date("2023-03-25T20:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '20:30 Superliga B De V??lei Feminino : Blu V??lei vs Taubat??.',
    }, 
  

// Rugby tabel timezone**********************************************************************************



{
  name: 'Rugby',
  channels: [
    {
      name: 'Sky Sports Arena UK (CH-36)',
      link: '../../../../Channel/Ch36',
      logo: '/sky-arena.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"10:00",
      endTime: "12:00",
      startDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' Sky Sports Main Event (CH-38)',
      link: '../../../../Channel/Ch38',
      logo: '/sky-mainevent.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"10:00",
      endTime: "12:00",
      startDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' SPORT1+ Germany (CH-640)',
      link: '../../../../Channel/Ch640',
      logo: '/sky-sport.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"10:00",
      endTime: "12:00",
      startDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  ],
  description: '10:00 National Rugby League : Parramatta Eels vs Penrith Panthers.',
}, 
{
 
  channels: [
    {
      name: 'Sky Sports Arena UK (CH-36)',
      link: '../../../../Channel/Ch36',
      logo: '/sky-arena.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"21:00",
      endTime: "23:00",
      startDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  
  ],
  description: '21:00 Super League Rugby : Huddersfield vs St Helens.',
}, 
{
 
  channels: [
    {
      name: 'SuperSport Rugby (CH-421)',
      link: '../../../../Channel/Ch421',
      logo: '/suppersports.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"17:45",
      endTime: "19:00",
      startDate: new Date("2023-03-25T17:45:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  
  ],
  description: '17:45 Varsity Shield 23: TUT vs CPUT.',
}, 
{
 
  channels: [
    {
      name: 'Canal+ Sport France (CH-122) ',
      link: '../../../../Channel/Ch122',
      logo: '/canal+.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"21:00",
      endTime: "23:00",
      startDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'Sportsnet World (CH-410)',
      link: '../../../../Channel/Ch410',
      logo: '/sportsnet.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"21:00",
      endTime: "23:00",
      startDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  ],
  description: '21:00 Pro D2 : Provence Rugby vs Colomiers.',
}, 
  /*
  
    {
      name: 'Winter Sports',
      channels: [
        {
          name: 'TSN1 (CH-111)',
          link: '../../../../Channel/Ch111',
          logo: '/tsn.webp',
          logo1: '/winter-sports.webp',
        },
       
      ],
      description: '09:00 2023 World Womens Curling Championship : Canada vs. Italy.',
    }, 
    {
      
      channels: [
        {
          name: 'Eurosport 2 UK (CH-42) ',
          link: '../../../../Channel/Ch42',
          logo: '/eurosports2.webp',
          logo1: '/winter-sports.webp',
        },
        {
          name: ' Eurosport 2 Poland (CH-58)',
          link: '../../../../Channel/Ch58',
          logo: '/euro2.webp',
          logo1: '/winter-sports.webp',
        },
        {
          name: 'Eurosport 2 ES (CH-525)',
          link: '../../../../Channel/Ch525',
          logo: '/eurosport1-es.webp',
          logo1: '/winter-sports.webp',
        },
      ],
      description: '14:00 World Championhips | E2 Coverage | Women, Round Robin - Sandviken.',
    }, 
    {
      
      channels: [
        {
          name: 'TSN1 (CH-111)  ',
          link: '../../../../Channel/Ch111',
          logo: '/tsn.webp',
          logo1: '/winter-sports.webp',
        },
        {
          name: 'TSN3 (CH-113) ',
          link: '../../../../Channel/Ch113',
          logo: '/tsn.webp',
          logo1: '/winter-sports.webp',
        },
      ],
      description: '19:00 2023 World Womens Curling Championship : Scotland vs. Canada.',
    }, 
  */
  
  
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

<link rel="canonical" href="https://uwatch4free.vercel.app/" />

  </Head>



<div className="bg-gray-900 ">
<Translate />
<div className="flex mx-10  px-10 text-blue-600 text-center ">
    <a href="/">
               <button className="close-button  mx-10" >
               <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 " >  Close</h2>  
          </button></a>
          </div>
    <div>

    <h1 className="text-center font-bold text-white text-2xl py-3 px-4">Friday 25th March 2023 - Schedule Time UK GMT+1
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
          <div className="text-2xl font-bold text-center leading-none tracking-tight text-blue-600">
           
          {sport.description}
          </div>
          <div className="text-2xl mt-5 font-bold text-center leading-none tracking-tight text-blue-600">
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
