<template>
    <div class='detail-div'>
        <div class='thumb'>
            <img class='back' :src="info.imgUrl" alt="" mode='aspectFill'>
            <div class='front-div'>
                <img class='small-img' :src="info.imgUrl" alt="" mode='aspectFit'>
                <p class='bookname'>{{info.bookname}}</p>
                <p class='author'>{{info.author}}</p>
            </div>
            
        </div>
        <div class='owner'>
            <div class='left person-div'>
                <img :src="info.avatar" mode='aspectFit'/>
                <span class='nickname'>{{info.uploadPersonName}}</span>
            </div>
            <span class='right'>
                {{info.rate}}分 <MyRate :value='info.rate' />
            </span>
            <div class='publish-info clear'>
                <span>{{info.publisher}}</span>
                <span class='right'>{{info.price}}元</span>
            </div>
            <div class='tags-info clear'>
                <span v-for='(tag,key) in info.tags' :key='key' class='badge'>
                    {{tag}}
                </span>
            </div>
            <div class='summary clear'>
                <p v-for='(text,key) in info.summary' :key='key'>
                    {{text}}
                </p>
            </div>
        </div>

        <!--评论-->
        <div class='comment'>
            <textarea v-model='comment'
                class='textarea'
                maxlength='100'
                placeholder='sorry个人开发者，不允许评论模块。'
                disabled='true'
            ></textarea>
            <div class='phone'>
                手机型号：
                <span class='text-primary'>{{phoneMode}}</span>
            </div>
            <div class='location'>
                地理位置：
                <switch class='right' color='#EA5A49' @click='getGeo'/>
                <span class='text-primary'>{{location}}</span>
            </div>
            <!--<button class='btn' @click='addComment'>评论</button>-->
        </div>

        <!--点击分享-->
        <button open-type='share' class='btn'>转发给好友</button>
    </div>
</template>

<script>
import {post,get,showToast} from '@/utils/index';
import {bookDetailUrl,bookAddComment,bookCommentList} from '@/config';
import MyRate from '@/components/myRate.vue';
export default {
    data(){
        return {
            userInfo: {},
            isbn: '',  //传递的图书编号
            info: {},  //图书信息
            comment: '',  //评论内容
            location: '',   //地理位置
            phoneMode: '',   //手机型号
        }
    },
    mounted() {
        //获取小程序  page onLoad时候传递的optins
        //this.$root.$mp.query
        this.isbn = this.$root.$mp.query.isbn;
        this.userInfo = uni.getStorageSync('userInfo');
        this.getDetail();  //获取图书详情
        this.getPhone();  //获取手机信息
    },
    components: {
        MyRate
    },
    methods: {
        getDetail(){
            var that = this;
            post(bookDetailUrl, {isbn: that.isbn})
            .then((res)=>{
				console.log(res)
				if(res){
					var data = res;
					data.tags = data.tags.split(',');
					data.summary = data.summary.trim().split('\n');
					that.info = data;
					uni.setNavigationBarTitle({
						title: data.bookname.slice(0,15)
					});
				}else{
					showToast('书籍不存在');
				}
            }, true)
        },
        //获取位置
        getGeo(e){
            if(this.location){
                this.location = '';
            }else{
                var that = this;
                uni.getLocation({
                    success: function(res){
                        //console.log(res);
                        var latitude = res.latitude;  //纬度
                        var longitude = res.longitude;  //经度
                        if(latitude && longitude){
                            var baidumapUlr = 'https://api.map.baidu.com/geocoder/v2/';
                            var ak = 'Y7W2Yg6SNMF3HYF6GWGcoH4tLzC2gCZP';
                            uni.request({
                                url: baidumapUlr,
                                data: {
                                    location: `${latitude},${longitude}`,
                                    ak,
                                    output: 'json'
                                },
                                method: 'GET',
                                success: function(res){
                                    if(res.statusCode===200){
                                        var city = res.data.result.addressComponent.city;
                                        that.location = city;
                                    }else{
                                        that.location = '未知地点';
                                    }
                                }
                            });
                        }
                    }
                });
            }
        },
        //获取手机信息
        getPhone(){
            var phoneInfo = wx.getSystemInfoSync();
            this.phoneMode = phoneInfo.model;
        },
        //添加评论
        addComment(){
            var comment = this.comment.trim();  //评语
            if(!comment){
                return;
            };
            var that = this;
            comment = comment.replace(/[\<\>]/g,'');
            //评论内容，手机型号、地理位置、图书id、用户的uid
            const data = {
                uid: this.userInfo.uid,
                uploadPersonName: this.userInfo.nickName,
                isbn: this.isbn,
                phoneMode: this.phoneMode,
                location: this.location || '',
                comment,
                bookname: this.info.bookname
            };
            post(bookAddComment, data)
            .then((res)=>{
                if(res.data=='OK'){
                    uni.showToast({
                        title: '评论成功'
                    });
                }else if(res.data=='Exists'){
                    uni.showModal({
                        title:'已经评论过了',
                        content: '',
                        showCancel: false
                    });
                }
            }, true);

        },
    },


    //分享内容到好友
    onShareAppMessage: function(){
        var that = this;
        return {
            title: that.info.bookname,    //标题
            desc: '分享给您一本好书:'+that.info.bookname,  //分享描述
            path:'/pages/detail/main?isbn='+that.info.ISBN  //链接
        }
    }

}   
</script>

<style lang="less" scoped>
.text-primary{
    color: #EA5A49;
}
.detail-div{
    font-size: 14px;
    .clear{
        clear: both;
    }
    .left{
        float:left;
    }
    .right{
        float: right;
    }
    .thumb{
        width:750rpx;
        height: 500rpx;
        overflow: hidden;
        position: relative;
        .back{
            width: 100%;
            height: 100%;
            filter: blur(10px);
            position: absolute;
            top:0; left:0;
            z-index:-1;
        }
        .front-div{
            height: 100%;
            .small-img{
                height: 300rpx;
                display: block;
                margin: 10px auto;
            }
            p.bookname,p.author{
                text-align: center;
                color: #000;
                text-shadow:5px 5px 5px #fff;
            }
            p.bookname{
                font-size:18px;
            }
            p.author{
                font-size:14px;
            }
        }
    }
    .owner{
        overflow: hidden;
        padding: 5px;
        .person-div{
            verticle-align:middle;
        }
        img{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            vertical-align:middle;
        }
        .nickname{
            margin-left:3px;
        }
        .publish-info{
            margin:5px 0;
        }
        .summary{
            margin-top:8px;
            text-indent:28px;
            font-size:12px;
        }
    }
    .badge{
        color: #EA5A49;
        border:1px solid #EA5A49;
        border-radius: 8px;
        margin: 5px;
        padding: 3px;
        display: inline-block;
    }
    /**评论**/
    .comment{
        font-size:14px;
        margin:10px 0;
        .textarea{
            width: 730rpx;
            height: 200rpx;
            padding: 10rpx;
            background:#eee;
            color: #333;
            border:1px solid #EA5A49;
            box-sizing:border-box;
            margin:0 auto;
        }
        .location,.phone{
            font-size:16px;
            padding: 8px;
        }
        .location{
            switch{
                margin-top:-8px;
            }
        }
        .btn{

        }
    }
}  
</style>