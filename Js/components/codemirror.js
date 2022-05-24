const code = document.querySelectorAll('.codebox-content')

code.forEach(item => {

    CodeMirror.fromTextArea(item, {
        mode: 'xml',
        theme: 'ayu-dark',
        lineNumbers: true
    })

})

$(".codebox").mCustomScrollbar({
    theme: "dark-thin"
}); 