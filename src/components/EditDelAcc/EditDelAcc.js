import React, { Component } from "react";
import { withRouter } from "react-router-dom"

class EditDelAcc extends Component {


    state = {
        account: {
            id: "",
            name: "",
            lastname: "",
            phone: "",
            email: ""
        }
    }

    componentDidMount() {

        const editedAccount = this.props.accounts.filter(acc => acc.id == this.props.match.params.id)[0]; //[0] - da se izuce account //prolazimo kroz svaki accounts filter metodom poslat iz App komp. 
        this.setState({ account: editedAccount });     // setujem novi state sa novim podacima            //i pokrecemo funkciju za svaki acc i zelim da vratim ako je id od acc jednak id-u iz url adrese na koji je kliknut.
    }
    changeAccount = (event)=>{
        const copyOfAccount = {...this.state.account}; // uzimam kopiju podataka iz stejta u trenutnom stanju
        copyOfAccount[event.target.id] = event.target.value; // menjam podatke na input koji sam kliknuo
        this.setState({account: copyOfAccount}); // setujem novo stanje

    }
    editAccount = ()=>{
        this.props.editAccount(this.state.account); // slanje novog accounta u app komponentu
        this.props.history.push("/"); // vraca nakon klika na button edit na pocetnu stranicu
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">Edit Account</h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" onChange={this.changeAccount} id="name" placeholder="name" className="form-control" value={this.state.account.name} /><br />
                                <input type="text" onChange={this.changeAccount} id="lastname" placeholder="lastname" className="form-control" value={this.state.account.lastname} /><br />
                                <input type="text" onChange={this.changeAccount} id="phone" placeholder="phone" className="form-control" value={this.state.account.phone} /><br />
                                <input type="email" onChange={this.changeAccount} id="email" placeholder="email" className="form-control" value={this.state.account.email} /><br />
                                <button onClick={this.editAccount}  className="btn btn-warning form-control">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditDelAcc);