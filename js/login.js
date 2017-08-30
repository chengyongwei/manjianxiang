$(function(){//s
	
	// 验证密码格式是否有效
	$('input[name="userpass"]').on('blur.userpass',function(){
		var userpv = $(this).val().trim();
		var expreg01 = /^[\d\w]*$/g;
		var boo = expreg01.test(userpv);
		if(userpv.length>0){
			if(userpv.length<6 || (!boo)){
				$('.reg-cue-4').css({'display':'block'});
			}else{
				$('.reg-cue-4').css({'display':'none'});			
			}			
		}
	})
	$('input[name="userpass"]').on('input.userpass',function(){
		var thisval = $(this).val();
		if(thisval==''){$('.reg-cue-4').css({'display':'none'});}
	})

	
	// 有无效内容阻止提交
	$('form').on('submit.reg',function(event){
		event.preventDefault();
		 reg_verifi_p_res('user_query');
		 
		
	})

	//验证刷新图片请求
	$('.reg-main-ref').on('click.regRef',function(){
		reg_verifi_p_res('ref_p');
	})
	function reg_verifi_p_res(res){
		if(res=='ref_p'){
			$.get('##',{reg_ref:res},function(res_data){
				$('.inp-v-p').html();
			})			
		}
		if(res=='user_query'){
			$.get('##',{reg_ref:res},function(res_data){
				if(res_data==''){
					$('form').submit();					
				}else{

				}
			})	

		}
	}
	// reg_verifi_p_res('ref_p');



})//e