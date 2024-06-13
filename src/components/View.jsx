import React, { useState } from 'react'

const View = () => {
  const [data, setData] = useState([
    {

      "orderid": "1033",
      "item": "noodles",
      "time": "11.25"

    }
  ])
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">orderid</th>
                  <th scope="col">item</th>
                  <th scope="col">price</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(
                    (value, index) => {
                      return <tr>
                        <th scope="row">{index}</th>
                        <td>{value.orderid}</td>
                        <td>{value.item}</td>
                        <td>{value.price}</td>
                      </tr>
                    }
                  )
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View