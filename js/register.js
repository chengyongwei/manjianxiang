$(function(){//s

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
	
	// function ver_pass_bl(){
	// 	var userp_r = $('input[name="userpass_r"]').val().trim();
	// 	var userp_a = $('input[name="userpass"]').val().trim();
	// 	if(userp_r==''){		
	// 		$('.reg-cue-2').css({'display':'none'});
	// 		$('.rig-wro-r:eq(2)').css({'display':'none'});	
	// 	}else{
		    		
	// 	}		
	// }

	

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
	// 有无效内容阻止提交
	$('form').on('submit.reg',function(event){	
		$('.rig-wro').each(function(i,o){
			if($(this).css('display')=='none'){
				event.preventDefault();return false;
			}
		})		
	})

	//验证刷新图片请求
	$('.reg-main-ref').on('click.regRef',function(){
		reg_verifi_p_res();
	})
	function reg_verifi_p_res(){
		$.get('##',{reg_ref:'1'},function(res_data){
			$('.inp-v-p').html();
		})
	}
	// reg_verifi_p_res();
// $(window).on('resize',function(){

// 	console.log(window.innerWidth)
// })

})//e