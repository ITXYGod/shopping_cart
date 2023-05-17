<template>
    <div class="my-counter">
        <button type="button" class="btn btn-light" @click="countLits.goods_count--"
            :disabled="countLits.goods_count === 1">-</button>
        <input type="number" class="form-control inp" v-model="countLits.goods_count">
        <button type="button" class="btn btn-light" @click="countLits.goods_count++">+</button>
    </div>
</template>
  
<script>
export default {
    props: {
        countLits: Object
    },
    // 通过watch来监听用户输入数量
    watch: {
        countLits: {
            deep: true,
            handler() {
                if (this.countLits.goods_count < 1) {
                    this.countLits.goods_count = 1;
                }
            }
        }
    }
}
</script>
  
<style lang="less" scoped>
.my-counter {
    display: flex;

    .inp {
        width: 45px;
        text-align: center;
        margin: 0 10px;
    }

    .btn,
    .inp {
        transform: scale(0.9);
    }
}
</style>