import React, { useRef, useState } from 'react'

const Signup = () => {
    //let [terms, setTerms] = useState(false);
    let buttonEl = useRef(null);
    let passwordEl = useRef(null);
    let acceptTermsHandler = (event) => {
        //setTerms(event.target.checked)
        buttonEl.current.disabled = !event.target.checked
    }
    let passwordHandler = (event) => {
        passwordEl.current.type = "text";
    }
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-4">
                    {/*   <pre>{JSON.stringify(terms)}</pre> */}
                    <div className="card">
                        <div className="card-header">
                            <h5>Registration Page</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Mobile" />
                                </div>
                                <div className="form-group">
                                    <input ref={passwordEl} type="password" className="form-control" placeholder="password" />
                                    <i className="fa fa-eye" onClick={passwordHandler}></i>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" onChange={acceptTermsHandler} />
                                    <label htmlFor="" className='form-check-label'>
                                        Accept Terms and Conditions
                                    </label>
                                </div>
                                <div>
                                    <input ref={buttonEl} type="submit" value="Singup" className="btn btn-success" disabled />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
