export const IplListItems=()=>{
    const  iplTeams=[
     {teamname:"SRH",
         teamplayers:["rahul tripathi","Abhishek sharma","Nithish kumar"],
         won:1,
         logo:"https://www.timesofsports.com/wp-content/uploads/2022/01/SRH-team-logo.png",
         wonyears:[2016],
    },
 {teamname:"CSK",
    teamplayers:["MS.DHONI","ravindhera jadeja","Ruturaj"],
    won:5,
    logo:"https://www.timesofsports.com/wp-content/uploads/2021/12/CSK-Logo.png",
    wonyears:[2010, 2011, 2018, 2021, 2023],
},
{teamname:"MI",
    teamplayers:["Rohith sharnmaH","arvik desai","Hardik Pansya"],
    won:5,
    logo:"https://www.timesofsports.com/wp-content/uploads/2021/12/Mumbai-Indians-logo.png",
    wonyears:[2013, 2015, 2017, 2019, 2020],
},
{teamname:"KKR",
    teamplayers:["Nithish rana","Manish pandey","k.s.Bharath"],
    won:3,
    logo:"https://www.timesofsports.com/wp-content/uploads/2021/12/KKR-Logo.png",
    wonyears:[2012, 2014, 2024],
},
 ];
//  return(
//      <div>
//          {iplteam.map((eachteam)=>{
//              return(
//                  <h1>{eachteam.teamname}</h1>
//              )
 
//          })}
//      </div>
//  )
function filterdata(iplTeams){
const newteams=iplTeams.filter((eachTeam)=>eachTeam.won>=2)
return newteams
}
function matchescount(iplTeams){
    const count=iplTeams.reduce((acc,eachTeam)=>{
        return acc+eachTeam.won;},0);
    return count;
    }
return(
    <div>
        <h1>List of Ipl Teams</h1>
        <h3>No of matches : {matchescount(iplTeams)}</h3>

        {filterdata(iplTeams).map((eachTeam)=>{
            return (<>
            <hr></hr>
                <h3>{eachTeam.teamname}</h3>
                <img src={eachTeam.logo} alt="" width={150} height={150}/>
                {eachTeam.teamplayers.map((eachpalyer)=>{
                    return(
                    <><li>{eachpalyer}</li></>
                )
        })}
                <p>won:{eachTeam.won} Matches</p>
                Wonyears:
                {eachTeam.wonyears.map((years)=>{
                    return(
                    <>{years},</>
                )
        })}
                </>
                )
        })}
</div>
    
)
 }