(function($){
    $(document).ready(function(){
        // alert('ready');
    })

    $(document).on('click', '.btn-document-favorite', function(){
        if($(this).hasClass('favorite')){
            $(this).removeClass('favorite');
        }
        else{
            $(this).addClass('favorite');
        }
    })

    $(document).on('click', '.document-detail-sidebar-wrap-header .btn-document-menu', function(){
        $(this).parents('.document-detail-sidebar-wrap').find('.document-detail-sidebar-wrap-root-menu-content').show();
    })

    $(document).on('click', '.document-detail-sidebar-wrap-root-menu-content .btn-document-menu', function(){
        $(this).parents('.document-detail-sidebar-wrap').find('.document-detail-sidebar-wrap-root-menu-content').hide();
    })

    $(document).on('click', '.document-detail-sidebar-wrap-root-menu-content .document-detail-sidebar-wrap-menu-link', function(){
        $(this).parents('.document-detail-sidebar-wrap').find('.document-detail-sidebar-wrap-root-menu-content').hide();
        $(this).parents('.document-detail-sidebar-wrap').find('.document-detail-sidebar-wrap-sub-menu-content').show();
    })

    $(document).on('click', '.document-detail-sidebar-wrap-sub-menu-content .btn-document-menu', function(){
        $(this).parents('.document-detail-sidebar-wrap').find('.document-detail-sidebar-wrap-sub-menu-content').hide();
    })

    $(document).on('click', '.document-detail-sidebar-wrap-sub-menu-content .document-detail-sidebar-wrap-sub-menu-link', function(){
        $(this).parents('.document-detail-sidebar-wrap').find('.document-detail-sidebar-wrap-sub-menu-content').hide();
    })
})(jQuery)