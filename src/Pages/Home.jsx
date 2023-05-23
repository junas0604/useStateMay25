import React from 'react'
import{useEffect,useState} from 'react'
import axios from 'axios'


function Home(){
const [Fname,setFname] = useState([]);
    useEffect(()=>{axios.get('https://api.publicapis.org/entries')
.then(response =>{
    console.log(response.data.entries);
    setFname(response.data.entries);
});

},[])


    return(
       <div>
        <h1>This is Homepage</h1>
       
       </div>
    );
}
export default Home;