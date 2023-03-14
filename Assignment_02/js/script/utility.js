export const DATE = {
    date: new Date(),


    /**
     * 
     * Methdo get current date.
     * @returns current date.
     */
    currentDate: function() {
        return this.date.toLocaleDateString().split('/').reduce((acc, el) => {
            return acc.concat((el.length > 1)? el : `0${el}`);

        }, []).join('/')
    }
}


export const STORE = {

    /**
     * 
     * Method clear all data localStorage.
     */
    clear : () => {
        localStorage.clear();
    },



    /**
     * 
     * Method checked localStorage exist.
     * @param {*} key name row data in localStorage.
     * @returns status true or false.
     */
    check : function(key) {
        return (localStorage.getItem(key))? true : false;
    },


    /**
     * 
     * Method delete row data in localStorage.
     * @param {*} key name row data in localStorage.
     * @returns status true or false if delete successfull or failed.
     */
    delete : (key) => {
        localStorage.removeItem(key);
        return !(localStorage.getItem(key))? true : false;
    },


    /**
     * 
     * Method get row data in localStorage.
     * @param {*} key name row data in localStorage.
     * @returns data row in localStorage or [].
     */
    get : (key) => {
        return JSON.parse(localStorage.getItem(key)) || [];
    },



    /**
     * 
     * Method save data to localStorage.
     * @param {*} key name row data in localStorage.
     * @param {*} value you want save to localStorage.
     * @returns status true or false if save successfull or failed.
     */
    save : (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
        return (localStorage.getItem(key))? true : false;
    }
}