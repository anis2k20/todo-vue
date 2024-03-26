<script setup>
import { Icon } from '@iconify/vue';
import {reactive, ref} from 'vue'

const inputData = ref('')
let todos = reactive([])
let complete = reactive([])
function addTodo(){
  todos.push(inputData.value)
  inputData.value = ''
}

function done(i){
  complete.push(todos[i])
  todos.splice(i,1)
}

function deleteItem(i){
  todos.splice(i,1)
}
function clearAll(){
  todos.splice(0,todos.length)
  complete.splice(0,complete.length)
}
function undo(item){
  todos.push(item)
  complete.splice(item,1)
}


</script>

<template>
<!--  Main Container -->
  <div class="flex justify-center items-center h-screen">
<!--    Todo container-->
    <div class="flex outline outline-offset-4 outline-2 rounded-2xl outline-moonstone-blue">
<!--      left container -->
      <div class="bg-moonstone-blue p-6 rounded-l-2xl space-y-8 flex flex-col justify-center w-96">
        <div class="flex justify-center"> <icon icon="arcticons:pomotodo" class="text-dark text-7xl"></icon></div>
        <h1 class="text-tuna text-4xl text-center font-bold">Vue Todo App</h1>
        <div class="flex justify-evenly">
          <div>
            <input type="text" class="p-3 rounded outline-none" v-on:keyup.enter="addTodo" v-model="inputData">
          </div>
          <button class="bg-tuna hover:bg-dark text-soft-peach px-6 py-2 rounded" @click="addTodo">Add</button>
        </div>
        <button class="border p-2 rounded px-4 font-semibold text-soft-peach hover:bg-cyan-200/20 text-center self-center"
        @click="clearAll"
        >Clear All</button>
      </div>

<!--      Right container -->
      <div class="bg-tuna p-6 rounded-r-2xl flex flex-col justify-around w-96 min-h-96">
        <div>
          <h3 class="text-soft-peach font-semibold">Todo</h3>
          <hr class="py-1">
          <ul v-for="(todo,index) in todos">
           <li class="bg-dark text-soft-peach p-1.5 rounded my-1 flex justify-between items-center font-sans">
             <span>{{index+1}}. {{ todo }} </span>
             <div class="flex gap-2">
               <icon icon="solar:trash-bin-trash-linear" class="cursor-pointer text-moonstone-blue"
                     @click="deleteItem(index)"></icon>
               <icon icon="simple-line-icons:check" class="cursor-pointer text-moonstone-blue" @click="done(index)"></icon>
             </div>
           </li>
          </ul>
        </div>
        <div>
          <h3 class="text-soft-peach font-semibold ">Done</h3>
          <hr class="py-1">
          <ul v-for="cmplt in complete">
            <li class="bg-dark text-moonstone-blue  p-1.5 rounded my-1 flex justify-between items-center font-sans">
              {{ cmplt }}
              <icon icon="subway:undo-icon" class="cursor-pointer" @click="undo(cmplt)"></icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
