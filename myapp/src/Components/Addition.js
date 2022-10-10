import { Component } from "react";

class Addition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: null,
            secondNumber: null
        };
    }
    //Function to be called when user makes a change
    myChangeHandler = (event) => {
        debugger;
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val }); //name becomes a computed property.
        // so it will not set "nam" instead will see the value of nam then set stuff,
    }
    

    render() {
        return (
            <div>
                <div className="row"><div className="col">
                    <form onSubmit={this.mySubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="firstNumber"><b>Enter First Number:</b></label>
                            <input
                                type="number"
                                name="firstNumber"
                                id="firstNumber"
                                className="form-control"
                                onChange={this.myChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="secondNumber"><b>Enter Second Number:</b></label>
                            <input
                                type="number"
                                name="secondNumber"
                                id="secondNumber"
                                className="form-control"
                                onChange={this.myChangeHandler} />
                        </div>
                        
                    </form>
                </div>
                </div>

                <div className="row">
                    <div className="col">
                        {/*Not the best way to do it, but works for small compute operations*/}
                        <h3>Your Addition Result (from ReactJS) is: {Number(this.state.firstNumber) + Number(this.state.secondNumber)} </h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default Addition;