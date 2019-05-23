class Tab{
    constructor(element){
        
        this.element = element;
        //set initial styling of tab
    this.tabData = this.element.dataset.tab;
    
    this.aData = document.querySelector(`.viz[data-tab='${this.tabData}']`);
    console.log(this.aData);
    this.picture = new Picture(this.aData);

    console.log('test2');
    this.element.addEventListener('click', () => this.selectTab());
    }

    selectTab(){
        
        const tabs = document.querySelectorAll('.tab');
        //set event listener to change styling if clicked
            //add to clicked, remove from rest
        tabs.forEach(tab => tab.classList.remove('selected'));
        
        this.element.classList.add('selected');
    
        
        this.picture.selectPic();
    }
}

class Picture{
    constructor(picElement){
        this.picElement = picElement;
    }

    selectPic(){
        const pics = document.querySelectorAll('.viz');
        //set event listener to change styling if clicked
            //add to clicked, remove from rest
        //pics.forEach(pic => pic.classList.remove('displayed'));
        console.log('checkcheckooroo');
        pics.forEach(pic => pic.classList.remove('displayed'));
        this.picElement.classList.add('displayed');
    }
}


//console.log('hello');
let tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    //tab.style.color = 'red';
    return new Tab(tab);
});

