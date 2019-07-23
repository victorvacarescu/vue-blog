<template>
  <div>
    <Header/>
    <h1>Login</h1>
    
    <br><hr>
    <el-col :span="6" :offset="9">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item 
        label="E-mail" 
        prop="email">
          <el-input 
          v-model="ruleForm.email" 
          autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item 
        label="Password" 
        prop="pass">
          <el-input 
          type="password" 
          v-model="ruleForm.pass" 
          autocomplete="off">
          </el-input>
        </el-form-item>        
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'login',
  components: {
    Header
  },
  data() {      
      return {
        ruleForm: {
          email: '',
          pass: ''
        },
        rules: {
          email: [
            { required: true, 
              message: 'Please input email address', 
              trigger: 'blur'
            },                   
            { type: 'email', 
              message: 'Please input correct email address', 
              trigger: ['blur', 'change'] 
            }
          ],
          pass: [
            { required: true, 
              message: 'Please input password', 
              trigger: 'blur' 
            }
          ]
        }
      }
    },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm.email,this.ruleForm.pass)
          alert('submit!');
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

