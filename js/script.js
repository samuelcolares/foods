
const Section1 = {
    init: function () {
        this.cacheSelectors();
        setInterval(this.changeFood.bind(this), 4000)
    },

    cacheSelectors: function () {
        this.icons = document.querySelectorAll('.section-1-icons i')
    },

    counter: 0,

    classR: function () {
        this.icons.forEach((icon) => {
            icon.classList.remove('change')
        })
    },

    changeFood: function () {
        this.classR()
        this.icons[this.counter].classList.add('change')
        this.counter++
        if (this.counter > this.icons.length - 1) {
            this.counter = 0
        }
    }
}

Section1.init()


const Navbar = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
    },

    cacheSelectors: function () {
        this.menu = document.querySelector('.menu')
        this.navbar = document.querySelector('.navbar')
        this.navbarLinks = document.querySelectorAll(`.navbar-link`)
    },

    bindEvents: function () {
        this.menu.addEventListener('click', () => {
            this.menu.classList.toggle('show')
            this.navbar.classList.toggle('show')

            if (!this.menu.classList.contains(`show`)) {
                this.menu.classList.add(`close`)
                setTimeout(() => this.menu.classList.remove(`close`), 500)
                this.navbarLinks.forEach((link) => {
                    link.style.transitionDelay = `${200}ms`
                })
            } else {
                this.navbarLinks.forEach((link, idx) => {
                    link.style.transitionDelay = `${500 + (idx * 100)}ms`
                    setTimeout(() => {
                        link.style.transitionDelay = `${0}ms`
                    }, 1100)
                })
            }
        })

        this.navbarLinks.forEach(li => {
            li.onclick = () => {
                const scroll = document.getElementById(`${li.lastElementChild.textContent}`)
                window.scrollTo({
                    top: scroll.offsetTop,
                    behavior: 'smooth'
                })
            }
        })
        this.navbarLinks[4].addEventListener('click', this.Events.changeMode.bind(this))
    },

    LightMode: false,

    Events: {
        changeMode: function(){
            if(!this.LightMode){
                this.LightMode = true
                this.navbarLinks[4].firstElementChild.classList.replace('fa-sun','fa-moon')
                this.navbarLinks[4].lastElementChild.innerText = 'D.Mode'
                document.documentElement.style.setProperty(' --shadow-color', '#1D1D1D');
                document.documentElement.style.setProperty('--navbar-background-color', '#fd7f40');
                document.documentElement.style.setProperty('--background-color-1', '#d8b6a5');
                document.documentElement.style.setProperty('--background-color-2', '#7F7FD5');
                document.documentElement.style.setProperty('--elements-color', '#F5A623');
                document.documentElement.style.setProperty('--elements-left-color', '#d68f1d');
                document.documentElement.style.setProperty('--elements-top-color', '#be7d14');
                document.documentElement.style.setProperty('--text-color-1', '#fff');
                document.documentElement.style.setProperty('--text-color-2', '#e7d5d5');
            }else if(this.LightMode){
                this.LightMode = false
                this.navbarLinks[4].firstElementChild.classList.replace('fa-moon','fa-sun')
                this.navbarLinks[4].lastElementChild.innerText = 'L.Mode'
                document.documentElement.style.setProperty(' --shadow-color', '#000');
                document.documentElement.style.setProperty('--navbar-background-color', '#000');
                document.documentElement.style.setProperty('--background-color-1', '#333');
                document.documentElement.style.setProperty('--background-color-2', '#222');
                document.documentElement.style.setProperty('--elements-color', '#a79a2d');
                document.documentElement.style.setProperty('--elements-left-color', '#817824');
                document.documentElement.style.setProperty('--elements-top-color', '#8f8317');
                document.documentElement.style.setProperty('--text-color-1', '#fff');
                document.documentElement.style.setProperty('--text-color-2', '#888');
            }
        }
    },
}

Navbar.init()





// document.documentElement.style.setProperty('--primary-color', 'black');

/* 
dark mode
:root {
    --shadow-color: #000;
    --navbar-background-color: #000;
    --background-color-1: #333;
    --background-color-2: #222;
    --elements-color: #a79a2d;
    --elements-left-color: #817824;
    --elements-top-color: #8f8317;
    --text-color-1: #fff;
    --text-color-2: #888;
}


:root {
    --shadow-color: #1D1D1D;
    --navbar-background-color: #fd7f40;
    --background-color-1: #d8b6a5;
    --background-color-2: #7F7FD5;
    --elements-color: #F5A623;
    --elements-left-color: #d68f1d;
    --elements-top-color: #be7d14;
    --text-color-1: #fff;
    --text-color-2: #e7d5d5;
  }

#dbb9b9
*/

