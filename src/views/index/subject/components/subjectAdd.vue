<template>
  <el-dialog
    class="subject-add"
    width="600px"
    center
    title="新增学科"
    :visible.sync="dialogFormVisible"
  >
    <el-form :model="form" ref="subjectAdd" :rules="rules">
      <el-form-item prop="rid" label="学科编号" :label-width="formLabelWidth">
        <el-input v-model="form.rid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="学科名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="short_name" label="学科简称" :label-width="formLabelWidth">
        <el-input v-model="form.short_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="intro" label="学科简介" :label-width="formLabelWidth">
        <el-input v-model="form.intro" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="remark" label="学科备注" :label-width="formLabelWidth">
        <el-input v-model="form.remark" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm('subjectAdd')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { subjectAdd } from "@/api/subject.js";
export default {
  name: "subjectAdd",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        // 学科编号
        rid: "",
        // 学科名称
        name: "",
        // 简称
        short_name: "",
        // 简介
        intro: "",
        // 备注
        remark: ""
      },
      rules: {
        rid: [{ required: true, message: "学科编号不能为空", trigger: "blur" }],
        name: [{ required: true, message: "学科名称不能为空", trigger: "blur" }]
      },
      // 文字的宽度
      formLabelWidth: "120px"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 成功
          // 把form对象的所有键值对 全部传递进来
          subjectAdd(this.form).then(res => {
            if (res.code === 200) {
              // 关闭对话框
              this.dialogFormVisible = false;
              // 清空对话框
              this.$refs[formName].resetFields();
              // 重新获取数据
              this.$parent.getData();
              this.$message.success("新增成功");
            } else if (res.code === 201) {
              this.$message.warning(res.message);
            }
          });
        } else {
          // 失败
          this.$message.error("数据校验失败，请检查");
          return false;
        }
      });
    }
  }
};
</script>

<style lang='less'>
.subject-add {
  .el-dialog__header {
    background: linear-gradient(to right, #00c6f9, #1495fb);
  }
  .el-dialog__title {
    color: white;
  }
  .el-dialog__close {
    color: white;
  }
}
</style>