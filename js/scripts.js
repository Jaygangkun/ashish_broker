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
                        "pageId": "page id",
                        "pageUrl": "https://docs-image.s3.amazonaws.com/Bill-of-Lading_1-1.jpg",
                    },
                    {
                        "pageId": "page id",
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
                        "pageId": "page id",
                        "pageUrl": "images/page2.png",
                    },
                    {
                        "pageId": "page id",
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
        var doc_draw_top = 0;
        var cur_doc_layer = null;

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

                getAnnotationTemplates(resp_GET_ATTACHMENTS_LIST.documents[index].documentId, index, false)
            }
        }

        loadAttachmentsList();
        
        function getAnnotationTemplates(doc_id, doc_index, clear){

            if(clear){
                $('#document_preview_list').html('');
                doc_draw_top = 0;
                stage_height = 0;
            }

            if(doc_index >= resp_GET_ATTACHMENTS_LIST.documents.length){
                return;
            }

            if(!doc_layers.hasOwnProperty(doc_id)){
                var doc_layer = new Konva.Layer();
                stage.add(doc_layer);
                doc_layers[doc_id] = doc_layer;
            }
            
            cur_doc_layer = doc_layers[doc_id];

            // calculating stage heights based on images to show
            var pages = resp_GET_ATTACHMENTS_LIST.documents[doc_index].pages;

            function drawPage(doc_id, doc_index, pindex){
                if(pindex < pages.length){
                    var imageObj = new Image();
                    imageObj.src = pages[pindex].pageUrl;
                    imageObj.onload = function(){
                        var img_width = stage_width;
                        var img_height = this.height * stage_width / this.width;
                        var bk_img = new Konva.Image({
                            x: 0,
                            y: doc_draw_top,
                            image: this,
                            width: img_width,
                            height: img_height,
                            page_index: pindex,
                            name: 'page-image'
                        });

                        cur_doc_layer.add(bk_img);


                        // draw template patterns
                        var template_patterns = resp_GET_ANNOTATIONS_TEMPLATE.templatePatterns;
                        for(var tindex = 0; tindex < template_patterns.length; tindex ++){
                            var tpattern = template_patterns[tindex];
                            var pattern_x = template_patterns[tindex].minX
                            var pattern_y = doc_draw_top + template_patterns[tindex].minY;
                            var pattern_width = template_patterns[tindex].maxX - template_patterns[tindex].minX;
                            var pattern_height = template_patterns[tindex].maxY - template_patterns[tindex].minY;

                            var pattern_fill = '#FFE20036';
                            var pattern_stroke = '#F4C816';
                            var pattern_stroke_width = 2;

                            var pattern_options_id = 'document_pattern_options-' + doc_id + '-' + doc_index + '-' + pindex + '-' + tindex;

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
                            cur_doc_layer.add(pattern_rect);           
                            
                            var pattern_options_id = 'document_pattern_options-docid' + doc_id + '-docind' + doc_index + '-pind' + pindex + '-pind' + tindex;
                            if($('#' + pattern_options_id).length == 0){
                                var pattern_options = $('#document_pattern_options').clone();
                            
                                $(pattern_options).find('select').attr('id', pattern_options_id);
                                $('#document_preview_list').append($(pattern_options).html());
                                var pattern_options_top = doc_draw_top + template_patterns[tindex].minY;
                                var pattern_options_left = template_patterns[tindex].maxX - $('#' + pattern_options_id).outerWidth();
                                $('#' + pattern_options_id).attr('style', 'top: ' + pattern_options_top + 'px;' + 'left: ' + pattern_options_left + 'px');
                            }

                            function movePatternOptions(prect){
                                patter
                            }

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
                            

                            var pattern_text_label_width = 100;
                            var pattern_text_label_height = 10;
                            var pattern_text_padding = 10;
                            var pattern_text_rect_x = template_patterns[tindex].maxX - pattern_text_label_width - pattern_text_padding * 2;
                            var pattern_text_rect_y = doc_draw_top + template_patterns[tindex].minY;
                            var pattern_rect_fill = '#000000';
                            var pattern_text_rect = new Konva.Rect({
                                x: pattern_text_rect_x,
                                y: pattern_text_rect_y,
                                width: pattern_text_label_width + pattern_text_padding * 2,
                                height: pattern_text_label_height + pattern_text_padding * 2,
                                fill: pattern_rect_fill,
                                // opacity: 0.5,
                                // stroke: pattern_stroke,
                                // strokeWidth: pattern_stroke_width,
                                draggable: false,
                                name: 'template-pattern-label'
                            });
                            // cur_doc_layer.add(pattern_text_rect);

                            var pattern_text_x = template_patterns[tindex].maxX - pattern_text_label_width;
                            var pattern_text_y = doc_draw_top + template_patterns[tindex].minY + 10;
                            var pattern_text = new Konva.Text({
                                x: pattern_text_x,
                                y: pattern_text_y,
                                text: template_patterns[tindex].label,
                                fontSize: 10,
                                lineHeight: 1,
                                fontWeight: 400,
                                fontFamily: 'Poppins',
                                fill: '#FFFFFF',
                                draggable: false,
                            })

                            var pattern_group_name = 'template-pattern-group-' + doc_id + '-' + doc_index + '-' + pindex + '-' + tindex;
                            pattern_group_name = 'template-pattern-group';
                            var pattern = new Konva.Group({
                                draggable: true,
                                name: pattern_group_name,
                            });
                            // pattern.add(pattern_rect, pattern_text_rect, pattern_text);
                            // cur_doc_layer.add(pattern_text);
                            // cur_doc_layer.add(pattern);

                            var tr = new Konva.Transformer({
                                rotateEnabled: false,
                            });
                            cur_doc_layer.add(tr);
                            // cur_doc_layer.draw();

                            var selectionRectangle = new Konva.Rect({
                                fill: pattern_fill,
                                // opacity: 0.5,
                                stroke: pattern_stroke,
                                strokeWidth: pattern_stroke_width,
                            });
                            cur_doc_layer.add(selectionRectangle);
                        
                            var x1, y1, x2, y2;
                            stage.on('mousedown touchstart', (e) => {
                                if(!isEdit){
                                    return;
                                }
                                // do nothing if we mousedown on eny shape
                                console.log(e.target);
                                if (e.target !== bk_img) {
                                    return;
                                }
                                x1 = stage.getPointerPosition().x;
                                y1 = stage.getPointerPosition().y;
                                x2 = stage.getPointerPosition().x;
                                y2 = stage.getPointerPosition().y;
                        
                                selectionRectangle.visible(true);
                                selectionRectangle.width(0);
                                selectionRectangle.height(0);
                                cur_doc_layer.draw();
                            });
                            
                            stage.on('mousemove touchmove', () => {
                                if(!isEdit){
                                    return;
                                }
                                // no nothing if we didn't start selection
                                if (!selectionRectangle.visible()) {
                                    return;
                                }
                                x2 = stage.getPointerPosition().x;
                                y2 = stage.getPointerPosition().y;
                        
                                selectionRectangle.setAttrs({
                                    x: Math.min(x1, x2),
                                    y: Math.min(y1, y2),
                                    width: Math.abs(x2 - x1),
                                    height: Math.abs(y2 - y1),
                                });
                                cur_doc_layer.batchDraw();
                            });
                    
                            stage.on('mouseup touchend', () => {
                                if(!isEdit){
                                    return;
                                }
                                // no nothing if we didn't start selection
                                if (!selectionRectangle.visible()) {
                                    return;
                                }
                                // update visibility in timeout, so we can check it in click event
                                setTimeout(() => {                                    

                                    var new_pattern = selectionRectangle.clone();
                                    cur_doc_layer.add(new_pattern);

                                    selectionRectangle.visible(false);
                                    cur_doc_layer.batchDraw();
                                });
                        
                                var shapes = stage.find('.rect').toArray();
                                var box = selectionRectangle.getClientRect();
                                var selected = shapes.filter((shape) =>
                                    Konva.Util.haveIntersection(box, shape.getClientRect())
                                );
                                console.log('selected:', selected);
                                tr.nodes(selected);
                                cur_doc_layer.batchDraw();
                            });
                        
                            // clicks should select/deselect shapes
                            stage.on('click tap', function (e) {
                                if(!isEdit){
                                    return;
                                }
                                // if we are selecting with rect, do nothing
                                // if (selectionRectangle.visible()) {
                                //     return;
                                // }
                        
                                // if click on empty area - remove all selections
                                if (e.target === bk_img) {
                                    tr.nodes([]);
                                    cur_doc_layer.draw();
                                    return;
                                }
                        
                                // do nothing if clicked NOT on our rectangles
                                if (!e.target.hasName('rect')) {
                                    return;
                                }
                        
                                // do we pressed shift or ctrl?
                                const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
                                const isSelected = tr.nodes().indexOf(e.target) >= 0;
                        
                                if (!metaPressed && !isSelected) {
                                    // if no key pressed and the node is not selected
                                    // select just one
                                    tr.nodes([e.target]);
                                } else if (metaPressed && isSelected) {
                                    // if we pressed keys and node was selected
                                    // we need to remove it from selection:
                                    const nodes = tr.nodes().slice(); // use slice to have new copy of array
                                    // remove node from array
                                    nodes.splice(nodes.indexOf(e.target), 1);
                                    tr.nodes(nodes);
                                } else if (metaPressed && !isSelected) {
                                    // add the node into selection
                                    const nodes = tr.nodes().concat([e.target]);
                                    tr.nodes(nodes);
                                }
                                cur_doc_layer.draw();
                            });

                            stage.on('click tap', function (e) {
                                if(!isEdit){
                                    return;
                                }

                                if (e.target.hasName('page-image')) {
                                    tr.nodes([]);
                                    cur_doc_layer.draw();
                                    return;
                                }
                            });

                            pattern_rect.on('click tap', function (e) {
                                if(!isEdit){
                                    return;
                                }

                                // if click on empty area - remove all selections
                                if (e.target === bk_img) {
                                    tr.nodes([]);
                                    cur_doc_layer.draw();
                                    return;
                                }

                                // tr.nodes(this.getChildren());
                                tr.nodes([this]);
                                cur_doc_layer.draw();
                            });
                        }

                        doc_draw_top += img_height + page_padding;

                        stage_height += img_height + page_padding;

                        drawPage(doc_id, doc_index, pindex + 1);
                    }
                }
                else{
                    cur_doc_layer.draw();
                    stage.size({width: stage_width, height: stage_height});
                }
            }

            drawPage(doc_id, doc_index, 0);

            return;
        }

        $(document).on('click', '.shipments-document-wrap', function(){
            var doc_id = $(this).attr('doc-id');
            var doc_index = $(this).attr('doc-index');
            $('.shipments-document-wrap').removeClass('active');
            $(this).addClass('active');
            getAnnotationTemplates(doc_id, doc_index, true);
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