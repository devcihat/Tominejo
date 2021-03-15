import React, {useState} from 'react'

function Tomi() {

    const [hour,setHour] = useState(0.000)
    const [day,setDay] = useState(0.000)
    const [onday,setonDay] = useState(0.00)
  
    const onChange = (e) => {
      let inputVal = e.target.value
      let dayVal = inputVal * 0.1
      let hourVal = inputVal * 0.002
      let ondayVal = inputVal * 0.0005
      setDay(dayVal)
      setHour(hourVal)
      setonDay(ondayVal)
    }

    return (
       <>
          <div id="staking" class="col-lg-12 col-md-12 mx-auto card-width">
          <div className="card card-stake card-height card-stake first-card">
            <div className="d-flex align-items-center mb-4 icon-container balance">
              <div className="card-header-image position-relative pb-0">
                <div className="trx-icon stake-icon-content">
                  <img src="./images/tominejo.png" className="stake-icon" />
                </div>
                <span className="card-header-text  bg-transparent font-weight-bold text-white">
                  BUY TOMI
                </span>
              </div>
            </div>
            <form method="POST" className="card-body text-center">
              <p className="title-text font-weight-bold">
                BUY TOMO WİTH TRX
              </p>
              <fieldset className="form-group w-100">
                <div className="d-flex w-100">
                  <label className="mb-0 text-small font-weight-bold text-uppercase">
                    ENTER THE AMOUNT
                  </label>
                  <span className="ml-auto text-small mb-1">Min: 100 TRX</span>
                </div>
                <div className="content content-bordered input-group">
                  <input
                    onChange={(event) => onChange(event)}
                    type="number"
                    placeholder="100"
                    className="form-control input-amount fz-18"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent border-0 text p-0 mb-0 font-weight-bold fz-18">
                      TRX
                    </span>
                  </div>
                </div>
              </fieldset>
              <h4 className="text profitability">Profitability:</h4>
              <div className="w-100">
                <div className="content content-bordered py-2 mb-2 row no-gutters align-items-center">
                  <div className="col col-auto">
                    <span className="input-group-text bg-transparent border-0 p-0 mb-0 font-weight-bold fz-18">
                      You will get:
                    </span>
                  </div>
                  <span
                    className="col fz-18 text-right"
                  >
                   {hour} APE
                    <small className="d-block text-cyan"> ≈ $0.00 </small>
                  </span>
                </div>
               
            
              </div>
              <button
                type="button"
                className="btn withdraw-btn-pd stake-btn text-white py-3 px-4 mt-2 mb-3 mb-sm-4 text-uppercase "
              >
                BUY
              </button>
              <a
                href="#"
                className="btn gradient-border withdraw-btn fz-16 mb-3 mt-5 mb-sm-4 fin-stats"
              >
                Financial Statistics
              </a>
            </form>
          </div>
          </div>
       </>
          
    )
}

export default Tomi
