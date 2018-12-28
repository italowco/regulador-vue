<template>
    <div class="columns is-mobile">
        <div class="column box is-half is-offset-one-quarter">
            <b-field label="Usuário"
                type="is-success"
                message="This username is available">
                <b-input value="johnsilver" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password"
                    password-reveal>
                </b-input>
            </b-field>
            <a class="button is-primary">Login</a>
            <a class="button is-primary">Cadastrar</a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>