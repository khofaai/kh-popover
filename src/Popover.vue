<template>
	<div 
		@mouseleave="triggerHover(false)" 
		@mouseover="triggerHover(true)" 
		class="popover-wrapper" 
		:class="randUser">
		
		<div :class="classPopoverCore()">
			
			<div 
				v-if="icon"
				class="avatar-slot"  
				@click="setClickPopoverPosition" 
				@mouseover="setHoverPopoverPosition">
				<slot name="avatar">
					
					<a href="javascript:;">
						<span v-if=" user.photo == '' " 
								class="inline-team-avatar radius-all" >
							{{ user.avatar }}
						</span>
						<img  v-else
								:src="$parent.getImage(user.photo)" 
								class="inline-team-avatar radius-all" />
					</a>
				</slot>
			</div>
			<transition name="fade-fast">
				<div 
					v-show="active" 
					@mouseleave="triggerHover(false)" 
					@mouseover="triggerHover(true)" 
					 class="kh_popover" 
					:class="rand" 
					:style="{
						'top': top,
						'left': left
					}">
				
					<span class="popover_header"></span>
					<span 
						 class='kh_popover_arrow' 
						:class="Ppos" 
						:style="{
							'left': left_arrow_pos,
							'top': top_arrow_pos
						}"></span>
					<slot name="content">

						<div class="kh_popover_content">
							<div class="kh_popover_infos">
								<slot name="content_info">
									<div class="kh_popover_avatar radius-all">

										<span v-if=" user.photo == '' " 
												class="img-circle team-small-avatar">{{ user.avatar }}</span>
										
										<img  v-else 
												:src="$parent.getImage(user.photo)" 
												class="team-small-avatar img-circle"/>
									</div>
									<h4 class="kh_popover_name">{{ user.name }}</h4>
									<h5 class="kh_popover_position">{{ user.position }}</h5>
								</slot>
							</div>
							<slot name="content_actions">

								<div v-if="user.type == 'user'"
										class="kh_popover_actions" >
									
									<a  @click="emitActions('edit')" 
										href="javascript:;">
										
										<i class="fa fa-edit"></i> edit
									</a>
									<a  @click="emitActions('activity')" 
										href="javascript:;">
										
										<i class="fa fa-eye"></i> activity
									</a>
									<a  @click="emitActions('remove')" 
										href="javascript:;">
										
										<i class="fa fa-ban"></i> remove
									</a>
								</div>
								<div v-else class="kh_popover_actions">

									{{ user.email }}
								</div>
							</slot>
						</div>
					</slot>
				</div>
			</transition>
		</div>
		<b  v-if="name" 
			class="popover-name" 
			@click="setClickPopoverPosition" 
			@mouseover="setHoverPopoverPosition">
			{{ user.name }}
		</b>
	</div>
</template>
<script>

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
			var random = this.strRand();

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
				Ppos:'bottom'
			}
		},
		methods:{
			strRand(str_length = 5) {
				var rand_str = "";
				var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				for (var i = 0; i < str_length; i++)
					rand_str += chars.charAt(Math.floor(Math.random() * chars.length));

				return rand_str;
			},
			setPopoverTopPosition (top, topOffset, cal_marg, _left) { 
				
				this.Ppos = 'top';
				let cal_top = parseInt( top + topOffset - this.Pheight );
				this.top = cal_top + this.unite;

				this.left = ( cal_marg + ( cal_marg == 0 ? 10 : -10 ) ) + this.unite;

				this.left_arrow_pos =  parseInt( ( this.Pwidth/2 ) - this.calc_marg + _left ) + this.unite;

				this.top_arrow_pos = ( cal_top + this.Pheight - 20 ) + this.unite;
			},
			setPopoverBottomPosition (top, topOffset, cal_marg, _left) { 
				let width = window.outerWidth;
				let marg = 40;
				if (width - _left < this.Pwidth) {
					cal_marg -= 10;
				} else if (_left < 0) {
					cal_marg += 10;
				}

				this.Ppos = 'bottom';

				this.top = parseInt( top + 40 + topOffset ) + this.unite;

				this.left_arrow_pos = parseInt( ( this.Pwidth/2 ) - this.calc_marg + _left - cal_marg ) + this.unite;

				this.top_arrow_pos = '-' + this.calc_marg + this.unite;

				this.left = cal_marg + this.unite;
			},
			setPopoverPosition() {

				const _doc_ = document;
				const _win_ = window;
				
				let pos = _doc_.querySelector('.'+this.randUser).getBoundingClientRect();
				let topOffset = _doc_.documentElement.scrollTop;
				let width = _win_.outerWidth;
				
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
				if (this.Ppos == 'auto') {

					if (_win_.outerHeight-pos.top-this.Pheight < this.Pheight) {
						
						this.setPopoverTopPosition (pos.top, topOffset, cal_marg, _left);
					} else {

						this.setPopoverBottomPosition (pos.top, topOffset, cal_marg, _left);
					}
				} else if ( this.Ppos == 'top') {

					this.setPopoverTopPosition (pos.top, topOffset, cal_marg, _left);
				} else {

					this.setPopoverBottomPosition (pos.top, topOffset, cal_marg, _left);
				}
			},
			setClickPopoverPosition() {

				if (this.trigger == 'click') {
					
					this.setPopoverPosition();
					this.togglePopover();
				}
			},
			setHoverPopoverPosition() {
				if (this.trigger == 'hover') {
					
					this.setPopoverPosition();
				}
			},
			getImage(photo) {
				
				return photo;
			},
			triggerHover(status) {

				if (this.trigger == 'hover') {

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
			classPopoverCore() {
				let _class = typeof this.user.type !== 'undefined' ? this.user.type+' ' : '';

				if (this.icon) {
					_class += 'kh-popover inline-team-item';
				}
				return _class;
			},
			initKhPopover() {
				const _doc_ = document;
				var userPopover = _doc_.querySelector('.'+this.rand);

				_doc_.querySelector('.'+this.rand).outerHtml = '';
				_doc_.querySelector('body').appendChild(userPopover);

				this.Ppos = this.position;
			}
		},	
		mounted() {
			this.initKhPopover();
		}
	}
</script>
<style>
	.avatar-slot {cursor: pointer;}
	.fade-fast-enter-active, .fade-fast-leave-active {transition-property: opacity;transition-duration: .3s;}
	.fade-fast-enter-active {transition-delay: .2s;}
	.fade-fast-enter, .fade-fast-leave-active {opacity: 0}
	.popover_header {position: absolute;background: transparent;padding: 10px 124px;left: 0;top: -20px;}
	.kh_popover {position: absolute;z-index: 999;width: 242px;left:-108px;box-shadow: 0px 0px 3px 0px rgba(51,51,51,.5);}
	.kh_popover_arrow.bottom {width: 0; height: 0; border-left: 10px solid transparent;border-right: 10px solid transparent;border-bottom: 10px solid #333;left: 46%;top: -10px;position: absolute;z-index: 1;}
	.kh_popover_arrow.top {width: 0; height: 0; border-left: 10px solid transparent;border-right: 10px solid transparent;border-top: 10px solid #333;position: fixed;bottom: 15px;top:auto;/*left:46%;*/}
	.kh_popover_infos {background: #f9f9f9;padding: 15px 15px;}
	.kh_popover_avatar {width: 40px;height: 40px;display: block;position: relative;border: 0;box-sizing: initial;background-color: #999;color: #fff;cursor: pointer;margin: 0 auto 10px;}
	.kh_popover_avatar img {height: 100%;width: 100%;display: inline-block;}
	.kh_popover_name {color: #222;text-transform: capitalize;font-family: "FaktProBold";font-size: 17px;margin-bottom: 5px;}
	.kh_popover_position {display: block;text-transform: capitalize;font-family: "FaktProMedium";font-size: 14px;color: #949ba2;margin-bottom: 5px;}
	.kh_popover_content {text-align: center;-webkit-border-radius: 4px;-ms-border-radius: 4px;border-radius: 4px;overflow: hidden;position: relative;}
	.kh_popover_actions {position: relative;padding: 10px 15px;word-break: break-all;background: #fff;}
	.kh_popover_actions a {text-transform: capitalize;font-size: 13px;}
	.kh_popover_actions a i {vertical-align: -1px;font-size: 90%;margin-right: 1px;}
	.kh_popover_avatar .team-small-avatar {display: block;text-align: center;font-size: 15px;font-weight: 700;line-height: 41px;text-transform: uppercase;}
	.popover-wrapper {display: inline-block;margin-right: 2px;}
	.popover-name {padding: 5px 0;}
</style>