<template>
    <div class='progressbar'>
        <progress 
            :percent='progressData' 
            stroke-width='8' 
            show-info
            activeColor='#EA5A49'
			backgroundColor='#333'
            active='true'>
        </progress>
        <p class='tip'>{{year}}年已经过去的{{days}}天</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    created(){
        
    },
    methods: {
        getDayOfYear(){
            return this.isLeapYear? 366: 355;
        },
        //判断当前是闰年还是平年，从而判断当前有355/366天
        isLeapYear(){
            if(this.year %400 ===0){
                return true;
            }else if(this.year%4===0 && year%100!==0){
                return true;
            }else{
                return false;
            }
        }
    },
    computed: {
        year(){
            return new Date().getFullYear();    
        },
        days(){
            let start = new Date();
            start.setMonth(0);
            start.setDate(1);
            //设置start是今年的第一天
            let offset = Date.now() - start.getTime();
            return Math.floor(offset/1000/60/60/24)+1;
        },
        progressData(){
            return (this.days*100/this.getDayOfYear()).toFixed(1);
        }
    }
}
</script>

<style lang="less" scoped>
.progressbar{
    width: 100%;
    progress{
        margin-bottom: 5px;
    }
    p.tip{
        font-size:14px;
        color: #999;
        margin-bottom:15px;
    }
}
</style>