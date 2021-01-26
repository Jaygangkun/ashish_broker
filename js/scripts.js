(function($){
    var req_GET_ATTACHMENTS_LIST = {
        "shipmentId": "shipment"
    }
    var resp_GET_ATTACHMENTS_LIST = {
        "shipmentId": "shipment",
        "documents": [
            {
                "documentName": "pdf name1",
                "documentId": "docId1",
                "documentUrl": "url",
                "pages": [
                    {
                        "pageId": "pid1",
                        "pageUrl": "images/page0.jpg",
                    },
                    {
                        "pageId": "pid2",
                        "pageUrl": "images/page1.png",
                    }
                ]
            },
            {
                "documentName": "pdf name2",
                "documentId": "docId2",
                "documentUrl": "url",
                "pages": [
                    {
                        "pageId": "pid3",
                        "pageUrl": "images/page2.png",
                    },
                    {
                        "pageId": "pid4",
                        "pageUrl": "images/page3.png",
                    }
                ]
            }
        ]
    }

    var req_GET_ANNOTATIONS_TEMPLATE = {
        "imageId": "image131",
	    "customerId": "customer 1 id"
    }
    var resp_GET_ANNOTATIONS_TEMPLATE = {
        "templateId": "ID1241313",
        "imageUrl": "image url",

        "primaryKeyPatterns": [
            {
                "minX": 1313,
                "minY": 234,
                "maxX": 2414,
                "maxY": 2141
            },
            {
                "minX": 1313,
                "minY": 234,
                "maxX": 2414,
                "maxY": 2141
            }
        ],

        "templatePatterns": [
            {
                "rectangleId": 1,
                label: "shipper",
                "minX": 50,
                "minY": 130,
                "maxX": 500,
                "maxY": 230
            },
            {
                "rectangleId": 2,
                label: "consignee",
                "minX": 530,
                "minY": 160,
                "maxX": 1000,
                "maxY": 300
            },
            {
                "rectangleId": 3,
                label: "notify",
                "minX": 50,
                "minY": 260,
                "maxX": 500,
                "maxY": 350
            }
        ]
    }

    var req_CREATE_PRIMARY_KEY = {
        "customerId": "customer 1",
        "pageId": "page id",

        "patterns": [
            {
                "minX": 1313,
                "minY": 234,
                "maxX": 2414,
                "maxY": 2141
            },
            {
                "minX": 1313,
                "minY": 234,
                "maxX": 2414,
                "maxY": 2141
            }
        ]
    }

    var resp_CREATE_PRIMARY_KEY = {
        // "keyFound": 0
        "keyFound": 1
    }

    var req_SAVE_ANNOTATIONS_TEMPLATE = {
        "templateId": "ID1241313",
        "imageUrl": "image url",
        "customerId": "customer 1",

        "primaryKeyPatterns": [
            {
                "minX": 1313,
                "minY": 234,
                "maxX": 2414,
                "maxY": 2141
            },
            {
                "minX": 1313,
                "minY": 234,
                "maxX": 2414,
                "maxY": 2141
            }
        ],

        "templatePatterns": [
            {
                "rectangleId": 1,
                label: "shipper",
                "minX": 131,
                "minY": 142,
                "maxX": 135,
                "maxY": 163
            },
            {
                "rectangleId": 2,
                label: "consignee",
                "minX": 131,
                "minY": 142,
                "maxX": 135,
                "maxY": 163
            },
            {
                "rectangleId": 3,
                label: "notify",
                "minX": 131,
                "minY": 142,
                "maxX": 135,
                "maxY": 163
            },
        ]
    }

    var req_GET_SHIPMENT_DATA = {
        "shipmentId": "shipment"
    }

    var resp_GET_SHIPMENT_DATA = {
        "exporter": {
            "manufacturer": "manufacturer name and address",
            "consignee": "",
            "shipper": "",
            "seller": "",
            "consolidator": "",
            "consignor": "",
            "exporter": "",
            "vendor": "vendor",
            "countryOfExport": "usa",
            "dateOfExport": "mm/dd/yy"
        },
    }

    var req_SET_SHIPMENT_DATA = {
        "shipmentId": "shipment",
	    "shipmentData": {
            "exporter": {
                "manufacturer": "manufacturer name and address",
                "consignee": "",
                "shipper": "",
                "seller": "",
                "consolidator": "",
                "consignor": "",
                "exporter": "",
                "vendor": "vendor",
                "countryOfExport": "usa",
                "dateOfExport": "mm/dd/yy"
            },
        }
    }

    var req_GET_LINE_ITEMS_DATA = {
        "shipmentId": "shipment",
        "invoiceId": "invoice",
        "pageNumber": 1,
        "batchSize": 20
    }

    var resp_GET_LINE_ITEMS_DATA = {
        "invoiceId": "invoice id",
        "pageNumber": 1,
        "batchSize": 20,
        "lineitems":[
            {
                "sku":"sku1",
                "description": "sofa",
            }
        ]
    }

    var req_SET_LINE_ITEMS_DATA = {
        "invoiceId": "invoice id",
        "shipmentId": "shipment",
        "pageNumber": 1,
        "batchSize": 20,
        "lineitems":[
            {
                "sku":"sku1",
                "description": "sofa"
            }
        ]
    }

    var req_GET_TEXT_TEMPLATE_LIST = {
        "customerId": "customer-id"
    }

    var resp_GET_TEXT_TEMPLATE_LIST = {
        "textTemplateId": "text-template-id",
        "customerId": "customer 1",

        "templates": [
            {
                "exporterName": "exporter name",
                "shipmentData": "shipment id or data",
                "timestamp": 1414141424151
            },
            {
                "exporterName": "exporter name",
                "shipmentData": "shipment id or data",
                "timestamp": 1414141424151
            },
            {
                "exporterName": "exporter name",
                "shipmentData": "shipment id or data",
                "timestamp": 1414141424151
            }
        ]
    }

    var req_GET_TEXT_TEMPLATE_DATA = {
        "textTemplateId": "template id",
	    "customerId": "customer-Id"
    }

    var resp_GET_TEXT_TEMPLATE_DATA = {
        "textTemplateId": "template id",
        "customerId": "customer 1",
        "group": "EXPORTER",
        "manufacturer": {
            "stret": "street name",
            "city": "washington",
            "state": "CA",
            "zipCode": 113131,
            "phone": 1411313141,
            "email": "ajnfal@gmail.com"
        },
        "consignee": {
            "stret": "street name",
            "city": "washington",
            "state": "CA",
            "zipCode": 113131,
            "phone": 1411313141,
            "email": "ajnfal@gmail.com"
        }
    }

    var req_SET_TEXT_TEMPLATE_DATA = {
        "customerId": "customer 1",
        "group": "EXPORTER",
        "manufacturer": {
            "stret": "street name",
            "city": "washington",
            "state": "CA",
            "zipCode": 113131,
            "phone": 1411313141,
            "email": "ajnfal@gmail.com"
        },
        "consignee": {
            "stret": "street name",
            "city": "washington",
            "state": "CA",
            "zipCode": 113131,
            "phone": 1411313141,
            "email": "ajnfal@gmail.com"
        }
    }

    function initShipmentsDetalsPage(){                
        var stage = new Konva.Stage({
            container: 'document_preview',
        });

        var page_padding = 20;
        var stage_width = $('#document_preview').outerWidth();
        var stage_height = 0;
        var doc_layers = {};
        var doc_trs = {};
        var doc_draw_top = 0;
        var cur_doc_layer = null;
        var cur_doc_tr = null;
        var cur_pattern_rect_draw = null;
        var cur_pattern_rect_draw_clone = null;

        var draw_x1 = null;
        var draw_y1 = null;
        var draw_x2 = null;
        var draw_y2 = null;

        var drawing_pattern = false;
        var draw_doc_id = null;
        var draw_doc_index = null;
        var draw_page_index = null;
        var draw_page_id = null;

        var draw_clicking = false;

        var doc_page_images = {
            // 'doc_id': {
            //     loaded: false,
            //     'page_id' : 'bk_image'
            // }
        };

        var pattern_fill = '#FFE20036';
        var pattern_stroke = '#F4C816';
        var pattern_stroke_width = 2;

        var isEdit = true;
        
        // events listener
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

        // load attachments list
        function loadAttachmentsList(){
            $('#documents_btn_list_wrap').html('');

            for(var index = 0; index < resp_GET_ATTACHMENTS_LIST.documents.length; index ++){
                var document_btn = $('#document_btn').clone();
                $(document_btn).find('.shipments-document-title').text(resp_GET_ATTACHMENTS_LIST.documents[index].documentName);
                $(document_btn).find('.shipments-document-wrap').attr('doc-id', resp_GET_ATTACHMENTS_LIST.documents[index].documentId);
                $(document_btn).find('.shipments-document-wrap').attr('doc-index', index);
    
                $('#documents_btn_list_wrap').append($(document_btn).html());
                
                loadDocPageImages(index, 0);
            }

            syncDocPageImageLoaded().then(function(){
                initDocLayers();
                for(var index = 0; index < resp_GET_ATTACHMENTS_LIST.documents.length; index ++){
                    getAnnotationTemplates(index, false)
                }
            })
        }

        loadAttachmentsList();

        function loadDocPageImages(doc_index, page_index){
            var doc_id = resp_GET_ATTACHMENTS_LIST.documents[doc_index].documentId;
            if(page_index < resp_GET_ATTACHMENTS_LIST.documents[doc_index].pages.length){
                var imageObj = new Image();
                imageObj.src = resp_GET_ATTACHMENTS_LIST.documents[doc_index].pages[page_index].pageUrl;
                imageObj.onload = function(){
                    var page_id = resp_GET_ATTACHMENTS_LIST.documents[doc_index].pages[page_index].pageId;

                    var img_width = stage_width;
                    var img_height = this.height * stage_width / this.width;
                    var bk_img = new Konva.Image({
                        x: 0,
                        y: doc_draw_top,
                        image: this,
                        width: img_width,
                        height: img_height,
                        name: 'page-image',
                        doc_id: doc_id,
                        doc_index: doc_index,
                        page_index: page_index,
                        page_id: page_id
                    });

                    if(!doc_page_images.hasOwnProperty(doc_id)){
                        doc_page_images[doc_id] = {}
                    }
        
                    if(!doc_page_images[doc_id].hasOwnProperty(page_id)){
                        doc_page_images[doc_id][page_id] = {}
                    }

                    doc_page_images[doc_id][page_id] = bk_img;

                    loadDocPageImages(doc_index, page_index + 1);
                }
            }
            else{
                doc_page_images[doc_id]['loaded'] = true;
            }
        }

        function syncDocPageImageLoaded(){
            return new Promise((resolve, reject) => {
                function checkDocPageImagesLoaded(){
                    var loadedAll = true;
                    for(var index = 0; index < resp_GET_ATTACHMENTS_LIST.documents.length; index ++){
                        var doc_id = resp_GET_ATTACHMENTS_LIST.documents[index].documentId;
                        if(!doc_page_images.hasOwnProperty(doc_id)){
                            loadedAll = false;
                        }
                        else if(!doc_page_images[doc_id].loaded){
                            loadedAll = false;
                        }
                    }

                    if(!loadedAll){
                        setTimeout(function(){
                            checkDocPageImagesLoaded();
                        }, 100);
                    }
                    else{
                        resolve();
                    }
                }

                checkDocPageImagesLoaded();
            })
        }
        function initDocLayers(){
            if(cur_doc_layer == null){
                cur_doc_layer = new Konva.Layer({
                    // doc_id: doc_id,
                    // doc_index: doc_index
                });                
                stage.add(cur_doc_layer);
            }

            if(cur_doc_tr == null){
                // cur_doc_tr = new Konva.Transformer({
                //     rotateEnabled: false,
                // });

                // cur_doc_layer.add(cur_doc_tr);
            }

            if(cur_pattern_rect_draw == null){                
                cur_pattern_rect_draw = new Konva.Rect({
                    fill: pattern_fill,
                    // opacity: 0.5,
                    stroke: pattern_stroke,
                    strokeWidth: pattern_stroke_width,
                    draggable: true,
                });

                cur_doc_layer.add(cur_pattern_rect_draw);
                cur_pattern_rect_draw.visible(false);
            }
            
            cur_doc_layer.on('mousedown touchstart', (e) => {
                if(!isEdit){
                    return;
                }
                // do nothing if we mousedown on eny shape
                if (!e.target.hasName('page-image')) {
                    return;
                }

                console.log('e.target', e.target);

                draw_doc_id = e.target.attrs.doc_id;
                draw_doc_index = e.target.attrs.doc_index;
                draw_page_index = e.target.attrs.page_index;
                draw_page_id = e.target.attrs.page_id;

                draw_x1 = stage.getPointerPosition().x;
                draw_y1 = stage.getPointerPosition().y;
                draw_x2 = stage.getPointerPosition().x;
                draw_y2 = stage.getPointerPosition().y;
        
                cur_pattern_rect_draw.visible(true);
                cur_pattern_rect_draw.width(0);
                cur_pattern_rect_draw.height(0);
                cur_doc_layer.draw();

                drawing_pattern = false;
                draw_clicking = true;
            });
            
            cur_doc_layer.on('mousemove touchmove', () => {
                if(!isEdit){
                    return;
                }
                // no nothing if we didn't start selection
                if (!cur_pattern_rect_draw.visible()) {
                    return;
                }

                if(!draw_clicking){
                    return;
                }

                draw_x2 = stage.getPointerPosition().x;
                draw_y1 = stage.getPointerPosition().y;

                if(cur_pattern_rect_draw_clone == null){
                    cur_pattern_rect_draw_clone = cur_pattern_rect_draw.clone();
                    cur_doc_layer.add(cur_pattern_rect_draw_clone);
                }

                cur_pattern_rect_draw_clone.setAttrs({
                    x: Math.min(draw_x1, draw_x2),
                    y: Math.min(draw_y1, draw_y2),
                    width: Math.abs(draw_x2 - draw_x1),
                    height: Math.abs(draw_y2 - draw_y1),
                }); 

                cur_doc_layer.batchDraw();

                drawing_pattern = true;
                
            });
    
            cur_doc_layer.on('mouseup touchend', (e) => {
                draw_clicking = false;
                if(!isEdit){
                    return;
                }
                // no nothing if we didn't start selection
                if (!cur_pattern_rect_draw.visible()) {
                    return;
                }

                console.log(e);
                // update visibility in timeout, so we can check it in click event
                setTimeout(() => {        
                    
                    if(drawing_pattern && cur_pattern_rect_draw_clone.width() > 50 && cur_pattern_rect_draw_clone.height() > 50){
                        var tindex = resp_GET_ANNOTATIONS_TEMPLATE['templatePatterns'].length;

                        resp_GET_ANNOTATIONS_TEMPLATE['templatePatterns'].push({
                            "rectangleId": tindex,
                            label: "new created",
                            "minX": cur_pattern_rect_draw_clone.x(),
                            "minY": cur_pattern_rect_draw_clone.y(),
                            "maxX": cur_pattern_rect_draw_clone.x() + cur_pattern_rect_draw_clone.width(),
                            "maxY": cur_pattern_rect_draw_clone.y() + cur_pattern_rect_draw_clone.height()
                        })
    
                        var pattern_options_id = 'document_pattern_options-docid' + draw_doc_id + '-docind' + draw_doc_index + '-pind' + draw_page_index + '-pind' + tindex;
                        cur_pattern_rect_draw_clone.setAttrs({
                            name: 'template-pattern-rect',
                            pattern_options_id: pattern_options_id
                        })
    
                        addPatternRectListener(draw_doc_id, draw_page_id, cur_pattern_rect_draw_clone);
    
                        if($('#' + pattern_options_id).length == 0){
                            var pattern_options = $('#document_pattern_options').clone();
                        
                            $(pattern_options).find('select').attr('id', pattern_options_id);
                            $('#document_preview_list').append($(pattern_options).html());
                            var pattern_options_top = cur_pattern_rect_draw_clone.y();
                            var pattern_options_left = cur_pattern_rect_draw_clone.x() + cur_pattern_rect_draw_clone.width() - $('#' + pattern_options_id).outerWidth();
                            $('#' + pattern_options_id).attr('style', 'top: ' + pattern_options_top + 'px;' + 'left: ' + pattern_options_left + 'px');
                        }     
                        
                        cur_pattern_rect_draw_clone = null;
    
                        cur_pattern_rect_draw.visible(false);
                        cur_doc_layer.batchDraw();

                        drawing_pattern = false;
                    }
                    
                });
        
                // var shapes = stage.find('.rect').toArray();
                // var box = cur_pattern_rect_draw.getClientRect();
                // var selected = shapes.filter((shape) =>
                //     Konva.Util.haveIntersection(box, shape.getClientRect())
                // );
                // cur_doc_tr.nodes(selected);
                // cur_doc_layer.batchDraw();
            });
        
            // clicks should select/deselect shapes
            stage.on('click tap', function (e) {
                if(!isEdit){
                    return;
                }
                // if we are selecting with rect, do nothing
                // if (pattern_rect_new.visible()) {
                //     return;
                // }
        
                // if click on empty area - remove all selections
                if (e.target.hasName('page-image')) {
                    if(cur_doc_tr){
                        cur_doc_tr.nodes([]);
                    }
                    
                    cur_doc_layer.draw();
                    return;
                }
        
                // // do nothing if clicked NOT on our rectangles
                // if (!e.target.hasName('template-pattern-rect')) {
                //     return;
                // }
        
                
                // // do we pressed shift or ctrl?
                // const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
                // const isSelected = cur_doc_tr.nodes().indexOf(e.target) >= 0;
        
                // if (!metaPressed && !isSelected) {
                //     // if no key pressed and the node is not selected
                //     // select just one
                //     cur_doc_tr.nodes([e.target]);
                // } else if (metaPressed && isSelected) {
                //     // if we pressed keys and node was selected
                //     // we need to remove it from selection:
                //     const nodes = cur_doc_tr.nodes().slice(); // use slice to have new copy of array
                //     // remove node from array
                //     nodes.splice(nodes.indexOf(e.target), 1);
                //     cur_doc_tr.nodes(nodes);
                // } else if (metaPressed && !isSelected) {
                //     // add the node into selection
                //     const nodes = cur_doc_tr.nodes().concat([e.target]);
                //     cur_doc_tr.nodes(nodes);
                // }
                // cur_doc_layer.draw();
            });
        }
        function getAnnotationTemplates(doc_index, clear){
            if(clear){
                $('#document_preview_list').html('');
                doc_draw_top = 0;
                stage_height = 0;
            }

            if(doc_index >= resp_GET_ATTACHMENTS_LIST.documents.length){
                return;
            }

            drawPage(doc_index, 0);
        }

        function drawPage(doc_index, pindex){            
            if(pindex < resp_GET_ATTACHMENTS_LIST.documents[doc_index].pages.length){
                var doc_id = resp_GET_ATTACHMENTS_LIST.documents[doc_index]['documentId'];
                var page_id = resp_GET_ATTACHMENTS_LIST.documents[doc_index]['pages'][pindex]['pageId'];
                var bk_img = doc_page_images[doc_id][page_id];
                var img_height = bk_img.attrs.height;

                bk_img.y(doc_draw_top);
                cur_doc_layer.add(bk_img);
                // draw template patterns
                var template_patterns = resp_GET_ANNOTATIONS_TEMPLATE.templatePatterns;
                for(var tindex = 0; tindex < template_patterns.length; tindex ++){
                    
                    createTemplatePattern(doc_id, doc_index, page_id, pindex, tindex, template_patterns[tindex], bk_img)
                }

                doc_draw_top += img_height + page_padding;

                stage_height += img_height + page_padding;

                drawPage(doc_index, pindex + 1);
            }
            else{
                cur_doc_layer.draw();
                stage.size({width: stage_width, height: stage_height});
            }
        }

        function movePatternOptions(prect){                                
            var pattern_options_id = prect.attrs.pattern_options_id;
            
            var pattern_options_top = prect.attrs.y;
            var pattern_options_left = prect.attrs.x + prect.attrs.scaleX * prect.attrs.width - $('#' + pattern_options_id).outerWidth();

            console.log('movePatternOptions:', pattern_options_id);

            $('#' + pattern_options_id).attr('style', 'top: ' + pattern_options_top + 'px;' + 'left: ' + pattern_options_left + 'px');
        }

        function addPatternRectListener(doc_id, page_id, pattern_rect){
            pattern_rect.on('transformstart', function () {
                console.log('transform start');
            });
    
            pattern_rect.on('dragmove', function (e) {
                movePatternOptions(this);
            });

            pattern_rect.on('transform', function (e) {
                movePatternOptions(this);
                console.log('transform', this);
            });
    
            pattern_rect.on('transformend', function () {
                console.log('transform end');
            });

            pattern_rect.on('click tap', function (e) {                    
                if(!isEdit){
                    return;
                }

                // if click on empty area - remove all selections
                // if (e.target === bk_img) {
                //     doc_trs[doc_id].nodes([]);
                //     cur_doc_layer.draw();
                //     return;
                // }

                // tr.nodes(this.getChildren());
                // doc_trs[doc_id].nodes([this]);
                // doc_layers[doc_id].draw();
                if(cur_doc_tr == null){
                    cur_doc_tr = new Konva.Transformer({
                        rotateEnabled: false,
                    });
    
                    cur_doc_layer.add(cur_doc_tr);
                }
                cur_doc_tr.nodes([e.target]);
                cur_doc_layer.batchDraw();
            });

        }

        function createTemplatePattern(doc_id, doc_index, page_id, pindex, tindex, template_pattern=null, bk_img){
            var pattern_x = template_pattern.minX
            var pattern_y = doc_draw_top + template_pattern.minY;
            var pattern_width = template_pattern.maxX - template_pattern.minX;
            var pattern_height = template_pattern.maxY - template_pattern.minY;

            var pattern_options_id = 'document_pattern_options-docid' + doc_id + '-docind' + doc_index + '-pind' + pindex + '-pind' + tindex;

            var pattern_rect = new Konva.Rect({
                x: pattern_x,
                y: pattern_y,
                width: pattern_width,
                height: pattern_height,
                fill: pattern_fill,
                // opacity: 0.5,
                stroke: pattern_stroke,
                strokeWidth: pattern_stroke_width,
                draggable: true,
                name: 'template-pattern-rect',
                pattern_options_id: pattern_options_id
            });
            // doc_layers[doc_id].add(pattern_rect);        
            cur_doc_layer.add(pattern_rect);
            
            addPatternRectListener(doc_id, page_id, pattern_rect);
            
            if($('#' + pattern_options_id).length == 0){
                var pattern_options = $('#document_pattern_options').clone();
            
                $(pattern_options).find('select').attr('id', pattern_options_id);
                $('#document_preview_list').append($(pattern_options).html());
                var pattern_options_top = doc_draw_top + template_pattern.minY;
                var pattern_options_left = template_pattern.maxX - $('#' + pattern_options_id).outerWidth();
                $('#' + pattern_options_id).attr('style', 'top: ' + pattern_options_top + 'px;' + 'left: ' + pattern_options_left + 'px');
            }        
            
        }

        $(document).on('click', '.shipments-document-wrap', function(){
            var doc_id = $(this).attr('doc-id');
            var doc_index = $(this).attr('doc-index');
            $('.shipments-document-wrap').removeClass('active');
            $(this).addClass('active');
            getAnnotationTemplates(doc_index, true);
        })
    }

    $(document).ready(function(){
        // alert('ready');
        if($('#page_shipments_details').length > 0){
            initShipmentsDetalsPage();
        }
    })

    $(document).on('click', '.btn-document-favorite', function(){
        if($(this).hasClass('favorite')){
            $(this).removeClass('favorite');
        }
        else{
            $(this).addClass('favorite');
        }
    })

    
})(jQuery)