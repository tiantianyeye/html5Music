<template>
    <a :href="detailUrl">
        <div class="book-card">
            <div class='thumb'>
                <img :src="book.imgUrl" class='image' alt="" 
                    mode='aspectFit' 
                    @click.stop='previewImage'
                />
            </div>
            <div class='detail'>
                <div class='row text-primary'>
                    <div class="right">
                        <MyRate :value='book.rate' />{{book.rate}}
                    </div>
                    <div class="left bookname">
                        {{book.bookname}}
                    </div>
                </div>
                <div class='row'>
                    <div class="right count">
                        {{book.count}}
                    </div>
                    <div class="left author">
                        {{book.author}}
                    </div>
                </div>
                <div class='row'>
                    <div class="right user">
                        {{book.uploadPersonName}}
                    </div>
                    <div class="left">
                        {{book.publisher}}
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
import MyRate from '@/components/myRate.vue';
export default {
    data() {
        return {

        }
    },
    props: ['book'],
    computed: {
        detailUrl(){
            return '/pages/detail/index?isbn='+this.book.ISBN;
        }
    },
    created(){
        var rate = this.book.rate;
        this.book.rate = rate.toString().length>1? rate: rate+'.0';
    },
    components: {
        MyRate
    },
    methods: {
        //预览图片
        previewImage(){
            var that = this;
            wx.previewImage({
                current: that.book.imgUrl,
                urls: [that.book.imgUrl]
            });
        }
    }
}
</script>

<style lang="less" scoped>
.text-primary{
    color: #EA5149;
}
.book-card {
    padding: 5px;
    overflow: hidden;
    margin: 5px 0;
    font-size: 14px;
    .thumb{
        width: 90px;
        height: 90px;
        float: left;
        margin:0 auto;
        overflow: hidden;
        .image{
            max-width:100%;
            max-height: 100%;
        }
    }
    .detail{
        margin-left:100px;
        .row{
            line-height: 20px;
            margin-bottom:3px;
            overflow: hidden;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
        }
        .author{
            width: 80%;
        }
        .bookname{
            max-width:65%;
        }
        .count{
            padding:3px;
            border-radius:50%;
            background: #71ef39;
            color:#ffffff;
        }
        .user{
            text-shadow: 0 0 10px #666;
        }
        
    }
}
</style>
