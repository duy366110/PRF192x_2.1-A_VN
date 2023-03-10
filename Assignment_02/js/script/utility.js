export const DATE = {
    date: new Date(),

    currentDate: function() {
        return this.date.toLocaleDateString().split('/').reduce((acc, el) => {
            return acc.concat((el.length > 1)? el : `0${el}`);

        }, []).join('/')
    }
}

export const STORE = {

    clear : () => {
        localStorage.clear();
    },

    check : function(key) {
        return (localStorage.getItem(key))? true : false;
    },

    delete : (key) => {
        localStorage.removeItem(key);
        return !(localStorage.getItem(key))? true : false;
    },

    get : (key) => {
        return JSON.parse(localStorage.getItem(key));
    },

    save : (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
        return (localStorage.getItem(key))? true : false;
    }
}