<template>    
    <div class="users">
        <div>
            <el-input v-model="Filters.Nume"></el-input>
            <el-button @click="interogareServer()">Cauta</el-button>
        </div>
        <el-table
        :data="users"
        style="width: 100%">
            <el-table-column
                prop="Prenume"
                label="Prenume"
                width="180">
            </el-table-column>
            <el-table-column
                prop="Nume"
                label="Nume"
                width="180">
            </el-table-column>
            <el-table-column
                prop="Email"
                label="Adresa E-mail">
            </el-table-column>
            <el-table-column
                prop="Username"
                label="Username">
            </el-table-column>
            <el-table-column
                label="Actiuni">
                <template>
                    <el-button
                        type="primary"
                        icon="el-icon-edit"
                        circle
                        ></el-button>
                    <el-button
                        type="danger"
                        icon="el-icon-delete"
                        circle
                        ></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'Users',
    data() {
        return {
            users: [], 
            Filters: {Nume:''}                 
        }
    },    
    methods: {
        interogareServer(){            
            this.$http
            .post('api/users/getServerInfo',{Filters:this.Filters})
            .then(
                function(response){                    
                    console.log(response);
                    this.users = response.body.Users;                    
                }                
            )
        }
    },
    mounted(){        
        this.interogareServer();        
    }
}
</script>
