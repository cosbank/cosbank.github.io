function gold1() {
    var btnj = $('#gold1')
    var btn = document.getElementById('gold1')
    btn.setAttribute('onclick', 'platinum1();')
    btnj.text("PLATINUM")
    btnj.removeClass('text-warning')
    btnj.addClass('text-primary')
    disable1();
}
function platinum1() {
    var btnj = $('#gold1')
    var btn = document.getElementById('gold1')
    btn.setAttribute('onclick', 'silver1();')
    btnj.text("SILVER")
    btnj.removeClass('text-primary')
    btnj.addClass('text-secondary')
    disable1();
}
function silver1() {
    var btnj = $('#gold1')
    var btn = document.getElementById('gold1')
    btn.setAttribute('onclick', 'gold1();')
    btnj.text("GOLD")
    btnj.removeClass('text-secondary')
    btnj.addClass('text-warning')
    disable1();
}

function gold2() {
    var btnj = $('#gold2')
    var btn = document.getElementById('gold2')
    btn.setAttribute('onclick', 'platinum2();')
    btnj.text("PLATINUM")
    btnj.removeClass('text-warning')
    btnj.addClass('text-primary')
    disable2();
}
function platinum2() {
    var btnj = $('#gold2')
    var btn = document.getElementById('gold2')
    btn.setAttribute('onclick', 'silver2();')
    btnj.text("SILVER")
    btnj.removeClass('text-primary')
    btnj.addClass('text-secondary')
    disable2();
}
function silver2() {
    var btnj = $('#gold2')
    var btn = document.getElementById('gold2')
    btn.setAttribute('onclick', 'gold2();')
    btnj.text("GOLD")
    btnj.removeClass('text-secondary')
    btnj.addClass('text-warning')
    disable2();
}

function silver3() {
    var btnj = $('#silver3')
    var btn = document.getElementById('silver3')
    btn.setAttribute('onclick', 'gold3();')
    btnj.text("GOLD")
    btnj.removeClass('text-secondary')
    btnj.addClass('text-warning')
    disable3();
}
function gold3() {
    var btnj = $('#silver3')
    var btn = document.getElementById('silver3')
    btn.setAttribute('onclick', 'platinum3();')
    btnj.text("PLATINUM")
    btnj.removeClass('text-warning')
    btnj.addClass('text-primary')
    disable3();
}
function platinum3() {
    var btnj = $('#silver3')
    var btn = document.getElementById('silver3')
    btn.setAttribute('onclick', 'silver3();')
    btnj.text("SILVER")
    btnj.removeClass('text-primary')
    btnj.addClass('text-secondary')
    disable3();
}

function silver4() {
    var btnj = $('#silver4')
    var btn = document.getElementById('silver4')
    btn.setAttribute('onclick', 'gold4();')
    btnj.text("GOLD")
    btnj.removeClass('text-secondary')
    btnj.addClass('text-warning')
    disable4();
}
function gold4() {
    var btnj = $('#silver4')
    var btn = document.getElementById('silver4')
    btn.setAttribute('onclick', 'platinum4();')
    btnj.text("PLATINUM")
    btnj.removeClass('text-warning')
    btnj.addClass('text-primary')
    disable4();
}
function platinum4() {
    var btnj = $('#silver4')
    var btn = document.getElementById('silver4')
    btn.setAttribute('onclick', 'silver4();')
    btnj.text("SILVER")
    btnj.removeClass('text-primary')
    btnj.addClass('text-secondary')
    disable4();
}

function platinum5() {
    var btnj = $('#platinum5')
    var btn = document.getElementById('platinum5')
    btn.setAttribute('onclick', 'silver5();')
    btnj.text("SILVER")
    btnj.removeClass('text-primary')
    btnj.addClass('text-secondary')
    disable5();
}
function silver5() {
    var btnj = $('#platinum5')
    var btn = document.getElementById('platinum5')
    btn.setAttribute('onclick', 'gold5();')
    btnj.text("GOLD")
    btnj.removeClass('text-secondary')
    btnj.addClass('text-warning')
    disable5();
}
function gold5() {
    var btnj = $('#platinum5')
    var btn = document.getElementById('platinum5')
    btn.setAttribute('onclick', 'platinum5();')
    btnj.text("PLATINUM")
    btnj.removeClass('text-warning')
    btnj.addClass('text-primary')
    disable5();
}

function platinum6() {
    var btnj = $('#platinum6')
    var btn = document.getElementById('platinum6')
    btn.setAttribute('onclick', 'silver6();')
    btnj.text("SILVER")
    btnj.removeClass('text-primary')
    btnj.addClass('text-secondary')
    disable6();
}
function silver6() {
    var btnj = $('#platinum6')
    var btn = document.getElementById('platinum6')
    btn.setAttribute('onclick', 'gold6();')
    btnj.text("GOLD")
    btnj.removeClass('text-secondary')
    btnj.addClass('text-warning')
    disable6();
}
function gold6() {
    var btnj = $('#platinum6')
    var btn = document.getElementById('platinum6')
    btn.setAttribute('onclick', 'platinum6();')
    btnj.text("PLATINUM")
    btnj.removeClass('text-warning')
    btnj.addClass('text-primary')
    disable6();
}