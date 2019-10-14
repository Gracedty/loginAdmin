<template>
<div class="loginbox">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="form_container" >

    <el-form-item label="用户" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input :type="passwordType" v-model.number="ruleForm.password" autocomplete="off" :key="passwordType" ref="password"></el-input>
      <span class="show-pwd" @click="showPwd">
          <i :class="passwordType === 'password' ? 'el-icon-circle-plus-outline' : 'el-icon-circle-check'" ></i>
      </span>
    </el-form-item>

    <el-form-item>
      <el-button :loading='loading' type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
import {validUsername} from '@/utils/validate'
  export default {
    data() {
      const validateUsername = (rule, vaule, callback) => {
        if(!validateUsername(vaule)){
          callback(new Error('请输入正确的用户名'))
        }else{
          callback()
        }
      }
      const validatePassword = (rule, vaule, callback) => {
        if(vaule.length < 6){
          callback(new Error('密码至少6位数'))
        }else{
          callback()
        }
      }
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
         username: [
            { required: true, trigger: 'blur'},
          ],
          password: [
             { required: true, trigger: 'blur'},
          ],
        },
        redirect:undefined,
        passwordType:'password',
        loading:false
      };
    },
    watch:{
      $route: {
        // 立刻监听
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
          console.log( route.query)
        },
        immediate:true
      }
    },
    methods: {
      // 密码显示隐藏
      showPwd(){
        if(this.passwordType == 'password'){
          this.passwordType = ''
        }else{
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('user/login',this.ruleForm).then(() => {
              this.$router.push({path:'/dashboard'})
              this.loading = false
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style  scoped>
  .loginbox{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: pink;
  }
  .form_container{
    width: 350px;
    height: 180px;
    background: #fff;
    padding: 40px;
  }
</style>
