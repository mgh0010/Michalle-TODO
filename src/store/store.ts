import Vue from 'vue'
import Vuex from 'vuex'

import { Todo } from '@/types/todo'

Vue.use(Vuex)
import firebase from 'firebase/app'

export default new Vuex.Store({
  state: {
    family: [],
    michaelsTodos: [],
    alexandrasTodos: [],
    signedIn: false,
    user: {},
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
    setSignedIn(state, signedIn) { state.signedIn = signedIn; },
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
