// when on the help-site-btn clicked come Explain the site
const helpSiteBtnHeader = document.querySelector('.header .help-site-btn')

helpSiteBtnHeader.addEventListener('click', () => {
    startIntroComponent()
})

// Start introjs(tour)
function startIntroComponent(){
    // only show tour with big slider
    if(sidebar.classList.contains('mini')){
        sidebarToggleShowMenu()
        headerToggleBtn.classList.toggle('opened')
    }

    // do scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    // work intro
    const sidebarTransition = getComputedStyle(sidebar).transition

    function setSidebarTransition(type){
        return type =="none" ? 'none':sidebarTransition ;
    }

    introJs().setOptions({
        steps: [
            {
                intro: `
                    <div class="fs-14px">
                        <div class="d-block"> سلام </div>
                        <div class="d-block">وقت بخیر.<div>
                        <div class="d-block">به کارو خوش آمدید.<div>
                        <div class="d-block"> امیدوارم بتونم راهنمای خوبی برای شما باشم. </div>
                        <div class="d-block mt-2 fw-bold primary-color"> راهنمای تور آموزشی </div>
                        <div class="d-block"> ۱- برای رفتن به مراحل بعدی از دکمه "بعدی" و برای رفتن به مراحل قبلی از دکمه "قبلی" استفاده کنید. علاوه بر این می‌توانید با کلیدهای عقب و جلوی صفحه کلید نیز به مراحل قبلی یا بعدی منتقل شوید. </div>
                        <div class="d-block"> ۲- هر زمان که تمایل داشتید می‌توانید با کلیک روی دکمه "خروج" از تور آموزشی موقتاً خارج شوید. </div>
                    </div>
                `
            },
            {
                element: document.querySelector('.dropdown.account'),
                intro: `
                    <div class="d-block fs-14px primary-color fw-bold"> حساب کاربری </div>
                    <div class="d-block fs-14px"> در این بخش میتوانید اطلاعات حساب کاربری و تنظیمات مربوطه رو انجام دهید. </div>

                `,
                position: 'right'
            },
            {
                element: document.querySelector('.dropdown.notification button'),
                intro: `
                    <div class="d-block fs-14px primary-color fw-bold">اعلان ها</div>
                    <div class="d-block fs-14px"> خبر های جدید سایت اعم از پیام ها و لاگ ها و تراکنش ها به شما از این بخش خبر داده میشود </div>
                    <div class="d-block fs-14px"> در این بخش میتوانید اطلاعات حساب کاربری و تنظیمات مربوطه رو انجام دهید. </div>

                `,
                position: 'right'
            },
            {
                element: document.querySelector('.header .header-toggle-btn'),
                intro: `
                    <div class="d-block fs-14px primary-color fw-bold">دکمه تغییر سایز منوی کناری</div>
                    <div class="d-block fs-14px"> میتونیم سایز منوی کناری صفحه رو تغییر دهیم </div>
                `,
                position: 'left'
            },
            {
                element: document.querySelector('.sidebar .sidebar-content'),
                intro: `
                    <div class="d-block fs-14px primary-color fw-bold"> منوی کاربری</div>
                    <div class="d-block fs-14px"> مدیریت تیم، محصولات، امور مالی، و ... در منوی کاربری در دسترس است. کافیست به بخش مورد نظر مراجعه نمایید. </div>
                `,
                position: 'left'
            },
            {
                element: document.querySelector('.sidebar .sidebar-content .has-sub.sidebar-item'),
                intro: `
                    <div class="d-block fs-14px primary-color fw-bold"> مدیریت کاربران </div>
                    <div class="d-block fs-14px"> در این بخش فهرست تیم‌های ایجاد شده وجود دارد. علاوه بر این می‌توانید اقدام به ایجاد تیم کاری جدید کنید. </div>
                `,
                position: 'left'
            },
            {
                element: document.querySelectorAll('.sidebar .sidebar-content .has-sub.sidebar-item .sidebar-item-sub')[34],
                intro: `
                    <div class="d-block fs-14px primary-color fw-bold"> ابزار های سایت </div>
                    <div class="d-block fs-14px"> میتونیم کابران رو حذف یا اضافه یا ویرایش کنیم و کلا ابزاری برای مدیریت کاربران است </div>
                `,
                position: 'left'
            },
            {
                element: document.querySelectorAll('.sidebar .sidebar-content .has-sub.sidebar-item:not(.sidebar-item-sub)')[2],
                intro: `
                    <div class="d-block fs-14px primary-color fw-bold"> ابزار های سایت </div>
                    <div class="d-block fs-14px"> میتونیم کابران رو حذف یا اضافه یا ویرایش کنیم و کلا ابزاری برای مدیریت کاربران است </div>
                `,
                position: 'left'
            },
            {
                element: document.querySelector('.sidebar .sidebar-content .sidebar-exit-btn'),
                intro: `
                    <div class="d-block fs-14px primary-color fw-bold"> خروج از کارو</div>
                    <div class="d-block fs-14px"> امیدوارم که هیچ وقت از کارو خارج نشی! </div>
                    <div class="d-block fs-14px"> اما هر وقت خواستی خارج بشی کافیه روی دکمه خروج کلیک کنی. </div>
                `,
                position: 'left'
            }
        ],
        nextLabel: ' بعدی ',
        prevLabel: 'قبلی',
        skipLabel: 'بستن',
        doneLabel: 'پایان',
        showProgress: true
    })
    .onchange((event) => {
        // dont let to scroll user
        if(event.classList.contains('introjsFloatingElement'))
            document.body.classList.add('intro-is-showing')

        if(document.querySelector('.dropdown-menu.show'))
            document.querySelector('.dropdown-menu.show').classList.remove('show')

        // if is active a sidebar-item come deactive
        if(document.querySelector('.sidebar-item.has-sub.active') && !event.classList.contains('sidebar-item-sub')){
            document.querySelector('.sidebar-item.has-sub.active').children[1].classList.remove('show')
            document.querySelector('.sidebar-item.has-sub.active').classList.remove('active')
        }

        // for showing correct menu button and sidebar
        if(event && event.classList && event.classList.contains('header-toggle-btn') && window.innerWidth <= 991){
            sidebar.classList.add('show')
            sidebar.style.opacity = 0
            sidebar.style.transition = setSidebarTransition('none')
        }
        if(event && event.classList && event.classList.contains('sidebar-content') && window.innerWidth <= 991){
            sidebar.classList.add('show')
            sidebar.style.opacity = 1;
            sidebar.style.transition = setSidebarTransition('default')
        }

        if(event.classList.contains('sidebar-item') && !event.classList.contains('sidebar-item-sub')){
            if(!sidebar.classList.contains('mini')){
                 // if is active a sidebar-item come deactive
                if(document.querySelector('.sidebar-item.has-sub.active')){
                    document.querySelector('.sidebar-item.has-sub.active').children[1].classList.remove('show')
                    document.querySelector('.sidebar-item.has-sub.active').classList.remove('active')
                }
                
                event.children[1].classList.add('show')
                event.classList.add('active')
            }
        }

        if(event.classList.contains('sidebar-item-sub')){
            let item = null
            let secondItem = event

            for(item; item == null;){
                secondItem = secondItem.parentElement

                if(secondItem.classList.contains('sidebar-item') && secondItem.classList.contains('has-sub') && !secondItem.classList.contains('sidebar-item-sub') )
                    item = secondItem
            }
            
            if(document.querySelector('.sidebar-item.has-sub.active:not(.sidebar-item-sub)') != item){
                document.querySelector('.sidebar-item.has-sub.active').children[1].classList.remove('show')
                document.querySelector('.sidebar-item.has-sub.active').classList.remove('active')
                
                item.classList.add('active')
                item.children[1].classList.add('show')
            }
        }

    })
    .onexit(() => {
        // do let to scroll user
        document.body.classList.remove('intro-is-showing')
        
        // close the sidebar
        sidebar.classList.remove('show')
        sidebar.style.opacity = 1

         // if is active a sidebar-item come deactive
        if(document.querySelector('.sidebar-item.has-sub.active')){
            document.querySelector('.sidebar-item.has-sub.active').children[1].classList.remove('show')
            document.querySelector('.sidebar-item.has-sub.active').classList.remove('active')
        }
        
        // return sidebar transition to default
        sidebar.style.transition = setSidebarTransition('default')
    }) 
    .start();

}