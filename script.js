const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
document.querySelector('h3').addEventListener('click',function(e) {
    let remove =  e.target.parentNode
    remove = remove()
})