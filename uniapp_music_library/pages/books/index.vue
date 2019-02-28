<template>
    <div class='book-div'>
        <!--轮播图-->
        <TopSwiper />
        <!--数据列表-->
        <MyCard v-for="(item, key, index) in books" :key='key' :book='item' />
		<MyNoMore :toShow='!more'/>
    </div>
</template>

<script>
import {get} from '@/utils/index';
import {bookListUrl,bookTopUrl} from '@/config';
import MyCard from '@/components/myCard.vue';
import TopSwiper from '@/components/topSwiper.vue';
import MyNoMore from '@/components/myNoMore.vue';

export default {
    data(){
        return {
            userInfo: {},  //用户信息
            books: [],
            currentPage:1,   //当前数据的页码
            pages:0,   //数据总页码数
            more: true,
        }
    },
    components: {
        MyCard,TopSwiper,MyNoMore
    },
    methods: {
        getList(){
            var that = this;
            uni.showNavigationBarLoading();
            this.more  = true;
            get(bookListUrl,{
                currentPage: that.currentPage
            }, true)
            .then((res)=>{
                //console.log(res)
                var data = res.data;
                that.books = [...that.books,...data.result];
                that.pages = data.pages;
                if(that.currentPage>=data.pages){
                    that.more = false;
                }else{
                    that.currentPage++;
                }
                uni.stopPullDownRefresh();  //停止当前页面下拉刷新
                uni.hideNavigationBarLoading();
            })
        },
    },
    created(){
        var userInfo = uni.getStorageSync('userInfo');
        this.getList();
    },
    //下拉刷新
    onPullDownRefresh(){
        //console.log('下拉刷新')
        this.currentPage = 1;
        this.pages = 0;
        this.books = [];
        this.getList();
    },
    //上拉加载更多
    onReachBottom(){
        if(!this.more){
            return;
        }
        this.getList();
    }
}

</script>

<style lang="">
    
</style>