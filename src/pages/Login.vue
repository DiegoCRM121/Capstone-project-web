<template>
  <img src="~assets/wave.png" class="wave" alt="login-wave">
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="~assets/login.svg" class="responsive" alt="login-image">
    </div>
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs}" class="col-12 col-md-6 flex content-center">
      <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
        <q-card-section v-if="showLogin">
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~assets/avatar.svg" alt="avatar">
          </q-avatar>
          <q-card-section>
            <div class="q-pt-lg">
              <div class="col text-h6 ellipsis flex justify-center">
                <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Access</h2>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="submitLogin">
              <q-input label="Email" v-model="login.email"></q-input>
              <q-input label="Password" type="password" v-model="login.password"></q-input>
              <div>
                <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
              </div>
              <div class="text-center q-mt-sm q-gutter-lg">
                Don't have an account?<a href="#/login" class="text-white" @click="toggleRegistration">Create account</a> 
              </div>
            </q-form>
          </q-card-section>
        </q-card-section>
        <q-card-section v-else>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="~assets/avatar.svg" alt="avatar">
          </q-avatar>
          <q-card-section>
            <div class="q-pt-lg">
              <div class="col text-h6 ellipsis flex justify-center">
                <h3 class="text-h3 text-uppercase q-my-none text-weight-regular">Registration</h3>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="submitRegistration">
              <q-input label="First Name" v-model="register.username"></q-input>
              <q-input label="Second Name" v-model="register.username"></q-input>
              <q-input v-model="register.dateForm.birthDate" label="Date of Birth">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-date v-model="register.dateForm.birthDate" text-color="white" color="red" :events="register.dateForm.event" event-color="yellow" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input label="Country" v-model="register.country"></q-input>
              <q-input label="Address" v-model="register.address"></q-input>
              <q-input label="Email" v-model="register.email"></q-input>
              <q-input label="Password" type="password" v-model="register.password"></q-input>
              <div>
                <q-btn class="full-width" color="primary" label="Register" type="submit" rounded></q-btn>
                <div class="text-center q-mt-sm q-gutter-lg">
                  Already have an account?<a href="#/login" class="text-white" @click="toggleRegistration">Login</a>
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
  
  <script>
  import { useQuasar } from 'quasar'
  import axios from 'axios'
  
  let $q
  
  export default {
    name: 'MyLogin',
    data () {
      return {
        showLogin: true,
        login: {
          email: '',
          password: ''
        },
        register: {
          username: 'Diego',
          email: 'abc@gmail.com',
          password: 'abcde'
        }
      }
    },
    methods: {
      formatFecha: function (fecha) {
        const dateParts = fecha.split('/');
            return dateParts[0] + '-' + dateParts[1] + '-' + dateParts[2];
      },

      submitLogin () {
        var url = "http://localhost:5081/api/Users/SignIn"
        var data = {
          email: this.login.email,
          password: this.login.password
        }

        axios.post(url, data)
        .then(response => {
          localStorage.setItem("userData", JSON.stringify(response.data))
          this.$router.push("/main")
        }).catch(error =>{
          this.$q.notify({
            type: 'negative',
            message: 'El usuario no existe'
          })
        })
      },

      submitRegistration () {
        var url = "http://localhost:5081/api/users/signup"
        var formattedDate = this.formatFecha(this.register.dateForm.birthDate)
        if (this.register.password.length < 6) {
          this.$q.notify({
            type: 'negative',
            message: 'Los datos ingresados son inválidos.'
          })
        } else if (this.login.password.length < 6) {
          $q.notify({
            type: 'negative',
            message: 'La contraseña debe tener 6 o más caracteres.'
          })
        } else {
          console.log('login')
        }
      },
      submitRegistration () {
        console.log('registrated')
      },
      toggleRegistration () {
        this.showLogin = !this.showLogin;
      }
    },
    mounted () {
      $q = useQuasar()
    }
  }
  </script>
  
  <style scoped>
  .wave {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  </style>