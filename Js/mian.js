// ---------------HEADER-------------------

// toggle show search-box
const headerSearchBtn = document.querySelector('.header .header-search-btn')
const headerSearchBox = document.querySelector('.header .header-search-box')
const headerCloseSearchBtn = document.querySelector('.header .header-close-btn')

headerSearchBtn.addEventListener('click', () => {
    headerSearchBox.classList.remove('d-none')
})

headerCloseSearchBtn.addEventListener('click', () => {
    headerSearchBox.classList.add('d-none')
})

// toggle show dropdowns megasubmenu
const headerDropdownsMegaSubMenu = document.querySelectorAll('.dropdown-menu .has-megasubmenu > a')
const headerDropdowns = document.querySelectorAll('.header .dropdown')

headerDropdownsMegaSubMenu.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault()

        if(window.innerWidth > 576) return

        // if exist another active megamenu come deactive 
        const beforeEl = document.querySelector('.dropdown-menu .has-megasubmenu > .dropdown-item.show')
        if(beforeEl && beforeEl != item){
            beforeEl.classList.remove('show')
            beforeEl.nextElementSibling.classList.remove('show')
        }

        // change status 
        item.classList.toggle('show')
        item.nextElementSibling.classList.toggle('show')
    })
})

headerDropdowns.forEach(item => {
    item.addEventListener('hidden.bs.dropdown', () => {
        // if exist another show megamenu come deactive 
        const beforeEl = document.querySelector('.dropdown-menu .has-megasubmenu > .dropdown-item.show')
        if(beforeEl){
            beforeEl.classList.remove('show')
            beforeEl.nextElementSibling.classList.remove('show')
        }
    })
})

// when header is mobile size come when scrolled page hide the title
const headerTitle = document.querySelector('.header .header-nav-info')
window.addEventListener('scroll', () => {
    showOrHideHeaderTitle()
})

function showOrHideHeaderTitle(){
    if(window.innerWidth <= 650){
        if(window.pageYOffset >= 25 && !headerTitle.classList.contains('d-none'))
            headerTitle.classList.add('d-none')
        else if(window.pageYOffset < 25 && headerTitle.classList.contains('d-none'))
            headerTitle.classList.remove('d-none')
    }
}

const headerFullscreenBtn = document.querySelector('.header .fullscreen-btn')
let pageFullScreen = false

headerFullscreenBtn.addEventListener('click', () => {
    openFullscreen()
})

document.addEventListener('fullscreenchange', () => {
    pageFullScreen = !pageFullScreen
})

function openFullscreen() {
    if(!pageFullScreen){
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
            document.documentElement.msRequestFullscreen();
        }
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitexitFullscreen) { /* Safari */
            document.webkitexitFullscreen();
        } else if (document.msexitFullscreen) { /* IE11 */
            document.msexitFullscreen();
        }
    }
}

// dark mode btn
const darkModeBtnHeader = document.querySelector('.header .dark-mode-btn')
darkModeBtnHeader.addEventListener('click', toggleDarkMode)

function toggleDarkMode(){
    // should change to light
    if(document.body.classList.contains('dark')){
        darkModeBtnHeader.innerHTML = `
            <!-- assets/icons/sun.svg -->
            <svg viewBox="0 0 512 512"><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M256 144C194.1 144 144 194.1 144 256c0 61.86 50.14 112 112 112s112-50.14 112-112C368 194.1 317.9 144 256 144z"/><path class="fa-secondary" d="M108.9 74.97c-9.344-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l45.25 45.28c4.672 4.688 10.83 7.031 16.97 7.031S149.5 158.9 154.2 154.2c9.375-9.375 9.375-24.56 0-33.93L108.9 74.97zM256 0C242.8 0 232 10.75 232 24v64C232 101.3 242.8 112 256 112s24-10.75 24-24v-64C280 10.75 269.3 0 256 0zM112 256c0-13.25-10.75-24-24-24h-64C10.75 232 0 242.8 0 256s10.75 24 24 24h64C101.3 280 112 269.3 112 256zM374.8 161.2c6.141 0 12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.94s-24.59-9.375-33.94 0l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.93C362.5 158.9 368.7 161.2 374.8 161.2zM256 400c-13.25 0-24 10.75-24 24v64C232 501.3 242.8 512 256 512s24-10.75 24-24v-64C280 410.8 269.3 400 256 400zM120.2 357.8l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.94c4.688 4.688 10.83 7.031 16.97 7.031s12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.93S129.6 348.4 120.2 357.8zM488 232h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C501.3 280 512 269.3 512 256S501.3 232 488 232zM391.8 357.8c-9.344-9.375-24.56-9.372-33.94 .0031s-9.375 24.56 0 33.93l45.25 45.28c4.672 4.688 10.83 7.031 16.97 7.031s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L391.8 357.8z"/></svg>

        `

        document.body.classList.remove('dark')
    }
    // should change to dark 
    else {
        darkModeBtnHeader.innerHTML = `
            <!-- assets/icons/moon.svg -->
            <svg class="dark-mode-position-center" viewBox="0 0 512 512"><defs><style>.fa-secondary{opacity:.4}</style></defs><path d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z" class="fa-secondary"/><path d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z" class="fa-primary"/></svg>
        `

        document.body.classList.add('dark')
    }
}

// when window be mobile size come push collapsible-buttons to the dropdown
const collapsibleDropdownHeader = document.querySelector('.collapsible-dropdown')

// get buttons on the collapsible-buttons 
const buttonsCollapsibleSection = document.querySelector('.collapsible-buttons')
const buttonsCollapsibleButtons = document.querySelectorAll('.collapsible-buttons button')

function pushCollapsibleButttonsInTheDropdown(){
    const menu = collapsibleDropdownHeader.querySelector('.dropdown-menu .dropdown-menu-inner')

    // send buttons to the dropdown
    buttonsCollapsibleButtons.forEach(item => {
        menu.appendChild(item)
    })

    collapsibleDropdownHeader.classList.remove('d-none')
}

function putCollapsibleButttonsOfTheDropdown(){
    // put buttons of dropdown
    buttonsCollapsibleButtons.forEach(item => {
        buttonsCollapsibleSection.appendChild(item)
    })

    // hide the dropdown
    collapsibleDropdownHeader.classList.add('d-none')
}

function checkCollapsibleDropdownCanShowOrNO(){
    if(window.innerWidth <= 750){
        pushCollapsibleButttonsInTheDropdown()
    }
    else {
        putCollapsibleButttonsOfTheDropdown()
    }
}

// ---------------HEADER-------------------

// ---------------SIDEBAR-------------------

// when on the header-toggle-btn clicked come full or mini content
const headerToggleBtn = document.querySelector('.header-toggle-btn')
const sidebarCloseMenuBtn = document.querySelector('.close-sidebar-menu-btn')
const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('.header')
const backdrop = document.querySelector('.backdrop')
const main = document.querySelector('.main-content')

let sidebarStatus; // for saving last status of sidebar and header. 

headerToggleBtn.addEventListener('click', sidebarToggleShowMenu)
sidebarCloseMenuBtn.addEventListener('click', closeSidebarMenu)
backdrop.addEventListener('click', () => {
    closeSidebarMenu()
})

// for saving last status layout and do open and close menu
function sidebarToggleShowMenu(){
    // if window be laptop size come do
    if(window.innerWidth > 991){
        sidebar.classList.toggle('mini')
        main.classList.toggle('full')   
    }

    else {
        // if window be mobile size come show menu
        sidebar.classList.toggle('show')
        backdrop.classList.toggle('show')

        // get sidebar status
        sidebarStatus = sidebar.classList.contains('mini')
        
        if(sidebar.classList.contains('mini')){
            sidebar.classList.remove('mini')
            main.classList.remove('full')
        }
    }

    if(!sidebar.classList.contains('mini')){
        enableCollapseAndDisableTab()
    }

    // come enable event show tab
    if(sidebar.classList.contains('mini')){
        disableCollapseAndEnableTab()
    }        
}

// close the menu for size mobile and also it task is back layout status to Goes back to its latest style
function closeSidebarMenu(){
    sidebar.classList.remove('show')
    backdrop.classList.remove('show')   
    headerToggleBtn.classList.toggle('opened')

    // set sidebar status 
    if (sidebarStatus){
        sidebar.classList.add('mini')
        main.classList.add('full')

        if(!sidebar.classList.contains('mini')){
            enableCollapseAndDisableTab()
        }
    
        // come enable event show tab
        if(sidebar.classList.contains('mini')){
            disableCollapseAndEnableTab()
        }

    }
}

function disableCollapseAndEnableTab(){
    document.querySelectorAll('.sidebar .sidebar-item.has-sub:not(.sidebar-item-sub)').forEach(item => {
        enableSidebarItemSubInTheSide(item)
        item.querySelector('a').nextElementSibling.classList.add('d-none')
        // inja
    })

    document.querySelectorAll('.sidebar-item:not(.has-sub):not(.sidebar-item-sub)').forEach(item => {
        item.addEventListener('mouseenter', whenHoveredOnTheSidebarItemSimpleComeHideTabContent)
    })

    // if a item has active come deactive
    const itemActive = document.querySelector('.sidebar .sidebar-item.has-sub:not(.sidebar-item-sub).active')
    if(itemActive)
        itemActive.classList.replace('active', 'deactive')
}

function enableCollapseAndDisableTab(){
    // when be big sidebar come show the item.
    document.querySelectorAll('.sidebar .sidebar-item.has-sub:not(.sidebar-item-sub)').forEach(item => {
        item.querySelector('a').nextElementSibling.classList.remove('d-none')
        
        disableSidebarItemSubInTheSide(item)
    })

    document.querySelectorAll('.sidebar .sidebar-item:not(.has-sub):not(.sidebar-item-sub)').forEach(item => {
        item.removeEventListener('mouseenter', whenHoveredOnTheSidebarItemSimpleComeHideTabContent)
    })

    // if a item has active come active
    const itemDeactive = document.querySelector('.sidebar .sidebar-item.has-sub:not(.sidebar-item-sub).deactive')
    if(itemDeactive)
        itemDeactive.classList.replace('deactive', 'active')
}

// ------------Collapse system--------------
// open and close | sidebar collapse
const sidebarItemsHasSub = document.querySelectorAll('.sidebar .sidebar-item.has-sub .sidebar-link')
const sidebarItemsHasSubCollapses = document.querySelectorAll('.sidebar .sidebar-item.has-sub .collapse')

let assasHas = 0

sidebarItemsHasSub.forEach(element => {
    element.addEventListener('click', (event) => {
        let nextEl = element.nextElementSibling;
        let parentEl  = element.parentElement;	

        if(nextEl) {
            event.preventDefault();	
            let mycollapse = new bootstrap.Collapse(nextEl);
            
            if(nextEl.classList.contains('show')){
                mycollapse.hide();
            } else {
                mycollapse.show();
                
                let opened_submenu;
                // find other submenus with class=show
                if(parentEl.parentElement.nodeName == 'UL')
                    opened_submenu = parentEl.parentElement.querySelector('.collapse.show');
                else
                    opened_submenu = parentEl.parentElement.parentElement.querySelector('.collapse.show');

                // if it exists, then close all of them
                if(opened_submenu){

                    if(parentEl.parentElement.nodeName == 'UL' && opened_submenu.parentElement.parentElement == parentEl.parentElement){
                        new bootstrap.Collapse(opened_submenu);
                    }

                    else if(parentEl.parentElement.parentElement.nodeName == 'UL' && opened_submenu.parentElement.parentElement == parentEl.parentElement.parentElement){
                        new bootstrap.Collapse(opened_submenu);
                    }
                    
                    else if(parentEl.parentElement.nodeName == 'UL' && opened_submenu.parentElement.parentElement.parentElement == parentEl.parentElement){
                        new bootstrap.Collapse(opened_submenu);
                    }

                    else if(opened_submenu.parentElement.parentElement.nodeName == 'LI' && parentEl.parentElement.nodeName == 'LI'){
                        new bootstrap.Collapse(opened_submenu);
                    }

                    else if(opened_submenu.parentElement.parentElement.parentElement.classList.contains('card-body')){
                        const collapses = parentEl.parentElement.parentElement.querySelectorAll('.collapse.show')

                        if(collapses.length >= 2)
                            new bootstrap.Collapse(collapses[1]);                        

                        opened_submenu = parentEl.parentElement.querySelector('div > .collapse.show')
                        if(opened_submenu){
                                new bootstrap.Collapse(opened_submenu);                        
                        }
                    }

                }
            }
        }

    })
})

sidebarItemsHasSubCollapses.forEach(item => {
    item.addEventListener('show.bs.collapse', (event) => {
        // before el
        const beforeEl = event.target.parentElement.parentElement.querySelector('.has-sub.active')
        if(beforeEl && beforeEl != event.target.parentElement){
            if(Number(beforeEl.children[1].style.height.slice(0, -2)) > 1){
                setTimeout(() => {
                    new bootstrap.Collapse(beforeEl.children[1]);
                }, 500)
            }
        }

        event.target.parentElement.classList.add('active')
    })

    item.addEventListener('hide.bs.collapse', (event) => {
        event.target.parentElement.classList.remove('active')
    })
})

// ---------Collapse system--------

const sidebarTabContentMain = document.querySelector('.sidebar .sidebar-tab-content')
const sidebarTabContent = document.querySelector('.sidebar .sidebar-tab-content-inner')

function enableSidebarItemSubInTheSide(item){
    item.addEventListener('mouseenter', showSidebarItemSubInTheSide)
    sidebar.addEventListener('mouseleave', hideSidebarItemSubInTheSide)
}

function disableSidebarItemSubInTheSide(item){
    item.removeEventListener('mouseenter', showSidebarItemSubInTheSide)
    sidebar.removeEventListener('mouseleave', hideSidebarItemSubInTheSide)
}

function whenHoveredOnTheSidebarItemSimpleComeHideTabContent(){
    hideSidebarItemSubInTheSide()
}

function showSidebarItemSubInTheSide(event){
    // if tab is hide come show tab
    if(sidebarTabContentMain.classList.contains('d-none')){
        sidebarTabContentMain.classList.remove('d-none')
        sidebar.classList.add('pickup-radius')
    }

    const data = event.target.querySelector('.collapse .card')
    if(data){
        // if exist data of another sidebar-item come do
        const mainParent = document.querySelector('.sidebar-item.has-sub .im-last-item-tab-content')
        if(mainParent){
            mainParent.parentElement.classList.remove('active')
            mainParent.appendChild(sidebarTabContent.querySelector('.card'))
            mainParent.classList.remove('im-last-item-tab-content')
        }
        
        // push content to sidebar-tab-content
        data.parentElement.classList.add('im-last-item-tab-content')
        sidebarTabContent.appendChild(data)

        // item should change to active
        event.target.classList.add('active')
    }
}

function hideSidebarItemSubInTheSide(event){
    // if tab is not hide come hide tab
    if(!sidebarTabContentMain.classList.contains('d-none')){
        sidebarTabContentMain.classList.add('d-none')
        sidebar.classList.remove('pickup-radius')
    }

    // back data to the self collapse
    const mainParent = document.querySelector('.sidebar-item.has-sub .im-last-item-tab-content')
    if(mainParent){
        mainParent.parentElement.classList.remove('active')
        mainParent.appendChild(sidebarTabContent.querySelector('.card'))
        mainParent.classList.remove('im-last-item-tab-content')
    }
}

// ---------------SIDEBAR-------------------

// ---------------DOCUMENT EVENTS-------------------

document.addEventListener('DOMContentLoaded', () => {

    // use custom scroll in the header dropdowns
    $(".header .dropdown .tab-pane").mCustomScrollbar({
        theme: "dark-thin"
    }); 

    // use custom scroll for sidebar collapse
    $(".sidebar-content-inner").mCustomScrollbar({
        theme: "dark-thin"
    });

    // use custom scroll for sidebar-tab-content
    $(".sidebar-tab-content").mCustomScrollbar({
        theme: "dark-thin"
    });

    // use custom scroll for header dropdown-account
    // $(".header .dropdown.account .dropdown-menu .card-body").mCustomScrollbar({
    //     theme: "dark-thin"
    // });

    // use tooltips
    $("[data-bs-toggle='tooltip']").tooltip();
    document.querySelectorAll(".sidebar [data-bs-toggle='tooltip']").forEach(item => {
        item.addEventListener('shown.bs.tooltip', () => {
            if(!sidebar.classList.contains('mini'))
                document.querySelector('.tooltip').classList.remove('show')
        })
    })

    // initialization app layout
    if(layoutStyle.main == 'full' && !main.classList.contains('full')){
        main.classList.add('full')
        sidebar.classList.add('mini')
        headerToggleBtn.classList.remove('opened')
    }   
    else {
        headerToggleBtn.classList.add('opened')
    }

    // when window be mobile size come push collapsible-buttons to dropdown
    checkCollapsibleDropdownCanShowOrNO()
    
})

window.addEventListener('resize', () => {
    checkCollapsibleDropdownCanShowOrNO()

    // when page is computer size come show title
    if(window.innerWidth >= 650){
        headerTitle.classList.remove('d-none')
    }
   showOrHideHeaderTitle()
    
})

// ---------------DOCUMENT EVENTS-------------------

// -------------------LAYOUT COMPONENTS-------------------

// const drawers = document.querySelectorAll('.drawer')

// drawers.forEach(item => {
//     item.children[0].addEventListener('click', () => {
//         const content = item.querySelector('.drawer-content')

//         content.classList.toggle('show');

//         item.classList.toggle('active')
//     })
// })

// -------------------LAYOUT COMPONENTS-------------------

