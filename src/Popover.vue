<template>
	<div @mouseleave="triggerHover(false)" @mouseover="triggerHover(true)" class="popover-wrapper" :class="randUser">
		
		<div :class="classPopoverCore()">
			
			<div class="avatar-slot" v-if="icon" @click="setClickPopoverPosition" @mouseover="setHoverPopoverPosition">
				<slot name="avatar">
					
					<a href="javascript:;">
						<span v-if="user.photo == '' " class="inline-team-avatar radius-all" >
							{{ user.avatar }}
						</span>
						<img v-else :src="getImage(user.photo)" class="inline-team-avatar radius-all">
					</a>
				</slot>
			</div>
			<transition name="fade-fast">
				<div @mouseleave="triggerHover(false)" @mouseover="triggerHover(true)" v-show="active" :class="rand" class="user_popover" :style="{'top':top,'left':left}">
				
					<span class="popover_header"></span>
					<span class='user_popover_arrow bottom' :style="{'left':left_arrow_pos,'top':top_arrow_pos}"></span>
					<slot name="content">
						<div class="user_popover_content">
							<div class="user_popover_infos">
								<slot name="content_info">
									<div class="user_popover_avatar radius-all">
										<span v-if="user.photo == '' " class="img-circle team-small-avatar">{{ user.avatar }}</span>
										<img v-else :src="getImage(user.photo)" class="team-small-avatar" :class="{'img-circle':checkBase(user.photo)}">
									</div>
									<h4 class="user_popover_name">{{ user.name }}</h4>
									<h5 class="user_popover_position">{{ user.position }}</h5>
								</slot>
							</div>
							<slot name="content_actions">
								<div class="user_popover_actions" v-if="user.type == 'user' && user.role_id > 1">
									
									<a @click="emitActions('edit')" href="javascript:;">
										<i class="fa fa-edit"></i> {{ $trans.get('edit') }}
									</a>
									<a @click="emitActions('activity')" href="javascript:;">
										<i class="fa fa-eye"></i> {{ $trans.get('activity') }}
									</a>
									<a @click="emitActions('remove')" href="javascript:;">
										<i class="fa fa-ban"></i> {{ $trans.get('remove') }}
									</a>
								</div>
								<div class="user_popover_actions" v-else-if="user.role_id == 1">
									{{ $trans.get('the owner') }}
								</div>
								<div class="user_popover_actions" v-else>
									{{ user.email }}
								</div>
							</slot>
						</div>
					</slot>
				</div>
			</transition>
		</div>
		<b v-if="name" class="popover-name" @click="setClickPopoverPosition" @mouseover="setHoverPopoverPosition">{{ user.name }}</b>
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
						name:'user name',
						avatar:'UN',
						email:'user@name.knt',
						position:'',
						role_id:2
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
			}
		},
		data() {
			var random = this.str_random();

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
				unite:'px',
				calc_marg:10
			}
		},
		methods:{
			str_random() {
				var text = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				for (var i = 0; i < 5; i++)
					text += possible.charAt(Math.floor(Math.random() * possible.length));

				return text;
			},
			setPopoverPosition() {

				const doc = document;
				
				let pos = doc.querySelector('.'+this.randUser).getBoundingClientRect();
				let topOffset = doc.documentElement.scrollTop;
				let width = window.outerWidth;

				this.top = parseInt(pos.top+40+topOffset)+this.unite;
				
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

				this.left_arrow_pos = parseInt((this.Pwidth/2)-this.calc_marg+_left-cal_marg)+this.unite;
				this.top_arrow_pos = '-'+this.calc_marg+this.unite;

				this.left = cal_marg+this.unite;
			},
			setClickPopoverPosition() {

				if (this.trigger == 'click') {
					
					this.setPopoverPosition();
					this.toggle();
				}
			},
			setHoverPopoverPosition() {
				if (this.trigger == 'hover') {
					
					this.setPopoverPosition();
				}
			},
			getImage(photo) {
				if (typeof baseS3 === 'undefined') {
					window.baseS3 = '/';
				}
				if(this.checkBase(photo)) {

					return baseS3+this.user.folder+'/'+photo
				}
				return photo;
			},
			checkBase(photo) {
				if (typeof baseUrl === 'undefined') {
					window.baseUrl = '/';
				}
				return photo.indexOf(baseUrl) == -1;
			},
			triggerHover(status) {

				if (this.trigger == 'hover') {

					this.active = status;
				}
			},
			toggle() {

				if (this.active) {
				
					return this.hide();
				}
				return this.show();
			},
			show() {
				
				this.active = true;
				setTimeout(() => document.getElementById('app').addEventListener('click',this.hide), 0);
			},
			hide() {
				
				this.active = false;
				document.getElementById('app').removeEventListener('click',this.hide);
			},
			emitActions(element) {

				this.$emit('action', { 
					action : element,
					name : this.user.name,
					role_id : this.user.role_id,
					user_client_id : this.user.user_client_id
				});
			},
			setClass() {

				if (!this.icon) {

					return this.randUser;
				}
				return '';
			},
			classPopoverCore() {
				let _class = typeof this.user.type !== 'undefined' ? this.user.type+' ' : '';

				if (this.icon) {
					_class += 'kontent-popover inline-team-item';
				}
				return _class;
			}
		},	
		mounted() {

			const doc = document;
			var userPopover = doc.querySelector('.'+this.rand);
			doc.querySelector('.'+this.rand).outerHtml = '';
			doc.querySelector('body').appendChild(userPopover);
		}
	}
</script>
<style>
	.avatar-slot {cursor: pointer;}
	
	.fade-fast-enter-active, .fade-fast-leave-active {
	  transition-property: opacity;
	  transition-duration: .3s;
	}

	.fade-fast-enter-active {
	  transition-delay: .2s;
	}

	.fade-fast-enter, .fade-fast-leave-active {
	  opacity: 0
	}
	.popover_header{
		position: absolute;
		background: transparent;
		padding: 10px 124px;
		left: 0;
		top: -20px;
	}
	.user_popover{
		position: absolute;
		z-index: 999;
		width: 242px;
		left:-108px;
		box-shadow: 0px 0px 3px 0px rgba(93,86,249,.5);
	}
	.user_popover_arrow{
		width: 0; 
		height: 0; 
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid #5d56f9;
		left: 46%;
		top: -10px;
		position: absolute;
		z-index: 1;
	}
	.user_popover_arrow.top{
		width: 0; 
		height: 0; 
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid red;
		position: fixed;
		bottom: -20px;
		top:auto;
		left:46%;
	}.user_popover_infos {
		background: #f9f9f9;padding: 15px 15px;
	}
	.user_popover_avatar {
		width: 40px;
		height: 40px;
		display: block;
		position: relative;
		border: 0;
		box-sizing: initial;
		background-color: #999;
		color: #fff;
		cursor: pointer;
		margin: 0 auto 10px;
	}
	.user_popover_avatar img {
		height: 100%;
		width: 100%;
		display: inline-block;
	}
	.user_popover_name {
		color: #222;
		text-transform: capitalize;
		font-family: "FaktProBold";
		font-size: 17px;
		margin-bottom: 5px;
	}
	.user_popover_position {
		display: block;
		text-transform: capitalize;
		font-family: "FaktProMedium";
		font-size: 14px;
		color: #949ba2;
		margin-bottom: 5px;
	}
	.user_popover_content {
		text-align: center;
		-webkit-border-radius: 4px;
		-ms-border-radius: 4px;
		border-radius: 4px;
		overflow: hidden;
		position: relative;
	}
	.user_popover_actions {
		position: relative;
		padding: 10px 15px;
		word-break: break-all;
		background: #fff;
	}
	.user_popover_actions a {
		text-transform: capitalize;
		font-size: 13px;
	}
	.user_popover_actions a i {
		vertical-align: -1px;
		font-size: 90%;
		margin-right: 1px;
	}
	.user_popover_avatar .team-small-avatar {
		display: block;
		text-align: center;
		font-size: 15px;
		font-weight: 700;
		line-height: 41px;
		text-transform: uppercase;
	}
	.popover-wrapper{
		display: inline-block;
		margin-right: 2px;
	}
	.popover-name{
		padding: 5px 0;
	}
</style>