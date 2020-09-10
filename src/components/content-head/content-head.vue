<template>
  <div class="content-head">
    <div>
      <h1>
        <slot name="title" />
      </h1>
      <h1>
        <slot name="des" />
      </h1>
    </div>
    <div>
      <slot name="calc" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-head {
  width: 100%;
  height: 20vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content-head > div {
  display: flex;
}
.content-head > div > h1:nth-child(2) {
  color: rgb(6, 255, 247);
  margin-left: 10px;
}
</style>