<template>
  <div>
    <ul>
      <li v-for="item in items" v-if="litera(item,'b')">{{ item }}</li>
    </ul>
    <el-col :span="12" :offset="6">
      <el-checkbox label="Arata varsta > 20" v-model="checked" @change="arataVarsta(20)"></el-checkbox>
      <el-table
        :data="obiecte"
        style="width: 100%"
        ref="filterTable"
        :filters="[{ text: '>20', value: '>20' }, { text: '<20', value: '<20' }]"
        :filter-method="filterTag"
      >
        <el-table-column prop="Id" label="Id" width="180"></el-table-column>

        <el-table-column prop="Nume" label="Nume" width="180"></el-table-column>

        <el-table-column prop="Varsta" label="Varsta">
          <template slot-scope="scope">
            <span style="margin-left: 10px">varsta este {{scope.row.Varsta}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "lista",
  data() {
    return {
      items: ["mar", "banana", "ananas", "para", "caisa"],
      obiecte: [
        { Id: 1, Nume: "Victor", Varsta: 18 },
        { Id: 2, Nume: "Marius", Varsta: 20 },
        { Id: 3, Nume: "George", Varsta: 41 },
        { Id: 4, Nume: "Eugen", Varsta: 53 }
      ],
      checked: true
    };
  },
  methods: {
    litera(word,char) {
      return word[0] == char;
      
    },    
    varsta(item) {
     return item > 20;      
    },
    arataVarsta(varsta) {      
        return this.obiecte.Varsta > 20;      
    }
  }
};
</script>
