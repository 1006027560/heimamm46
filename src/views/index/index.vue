<template>
  <el-container class="my-container">
    <el-header class="my-header">
      <div class="left">
        <i class="el-icon-s-fold" @click="isCollapse = !isCollapse"></i>
        <img src="../../assets/index_logo.png" alt />
        <span>黑马面面</span>
      </div>
      <div class="right">
        <img :src="userIcon" alt />
        <span class="name">{{username}},您好</span>
        <el-button type="primary" @click="logout">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="auto" class="my-aside">
        <el-menu
          router
          :default-active="$route.path"
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="/index/chart">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">数据概览</span>
          </el-menu-item>
          <el-menu-item index="/index/user">
            <i class="el-icon-user"></i>
            <span slot="title">用户列表</span>
          </el-menu-item>
          <el-menu-item index="/index/question">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">题库列表</span>
          </el-menu-item>
          <el-menu-item index="/index/enterprise">
            <i class="el-icon-office-building"></i>
            <span slot="title">企业列表</span>
          </el-menu-item>
          <el-menu-item index="/index/subject">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">学科列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="my-main">
        <!-- 路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {  logout } from "@/api/index.js";
import { removeToken } from "@/utils/token.js";
export default {
  name: "index",
  data() {
    return {
      //用户名
      username: "",
      //用户头像
      userIcon: "",
      //是否折叠
      isCollapse: false
    };
  },
  methods: {
    logout() {
      this.$confirm("你确定要退出吗", "友情提示", {
        comfirmButtonText: "狠心离开",
        cancelButtonText: "继续看看",
        type: "success"
      })
        .then(() => {
          logout().then(res => {
            if (res.data.code === 200) {
              removeToken();
              this.$router.push("/login");
            }
          });
        })
        .catch(() => {
          //点击取消
        });
    }
  },
  //判断token是否为空
  // beforeCreate() {
  //   if (getToken() == undefined) {
  //     //提示用户
  //     this.$message.warning("请先登录");
  //     //返回登录页
  //     this.$router.push("/login");
  //   }
  // },
  // created() {
  //   info().then(res => {
  //     if (res.data.code === 206) {
  //       this.$message.warning("登录状态有误,请重新登录");
  //       removeToken();
  //       this.$router.push("/login");
  //     } else if (res.data.code === 200) {
  //       this.username = res.data.data.username;
  //       // 服务器返回的头像地址不完整，需要进行拼接
  //       this.userIcon = process.env.VUE_APP_URL + "/" + res.data.data.avatar;
  //     }
  //   });
  // }
};
</script>

<style lang="less">
.my-container {
  height: 100%;
  .my-header {
    // background: hotpink;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      i {
        font-size: 24px;
        margin-right: 22px;
      }
      img {
        margin-right: 11px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      img {
        width: 43px;
        height: 43px;
        border-radius: 50%;
        margin-right: 9px;
      }
      span.name {
        margin-right: 38px;
        font-size: 14px;
      }
    }
  }

  .my-main {
    background: #0094ff;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>