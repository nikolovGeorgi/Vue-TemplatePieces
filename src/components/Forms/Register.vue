<template>
	<div class="register">
		<h1>This is Register page.</h1>
		<form class="form" @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="firstName">First Name</label>
				<input
					v-model="userData.firstName"
					type="text"
					class="form-input"
					required
				/>
			</div>
			<div class="form-group">
				<label for="lastName">Last Name</label>
				<input
					v-model="userData.lastName"
					type="text"
					class="form-input"
					required
				/>
			</div>
			<div class="form-group">
				<label for="username">Username</label>
				<input
					v-model="userData.username"
					type="text"
					class="form-input"
					required
				/>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input
					v-model="userData.email"
					type="email"
					class="form-input"
					required
				/>
			</div>
			<div class="form-group">
				<label for="email">Password</label>
				<input
					v-model="userData.password"
					type="password"
					class="form-input"
					required
				/>
			</div>
			<button type="submit" class="btn">Register</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "Register",
};
</script>

<style lang="scss" scoped>
</style>