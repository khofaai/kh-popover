<template>
    
    <div v-if="type == 'user'"
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

        {{ message }}
    </div>
</template>
<script>
    export default {
        props:{
            type:{
                default:''
            },
            message:{
                default:'no data'
            }
        },
        methods:{

            emitActions(action) {

                this.$emit('action', { 
                    action : action,
                    id : this.user.id
                });
            }
        }
    }
</script>