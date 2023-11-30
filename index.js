
const myList = document.getElementById("myLIst")

class ListBinding {
    constructor(el) {
        this.listElement = el;
        this.textList = [
            
        ];
    }
     // makes li tag
    static createListItem(text) {
        const li = document.createElement("li")

        li.textContent = text

        return li
    }
    
    update() {
        /*  remove a;; existing <li> elements /tags **/
        
        while(this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild)
        }

        // fill with ul ol li 

        for(const text of this.textList) {
            this.listElement.append(ListBinding.createListItem(text))
        }
    }

    add(el) {
          this.textList.push(el)
          this.update()
    }
    
    remove(i) {
        this.textList.splice(i, 1)
        this.update()
    }
}
const listBinding = new ListBinding(myList)