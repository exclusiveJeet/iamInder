function resizeToMinimum(w, h) {
    w = w > window.innerWidth ? w : window.innerWidth;
    h = h > window.innerHeight ? h : window.innerHeight;
    window.resizeTo(w, h);
};
window.addEventListener('resize', function () { resizeToMinimum(640, 620) }, false)