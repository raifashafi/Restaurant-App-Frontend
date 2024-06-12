import React, { useState } from 'react'

const Add = () => {
    const [data,setData]=useState([
        {
            "orderid":"",
            "item":"",
            "time":""
        }
    ])
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">orderid</label>
                        <input type="text" className="form-control" name='orderid' value={data.orderid} onChange={inputHandler}/>
                    </div><br></br>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">item</label>
                        <input type="text" className="form-control" name='item' value={data.item} onChange={inputHandler} />
                    </div><br></br>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-labl">time</label>
                        <input type="text" className="form-control" name='time' value={data.time} onChange={inputHandler} />
                    </div><br></br>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <button className="btn btn-success" onClick={readValue}>submit</button>
                    </div>
                  </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Add
