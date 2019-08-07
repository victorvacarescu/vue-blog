<template>    
    <div class="users">        
        <el-col :span="4">
            <el-input v-model="Filters.Username" placeholder="Username">
                <el-button slot="append" icon="el-icon-search" @click="interogareServer()"></el-button>  
            </el-input>
            <el-input v-model="Filters.Nume" placeholder="Nume">
                <el-button slot="append" icon="el-icon-search" @click="interogareServer()"></el-button>  
            </el-input>
            <el-input v-model="Filters.Email" placeholder="Email">
                <el-button slot="append" icon="el-icon-search" @click="interogareServer()"></el-button>  
            </el-input>
        </el-col>
        <el-col :span="4">
            <!-- <select v-model="selected">
                <option v-for="option in options" v-bind:value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <el-input placeholder="option.text"></el-input>-->
            <el-autocomplete v-model="Filters" :fetch-suggestions="Filters" placeholder="Alege categoria" @select="handleSelect">                                                                
            </el-autocomplete>
        </el-col>             
        <el-table :data="users" style="width: 100%">                
            <el-table-column prop="Prenume"  label="Prenume" width="180"></el-table-column>                                                            
            <el-table-column prop="Nume"     label="Nume"    width="180"></el-table-column>                                                            
            <el-table-column prop="Email"    label="Adresa E-mail">      </el-table-column>                                            
            <el-table-column prop="Username" label="Username">           </el-table-column>                                            
            <el-table-column label="Actiuni">
                <el-button type="primary" icon="el-icon-edit"   circle></el-button>                                                                                            
                <el-button type="danger"  icon="el-icon-delete" circle></el-button>                                                                                                                                                
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
            Filters: {
                Nume:'',
                Prenume: '',
                Email: '',
                Username: '',
            },
            selected: 'A',
            options: [
                { text: 'Prenume', value: 'A' },
                { text: 'Nume', value: 'B' },
                { text: 'Email', value: 'C' }
            ]                                            
        }
    },
    methods: {
        interogareServer(){                        
            this.$http
            .post('api/users/getServerInfo',{Filters:this.Filters})
            .then(
                function(response){                                        
                    this.users = response.body.Users;
                    // console.log(this.users);                   
                     console.log(response.body);                   
                }                
            )
        },
        handleSelect(item) {
            console.log(item);
        }
    },
    mounted(){        
        this.interogareServer();
    }
}
</script>
