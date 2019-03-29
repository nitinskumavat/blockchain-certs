import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import web3 from "./web3.js";
import "./App.css";
import Navhead from "./components/navbar";
import Forms from "./components/form";
import Getcert from "./components/getcert";
import certcontract from "./config.js";
import Certificate from "./components/certificate";

class App extends Component {
  state = {
    account: "",
    name: "",
    course: "",
    txh: "",
    id: ""
  };
  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    //console.log(certcontract);
    //console.log(accounts);
    console.log("acc", accounts[0]);
    this.setState({ account: accounts[0] });
  }

  //myevent =()=> certcontract.added();
  //myevent=>watch((error,result)=>{
  //  console.log(result);
  //});

  add = data => {
    //const certificates = new this.state.web3.eth.Contract(abi, address);
    //console.log(data.fname, data.course, data.email);
    certcontract.methods.addcert(data.fname, data.course, data.email).send(
      {
        from: this.state.account,
        gas: 500000
      },
      (error, result) => {
        if (error) console.log("error " + error);
        else {
          this.setState({ name: data.fname + " " + data.lname });
          this.setState({ course: data.course + " " + "course" });
          this.setState({ txh: result });
          console.log(result);
          certcontract.methods
            .getid()
            .call({ from: this.state.account }, (error, result) => {
              this.setState({ id: result });
              if (!error) console.log(result);
              else console.log(error);
            });
          //certcontract.events.added({}, (error, ev) => {
          //to use event below 2 lines
          //let key = Object.keys(ev[1].returnValues)[1];
          //console.log(ev[1].returnValues[key]);
          //});
        }
      }
    );
  };

  get = data => {
    //console.log(data.id);
    certcontract.methods
      .getcert(data.id)
      .call({ from: this.state.account }, (error, result) => {
        if (!error) console.log(result);
        else alert("Certificate not found");
      });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Navhead />
          <Route
            path="/"
            exact
            render={() => <Forms addcertificate={this.add} />}
          />
          <Route
            path="/verify"
            render={() => <Getcert getcertificate={this.get} />}
          />
          <Route
            path="/view"
            component={() => (
              <Certificate
                sname={this.state.name}
                course={this.state.course}
                txh={this.state.txh}
                id={this.state.id}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
