import React from "react";
import { useState } from "react";


function RegistrationForm(){
    const [hideRec,setHiddenRecords] =useState({
        isHide:true
    });

    const [records, setRecords] = useState({
        userName : '',
        Email :'',
        phoneNumber:'',
        addressData:''
    });

    const getMyFormData = (e) =>{    
        debugger;  
      let name=e.target.name;
       let value=e.target.value;
       setRecords({...records,[name]:value})
      
    }

    const submitFormData = (e) => {
        debugger;
       e.preventDefault();
       let isHide=false;
       setHiddenRecords({[isHide]:false})
       console.log(hideRec);
    }

   return (
    <>
    <div className="col-lg-6"> 
    <form>
        <div className="form-group">
            <label htmlFor="userName">FirstName</label>
            <input type="text" name="userName" className="form-control" value={records.userName} id="userName"  onChange={getMyFormData} ></input>
        </div>
        <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" className="form-control" value={records.Email} id="Email"  onChange={getMyFormData}></input>
        </div>
        <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" className="form-control" value={records.phoneNumber} id="phoneNumber"  onChange={getMyFormData}></input>
        </div>
        <div className="form-group">
            <label htmlFor="addressData">Address</label>
            <input type="text" name="addressData" className="form-control" value={records.addressData} id="addressData"  onChange={getMyFormData}></input>
        </div>
        <br>
        </br>
        <div>
            <button className="btn btn-primary" id="mySubmitBtn" onClick={submitFormData}>Submit</button>
            <br></br>
            <div hidden={hideRec.isHide}>
                <span>{records.userName}</span>  <br></br>
                <span>{records.Email}</span>  <br></br>
                <span>{records.phoneNumber}</span>  <br></br>
                <span>{records.addressData}</span>  <br></br>
            </div>            
        </div>
    </form>
    </div>
 
    </>
   )
}

export default RegistrationForm