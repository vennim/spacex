/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import data from './makedata';
import MyForm from './queryform';
import Launches from './launches';



export default function App() {
  const istate=JSON.stringify({
  query: 
    `launchesbyfilter(filter:$query) {
      mission_name,
      launch_year,
      rocket{rocket_name},
      launch_date_utc,
      links {video_link}
    }
}
  `});
    const [state, setState] = useState({"data":data})
    const [query, setQuery] = useState("launch_year=2020");
      //"launches {mission_name,launch_year,rocket{rocket_name},launch_date_utc,links {video_link}}")
      useEffect(() => {
        const filterquery= `query ($filter:String!) {
        launchesbyfilter(filter:$filter) {
      
         
           
           mission_name,
           launch_year,
           rocket {rocket_name},
           launch_date_utc,
           
           links {video_link}
         }
       }`;
       console.log(filterquery);
        fetch(
          "http://localhost:8000/graphql",
           {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            
            body: JSON.stringify(
            {query: filterquery,
            variables: {filter:query}}
              
                
                
          )
            
            
        }
        ).then(res => res.json())
        .then(json => setState({"data":json.data.launchesbyfilter}));
        
      }, [query]);

      function searchQuery(form) {

        var newquery="";
        if (form.mission_name==null) form.mission_name="";
        if (form.rocket_name==null) form.rocket_name="";
        if (form.launch_year==null) form.launch_year="";
        newquery="mission_name="+form.mission_name+"&rocket_name="+form.rocket_name+"&launch_year="+form.launch_year;
        console.log(encodeURI(newquery));
        
        setQuery(encodeURI(newquery)) ;
      };
      
    
  return (
    <div>
      <MyForm func={searchQuery}/>
     <Launches props={state}/>
     </div>)
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
