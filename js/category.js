$(function(){//s

//定义变量
var temp02_data_i = 0,temp02_data = category_data01[temp02_data_i],category_request_bo = false;
var all_row,row_num = 5,cur_page = 1,page_num;

//接收数据添加内容函数
function category_exposure(data,cur_page,row_num){
	all_row = data.length;
	page_num=Math.ceil(all_row/row_num);
	$('.right-con-itme1-exposure').empty();
	for(var i=(cur_page-1)*row_num;i<(cur_page*row_num);i++){
		if(data[i]){
			var row = $('<div class="itme1-exposure-row" data-ix="1"></div>');
			row.attr('data-ix',data[i].id);
			var cell1 = $('<div class="itme1-exposure-cell"></div>');
			cell1.text(data[i].title);
			var cell2 = $('<div class="itme1-exposure-cell"></div>');
			cell2.text(data[i].details);
			var cell3 = $('<div class="itme1-exposure-cell"></div>');		
			cell3.append('<a href="##" class="cell_details">详情</a>')
			.append('<a href="##" class="cell_favorites">收藏</a>')
			.append('<a href="##" class="cell_remove">移除</a>');
			row.append(cell1).append(cell2).append(cell3);
			$('.right-con-itme1-exposure').append(row);			
		}else{break;}					
	}
	$('.indicators-con-center').empty();
	for(var i=0;i<page_num;i++){
		var cur_indi = '<div onselectstart="return false" class="exposure-indicators-con">'+(i+1)+'</div>';
		$('.indicators-con-center').append(cur_indi);
	}
	$('.indicators-con-center>.exposure-indicators-con').eq(cur_page-1).addClass('cur-indi');
	add_event();		
}

category_exposure(temp02_data,cur_page,row_num);		

//添加指示器按扭功能
$('.indicators-con-center').on('click.indi',$('.indicators-con-center div'),function(event){
	if($(event.target).index()+1!=cur_page){
		cur_page=$(event.target).index()+1;
		category_exposure(temp02_data,cur_page,row_num);
	}
})

//操作功能；
function add_event(){
	$('.cell_remove').on('click.remove',function(event){$(this).parent().parent().remove();	})
	$('.cell_details').on('click.remove',function(){
		$('.category-defails').css({'opacity':'0','display':'block'}).stop(true).animate({'opacity':'1'},200);		
	})
}

$('.indicators-next').click(function(){category_page_flip('next')});
$('.indicators-prev').click(function(){category_page_flip('prev')});
function category_page_flip(a){
	if(a=='next'){
		cur_page++;
		cur_page = cur_page>page_num?1:cur_page;	
	}else if(a=='prev'){
		cur_page--;
		cur_page = cur_page==0?page_num:cur_page;
	}
	category_exposure(temp02_data,cur_page,row_num);
}

//细节窗口关闭
$('.defails-close').click(function(){
	$(this).parent().css('display','none');
})

//分类按钮
$('.cat-left-list-ul>li').on('click.cate_list',function(){
	var ii = $(this).index();	
	if(ii!=temp02_data_i){
		temp02_data_i = ii;
		temp02_data = category_data01[temp02_data_i]
		if(category_data01[temp02_data_i]==undefined){
			$('.right-con-itme1-exposure').text('内容为空！');
		}else{
			cur_page=1;
			category_exposure(temp02_data,cur_page,row_num);			
		}
		$('.cat-left-list-ul>li').css({'background':'url(../images/category_btn01.png) center no-repeat','background-size':'100%'});
		$('.cat-left-list-ul>li a').css({'color':'#555'});
		$(this).css({'background':'url(../images/category_btn02.png) center no-repeat','background-size':'100%'});	
		$(this).find('a').css({'color':'orange'});
	}
});	

//异步请求函数
function category_async(urltext,reqD={},fun){
	category_request_bo = false;
	$.get(urltext,reqD,function(response_data){	
		temp02_data = response_data;
	})
	category_request();	
}

//接收数据完成函数
function category_request(){
	if(temp02_data==undefined){
		setTimeout(category_request,500);
	}else{
		category_request_bo = true;
	}
}

})//e