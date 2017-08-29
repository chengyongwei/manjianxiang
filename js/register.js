$(function(){
	// 验证两次密码是否相同
	$('input[name="userpass_r"]').on('input.userpass_r',function(){ver_pass()})
	$('input[name="userpass"]').on('input.userpass',function(){ver_pass()})
	function ver_pass(){
		var userp_a = $('input[name="userpass"]').val().trim();
		var userp_r = $('input[name="userpass_r"]').val().trim();
	    if(userp_a && userp_r){
	    	
			if(userp_a!=userp_r){
				$('.reg-cue-2').css({'display':'block'});
			}else{
				$('.reg-cue-2').css({'display':'none'});
			}
	    }
	}
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

	// 验证电话格式是否有效
	$('input[name="userphone"]').on('blur.userphone',function(){
		var userphone = $(this).val().trim();
		var expreg01 = /^1[34578]\d{9}$/g;
		var boo = expreg01.test(userphone);		
		if(userphone.length==0 || boo){			
			$('.reg-cue-3').css({'display':'none'});
		}else{
			$('.reg-cue-3').css({'display':'block'});
		}
	})
	// 有无效内容阻止提交
	$('form').on('submit.reg',function(event){
		var cue_1 = $('.reg-cue-1').css('display')=="block";
		var cue_2 = $('.reg-cue-2').css('display')=="block";
		var cue_3 = $('.reg-cue-3').css('display')=="block";
		var cue_4 = $('.reg-cue-4').css('display')=="block";
		if(cue_1 || cue_2 || cue_3 ||  cue_3){event.preventDefault();return false;}
	})

	// $('[type="reset"]').on('click.reset',function(){
	// 	$('input[type="text"]').val('');
	// 	$('input[type="password"]').val('');
	// })	
})