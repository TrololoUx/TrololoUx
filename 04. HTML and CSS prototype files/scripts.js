$(function () {
    //share icons
    let $shareIconDiv = $('.iconsHolder');
    let $shareIcon = $('.fa-share-alt');

    $shareIcon.on('click', onShareIconClick);

    function onShareIconClick(ev) {
        $shareIconDiv.toggleClass('visible');
    }

    //video content toggle
    let $contentBar = $('.video-content .fa-bars');
    let $contentDiv = $('#video-content-inner');
    let $contentCloseIcon = $('#video-content-inner .fa-close');

    $contentBar.on('click', openVideoContent);
    $contentCloseIcon.on('click', closeVideoContent);

    function openVideoContent(ev) {
        $contentBar.fadeOut();
        $contentDiv.addClass('visible');
    }

    function closeVideoContent(ev) {
        $contentBar.fadeIn();
        $contentDiv.removeClass('visible');
    }

    //video controls
    let goToArr = $('#go-to-array');
    let goToAccessing = $('#go-to-accessing');
    let goToProcessing = $('#go-to-processing');
    let goToDynamic = $('#go-to-dynamic');
    let goToDeClaring = $('#go-to-declaring');
    let video = $('#youtube');

    goToArr.on('click', changeVideo1);
    goToAccessing.on('click', changeVideo2);
    goToProcessing.on('click', changeVideo3);
    goToDynamic.on('click', changeVideo4);
    goToDeClaring.on('click', changeVideo5);


    function changeVideo1(ev) {
        video.attr('src', 'https://www.youtube.com/embed/ulOX2TGdt4I?start=10');
    }

    function changeVideo2(ev) {
        video.attr('src', 'https://www.youtube.com/embed/ulOX2TGdt4I?start=300');
    }

    function changeVideo3(ev) {
        video.attr('src', 'https://www.youtube.com/embed/ulOX2TGdt4I?start=321');
    }

    function changeVideo4(ev) {
        video.attr('src', 'https://www.youtube.com/embed/ulOX2TGdt4I?start=534');
    }

    function changeVideo5(ev) {
        video.attr('src', 'https://www.youtube.com/embed/ulOX2TGdt4I?start=1002');
    }


    //add note controls
    let $noteIcon = $(".video-add-note .fa-edit");
    let $noteDiv = $("#video-add-note");
    let $noteCloseIIcon = $("#video-add-note .fa-close");

    $noteIcon.on('click', openNewNote);
    $noteCloseIIcon.on('click', closeNewNote);

    function openNewNote(ev) {
        $contentBar.fadeOut();
        $noteIcon.fadeOut();
        $noteDiv.addClass('visible');
    }

    function closeNewNote(ev) {
        $contentBar.fadeIn();
        $noteIcon.fadeIn();
        $noteDiv.removeClass('visible');
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