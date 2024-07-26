<script>
	let sqlText = '';

	const reservedWords = [
		'SELECT',
		'IN',
		'FROM',
		'WHERE',
		'INSERT',
		'INTO',
		'UPDATE',
		'DELETE',
		'CREATE',
		'DROP',
		'ALTER',
		'TABLE',
		'JOIN',
		'LEFT',
		'RIGHT',
		'FULL',
		'INTERSECT',
		'UNION',
		'EXCEPT',
		'ON',
		'GROUP',
		'BY',
		'ORDER',
		'DESC',
		'ASC',
		'HAVING',
		'AND',
		'OR',
		'NOT',
		'NULL',
		'AS',
		'DISTINCT'
	];
	function formatSQL() {
		sqlText = sqlText
			.split(/\s+/)
			.map((word) => {
				if (reservedWords.includes(word.toUpperCase())) {
					return word.toUpperCase()
				}
				return word;
			})
			.join(' ');
	}

</script>

<div class="grid">
	input
	<textarea bind:value={sqlText} on:input={formatSQL}></textarea>
</div>




<style>
	.grid {
		display: grid;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
	}

	textarea {
		flex: 1;
		resize: none;
	}

</style>
