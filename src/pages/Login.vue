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
                <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Login</h2>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="submitLogin">
              <q-input label="Email" v-model="login.email"></q-input>
              <q-input label="Password" type="password" v-model="login.password"></q-input>
              <div>
                <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
                <div class="text-center q-mt-sm q-gutter-lg">
                  Don't have an account?<a href="#" class="text-white" @click="toggleRegistration">Create account</a>
                </div>
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
                <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Registration</h2>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" @submit.prevent="submitRegistration">
              <q-input label="Username" v-model="register.username"></q-input>
              <q-input label="Email" v-model="register.email"></q-input>
              <q-input label="Password" type="password" v-model="register.password"></q-input>
              <div>
                <q-btn class="full-width" color="primary" label="Register" type="submit" rounded></q-btn>
                <div class="text-center q-mt-sm q-gutter-lg">
                  Already have an account?<a href="#" class="text-white" @click="toggleRegistration">Login</a>
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
  
  let $q
  
  export default {
    name: 'MyLogin',
    data () {
      return {
        showLogin: true,
        login: {
          email: 'abc@gmail.com',
          password: 'abcde'
        },
        register: {
          username: 'Diego',
          email: 'abc@gmail.com',
          password: 'abcde'
        }
      }
    },
    methods: {
      submitLogin () {
        if (!this.login.email || !this.login.password) {
          $q.notify({
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