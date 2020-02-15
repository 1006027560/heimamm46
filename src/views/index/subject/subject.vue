<template>
  <div class="subject-container">
    <!-- 顶部盒子 -->
    <el-card class="top-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学科编号">
          <el-input class="short" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="学科名称">
          <el-input class="normal" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="创建者">
          <el-input class="short" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input class="short" v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >查询</el-button>
          <el-button >清除</el-button>
          <el-button type="primary" icon="el-icon-plus" >新增学科</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 底部盒子 -->
    <el-card class="bottom-card">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" label="索引"></el-table-column>
        <el-table-column prop="rid" label="学科编号"></el-table-column>
        <el-table-column prop="name" label="学科名称"></el-table-column>
        <el-table-column prop="short_name" label="简称"></el-table-column>
        <el-table-column prop="username" label="创建者"></el-table-column>
        <el-table-column prop="create_time" label="创建日期"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status===1">启用</span>
            <span style="color:red" v-else>禁用</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="niubi">
            <el-button type="text" size="mini" @click="handleEdit(niubi.$index, niubi.row)">编辑</el-button>
            <el-button
              type="text"
              @click="handleNotAllow(niubi.$index, niubi.row)"
            >{{niubi.row.status===1?'禁用':'启用'}}</el-button>
            <el-button size="mini" type="text" @click="handleDelete(niubi.$index, niubi.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        class="my-pagination"
        background
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="index"
        :page-sizes="[2, 4, 5, 10]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import { subjectList } from "@/api/subject.js";
export default {
  name: "subject",
  created() {
    subjectList().then(res => {
      this.tableData = res.data.items;
    });
  },
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      // 底部表格的数据
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      // 分页器的数据
      // 页码
      index: 1,
      // 页容量
      size: 5,
      // 总条数
      total: 20
    };
  },
  methods: {
    // 编辑
    handleEdit(index, row) {
      window.console.log(index, row);
      row.name = "王二花";
    },
    // 删除
    handleDelete(index, row) {
      window.console.log(index, row);
    },
    // 不允许
    handleNotAllow(index, row) {
      window.console.log(index, row);
    },
    // 页容量改变
    sizeChange(val) {
      window.console.log(`每页 ${val} 条`);
    },
    // 页码改变
    currentChange(val) {
      window.console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang='less'>
.subject-container {
  .top-card {
    .short {
      width: 100px;
    }
    .normal {
      width: 150px;
    }
  }
  // 底部的卡片
  .bottom-card {
    margin-top: 19px;
    .my-pagination {
      margin-top: 30px;
      text-align: center;
    }
  }
}
</style>
