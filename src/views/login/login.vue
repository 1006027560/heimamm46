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
      <!-- 表单 -->
      <el-form ref="form" :model="loginForm" label-width="43px">
        <!-- 手机号 -->
        <el-form-item>
          <el-input prefix-icon="el-icon-user" placeholder="请输入手机号" v-model="loginForm.phone"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            show-password
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <el-row>
            <el-col :span="17">
              <el-input
                prefix-icon="el-icon-key"
                placeholder="请输入验证码"
                v-model="loginForm.loginCode"
              ></el-input>
            </el-col>
            <!-- 登录验证码 -->
            <el-col :span="7">
              <img class="login-code" src="../../assets/login_captcha.png" alt="">
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 用户协议 -->
        <el-form-item>
          <el-checkbox v-model="loginForm.isChecked">是否同意用户协议</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
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
      loginForm: {
        //手机号
        phone: "",
        //密码
        password: "",
        //验证码
        loginCode: "",
        //是否勾选
        isChecked: false
      }
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
    box-sizing: border-box;
    padding-right: 41px;
    .login-code{
      width: 100%;
      height: 40.8px;
    }
    .title-box {
      display: flex;
      align-items: center;
      margin-top: 44px;
      margin-left: 20%;
      margin-bottom: 27px;
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