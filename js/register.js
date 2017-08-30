$(function(){//s

var jsond = '[	{"id":"1","name":"01.jpg","data":"hrdy"},	{"id":"2","name":"02.jpg","data":"x5ph"},	{"id":"3","name":"03.jpg","data":"bwdt"},	{"id":"4","name":"04.jpg","data":"d2qk"},	{"id":"5","name":"05.jpg","data":"xx8z"},	{"id":"6","name":"06.jpg","data":"pnke"},	{"id":"7","name":"07.jpg","data":"a9up"}]';
var datavvv = JSON.parse(jsond);
var verimg_data = [],get_verimg_data=[],current_data_i=0;

	//查询用户名
	$('input[name="username"]').on('blur.regname',function(){
		var usernamev = $(this).val().trim();
		if(usernamev.length>0){
			$('.reg-vname-waiting').css('display','block');
			// $.get('',{reg_query:'username'},function(res_data){
			// 	if(res_data==''){
			// 		$('.rig-wro-r:eq(0)').css('display','block');
			// 		$('.reg-cue-1,.reg-vname-waiting').css('display','none');
			// 	}else{
			// 		$('.rig-wro-r:eq(0),.reg-vname-waiting').css('display','none');
			// 		$('.reg-cue-1').css('display','block');
			// 	}
			// })
		}else{
			$('.reg-cue-1,.rig-wro-r:eq(0),.reg-vname-waiting').css('display','none');
		}
	})
	$('input[name="username"]').on('input.regname',function(){		
			$('.reg-cue-1,.rig-wro-r:eq(0),.reg-vname-waiting').css('display','none');		
	})

	// 验证密码格式是否有效
	$('input[name="userpass"]').on('input.userpass',function(){userpass_ver('inp')})
	$('input[name="userpass"]').on('blur.userpass',function(){userpass_ver('blu')})
	function userpass_ver(eee){
		var userpv = $('input[name="userpass"]').val().trim();
		var expreg01 = /^[\d\w]*$/g;
		var boo = expreg01.test(userpv);
		if(eee=='inp'){
			if(userpv.length>0){
				if(userpv.length>5 && boo){				
					$('.reg-cue-4').css({'display':'none'});
					$('.rig-wro-r:eq(1)').css({'display':'block'});			
				}else{
					$('.reg-cue-4').css({'display':'none'});
					$('.rig-wro-r:eq(1)').css({'display':'none'});
				}	
			}			
		}
		if(eee=='blu'){
			if(userpv==''){
				$('.reg-cue-4').css({'display':'none'});
				$('.rig-wro-r:eq(1)').css({'display':'none'});
			}else{
				if(userpv.length<6 || (!boo)){
					$('.reg-cue-4').css({'display':'block'});
					$('.rig-wro-r:eq(1)').css({'display':'none'});
				}			
			}
		}

	}

	// 验证两次密码是否相同
	$('input[name="userpass_r"]').on('input.userpass_r',function(){ver_pass('inp')})
	$('input[name="userpass"]').on('input.userpass',function(){ver_pass('inp')})
	$('input[name="userpass_r"]').on('blur.userpass_r',function(){ ver_pass('blu')})
	$('input[name="userpass"]').on('blur.userpass',function(){ ver_pass('blu')})
	function ver_pass(eee){
		var userp_a = $('input[name="userpass"]').val().trim();
		var userp_r = $('input[name="userpass_r"]').val().trim();
		if(userp_r==''){
			$('.reg-cue-2').css({'display':'none'});
			$('.rig-wro-r:eq(2)').css({'display':'none'});	
		}else{
			if(eee=='inp'){
				if(userp_a==userp_r){
					if($('.rig-wro-r:eq(1)').css('display')=='block'){
						$('.reg-cue-2').css({'display':'none'});
						$('.rig-wro-r:eq(2)').css({'display':'block'});						
					}else{
						$('.reg-cue-2').css({'display':'none'});
						$('.rig-wro-r:eq(2)').css({'display':'none'});
					}
				}else{
					$('.reg-cue-2').css({'display':'none'});
					$('.rig-wro-r:eq(2)').css({'display':'none'});
				}				
			}
			if(eee=='blu'){
				if(userp_a && userp_r){	    	
					if(userp_a!=userp_r){
						$('.reg-cue-2').css({'display':'block'});
						$('.rig-wro-r:eq(2)').css({'display':'none'});	
					}
			    }	
			}	
		}
	}
		
	// 验证电话格式是否有效
	$('input[name="userphone"]').on('blur.userphone',function(){up_ver('blu1')})
	$('input[name="userphone"]').on('input.userphone',function(){up_ver('inp1')})

	function up_ver(eee){
		var userphone = $('input[name="userphone"]').val().trim();
		var expreg01 = /^1[34578]\d{9}$/g;
		var boo = expreg01.test(userphone);	
		if(eee=="blu1"){
			if(userphone.length==0){			
				$('.reg-cue-3').css({'display':'none'});
				$('.rig-wro-r:eq(3)').css({'display':'none'});
			}else{
				if(!(boo)){
					$('.reg-cue-3').css({'display':'block'});
					$('.rig-wro-r:eq(3)').css({'display':'none'});					
				}
			}			
		}
		if(eee=="inp1"){
			if(boo){			
				$('.reg-cue-3').css({'display':'none'});
				$('.rig-wro-r:eq(3)').css({'display':'block'});
			}else{
				$('.reg-cue-3').css({'display':'none'});
				$('.rig-wro-r:eq(3)').css({'display':'none'});
			}	
		}
	}

	//验证邮箱
	$('input[name="usermail"]').on('blur.umail',function(){
		var mialv = $(this).val().trim();
		var expreg = /^([\w\d_-])+@([\w\d_-])+\.([\w\d_-])+$/;
		var bo = expreg.test(mialv);		
		if(mialv.length>0){
			if(bo){
				$('.reg-cue-5').css('display','none');
				$('.rig-wro-r2').css({'display':'block'});
			}else{
				$('.reg-cue-5').css('display','block');
				$('.rig-wro-r2').css({'display':'none'});
			}
		}else{
			$('.reg-cue-5').css('display','none');
			$('.rig-wro-r2').css({'display':'none'});
		}
	})

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
		$('.rig-wro-r').each(function(){
			if($(this).css('display')=='none'){
				$('.reg-submit-cue').text('请输入有效内容后提交!').css('visibility','visible');
				event.preventDefault();return false;
			}
		})
		if($('.reg-cue-5').css('display')=='block'){
			$('.reg-submit-cue').text('邮箱可以留空，或输入有效内容后提交!').css('visibility','visible');
			event.preventDefault();return false;
		}
		if($('.rig-wro-ver').css('background-position')=='-27px 0px'){
			$('.reg-submit-cue').text('验证码错误!').css('visibility','visible');
			event.preventDefault();return false;
		}		
	})
	
	//重置清除提示符
	$('input[type="reset"]').click(function()
		{$('.rig-wro-ver,.rig-wro-r,.reg-vname-waiting').css('display','none');
		$('.reg-submit-cue').css('visibility','hidden');
	})

// $(window).on('resize',function(){

// 	console.log(window.innerWidth)
// })

})//e