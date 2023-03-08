export let Store = {

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