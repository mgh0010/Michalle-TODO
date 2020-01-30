import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4G1dXopIqqZLNnpWYnFdW9MU1rUEA7eg",
  authDomain: "michalletodo.firebaseapp.com",
  databaseURL: "https://michalletodo.firebaseio.com",
  projectId: "michalletodo",
  storageBucket: "michalletodo.appspot.com",
  messagingSenderId: "499823278543",
  appId: "1:499823278543:web:e4eb521715cb35d8cababa",
  measurementId: "G-C8QM4L2L1Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default new Vuex.Store({
  state: {
    family: [],
    todos: [],
  },
  mutations: {
    setFamily(state, family) {
      state.family = family;
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    async getTodos ({state, commit}) {
      const res = await firebase.firestore().collection(`todos`).get()
      const todos = res.docs.map(doc => doc.data())
      commit('setTodos', todos);
    },
    async watchTodos ({state, commit}) {
      await firebase.firestore().collection(`todos`)
        .onSnapshot(snapshot => {
          const todos = [];
          snapshot.forEach(doc => {
            todos.push(doc.data());
          })
          commit('setTodos', todos);
        });
    },
    async addTodo({state, commit}, payload) {
      const res = await firebase.firestore().collection('todos')
        .add({ 
          title: payload.title,
          workerID: payload.familyMemberName === 'alexandra' ? 1 : 2,
          categories: [ 'home' ],
        });
      await firebase.firestore().doc(res.path).update({ id: res.id });
      return res;
    },
    async deleteTodo({state, commit}, todoID) {
      const res = await firebase.firestore().doc(`todos/${todoID}`)
        .delete();
      return res;
    },
  },
  modules: {
  }
})
