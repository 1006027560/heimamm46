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
      <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="43px">
        <!-- 手机号 -->
        <el-form-item>
          <el-input prefix-icon="el-icon-user" placeholder="请输入手机号" v-model="loginForm.phone"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            show-password
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="loginCode">
          <el-row>
            <el-col :span="17">
              <el-input
                prefix-icon="el-icon-key"
                placeholder="请输入验证码"
                v-model="loginForm.loginCode"
              ></el-input>
            </el-col>
            <!-- 登录验证码 -->
            <el-col :span="7" class="code-col">
              <img class="login-code" :src="codeUrl" @click="changeCode" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 用户协议 -->
        <el-form-item>
          <el-checkbox v-model="loginForm.isChecked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="mybtn" @click="submitForm('loginForm')" type="primary">登录</el-button>
          <el-button class="mybtn" @click="showRegister" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
      <registerDialog ref="registerDialog"></registerDialog>
    </div>
    <!-- 右边图片 -->
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
//导入 注册对话框组件
import registerDialog from "./components/registerDialog.vue";

window.console.log(process.env.VUE_APP_URL);

export default {
  name: "login",
  //注册组件
  components: {
    registerDialog //省略 属性值
  },
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
      },
      rules: {
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "密码的长度为6-12位", trigger: "change" }
          //change边打字边验证
        ],
        loginCode: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "验证码的长度为4位", trigger: "blur" }
        ]
      },
      codeUrl: process.env.VUE_APP_URL + "/captcha?type=sendsms"
    };
  },
  methods: {
    // 提交表单
    submitForm(formName) {
      // 等同于 this.$refs['loginForm'] 相当于获取到了Element-ui的表单
      // this.$refs['loginForm'] 等同于 this.$refs.loginForm
      // validate这个方法是Element-ui的表单的方法
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message.success("验证成功");
        } else {
          this.$message.error("验证失败");
          return false;
        }
      });
    },
    showRegister() {
      // this.$refs 可以获取所有设置了ref属性的元素，包括组件
      // registerDialog 和上面设置的属性要一致
      // 也可以用 this.$refs['registerDialog']
      this.$refs.registerDialog.dialogFormVisible = true;
    },
    changeCode() {
      //随机数修改 效果不好
      //this.codeURL = process.env.VUE_APP_URL+'/captcha?type=sendsms&t=' + Math.random()
      // 时间戳修改
      this.codeUrl =
        process.env.VUE_APP_URL + "/captcha?type=sendsms&t=" + Date.now();
    }
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
    // 设置样式 把表单间隙空出来
    box-sizing: border-box;
    padding-right: 41px;
    // 验证码样式
    .login-code {
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
    //验证码的提示高度
    .code-col {
      height: 40.8px;
    }
  }
  // 协议区域的布局
  .el-checkbox {
    display: flex;
    align-items: center;
    .el-checkbox__label {
      display: flex;
    }
  }
  .mybtn {
    width: 100%;
  }
  .mybtn + .mybtn {
    margin-top: 26px;
    margin-left: 0;
  }
}
</style>