<template>
  <div 
    @mouseleave="triggerHover(false)" 
    @mouseover="triggerHover(true)"
    :class="randUser" 
    class="popover-wrapper" > 
    <div :class="setClassPopoverContainer()">
      <div 
        v-if="icon"
        @click="setClickPopoverPosition" 
        @mouseover="setHoverPopoverPosition"
        class="avatar-slot" >
        <slot name="avatar">
          <a href="javascript:;">
            <span v-if="user.photo == ''" class="inline-team-avatar radius-all" >{{ user.avatar }}</span>
            <img  v-else :src="user.photo" class="inline-team-avatar radius-all" />
          </a>
        </slot>
      </div>
      <transition name = "fade-fast">
        <div 
          v-show="active" 
          @mouseleave="triggerHover(false)" 
          @mouseover="triggerHover(true)" 
          :class="rand" 
          :style="{ 'top': top,'left': left }"
          class="kh-popover" >
          <span class="popover-header"></span>
          <span :class="Ppos" :style="{ 'left': leftArrowPos,'top': topArrowPos }" class="kh-popover-arrow"></span>
          <slot name="content">
            <div class="kh-popover-content">
              <div class="kh-popover-infos">
                <slot name="content_info">
                  <div class="kh-popover-avatar radius-all">
                    <span v-if="user.photo == ''" class="img-circle team-small-avatar">{{ user.avatar }}</span>
                    <img v-else :src="user.photo" class="team-small-avatar img-circle"/>
                  </div>
                  <h4 class="kh-popover-name">{{ user.name }}</h4>
                  <h5 class="kh-popover-position">{{ user.position }}</h5>
                </slot>
              </div>
              <slot name="content_actions"><div class="kh-popover-actions">{{ user.email }}</div></slot>
            </div>
          </slot>
        </div>
      </transition>
    </div>
    <b v-if="name" @click="setClickPopoverPosition" @mouseover="setHoverPopoverPosition" class="popover-name">
      {{ user.name }}
    </b>
  </div>
</template>
<script>
  let ucfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  let strRand = (str_length = 5) => {
    var rand_str = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < str_length; i++) {
      rand_str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return rand_str;
  }

  export default {
    name:'Popover',
    props: {
      user: {
        default: () => {
          return {
            name: 'header name',
            email: 'action@example.com',
            photo: '',
            avatar: 'UN',
          }
        }
      },
      trigger: {
        default: 'hover'
      },
      name: {
        default: false
      },
      icon: {
        default: true
      },
      position: {
        default: 'auto'
      },
      containter: {
        default: null
      }
    },
    data() {
      var random = strRand();

      return {
        triggerOptions:['hover','click'],
        active:false,
        rand :'popover_'+random,
        randUser :'kh-popover_'+random,
        top:-500,
        left:-500,
        leftArrowPos:'',
        topArrowPos:'',
        Pwidth:242,
        Pheight:196,
        unite:'px',
        calculateMargin:10,
        availablePositions:['top','bottom','auto'],
        Ppos:'bottom',
        Ptrigger:'hover'
      }
    },
    methods: {

      setPopoverTopPosition (top, topOffset, calculatedMargin, _left) { 
        let cal_top = parseInt( top + topOffset - this.Pheight );

        this.Ppos = 'top';
        
        this.top = cal_top + this.unite;
        this.left = ( calculatedMargin + ( calculatedMargin == 0 ? this.calculateMargin : -(this.calculateMargin+(this.isMobile ? 2 : 0)) ) ) + this.unite;
        
        this.leftArrowPos =  parseInt( ( this.Pwidth/2 ) - this.calculateMargin + _left ) + this.unite;
        this.topArrowPos = ( cal_top + this.Pheight - 20 ) + this.unite;
      },
      
      setPopoverBottomPosition (top, topOffset, calculatedMargin, _left) { 
        
        let width = window.outerWidth;
        
        if (width - _left < this.Pwidth) {
          calculatedMargin -= (this.calculateMargin+(this.isMobile ? 2 : 0));
        } else if (_left < 0) {
          calculatedMargin += this.calculateMargin;
        }

        this.Ppos = 'bottom';

        this.top = parseInt( top + 40 + topOffset ) + this.unite;
        this.left = calculatedMargin + this.unite;

        this.leftArrowPos = parseInt( ( this.Pwidth/2 ) - this.calculateMargin + _left - calculatedMargin ) + this.unite;
        this.topArrowPos = '-' + this.calculateMargin + this.unite;
      },
      
      setPopoverPosition() {
        let pos = document.querySelector('.'+this.randUser).getBoundingClientRect();
        let topOffset = document.documentElement.scrollTop;
        let width = window.outerWidth;
        
        let calculatedLeftPosition = parseInt(pos.left-109);
        let _left = calculatedLeftPosition;

        let cal_right = parseInt(pos.right-109);
        let _right = cal_right;

        let calculatedMargin = calculatedLeftPosition;

        if (calculatedLeftPosition + this.Pwidth > width ) {
          calculatedMargin = width - this.Pwidth;
        } else if(cal_right < 0) {
          calculatedMargin = 0;
        }

        if (this.Ppos != 'auto' && typeof this['setPopover'+ucfirst(this.Ppos)+'Position'] !== 'undefined') {
          this['setPopover'+ucfirst(this.Ppos)+'Position'](pos.top, topOffset, calculatedMargin, _left);
        } else {
          if (window.outerHeight-pos.top-this.Pheight < this.Pheight) {
            this.setPopoverTopPosition (pos.top, topOffset, calculatedMargin, _left);
          } else {
            this.setPopoverBottomPosition (pos.top, topOffset, calculatedMargin, _left);
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
        this[`${(this.active ? 'hide' : 'show')}Popover`]();
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
        return this.icon ? 'inline-team-item' : ''
      },
      
      detectIfMobileOrTablet() {
        var isMobile = false;
          (function(a){
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;
          })(navigator.userAgent||navigator.vendor||window.opera);
        return isMobile;
      },
      
      initPopTrigger() {
        if (this.triggerOptions.indexOf(this.trigger) != -1) {
          this.Ptrigger = this.trigger;
        }
      },
      
      initPopPosition() {
        if (this.availablePositions.indexOf(this.position) != -1) {
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
        this.putPopoverToBody();
        this.initPopTrigger();
        this.initPopPosition();
        this.initPopIsMobile();
      },
      
      putPopoverToBody() {
        var userPopover = document.querySelector('.'+this.rand);
        userPopover.outerHtml = '';
        document.querySelector('body').appendChild(userPopover);
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
  .popover-header {position: absolute;background: transparent;padding: 10px 124px;left: 0;top: -20px;}
  .kh-popover {position: absolute;z-index: 999;width: 242px;left:-108px;box-shadow: 0px 0px 3px 0px rgba(51,51,51,.5);}
  .kh-popover-arrow {width: 0; height: 0; border-left: 10px solid transparent;border-right: 10px solid transparent;}
  .kh-popover-arrow.bottom {border-bottom: 10px solid #333;left: 46%;top: -10px;position: absolute;z-index: 1;}
  .kh-popover-arrow.top {border-top: 10px solid #333;position: fixed;bottom: 15px;top:auto;}
  .kh-popover-avatar {width: 40px;height: 40px;display: block;position: relative;border: 0;box-sizing: initial;background-color: #999;color: #fff;cursor: pointer;margin: 0 auto 10px;}
  .kh-popover-avatar img {height: 100%;width: 100%;display: inline-block;}
  .kh-popover-avatar .team-small-avatar {display: block;text-align: center;font-size: 15px;font-weight: 700;line-height: 41px;text-transform: uppercase;}
  .kh-popover-actions {position: relative;padding: 10px 15px;word-break: break-all;background: #fff;}
  .kh-popover-actions a {text-transform: capitalize;font-size: 13px;}
  .kh-popover-actions a i {vertical-align: -1px;font-size: 90%;margin-right: 1px;}
  .kh-popover-infos {background: #f9f9f9;padding: 15px 15px;}
  .kh-popover-name {color: #222;text-transform: capitalize;font-family: "FaktProBold";font-size: 17px;margin-bottom: 5px;}
  .kh-popover-position {display: block;text-transform: capitalize;font-family: "FaktProMedium";font-size: 14px;color: #949ba2;margin-bottom: 5px;}
  .kh-popover-content {text-align: center;-webkit-border-radius: 4px;-ms-border-radius: 4px;border-radius: 4px;overflow: hidden;position: relative;}
  .fade-fast-enter-active {transition-delay: .2s;}
  .fade-fast-enter, .fade-fast-leave-active {opacity: 0}
  .fade-fast-enter-active, .fade-fast-leave-active {transition-property: opacity;transition-duration: .3s;}
</style>