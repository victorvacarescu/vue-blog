<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row :gutter="30">
            <el-col 
            :span="22" 
            :offset="1">
                <el-card 
                :body-style="{ padding: '30px' }"
                shadow="never"
                class="card">                                                                
                    <el-col 
                    :span="6"                      
                    v-for="articol in articole" :key="articol.Id"
                    class="cards">
                        <el-card 
                        :body-style="{ padding: '0px' }" 
                        shadow="hover">
                            <el-image                            
                            :src='"http://www.blog.menut.ro/assets/img/" + articol.Imagine' 
                            :fit="scale-down" 
                            alt="" 
                            class="image">
                            </el-image>
                            <div style="padding: 14px;">
                                <title>{{articol.Titlu}}</title>
                                <div class="bottom clearfix">
                                    <h6> {{ articol.Continut | truncate(100, '...') }} </h6>                                
                                    <el-button type="primary" icon="el-icon-view">Citeste</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>                                                
                </el-card>  
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
        return {
            articole: [],                  
        }
    },
    props: {
        msg: String
    },
    methods: {
        interogareServer(){            
            this.$http
            .post('api/hei/getServerInfo',{})
            .then(
                function(response){
                    console.log(response);
                    this.articole = response.body.Articole;                    
                }                
            )
        }
    },
    filters: {
        truncate: function (text, length, suffix) {
            return text.substring(0, length) + suffix;
        },
    },
    mounted(){        
        this.interogareServer();
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.cards {
    margin-bottom: 30px;            
    }
.el-row {
margin-bottom: 20px;        
}
.image {
width: 100%;
height:240px; 
display: block;
}
.bottom {
margin-top: 13px;
line-height: 12px;
}
.clearfix:before,
.clearfix:after {
    display: table;
}    
.clearfix:after {
    clear: both
}
</style>
