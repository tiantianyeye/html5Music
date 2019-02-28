<template>
    <div class='swiper-div'>
        <swiper 
            indicator-dots="true"
            indicator-color='#EA5A49'
            autoplay="true" 
            interval="5000" 
            duration="600"
            circular='true'>
            <block v-for="(item,index,key) in imgUrls" :key='key' >
                <swiper-item>
                    <img 
                        class='slide-image' 
                        mode='aspectFit'
                        v-for='(image,i,key1) in item'
                        :key='key1'
                        :src="image.imgUrl"
                        @click='bookDetail(image)'
                    />
                </swiper-item>
            </block>
        </swiper>
    </div>
</template>

<script>
import {bookTopUrl} from '../config.js';
import {get} from '../utils/index.js';
export default {
    data(){
        return {
			imgUrls: []
        }
    },
	mounted(){
		this.getTop();
	},
    methods: {
        bookDetail(image){
            var detailUrl = '/pages/detail/index?isbn='+image.ISBN;
            uni.navigateTo({
                url: detailUrl
            })
        },
		//获取排行版
		getTop(){
			var that = this;
			get(bookTopUrl)
			.then((res)=>{
				that.imgUrls = [res.slice(0,3), res.slice(3,6), res.slice(6,9)];
			}, true);
		}
    }
} 
</script>

<style lang="less" scoped>
.swiper-div{
    width: 100%;
    margin-top:5px;
    img.slide-image{
        width: 33%;
        height: 250rpx;
    }
} 
</style>