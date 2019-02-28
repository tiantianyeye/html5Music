<template>
    <span>
        <span class='star' v-for='(item, key, index) in starArrNum' :key="key">
            {{item==1? '★': '☆'}}
        </span>
    </span>
    
</template>

<script>
/**星星评分组件， 传递的值为0~10之间的值**/
export default{
    data(){
        return {
            
        }
    },
    computed: {
        starArrNum(){
            this.value = this.value*5;
            var starArr = [];
            for(let i=0; i<5; i++){
                let num = parseInt(this.value/10);
                if(num>0){
                    starArr.push(1);
                }else{
                    starArr.push(0);
                }
                this.value = this.value-10;
            }
            return starArr;
        }
    },
    props: ['value']
}
</script>

<style lang="less" scoped>
.star{
    font-size: 12px;
    color: #EA5149;
}
</style>