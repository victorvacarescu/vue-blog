<template>
  <div>
    <Header/>
    <h1>Login</h1>    
    <br><hr>    
    <el-col :span="5" :offset="9">
      <template  v-if="alertMessage.state == 'error'">
        <el-alert
          :title="alertMessage.title"
          :type="alertMessage.type">
        </el-alert>
        <br/>
      </template>
      <template  v-if="alertMessage.state == 'success'">
        <el-alert
          :title="alertMessage.title"
          :type="alertMessage.type">
        </el-alert>
        <br/>
      </template>
    <!-- TODO:  creare v-if pentru success si o functie setTimeout() -->

      <el-form 
      :model="ruleForm"
      label-position="left"
      status-icon :rules="rules" ref="ruleForm" 
      label-width="120px" class="demo-ruleForm">
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
          <el-button 
          type="primary" 
          @click="submitForm('ruleForm')">
      <!-- TODO:    creare functie evenimente @keyup.enter sau @click="submitForm('ruleForm')" -->
            Submit
          </el-button>
          <el-button 
          @click="resetForm('ruleForm')">
            Reset
          </el-button>
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
        token: '',
        alertMessage: {
          state: '',
          title: '',
          description: '',
          type: ''
        },     
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
              trigger: 'blur' 
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
      console.log('da')
      this.$refs[formName].validate((valid) => {
        if (valid) {          
          this.$http
              .post('api/login/index',this.ruleForm)             
              .then(
                  function(response){
                    console.log(response)
                    if (response.body.ret.Raspuns == true) {
                      console.log('merge')
                      //this.token = response.body.data.Token
                      //this.$router.push({path: '/things'})
                      this.alertMessage = {
                        state: 'success',
                        title: 'Logare efectuata cu succes! ',
                        description:'la data de: ' + response.body.data.Date
                                    + ' cu Token-ul: ' + response.body.data.Token, 
                                
                        type: 'success'
                      }
                    } else {
                      this.alertMessage = {
                        state: 'error',
                        title: 'username sau parola gresite',
                        type: 'error'
                      }
                    }                                                    
                  }                
              )          
        //alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  // mounted() {
  //   if (localStorage.token){
  //     this.token = localStorage.token;
  //   }
  // }
  
}
</script>

