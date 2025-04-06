<script setup lang="ts">
const formState = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit() {
  console.log(event.data);
}
</script>
<template></template>
