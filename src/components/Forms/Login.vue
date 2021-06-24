<template>
	<div class="login">
		<h1>This is Login page</h1>
		<form @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="email">Email</label>
				<input
					v-model="form.email"
					type="email"
					class="form-input"
					required
				/>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input
					v-model="form.password"
					type="password"
					class="form-input"
					required
				/>
			</div>
			<button type="submit" class="btn">Sign in</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "Login",
};
</script>

<style lang="scss" scoped>
</style>