<template>
    <div class="kh_popover_content">
        <div class="kh_popover_infos">
            <slot name="content_info">
                <div class="kh_popover_avatar radius-all">

                    <span v-if=" user.photo == '' " 
                            class="img-circle team-small-avatar">{{ user.avatar }}</span>
                    
                    <img  v-else 
                            :src="$parent.getImage(user.photo)" 
                            class="team-small-avatar" 
                            :class="{'img-circle':$parent.checkBase(user.photo)}" />
                </div>
                <h4 class="kh_popover_name">{{ user.name }}</h4>
                <h5 class="kh_popover_position">{{ user.position }}</h5>
            </slot>
        </div>
        <slot name="content_actions">
            <Pfooter @action="$parent.catchActions" :message="user.email"></Pfooter>
        </slot>
    </div>
</template>
<script>
    
    import Pfooter from './footer.vue';

    export default {
        components:{
            Pfooter
        },
        props:{
			user:{
				default:() => {
					return {
						id:0,
						photo:'',
						name:'user name',
						avatar:'UN',
						email:'user@name.kh',
						position:'',
						role_id:2
					}
				}
			}
        }
    }
</script>