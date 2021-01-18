import firebase from "firebase"
import router from '../router'

export default {
    state: {
        user: {
            isAuth: false,
            uid: null,
            email: null,
            displayName: null,
            phoneNumber: null,
            photoURL: null
        } 
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuth = true;
            state.user.uid = payload.uid;
            state.user.email = payload.email;
            state.user.displayName = payload.displayName;
            state.user.phoneNumber = payload.phoneNumber;
            state.user.photoURL = payload.photoURL;
        },
        UNSET_USER(state) {
            state.user = {
                isAuth: false,
                uid: null
            }
        }
    },
    getters: {
        isAuth: (state) => state.user.isAuth
    },
    actions: {
        SIGNUP({commit}, payload) {
            commit('CLEAR_ERROR');
            commit('SET_PROCESSING', true);
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
                commit('SET_PROCESSING', false);
                console.log(user)
            })
            .catch(function(error) {
                commit('SET_PROCESSING', false);
                console.log(error)
                commit('SET_ERROR', error.message);
              });
        },
        SIGNIN({commit}, payload) {
            commit('CLEAR_ERROR');
            commit('SET_PROCESSING', true);
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
                commit('SET_PROCESSING', false);
                console.log(user)
            })
            .catch(function(error) {
                commit('SET_PROCESSING', false);
                console.log(error)
                commit('SET_ERROR', error.message);
              });
        },
        STATE_CHANGE({commit}, payload) {
            if (payload) {
                commit('SET_USER', payload);
            } else commit('UNSET_USER');
        },
        SIGNOUT({commit}){
            commit('CLEAR_ERROR');
            commit('SET_PROCESSING', true);
            firebase.auth().signOut()
            router.push('/');
            commit('SET_PROCESSING', false);
        }
    }
}