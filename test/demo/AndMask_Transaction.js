//package demo;

//import jtps.jTPS_Transaction;

/**
 *
 * @author McKillaGorilla
 */
class AndMask_Transaction extends jsTPS_Transaction {
    constructor(){
        // THIS IS THE OBJECT IT WILL MANIPULATE
        var num;
        
        var intNum;
        
        // AMOUNT TO MASK FOR NUM
        var mask;
    }
    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param initNum
     * @param initAmountToAdd 
     */
    constructor(initNum, initIntNum, initMask) {
        // KEEP THESE FOR LATER
        var num = initNum;
        var intNum = initIntNum;
        var mask = initMask;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    //@Override
    doTransaction() {
        this.num.andMask(this.mask);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    //@Override
    undoTransaction() {
        this.num.setNum(this.intNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    //@Override
    toString() {
        return "And Mask " + this.mask;
    }
}