<template>
	<div 
		@mouseleave = "triggerHover(false)" 
		@mouseover = "triggerHover(true)"
		:class = "randUser" 
		class = "popover-wrapper" >	
		<div :class = "setClassPopoverContainer()">
			
			<div 
				v-if = "icon"
				@click = "setClickPopoverPosition" 
				@mouseover = "setHoverPopoverPosition"
				class = "avatar-slot" >
				<slot name = "avatar">
					
					<a href = "javascript:;">
						<span v-if = "user.photo == ''" 
								class = "inline-team-avatar radius-all" >
							{{ user.avatar }}
						</span>
						<img  v-else
								:src = "user.photo" 
								class = "inline-team-avatar radius-all" />
					</a>
				</slot>
			</div>
			<transition name = "fade-fast">
				<div 
					v-show = "active" 
					@mouseleave = "triggerHover(false)" 
					@mouseover = "triggerHover(true)" 
					:class = "rand" 
					:style = "{
						'top': top,
						'left': left
					}"
					class = "kh_popover" >
				
					<span class = "popover_header"></span>
					<span 
						:class = "Ppos" 
						:style = "{
							'left': left_arrow_pos,
							'top': top_arrow_pos
						}"
						class = "kh_popover_arrow"></span>
					<slot name = "content">

						<div class = "kh_popover_content">
							<div class = "kh_popover_infos">
								<slot name = "content_info">
									<div class = "kh_popover_avatar radius-all">

										<span v-if = "user.photo == ''" 
												class = "img-circle team-small-avatar">{{ user.avatar }}</span>
										
										<img  v-else 
												:src = "user.photo" 
												class = "team-small-avatar img-circle"/>
									</div>
									<h4 class = "kh_popover_name">{{ user.name }}</h4>
									<h5 class = "kh_popover_position">{{ user.position }}</h5>
								</slot>
							</div>
							<slot name = "content_actions">

								<div class = "kh_popover_actions">

									{{ user.email }}
								</div>
							</slot>
						</div>
					</slot>
				</div>
			</transition>
		</div>
		<b v-if = "name"  
			@click = "setClickPopoverPosition" 
			@mouseover = "setHoverPopoverPosition"
			class = "popover-name">
			{{ user.name }}
		</b>
	</div>
</template>
<script>

	const ucfirst = (string) => {
	    
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const strRand = (str_length = 5) => {
		var rand_str = "";
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < str_length; i++)
			rand_str += chars.charAt(Math.floor(Math.random() * chars.length));

		return rand_str;
	}

	export default {
		name:'Popover',
		props:{
			user:{
				default:() => {
					return {
						id:0,
						photo:'',
						name:'header name',
						avatar:'UN',
						email:'action@name.kh'
					}
				}
			},
			trigger:{
				default:'hover'
			},
			name:{
				default:false
			},
			icon:{
				default:true
			},
			position:{
				default:'auto'
			}
		},
		data() {
			var random = strRand();

			return {
				trigger_options:['hover','click'],
				active:false,
				rand :'popover_'+random,
				randUser :'kh_popover_'+random,
				top:-500,
				left:-500,
				left_arrow_pos:'',
				top_arrow_pos:'',
				Pwidth:242,
				Pheight:196,
				unite:'px',
				calc_marg:10,
				available_positions:['top','bottom','auto'],
				Ppos:'bottom',
				Ptrigger:'hover'
			}
		},
		methods:{
			setPopoverTopPosition (top, topOffset, cal_marg, _left) { 
				
				this.Ppos = 'top';
				let cal_top = parseInt( top + topOffset - this.Pheight );
				this.top = cal_top + this.unite;

				this.left = ( cal_marg + ( cal_marg == 0 ? this.calc_marg : -(this.calc_marg+(this.isMobile ? 2 : 0)) ) ) + this.unite;

				this.left_arrow_pos =  parseInt( ( this.Pwidth/2 ) - this.calc_marg + _left ) + this.unite;

				this.top_arrow_pos = ( cal_top + this.Pheight - 20 ) + this.unite;
			},
			setPopoverBottomPosition (top, topOffset, cal_marg, _left) { 
				
				let width = window.outerWidth;
				
				if (width - _left < this.Pwidth) {
					cal_marg -= (this.calc_marg+(this.isMobile ? 2 : 0));
				} else if (_left < 0) {
					cal_marg += this.calc_marg;
				}

				this.Ppos = 'bottom';

				this.top = parseInt( top + 40 + topOffset ) + this.unite;

				this.left_arrow_pos = parseInt( ( this.Pwidth/2 ) - this.calc_marg + _left - cal_marg ) + this.unite;

				this.top_arrow_pos = '-' + this.calc_marg + this.unite;

				this.left = cal_marg + this.unite;
			},
			setPopoverPosition() {
				
				let pos = document.querySelector('.'+this.randUser).getBoundingClientRect();
				let topOffset = document.documentElement.scrollTop;
				let width = window.outerWidth;
				
				let cal_left = parseInt(pos.left-109);
				let _left = cal_left;

				let cal_right = parseInt(pos.right-109);
				let _right = cal_right;

				let cal_marg = cal_left;

				if (cal_left + this.Pwidth > width ) {
					
					cal_marg = width - this.Pwidth;
				} else if(cal_right < 0) {
					
					cal_marg = 0;
				}

				if (this.Ppos != 'auto' && typeof this['setPopover'+ucfirst(this.Ppos)+'Position'] !== 'undefined') {
					
					this['setPopover'+ucfirst(this.Ppos)+'Position'](pos.top, topOffset, cal_marg, _left);
				} else {

					if (window.outerHeight-pos.top-this.Pheight < this.Pheight) {
						
						this.setPopoverTopPosition (pos.top, topOffset, cal_marg, _left);
					} else {

						this.setPopoverBottomPosition (pos.top, topOffset, cal_marg, _left);
					}
				}
			},
			setClickPopoverPosition() {

				if (this.Ptrigger == 'click') {
					
					this.setPopoverPosition();
					this.togglePopover();
				}
			},
			setHoverPopoverPosition() {
				if (this.Ptrigger == 'hover') {
					
					this.setPopoverPosition();
				}
			},
			triggerHover(status) {

				if (this.Ptrigger == 'hover') {

					this.active = status;
				}
			},
			togglePopover() {

				if (this.active) {
				
					return this.hidePopover();
				}
				return this.showPopover();
			},
			showPopover() {
				
				this.active = true;
				setTimeout(() => document.getElementById('app').addEventListener('click',this.hidePopover), 0);
			},
			hidePopover() {
				
				this.active = false;
				document.getElementById('app').removeEventListener('click',this.hidePopover);
			},
			emitActions(action) {

				this.$emit('action',{action,user});
			},
			setClassPopoverContainer() {
				let cls = '';
				
				if (this.icon) cls += 'kh-popover inline-team-item';
				
				return cls;
			},
			detectIfMobileOrTablet() {
				var isMobile = false;
			  	(function(a){
			  		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;
			  	})(navigator.userAgent||navigator.vendor||window.opera);
				return isMobile;
			},
			initPopTrigger() {

				if (this.trigger_options.indexOf(this.trigger) != -1) {

					this.Ptrigger = this.trigger;
				}
			},
			initPopPosition() {

				if (this.available_positions.indexOf(this.position) != -1) {

					this.Ppos = this.position;
				}
			},
			initPopIsMobile() {

				this.isMobile = this.detectIfMobileOrTablet();
				if (this.isMobile) {

					this.Ptrigger = 'click';
				}
			},
			initKhPopover() {
				console.log(this.rand)
				var userPopover = document.querySelector('.'+this.rand);

				userPopover.outerHtml = '';
				document.querySelector('body').appendChild(userPopover);
				
				this.initPopTrigger();
				this.initPopPosition();
				this.initPopIsMobile();
			}
		},	
		mounted() {
			this.initKhPopover();
		}
	}
</script>
<style>
	.avatar-slot {cursor: pointer;}
	.popover-name {padding: 5px 0;}
	.popover-wrapper {display: inline-block;margin-right: 2px;}
	.popover_header {position: absolute;background: transparent;padding: 10px 124px;left: 0;top: -20px;}
	.kh_popover {position: absolute;z-index: 999;width: 242px;left:-108px;box-shadow: 0px 0px 3px 0px rgba(51,51,51,.5);}
	.kh_popover_arrow {width: 0; height: 0; border-left: 10px solid transparent;border-right: 10px solid transparent;}
	.kh_popover_arrow.bottom {border-bottom: 10px solid #333;left: 46%;top: -10px;position: absolute;z-index: 1;}
	.kh_popover_arrow.top {border-top: 10px solid #333;position: fixed;bottom: 15px;top:auto;}
	.kh_popover_avatar {width: 40px;height: 40px;display: block;position: relative;border: 0;box-sizing: initial;background-color: #999;color: #fff;cursor: pointer;margin: 0 auto 10px;}
	.kh_popover_avatar img {height: 100%;width: 100%;display: inline-block;}
	.kh_popover_avatar .team-small-avatar {display: block;text-align: center;font-size: 15px;font-weight: 700;line-height: 41px;text-transform: uppercase;}
	.kh_popover_actions {position: relative;padding: 10px 15px;word-break: break-all;background: #fff;}
	.kh_popover_actions a {text-transform: capitalize;font-size: 13px;}
	.kh_popover_actions a i {vertical-align: -1px;font-size: 90%;margin-right: 1px;}
	.kh_popover_infos {background: #f9f9f9;padding: 15px 15px;}
	.kh_popover_name {color: #222;text-transform: capitalize;font-family: "FaktProBold";font-size: 17px;margin-bottom: 5px;}
	.kh_popover_position {display: block;text-transform: capitalize;font-family: "FaktProMedium";font-size: 14px;color: #949ba2;margin-bottom: 5px;}
	.kh_popover_content {text-align: center;-webkit-border-radius: 4px;-ms-border-radius: 4px;border-radius: 4px;overflow: hidden;position: relative;}
	.fade-fast-enter-active {transition-delay: .2s;}
	.fade-fast-enter, .fade-fast-leave-active {opacity: 0}
	.fade-fast-enter-active, .fade-fast-leave-active {transition-property: opacity;transition-duration: .3s;}
</style>