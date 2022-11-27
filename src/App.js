import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import AccountsTable from "./components/AccountsTable/AccountsTable"
import AddAccount from "./components/AddAccount/AddAccount";
import EditAccount from "./components/EditAccount/EditAccount";
import EditDelAcc from "./components/EditDelAcc/EditDelAcc";

class App extends Component {

    state = {

        accounts: [
           
        ]
    }
    addNewAccountToState = (acc) => {
        this.setState({
            accounts: [...this.state.accounts, acc]
        })
    }

    deleteAccount = (id) => {
        const accountsCopy = [...this.state.accounts];
        const newCopyAccounts = accountsCopy.filter(account => account.id !== id);
        this.setState({ accounts: newCopyAccounts });
    }

    editAccount= (acc)=>{
        const copyStateAcc = [...this.state.accounts];
        let accountPosition = copyStateAcc.map(account => account.id).indexOf(acc.id);
        copyStateAcc[accountPosition] = acc;
        this.setState({accounts: copyStateAcc})

    }
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <AccountsTable accounts={this.state.accounts} />
                </Route>

                <Route path="/add">
                    <AddAccount addNewAccountToState={this.addNewAccountToState} />
                </Route>
                <Switch>
                    <Route path="/edit/:id">
                        <EditDelAcc accounts={this.state.accounts} editAccount={this.editAccount}/>
                    </Route>
                    <Route path="/edit">
                        <EditAccount accounts={this.state.accounts} deleteAccount={this.deleteAccount} />
                    </Route>

                </Switch>

            </BrowserRouter>

        )
    }
}

export default App;