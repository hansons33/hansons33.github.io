<template>
    <section>
        <article>
            <HeaderBar :title="'发布文章'"></HeaderBar>
            <van-field v-model="title" label="文章标题" placeholder="请填写文章标题"/>
            <van-field v-model="summary" label="文章摘要" placeholder="请填写文章摘要"/>
            <van-field v-model="type" label="文章类型" placeholder="请填写文章类型"/>
            <van-cell center title="置顶文章">
                <template #right-icon>
                    <van-switch v-model="checked" size="24" />
                </template>
            </van-cell>
            <editor></editor>
        </article>
        <footer>
            <van-button class="footer" size="large" color="#F24957" @click="addArticle">{{this.isEdit ? '提交编辑' : '确认发布'}}</van-button>
        </footer>
    </section>
</template>

<script>
import HomeService from "@/service/homeService"
import editor from '../../../../components/editor/editor.vue'
export default {
  components: { editor },
    name:'Public',
    data(){
        return {
            title:'',
            summary: '',
            content: '',
            type:'',
            isEdit:false,
            username: localStorage.getItem('username'),
            pastTitle: '',
            checked: false
        }
    },
    computed:{
        public(){
            return this.title.length && this.summary.length && this.type.length && this.content.length
        }
    },
    methods:{
        async addArticle(){
            if(this.public){
                let res = await HomeService.addArticle({
                    article:{
                        pastTitle: this.pastTitle,
                        title: this.title,
                        summary: this.summary,
                        content: this.content,
                        timestamp: +(new Date()),
                        type: this.type,
                        isTop: this.checked
                    },
                    isEdit:this.isEdit
                })
                if (res.error_info == '0'){
                    this.$toast(res.message)
                    this.$router.replace({
                        path: '/home',
                        query: {username:this.username}
                    })
                }
            }else{
                this.$toast('请填写完整的文章信息，谢谢！')
            }
        },
        catchData(data){
            this.content = data
        }
    },
    activated(){
        Object.assign(this.$data,this.$options.data())
        if(this.$route.params.type == 'edit'){ //数据反显
            let {article} = this.$route.params
            this.title = article.title
            this.pastTitle = article.title
            this.summary = article.summary
            this.content = article.content
            this.type = article.type
            this.isEdit = true
            this.checked = article.isTop
        }
    }
}
</script>
<style lang="stylus">
section
    height: 100%
article
    height: 92%
    overflow: hidden
footer
    width: 100%
    position: absolute 
    bottom: 0
    height: 8%
    .footer
        height: 100%
</style>