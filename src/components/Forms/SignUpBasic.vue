<template>
    <form class="form" @submit.prevent="Register">
        <div class="form-field">
            <input
                v-model="formData.firstName"
                class="form-input"
                type="text"
                name="firstName"
                placeholder="first name"
                required
            />
        </div>
        <div class="form-field">
            <input
                v-model="formData.email"
                class="form-input"
                type="email"
                name="email"
                placeholder="Email"
                required
            />
        </div>
        <button class="form-button" type="submit">
            signup
        </button>
    </form>
</template>

<script>
import { reactive } from 'vue';
// Import db ex:
// import {registerUser} from '@firebase'

export default {
    name: 'SignUpBasic',
    setup() {
        const formData = reactive({ firstName: '', email: '' });
        const Register = async () => {
            // register user from the provided information on the submitted form ex:
            // await registerUser({ ...formData });

            // Reset form once registered
            formData.firstName = '';
            formData.email = '';

            // Re-route user once register to desired location ex:Home
            // this.$router.push({name: 'Home'});
        };
        return { formData, Register };
    },
};
</script>

<style lang="scss" scoped>
$clr: rgb(49, 138, 255);
$clr-focus: rgb(0, 74, 170);
$minW: 500px;

.form {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    border-radius: 1em;
    overflow: hidden;
    width: #{'min(500px, 80%)'};
    background: white;
}

.form-field {
    display: flex;
    flex-direction: column;

    &:first-of-type {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            right: 0;
            left: 0;
            bottom: 0;
            height: 1px;
            background: rgba(0, 0, 0, 0.2);
        }
    }
}

.form-input,
.form-button {
    font-family: inherit;
    text-transform: uppercase;
    font-size: 0.625rem;
    letter-spacing: 1.2px;
    border: 0;
    font-weight: 800;
}

.form-input {
    padding: 1.5em;
    &::placeholder {
        color: $clr;
        opacity: 0.7;
    }
    &:focus::placeholder {
        color: $clr-focus;
        opacity: 1;
    }
    &:focus-visible {
        outline: none;
    }
}

.form-button {
    background: $clr;
    color: white;
    padding: 1em 2.5em;
}

@media only screen and (min-width: 600px) {
    .form {
        flex-direction: row;
        max-width: 550px;
        border: 8px solid white;
        border-radius: 3em;
    }
    .form-button {
        margin-left: auto;
        border-radius: 3em;
    }
    .form-field {
        justify-content: center;
        &:first-of-type::after {
            top: 0;
            left: unset;
            height: unset;
            width: 1px;
        }
    }
}
</style>
