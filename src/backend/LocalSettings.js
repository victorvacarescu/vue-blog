import Vue from 'vue'

export default{
  set_token: function (newToken) {
    window.localStorage.setItem('token', newToken)
    Vue.http.headers.common['Token'] = newToken
  },
  get_token: function () {
    return window.localStorage.getItem('token')
  },
  set_id_user: function (idUser) {
    window.localStorage.setItem('id_user', idUser)
    Vue.http.headers.common['IdUser'] = idUser
  },
  get_id_user: function () {
    return window.localStorage.getItem('id_user')
  },
  login: function (token, idUser, drepturi, adresaFiscala) {
    this.set_token(token)
    this.set_id_user(idUser)
    window.localStorage.setItem('adresa_fiscala', adresaFiscala)
  },
  logout: function () {
    this.set_token('')
    this.set_id_user('')
  },
  verify_login_and_redirect: function (vueInstance) {
    if (!this.is_logged_in()) {
      vueInstance.$router.push('/')
    }
  }
}
