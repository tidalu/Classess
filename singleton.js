// singleton in Javascript 

// used when only you  want a single instance of a class

// there are many ways to do it, this is my example

// example use case is a Settings/Environmental Vars accessor

class Settings {
    constructor(){
        // if(Settings.instance instanceof Settings) {
        //     return Settings.instance;
        // }

        this.SettingsObject = {
            "background": "#ff0000", 
            'version': Math.floor(Math.random()*4000)
        };

        Object.freeze(this.SettingsObject);
        // Object.freeze(this);
        // Settings.instance = this;
    }

    get(key) {
        return this.SettingsObject[key]
    }
}

const s = new  Settings()
const a = new Settings()

console.log(s)
console.log(a)
console.log(s.get('background'))
console.log(a === s);

// singleton
// static 
// super.(parent method)