<template>
    <div class='container'>
        <div class='userinfo'>
            <img :src="userInfo.avatarUrl" alt="">
            <p class='nickname' v-if='userInfo.nickName'>{{userInfo.nickName}}</p>
            <button class='login-btn' v-else open-type='getUserInfo' @getuserinfo='onGotUserInfo'>点击登陆</button>
        </div>
        <YearProgress></YearProgress>
        <button class='btn' @click='scanBook' v-show='userInfo.nickName'>添加图书</button>
		
		<!--打赏-->
		<div class='reward-div'>
			<image :src='rewardImg'
				:data-src="rewardImg"
				@click='previewImage'></image>
			<p>点击预览图片，长按图片扫一扫</p>
		</div>
    </div>
</template>

<script>
import {loginUrl,doubanBookUrl,addBookUrl} from '@/config';
import {get,post,showToast} from '../../utils/index';
import YearProgress from '@/components/YearProgress';
export default {
    data(){
        return {
            userInfo: {
                avatarUrl: '/static/img/unlogin.png',
                nickName: ''
            },
			//打赏图片的地址
			rewardImg:'https://www.burtyang.top:8080/static/img/reward.jpg'
        }
    },
    created(){
        this.userInfo = uni.getStorageSync('userInfo') || this.userInfo;
    },
    components: {
        YearProgress
    },
    methods:{
        addBook(isbn){
            var that = this;
            post(addBookUrl, {
                isbn,
                uid: that.userInfo.uid,
                nickname: that.userInfo.nickName
            }, true)
            .then((dataObj)=>{
                uni.hideLoading();
                if(dataObj.data=='OK'){  //该图书已经被添加了
					showToast(`${dataObj.title}添加成功`);
                }else if(dataObj.data=='Not exists'){
                    uni.showModal({
                        title: `未找到`,
                        content: `${isbn}:编号图书未找到`,
                        showCancel: false
                    });
                }else if(dataObj.data=='Exists'){
                    uni.showModal({
                        title: '重复添加',
                        content: `${dataObj.title}被添加过了`,
                        showCancel: false
                    });
                }else{
                    uni.showModal({
                        title: '其它错误',
                        showCancel: false
                    });
                }
            });
        },
        //扫描书籍
        scanBook(){
            // 允许从相机和相册扫码
            var that = this;
            uni.showLoading({
                title: '加载中...'
            });
            uni.scanCode({
                success (res) {
                    var result = res.result;  //是一个图书的ISBN值, 例如9787121312007;
                    if(result){
                        that.addBook(result);
                    }
                },
                fail: function(){
					showToast('扫描失败');
                }
            });
        },
        onGotUserInfo(e){
            var that = this;
			var getData = e.target;  //用户信息都在这里
			//console.log(getData)
            let userInfo = uni.getStorageSync('userInfo');
            if(!userInfo){
                //授权登陆，获取用户信息
                new Promise((resolve, reject)=>{
                    uni.login({
                        success: function(res){
                            var code = res.code;
                            resolve(code);
                        }
                    });
                })
                .then((code)=>{
					uni.showLoading({
						title: '登陆中...'
					});
					/****
                    return new Promise((resolve, reject)=>{
                        uni.getUserInfo({
                            success: function(res){
                                resolve({code, userInfo:res.userInfo});
                            }
                        });
                    }); ***/
					let obj = {
						code: code,
						userInfo: {
							avatarUrl: getData.userInfo.avatarUrl,
							city: getData.userInfo.city,
							country: getData.userInfo.country,
							gender: getData.userInfo.gender,
							language: getData.userInfo.language,
							nickName: getData.userInfo.nickName,
							province: getData.userInfo.province,
						}
					};
					get(loginUrl, obj, true)
					.then((data)=>{
						console.log(data,11)
						var uid = data.uid;
						var tmpObj = {uid, ...obj.userInfo};
						uni.setStorageSync('userInfo',tmpObj);
						that.userInfo = tmpObj;
						uni.hideLoading();
					})
					.catch((ex)=>{
						showToast('登陆失败');
					});
                });
            }
        },
		//预览打赏图片
		previewImage(event){
			var imgUrl = event.target.dataset.src;
			uni.previewImage({
				current: imgUrl,
				urls: [imgUrl]
			});
		}
    }
}
</script>

<style lang="less">
.container{
    padding: 0 30rpx;
    text-align: center;
    .userinfo{
        margin-top:100rpx;
        margin-bottom: 10px;
        img{
            width: 150rpx;
            height: 150rpx;
            margin: 20rpx;
            border-radius: 50%;
        }
        .login-btn{
            width: 100px;
            border:#1AA034 1px solid;
            background: #fff;
            color: #1AA034;
            border-radius: 8px;
            font-size:14px;
            padding:01;
        }
		
        .login-btn:active{
            background: #e5e5e5e;
        }
    }
	.btn{
		border:#1AA034 1px solid;
		color: #1AA034;
	}
}
/**打赏**/
.reward-div{
	width: 80%;
	text-align: center;
	margin: 10px auto;
	color: #333;
	image{
		width: 200upx;
		height:200upx;
	}
	p{
		
	}
}
</style>