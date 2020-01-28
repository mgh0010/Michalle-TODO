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
    tasks: [],
  },
  getters: {
    todosForSelectedPerson: state => state.family
  },
  mutations: {
    setFamily(state, family) {
      state.family = family;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    async addTask({state, commit}, task, familyMemberName='michael', listName='todo') {
      const res = await firebase.firestore().collection(`family/${familyMemberName}/todoLists/${listName}/tasks`)
        .add({ title: task });
      return res;
    },
    async deleteTask({state, commit}, task, familyMemberName='michael', listName='todo') {
      const taskToDelete = state.tasks.find((_task: any) => _task.title === task.title)
      const res = await firebase.firestore().doc(`family/${familyMemberName}/todoLists/${listName}/tasks`)
        .delete();
      return res;
    },
  },
  modules: {
  }
})
