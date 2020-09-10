<template>
    <div class="default container">
        <div class="row">
            <button class="col btn btn-light rounded border-0">
                <my-icon id="icon-jurassic_report" color="text-danger" size="45"></my-icon>
                <h2>About me</h2>
            </button>
            <button class="col btn btn-light rounded border-0">
                <my-icon id="icon-xinxi" color="text-warning" size="45"></my-icon>
                <h2>Resume</h2>
            </button>
        </div>
        <div class="row">
            <button class="col btn btn-light rounded border-0">
                <my-icon id="icon-gongjuxiang" color="text-success" size="45"></my-icon>
                <h2>Portfolio</h2>
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.row {
    height: 30vh;
}
.col {
    color: white;
    margin: 10px 20px;
    background-color: rgba(255,255,255,0.1);
}
</style>