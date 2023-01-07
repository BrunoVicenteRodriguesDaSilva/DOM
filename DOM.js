//getElementById('') -- It searches for the element with the respective ID;
    const luffyImg = document.getElementById('imgLuffy');
    // luffyImg;
    //<td class="imgCrew" id="imgLuffy">
    //<img src="https://static.wikia.nocookie.net/onepiece/images/a/a9/Monkey_D._Lu…Portrait.png/
    //revision/latest/scale-to-width-down/119?cb=20220801002903" alt>
    //"Luffy"
    //</td>

//getElementsByTagName -- It gathers all the elements of this tag into a HTMLCollection (Note:It's not an array);
    const imgs = document.getElementsByTagName('img');
    //HTMLCollection(10) [img, img, img, img, img, img, img, img, img, img]

    // for(let img of imgs) {
    //     console.log(img.src);
    // } -- it returns the source of all the items in 'imgs';

    // for(let img of imgs) {
    //     img.src = 'https://cdn.dicionariopopular.com/imagens/cafbe07867c53ad097a4d2ef374c01e8.jpg'
    // } -- it changes all the imgs' sources;

//getElementByClassName
    const descripsCrew = document.getElementsByClassName('descriptionCrew');
    //HTMLCollection(10) [p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew]

//querySelector -- it returns the first match with the identifier that was given;
    // document.querySelector('p');
    // document.querySelector('.descriptionCrew');
    // document.querySelector('#imgLuffy');
    // document.querySelector('.descriptionCrew:nth-of-type(2)'); -- you can chain on others css styles collectors;

//querySelectorAll -- it works like querySelector, but returns a collection with all the elements that match;
    // document.querySelectorAll('p');
    //[p, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew, p.descriptionCrew]

        //to select a specific one -- document.querySelectorAll('p')[2]

//innerText -- it returns all the text that it's been shown on the page;
//textContent -- it returns all the text that it's written, even if it's hidden in the page for some reason, and how it's written;
//innerHTML -- it returns HTML text, even showing where the anchor tags (<a></a>), and etc;

    // All of them can be used to change the text of the element, and innerHTML can apply tags, like <b></b>, and etc;

    //Ex: 
    //  document.querySelector('p').innerHTML = 'batata assada'
    // document.querySelector('p').textContent = 'batata assada'
    //  document.querySelector('p').innerHTML = '<b>batata assada</b>'

//getAttribute -- it get's an Attribute of an elemnt;
    //Ex:

    //document.querySelector("td").getAttribute('class')
    //'imgCrew'

//setAttribute -- it sets a new value to an Atrribute of an element;
    //Ex:

    //document.querySelector("td").setAttribute('class', 'banana')
    //document.querySelector("td").getAttribute('class')
    //'banana'

//style -- it changes the style, doing inline changes;
    //Ex:

    //const nameCrew = document.querySelectorAll('td');
    //for (let name of nameCrew)
    //img.style.color='pink';
    //'pink'

//classList. -- it work with the class that the element contain

    //classList.add('') -- adds a new class;
    //classList.remove('') -- removes a class;
    //classList.contains('') -- it checks if it contains the class;
    //classList.toggle('') -- it alternates the class between true or false;

