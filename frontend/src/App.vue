<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import HelloWorld from './components/HelloWorld.vue'

const { result, loading } = useQuery(gql`
  query getHuman($name: String!) {
    human(name: $name) {
      id
      name
      age
      birthDay
      hobbies
    }
  }
`,
{
  name: 'Me'
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div v-if="loading">
    GraphQL loading
  </div>
  <div v-else>
    {{ JSON.stringify(result) }}
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
