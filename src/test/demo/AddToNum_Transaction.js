//package demo;

import jsTPS_Transaction from '../../jstps/jsTPS_Transaction'

/**
 * AddToNum_Transaction.java
 * 
 * This class is a transaction that can be executed and undone. It
 * can be stored in the jTPS transaction stack and must be constructed
 * with all the data necessary to perform both do and undo.
 * 
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
class AddToNum_Transaction extends jsTPS_Transaction {
    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param initNum
     * @param initAmountToAdd 
     */
    constructor(initNum, initAmountToAdd) {
        // KEEP THESE FOR LATER
        super();
        this.num = initNum;
        this.amountToAdd = initAmountToAdd;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    //@Override
    doTransaction() {
        var oldNum = this.num.getNum();
        var newNum = oldNum + this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    //@Override
    undoTransaction() {
        var oldNum = this.num.getNum();
        var newNum = oldNum - this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    //@Override
    toString() {
        return "Add " + this.amountToAdd;
    }
}

export default AddToNum_Transaction