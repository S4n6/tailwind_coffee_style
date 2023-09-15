
const topMenu = document.querySelector('#top-menu')
const toggleTopMenu = document.querySelector('#toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if(toggleTopMenu.contains(e.target)){

        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('top-menu-expanded')

    }else{
        if(topMenu.classList.contains('top-menu-expanded'))
        {

            topMenu.classList.remove('top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})