import React, { Component } from 'react'
import jsTPS from '../../jstps/jsTPS'
import Num from './Num'
import AddToNum_Transaction from './AddToNum_Transaction'

//import java.io.PrintStream;
//import java.util.Scanner;
//import jtps.jTPS;
//import jtps.jTPS_Transaction;

/**
 * This driver demonstrates simple usage of the jTPS API.
 * 
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
export class TPSTester extends Component {
    constructor(){
        super();
        // HERE'S OUR TRANSACTION PROCESSING SYSTEM
        this.tps = new jsTPS();
        
        // HERE'S THE DATA WE'RE MANIPULATING IN THIS DEMO
        this.num = new Num();
    }

    state = {
        input: '',
        disabled: false,
        extraInput: ''
    }

    onChange = (e) => {
        this.setState({input: e.target.value});
    }

    onClick = (e) => {
        if (this.state.input === '1'){
            this.setState({disabled: true});
        }
        else if (this.state.input === '2'){
            this.tps.undoTransaction();
        }
        else if (this.state.input === '3'){
            this.tps.doTransaction();
        }
        else if (this.state.input === '4'){
            this.tps.clearAllTransactions();
        }
        else if (this.state.input === '5'){
            this.tps.clearAllTransactions();
            this.num.setNum(0);
        }
        else if (this.state.input === 'Q'){
            this.props.quit();
        }
        this.setState({input: ''});
    }

    onChangeExtra = (e) => {
        this.setState({extraInput: e.target.value});
    }

    onClickExtra = (e) => {
        var amountToAdd = parseInt(this.state.extraInput, 10);
        var transaction = new AddToNum_Transaction(this.num, amountToAdd);
        this.tps.addTransaction(transaction);
        this.setState({extraInput: ''});
        this.setState({disabled: false});
    }

    getDisabled = () => {
        if (this.state.disabled === true) 
            return true;
        else 
            return false;
    }

    /**
     * This runs our demo program. Note that it presents a 
     * menu, retrieves the input, and executes the selected
     * behavior.
     * 
     * @param args Not used in this demo.
     */
    render() {
        return (
            <div>
                <div id="display the current tps">
                    <p>Current jTPS: </p>
                    <p>{this.tps.toString()}</p>
                </div>
                <div id="display num">
                    <p>Num is {this.num.getNum()}</p>
                </div>
                <br></br>
                <div>
                    <p>ENTER A SELECTION</p>
                    <ul>
                        <li>1. Add a Transaction</li>
                        <li>2. Undo a Transaction</li>
                        <li>3. Redo a Transaction</li>
                        <li>4. Clear All Transactions</li>
                        <li>5. Reset Num and Transactions</li>
                        <li>Q. Quit</li>
                    </ul>
                    <input id="user input"
                           type="text"
                           value={this.state.input}
                           disabled={this.getDisabled()}
                           onChange={this.onChange}></input>
                    <button onClick={this.onClick}
                            disabled={this.getDisabled()}>Submit</button>
                    <div>
                        <p>Enter an amount to add:</p>
                        <input id="user input"
                            type="text"
                            value={this.state.extraInput}
                            disabled={!this.getDisabled()}
                            onChange={this.onChangeExtra}></input>
                        <button onClick={this.onClickExtra}
                                disabled={!this.getDisabled()}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TPSTester