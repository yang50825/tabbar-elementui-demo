<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="#"> </el-table-column>
      <el-table-column prop="goodsName" label="商品名称"> </el-table-column>
      <el-table-column prop="goodsPrice" label="价格"> </el-table-column>
      <el-table-column prop="tags" label="标签">
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.inputVisible"
            v-model.trim="scope.row.inputValue"
            placeholder="请输入内容"
            @blur="fn(scope)"
            @keydown.enter.native="addTag(scope)"
            v-focus.native
          ></el-input>
          <el-button
            v-else
            type="primary"
            @click="scope.row.inputVisible = true"
            >+Tag</el-button
          >
          <br />
          <el-tag
            type="warning"
            v-for="(val, index) in scope.row.tags"
            :key="index"
            class="tag"
            >{{ val }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click="delFn(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    fn(scope) {
      scope.row.inputVisible = false
      scope.row.inputValue = ''
    },
    queryGoodsList() {
      this.$axios({
        url: '/api/tabbar/queryGoodsList',
      }).then((res) => {
        this.list = res.data.data
      })
    },
    delFn(id) {
      this.$axios({
        url: '/api/tabbar/deleteGoodsById',
        params: {
          id,
        },
      }).then(() => {
        this.queryGoodsList()
      })
    },
    addTag(obj) {
      if (obj.row.inputValue === null || obj.row.inputValue === '') {
        this.$message({
          message: 'tag不能为空',
          type: 'warning',
        })
        return
      }

      obj.row.tags.push(obj.row.inputValue)
      obj.row.inputVisible = false
      obj.row.inputValue = ''

      this.$axios({
        method: 'POST',
        url: '/api/tabbar/updateTags',
        data: {
          id: obj.row.id,
          tagsString: obj.row.tags.join(','),
        },
      }).then(() => {
        console.log('增加tag')
        this.queryGoodsList()
      })
    },
  },
  created() {
    this.queryGoodsList()
  },
}
</script>

<style>
.tag {
  margin-right: 5px;
}
</style>
