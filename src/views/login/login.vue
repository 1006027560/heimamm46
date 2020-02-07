<template>
  <div class="login-container">
    <!-- 左边盒子 -->
    <div class="left-box">
      <div class="title-box">
        <img src="../../assets/login-logo.png" class="logo" />
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <span class="sub-title">用户登录</span>
      </div>
      <div class="center">
        <el-input class="user" placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="input1"></el-input>
        <el-input
          class="user"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="input2"
          show-password
        ></el-input>
        <el-input class="user" placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="input3"></el-input>
        <el-checkbox v-model="checked">
          已阅读并同意
          <el-link  type="primary">用户协议</el-link>和
          <el-link type="primary">隐私条款</el-link>
        </el-checkbox>
      </div>
      <el-button @click="clickMe" class="my-btn" type="primary">登录</el-button>
      <el-button class="my-btn" type="primary">注册</el-button>
    </div>
    <!-- 右边图片 -->
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input1: "",
      input2: "",
      input3: ""
    };
  }
};
</script>

<style lang="less">
.login-container {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  /* 弹性布局 */
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 左右均分 */
  justify-content: space-around;

  .left-box {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    .title-box {
      display: flex;
      align-items: center;
      margin-top: 44px;
      margin-left: 20%;
      .title {
        font-size: 24px;
        margin-left: 16px;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        height: 28px;
        background-color: #c7c7c7;
      }
      .sub-title {
        font-size: 21px;
        margin-left: 12px;
      }
    }
  }
  .center {
    margin-left: 43px;
    margin-top: 30px;
    margin-bottom: 30px;
    .user {
      //   margin-top: 30px;
      width: 394px;
      height: 45px;
      margin-bottom: 30px;
    }
    
  }
  
  .my-btn {
    width: 394px;
    margin-left: 8%;
    margin-bottom: 30px;
  }
  .my-btn + .my-btn {
    margin: 0;
    margin-left: 8%;
  }
}
</style>