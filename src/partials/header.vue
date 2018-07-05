<template>
    <a href="javascript:;">
        <span v-if=" photo == '' " 
                class="inline-team-avatar radius-all" >
            {{ avatar }}
        </span>
        <img  v-else
                :src="$parent.getImage(photo)" 
                class="inline-team-avatar radius-all" />
    </a>
</template>
<script>
    export default {
        props:{
            photo:{
                default:''
            },
            avatar:{
                default:"UN"
            }
        }
    }
</script>