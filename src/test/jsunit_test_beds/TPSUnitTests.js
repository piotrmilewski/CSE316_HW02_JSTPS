import React, { Component } from 'react'
import AddToNum_Transaction from '../demo/AddToNum_Transaction'
import AndMask_Transaction from '../demo/AndMask_Transaction'
import Num from '../demo/Num'
import jsTPS from '../../jstps/jsTPS'

class TPSUnitTests extends Component {
    render() {
        return (
            <div>
                <br></br>
                <button onClick={this.props.quit}>Back To Menu</button>
                {this.testAdd()}
                {this.testAndMask()}
                {this.testUndo()}
                {this.testRedo()}
                {this.testClear()}
            </div>
        )
    }
    assertEquals(val1, val2){
        if (val1 === val2)
            return <p style={greenText}>true</p>;
        else
            return <p style={redText}>false</p>;
    }

    assertFalse(val1){
        if (val1)
            return <p style={redText}>true</p>;
        else
            return <p style={greenText}>false</p>;
    }

    assertTrue(val1){
        if (val1)
            return <p style={greenText}>true</p>;
        else
            return <p style={redText}>false</p>;
    }

    testAdd() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jsTPS();
        var num = new Num();
        return (<div>
                    <h2 style={crimsonText}>-----------------testAdd-----------------</h2>
                    <p>assertEquals(0, num.getNum()) => {this.assertEquals(0, num.getNum())}</p>

                    <p style={purpleText}>ADD 5 TRANSACTION</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 5)){tps.addTransaction(new AddToNum_Transaction(num, 5))}</p>
                    <p>assertEquals(5, num.getNum()) => {this.assertEquals(5, num.getNum())}</p>
                    <p>assertEquals(1, tps.getSize()) => {this.assertEquals(1, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(1, tps.getUndoSize()) => {this.assertEquals(1, tps.getUndoSize())}</p>

                    <p style={purpleText}>ADD 10 TRANSACTION</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 10)){tps.addTransaction(new AddToNum_Transaction(num, 10))}</p>
                    <p>assertEquals(15, num.getNum()) => {this.assertEquals(15, num.getNum())}</p>
                    <p>assertEquals(2, tps.getSize()) => {this.assertEquals(2, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(2, tps.getUndoSize()) => {this.assertEquals(2, tps.getUndoSize())}</p>

                    <p style={purpleText}>ADD 20 TRANSACTION</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 20)){tps.addTransaction(new AddToNum_Transaction(num, 20))}</p>
                    <p>assertEquals(35, num.getNum()) => {this.assertEquals(35, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>
                </div>)
    }
    
    testAndMask() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jsTPS();
        var num = new Num();
        return (<div>
                    <h2 style={crimsonText}>-----------------testAndMask-----------------</h2>
                    <p>assertEquals(0, num.getNum()) => {this.assertEquals(0, num.getNum())}</p>

                    <p style={purpleText}>ADD 12 TRANSACTION</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 12)){tps.addTransaction(new AddToNum_Transaction(num, 12))}</p>
                    <p style={blueText}>tps.addTransaction(new AndMask_Transaction(num, num.getNum(), 4)){tps.addTransaction(new AndMask_Transaction(num, num.getNum(), 4))}</p>
                    <p>assertEquals(4, num.getNum()) => {this.assertEquals(4, num.getNum())}</p>
                    <p>assertEquals(2, tps.getSize()) => {this.assertEquals(2, tps.getSize())}</p>

                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p>assertEquals(12, num.getNum()) => {this.assertEquals(12, num.getNum())}</p>
                    <p>assertEquals(2, tps.getSize()) => {this.assertEquals(2, tps.getSize())}</p>
                    <p>assertEquals(1, tps.getRedoSize()) => {this.assertEquals(1, tps.getRedoSize())}</p>
                    <p>assertEquals(1, tps.getUndoSize()) => {this.assertEquals(1, tps.getUndoSize())}</p>
                </div>)
    }
    
    testOrMask() {
        
    }

    //@Test
    testUndo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jsTPS();
        var num = new Num();
        return (<div>
                    <h2 style={crimsonText}>-----------------testUndo-----------------</h2>
                    <p>assertEquals(0, num.getNum()) => {this.assertEquals(0, num.getNum())}</p>
                    <p>assertFalse(tps.hasTransactionToUndo()) => {this.assertFalse(tps.hasTransactionToUndo())}</p>
                    <p>assertFalse(tps.hasTransactionToRedo()) => {this.assertFalse(tps.hasTransactionToRedo())}</p>

                    <p style={purpleText}>ADD 3 TRANSACTIONS (5, 10, and 20)</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 5)){tps.addTransaction(new AddToNum_Transaction(num, 5))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 10)){tps.addTransaction(new AddToNum_Transaction(num, 10))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 20)){tps.addTransaction(new AddToNum_Transaction(num, 20))}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertFalse(tps.hasTransactionToRedo() => {this.assertFalse(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(35, num.getNum()) => {this.assertEquals(35, num.getNum())}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>

                    <p style={purpleText}>UNDO A TRANSACTION</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertTrue(tps.hasTransactionToRedo()) => {this.assertTrue(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(15, num.getNum()) => {this.assertEquals(15, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(1, tps.getRedoSize()) => {this.assertEquals(1, tps.getRedoSize())}</p>
                    <p>assertEquals(2, tps.getUndoSize()) => {this.assertEquals(2, tps.getUndoSize())}</p>

                    <p style={purpleText}>UNDO ANOTHER</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertTrue(tps.hasTransactionToRedo()) => {this.assertTrue(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(5, num.getNum()) => {this.assertEquals(5, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(2, tps.getRedoSize()) => {this.assertEquals(2, tps.getRedoSize())}</p>
                    <p>assertEquals(1, tps.getUndoSize()) => {this.assertEquals(1, tps.getUndoSize())}</p>

                    <p style={purpleText}>AND ANOTHER</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p>assertFalse(tps.hasTransactionToUndo()) => {this.assertFalse(tps.hasTransactionToUndo())}</p>
                    <p>assertTrue(tps.hasTransactionToRedo()) => {this.assertTrue(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(0, num.getNum()) => {this.assertEquals(0, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(3, tps.getRedoSize()) => {this.assertEquals(3, tps.getRedoSize())}</p>
                    <p>assertEquals(0, tps.getUndoSize()) => {this.assertEquals(0, tps.getUndoSize())}</p>

                    <p style={purpleText}>WE HAVE NO MORE TO UNDO SO THIS SHOULD DO NOTHING</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p>assertFalse(tps.hasTransactionToUndo()) => {this.assertFalse(tps.hasTransactionToUndo())}</p>
                    <p>assertTrue(tps.hasTransactionToRedo()) => {this.assertTrue(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(0, num.getNum()) => {this.assertEquals(0, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(3, tps.getRedoSize()) => {this.assertEquals(3, tps.getRedoSize())}</p>
                    <p>assertEquals(0, tps.getUndoSize()) => {this.assertEquals(0, tps.getUndoSize())}</p>
                </div>)
    }
    
    testRedo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jsTPS();
        var num = new Num();
        return (<div>
                    <h2 style={crimsonText}>-----------------testRedo-----------------</h2>
                    <p>assertEquals(0, num.getNum()) => {this.assertEquals(0, num.getNum())}</p>

                    <p style={purpleText}>ADD 3 TRANSACTIONS (5, 10, and 20)</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 5)){tps.addTransaction(new AddToNum_Transaction(num, 5))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 10)){tps.addTransaction(new AddToNum_Transaction(num, 10))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 20)){tps.addTransaction(new AddToNum_Transaction(num, 20))}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertFalse(tps.hasTransactionToRedo() => {this.assertFalse(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(35, num.getNum()) => {this.assertEquals(35, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>

                    <p style={purpleText}>UNDO A TRANSACTION AND THEN REDO IT</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertFalse(tps.hasTransactionToRedo() => {this.assertFalse(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(35, num.getNum()) => {this.assertEquals(35, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>

                    <p style={purpleText}>UNDO TWO TRANSACTIONS AND THEN REDO THEM</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertFalse(tps.hasTransactionToRedo() => {this.assertFalse(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(35, num.getNum()) => {this.assertEquals(35, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>

                    <p style={purpleText}>UNDO ALL THREE TRANSACTIONS AND THEN REDO THEM</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertFalse(tps.hasTransactionToRedo() => {this.assertFalse(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(35, num.getNum()) => {this.assertEquals(35, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>

                    <p style={purpleText}>UNDO THREE TRANSACTIONS AND REDO TWO</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertTrue(tps.hasTransactionToRedo() => {this.assertTrue(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(15, num.getNum()) => {this.assertEquals(15, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(1, tps.getRedoSize()) => {this.assertEquals(1, tps.getRedoSize())}</p>
                    <p>assertEquals(2, tps.getUndoSize()) => {this.assertEquals(2, tps.getUndoSize())}</p>

                    <p style={purpleText}>UNDO ALL THREE TRANSACTIONS AND REDO FOUR, WHICH</p>
                    <p style={purpleText}>SHOULD NOT PRODUCE AN ERROR BUT THE LAST</p>
                    <p style={purpleText}>REDO SHOULD DO NOTHING</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.undoTransaction(){tps.undoTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p style={blueText}>tps.doTransaction(){tps.doTransaction()}</p>
                    <p>assertTrue(tps.hasTransactionToUndo()) => {this.assertTrue(tps.hasTransactionToUndo())}</p>
                    <p>assertFalse(tps.hasTransactionToRedo() => {this.assertFalse(tps.hasTransactionToRedo())}</p>
                    <p>assertEquals(35, num.getNum()) => {this.assertEquals(35, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>
                </div>)
    }  

    testClear() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jsTPS();
        var num = new Num();
        return (<div>
                    <h2 style={crimsonText}>-----------------testClear-----------------</h2>
                    <p>assertEquals(0, num.getNum()) => {this.assertEquals(0, num.getNum())}</p>

                    <p style={purpleText}>ADD 3 TRANSACTIONS (5, 10, and 20)</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 5)){tps.addTransaction(new AddToNum_Transaction(num, 5))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 10)){tps.addTransaction(new AddToNum_Transaction(num, 10))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 20)){tps.addTransaction(new AddToNum_Transaction(num, 20))}</p>
                    <p>assertEquals(35, num.getNum()) => {this.assertEquals(35, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>

                    <p style={purpleText}>CLEAR ALL THE TRANSACTIONS</p>
                    <p style={blueText}>tps.clearAllTransactions(){tps.clearAllTransactions()}</p>
                    <p>assertEquals(35, num.getNum()) => {this.assertEquals(35, num.getNum())}</p>
                    <p>assertEquals(0, tps.getSize()) => {this.assertEquals(0, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(0, tps.getUndoSize()) => {this.assertEquals(0, tps.getUndoSize())}</p>

                    <p style={purpleText}>ADD 3 TRANSACTIONS (5, 10, and 20)</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 5)){tps.addTransaction(new AddToNum_Transaction(num, 5))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 10)){tps.addTransaction(new AddToNum_Transaction(num, 10))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 20)){tps.addTransaction(new AddToNum_Transaction(num, 20))}</p>
                    <p>assertEquals(70, num.getNum()) => {this.assertEquals(70, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>

                    <p style={purpleText}>CLEAR THEM ALL OUT AGAIN</p>
                    <p style={blueText}>tps.clearAllTransactions(){tps.clearAllTransactions()}</p>
                    <p>assertEquals(70, num.getNum()) => {this.assertEquals(70, num.getNum())}</p>
                    <p>assertEquals(0, tps.getSize()) => {this.assertEquals(0, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(0, tps.getUndoSize()) => {this.assertEquals(0, tps.getUndoSize())}</p>

                    <p style={purpleText}>ADD 3 TRANSACTIONS (5, 10, and 20)</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 5)){tps.addTransaction(new AddToNum_Transaction(num, 5))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 10)){tps.addTransaction(new AddToNum_Transaction(num, 10))}</p>
                    <p style={blueText}>tps.addTransaction(new AddToNum_Transaction(num, 20)){tps.addTransaction(new AddToNum_Transaction(num, 20))}</p>
                    <p>assertEquals(105, num.getNum()) => {this.assertEquals(105, num.getNum())}</p>
                    <p>assertEquals(3, tps.getSize()) => {this.assertEquals(3, tps.getSize())}</p>
                    <p>assertEquals(0, tps.getRedoSize()) => {this.assertEquals(0, tps.getRedoSize())}</p>
                    <p>assertEquals(3, tps.getUndoSize()) => {this.assertEquals(3, tps.getUndoSize())}</p>
            </div>)
    }
}

const greenText = {
    display: 'inline',
    color: 'green',
    fontWeight: 'bold'
}

const blueText = {
    color: 'blue'
}

const crimsonText = {
    color: 'crimson',
    fontWeight: 'bold'
}

const purpleText = {
    color: 'purple',
    fontWeight: 'bold'
}

const redText = {
    display: 'inline',
    color: 'red',
    fontWeight: 'bold'
}

export default TPSUnitTests;