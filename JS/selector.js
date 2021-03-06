class Tab{
    constructor(element){
        
        this.element = element;
        //set initial styling of tab
    this.tabData = this.element.dataset.tab;
    
    this.aData = document.querySelector(`.viz[data-tab='${this.tabData}']`);
    console.log(this.aData);
    this.picture = new Picture(this.aData);

    this.anotherData = document.querySelector(`.phone-img[data-tab='${this.tabData}']`);
    console.log(this.anotherData);
    this.phone = new Phone(this.anotherData);

    //console.log('test2');
    this.element.addEventListener('click', () => this.selectTab());
    }

    selectTab(){
        
        const tabs = document.querySelectorAll('.tab');
        //set event listener to change styling if clicked
            //add to clicked, remove from rest
        tabs.forEach(tab => tab.classList.remove('selected'));
        
        this.element.classList.add('selected');
    
        
        this.picture.selectPic();
        this.phone.selectPhone();
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

class Phone{
    constructor(phoneElement){
        this.phoneElement = phoneElement;
    }

    selectPhone(){
        const phonePics = document.querySelectorAll('.phone-img');
        //set event listener to change styling if clicked
            //add to clicked, remove from rest
        //pics.forEach(pic => pic.classList.remove('displayed'));
        console.log('checkles');
        phonePics.forEach(pic => pic.classList.remove('drop'));
        this.phoneElement.classList.toggle('drop');
    }
}


//console.log('hello');
let tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    //tab.style.color = 'red';
    return new Tab(tab);
});

