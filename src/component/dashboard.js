import React, { useEffect ,useState} from "react";

export const Dashboard = () => {
      
    const[apiData,setApiData] = useState({});
    const[userId,setUserId] = useState(1);

    const apiResponse = async () => {
        try {
            const response = await fetch(`https://reqres.in/api/users/${userId}`)
            const result = await response.json();
            setApiData(result.data)
            console.log(result)
        } catch (error) {
            alert("Not able to fetch data")
            setApiData({})
            
        }
       
    }
    useEffect(() =>{
        // fetch('https://reqres.in/api/users/1')
        // .then((res) => res.json())
        // .then(result => setApiData(result.data.data)) 
        apiResponse();
    }, [userId])
    

    
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 card m-5">
            <div className="d-flex mt-3">
              <button className="btn btn-primary mx-3" onClick={() => setUserId(1)}  >1</button >
              <button className="btn btn-primary mx-3" onClick={() => setUserId(2)} >2</button >
              <button className="btn btn-primary mx-3" onClick={() => setUserId(3)} >3</button >
              <button className="btn btn-primary mx-3" onClick={() => setUserId(100)} >100</button >
            </div>
            {apiData ? (<div className="mt-3">
              <ul>
                <li>Email : {apiData.email}</li>
                <li>Name :{apiData.first_name} {apiData.last_name}</li>
              </ul>
              <div>
                <img src={apiData.avatar} alt='Not Found'/>
              </div>
            </div>) : (<div style={{height:"200px", textAlign:"center", paddingTop:"100px"}}>Data not available</div>)}
            
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>

    </>
  );
};
