<template>
  <div class="my-tab-bar">
    <el-row>
      <el-col v-for="(obj, index) in arr" :key="index" :span="24 / arr.length">
        <router-link :to="obj.url" class="link">
          <em :class="obj.iconText"></em>
          {{ obj.text }}
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true,
      // 自定义校验规则
      validator(value) {
        if (value.length >= 2 && value.length <= 5) {
          return true // 符合条件就return
        } else {
          console.error('数据源必须在2-5项')
          return false
        }
      },
    },
  },
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  padding: 5px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #ccc;
  .el-col {
    text-align: center;
    .link {
      color: #333;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    & .router-link-active {
      color: #1d7bff;
    }
  }
}
</style>
