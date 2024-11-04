<script setup>
import { ref } from 'vue';
const commits = ref(null);
const issues = ref(null);

fetch('http://192.168.37.183/api/v4/projects/1/repository/commits', {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0"
		// Здесь еще должен быть заголовок с Gitlab Token
    },
})
    .then(response => response.json())
    .then((data) => 
	{
		commits.value = data;
		console.log(data)
	})

fetch('http://192.168.37.182:3003', {
    method: "GET"    
})
    .then(response => response.json())
    .then((data) => issues.value = data)
</script>

<template>
    <div>
        <table class="table table-bordered">
		<thead>
			<tr>
				<th> Commit ID</th>
				<th> Автор коммита</th>
				<th> Комментарий к коммиту</th>
			</tr>
			<tr v-for="commit in commits" :key="commit.id">
				<td>{{commit.short_id}}</td>
				<td>{{commit.author_name}}</td>
				<td>{{commit.title}}</td>
			</tr>
		</thead>
		</table>
	</div>
</template>