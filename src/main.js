import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.http.options.root = 'http://www.vue.blog.menut.ro/';

// Vue.http.headers.common['Token' ] = settings.get_token()
// Vue.http.headers.common['IdUser'] = settings.get_id_user()
// Vue.http.headers.common['AppCmd'] = '1'

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

/*
* headere pentru a evita problemele CORS
* tabel care tine minte token-uri si data (Id,Token,Data)
* functie login utilizator in php 
*    - primeste de la vue username si parola
*    - verifica in baza de date cuplul username si parola
*    - daca am gasit utilizator, ii creez un token si il inserez in baza de date in tabelul tokens
*    - raspund catre vue cu eroare daca nu am gasit utilizator si cu token si mesaj succes daca am utilizator
* in vue trebuie sa pot stoca token-ul si sa il trimit la fiecare request in headere (se stocheaza in local storage) 
* functie de php care verifica tokenul la fiecare request pe care il trimite vue 

controller Login. Functie Index care primeste prin POST username si parole si le verifica in BD.
 * in Vue Login Form. Username sa valideze email-ul si parola. Ambele valide si obligatorii.
 *    - o functie @click care trimite prin POST usrnm si parola catre controller Login.
 *
 * proiectul codeigniter pe laptop.
 * LocalStorage de cautat.
*/
