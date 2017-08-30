$(function(){//s

var jsond = '[	{"id":"1","name":"01.jpg","data":"hrdy"},	{"id":"2","name":"02.jpg","data":"x5ph"},	{"id":"3","name":"03.jpg","data":"bwdt"},	{"id":"4","name":"04.jpg","data":"d2qk"},	{"id":"5","name":"05.jpg","data":"xx8z"},	{"id":"6","name":"06.jpg","data":"pnke"},	{"id":"7","name":"07.jpg","data":"a9up"}]';
var datavvv = JSON.parse(jsond);
var verimg_data = [],get_verimg_data=[],current_data_i=0;

	//验证码验证
	$('.inp-v').on('input.reg_vp',function(){reg_verifi_p('inp')})
	$('.inp-v').on('blur.reg_vp',function(){reg_verifi_p('blu')})
	function reg_verifi_p(eee){
		var regexp = new RegExp('^'+get_verimg_data[current_data_i].data+'$','i');
		var inp_vpv = $('.inp-v').val().trim();
		var bo = regexp.test(inp_vpv)
		if(eee=='inp'){
			if(inp_vpv.length>0){
				if(bo){
					$('.rig-wro-ver').css({'display':'block','background-position':'0 0'});					
				}else{
					$('.rig-wro-ver').css('display','none');
				}
			}else{
				$('.rig-wro-ver').css('display','none');
			}
		}
		if(eee=='blu'){
			if(inp_vpv.length>0){
				if(!(bo)){
					$('.rig-wro-ver').css({'display':'block','background-position':'-27px 0'});					
				}else{
					$('.rig-wro-ver').css({'display':'block','background-position':'0 0'});	
				}
			}else{
				$('.rig-wro-ver').css('display','none');
			}
		}
	}

	//验证刷新图片请求	
	$('.reg-main-ref,.inp-v-p-img').on('click.regRef',function(){
		current_data_i++;
		if(current_data_i==get_verimg_data.length){
			current_data_i=0;
			verimg_rand();
		}else{
			$('.inp-v-p>img').attr('src','../images/verifi_img/'+get_verimg_data[current_data_i].name);			
		}
		reg_verifi_p('blu');		
	})
	
	function verimg_rand(){
		// $.getJSON('/data/verifi_img.txt',function(res_data,b,c){			
		// 	verimg_data = res_data.slice(0);			
		// 	while(verimg_data.length>0){
		// 		var randn = Math.floor(Math.random()*verimg_data.length);
		// 		get_verimg_data.push(verimg_data[randn]);
		// 		verimg_data.splice(randn,1);
		// 	}		
		// 	$('.inp-v-p>img').attr('src','../images/verifi_img/'+get_verimg_data[current_data_i].name);			
		// });
	 
		verimg_data = datavvv.slice(0);
		while(verimg_data.length>0){				
				var randn = Math.floor(Math.random()*verimg_data.length);
				get_verimg_data.push(verimg_data[randn]);
				verimg_data.splice(randn,1);
		}		
		$('.inp-v-p>img').attr('src','../images/verifi_img/'+get_verimg_data[current_data_i].name);	
	}
	verimg_rand();

	// 有无效内容阻止提交
	$('form').on('submit.reg',function(event){		
		$('.reg-main-con input').each(function(i){
			if($(this).val().trim().length==0){
				if(i==0){
					$('.reg-submit-cue').text('请输入姓名!').css('visibility','visible');
					event.preventDefault();return false;
				}
				if(i==1){
					$('.reg-submit-cue').text('请输入密码!').css('visibility','visible');
					event.preventDefault();return false;
				}
				if(i==2){
					$('.reg-submit-cue').text('请输入验证码!').css('visibility','visible');
					event.preventDefault();return false;
				}
			}
		})	
		if($('.reg-main-con input:eq(2)').val().trim().length>0){
			if($('.rig-wro-ver').css('background-position')=='-27px 0px'){
				$('.reg-submit-cue').text('验证码错误!').css('visibility','visible');
				event.preventDefault();return false;
			}				
		}		
	})

	//重置清除提示符
	$('input[type="reset"]').click(function()
		{$('.rig-wro-ver').css('display','none');
		$('.reg-submit-cue').css('visibility','hidden');
	})
	
// $(window).on('resize',function(){

// 	console.log(window.innerWidth)
// })

})//e