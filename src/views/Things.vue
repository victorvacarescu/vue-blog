<template>
    <div class="demo">
        <Header/>
        <h1>Things</h1>

        <el-container>
            <el-aside style="text-align: left">                
                <el-menu :default-openeds="['1']">                    
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-menu"></i>Admin</template>                                                
                        <el-menu-item>Lista Admin</el-menu-item>                                                   
                        <el-menu-item>Lista Utilizatori</el-menu-item>                                                                                                                                                          
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-setting"></i>Diverse</template>                                                
                        <el-menu-item>Option 1</el-menu-item>                                                   
                        <el-menu-item>Option 2</el-menu-item>                                                   
                        <el-menu-item>Option 3</el-menu-item>                                                                           
                    </el-submenu>                    
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">                    
                            <el-dropdown-item>Adauga User</el-dropdown-item>                    
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>Options</span>
                </el-header>                
                <el-main>
                    <Users/>
                </el-main>
            </el-container>
        </el-container>
                
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Users from '@/components/Users.vue'

export default {
  name: 'things',
  components: {
    Header,
    Users
  }
}
</script>

<style scoped>

   h1 {
       margin-bottom: 40px;
   }
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

</style>

