$(function () {
    //share icons
    let $shareIconDiv = $('.iconsHolder');
    let $shareIcon = $('.fa-share-alt');

    $shareIcon.on('click', onShareIconClick);

    function onShareIconClick(ev) {
        $shareIconDiv.toggleClass('visible');
    }

    //video
    let goToArr = $('#go-to-array');
    let video = $('#youtube');

    goToArr.on('click', changeVideo);


    function changeVideo(ev) {
        video.attr('src', 'https://www.youtube.com/embed/cj4lCdBJRrw?list=PLF4lVL1sPDSnWZrG7cC35Uag1bx3We8le&start=450');
    }


    let videoLink = $('#video-link');
    console.log(videoLink);
    videoLink.on('click', activeState);

    function activeState(ev) {
        videoLink.attr('border-bottom:', '1px solid: green');
    }
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});