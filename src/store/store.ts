import Vue from 'vue'
import Vuex from 'vuex'

import { Todo } from '@/types/todo'

Vue.use(Vuex)
import firebase from 'firebase/app'

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
    michaelsTodos: [],
    alexandrasTodos: [],
  },
  mutations: {
    setFamily(state, family) { state.family = family; },
    setTodos(state, payload) {
      if(payload.workerID === 1) {
        state.alexandrasTodos = payload.todos;
      }
      else {
        state.michaelsTodos = payload.todos;
      }
    },
  },
  actions: {
    async watchTodos ({state, commit}, who) {
      await firebase.firestore().collection(`todos`)
        .where('workerID', '==', who)
        .onSnapshot(snapshot => {
          const todos: Array<Todo> = [];
          snapshot.forEach(doc => {
            todos.push(doc.data() as Todo);
          })
          commit('setTodos', {workerID: who, todos});
        });
    },
    async addTodo({}, payload) {
      if(!payload.title) {
        throw new Error('Todo title cannot be empty')
      }
      const res = await firebase.firestore().collection('todos')
        .add({ 
          title: payload.title,
          workerID: payload.familyMemberName === 'alexandra' ? 1 : 2,
          categories: [ 'todoLists' ],
        });
      await firebase.firestore().doc(res.path).update({ id: res.id });
      return res;
    },
    async deleteTodo({}, todoID) {
      const res = await firebase.firestore().doc(`todos/${todoID}`)
        .delete();
      return res;
    },
    async addToGet({ }, payload) {
      if(!payload.title) {
        throw new Error('To Get title cannot be empty')
      }
      const res = await firebase.firestore().collection('toGets')
        .add({ 
          title: payload.title,
        });
      await firebase.firestore().doc(res.path).update({ id: res.id });
      return res;
    },
    async deleteToGet({}, toGetID) {
      const res = await firebase.firestore().doc(`toGets/${toGetID}`)
        .delete();
      return res;
    },
  },
  modules: {
  }
})
