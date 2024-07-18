<!-- <div class="inicio">
	<span>Creado por Jovany 2024</span>
</div> -->

<div class="titulo">
	<span>Notas de Clase - Sesión 3 y 4: Modelo Entidad-Relacion.</span>
</div>

<div class="dark fontSize">
	<ol>
		<li style="margin-bottom: 20px;">
			<p>
				<a href="https://www.youtube.com/watch?v=TKuxYHb-Hvc" class="textColor"
					>Video Tutorial Entidad-Relacion</a
				>
			</p>
		</li>
		<li>
			<p>

				Modelo Entidad-Relacion
			</p>
		</li>

		<li>
			<p>

				Relaciones uno a muchos (one-to-many)
			</p>
		</li>

		<li>
			<p>

				Relaciones muchos a muchos (many-to-many)
			</p>
		</li>

		<li>
			<p>

				Relaciones uno a uno (one-to-one)
			</p>
		</li>

		<li>
			<p>

				Claves primarias (primary keys)
			</p>
		</li>

		<li>
			<p>

				Claves foraneas (foreign keys)
			</p>
		</li>

		<li>
			<p>

				Introducción a Subconsultas (Subqueries o nested queries)
			</p>
		</li>
	</ol>
</div>

<div class="fontSize">

	<p><a href="https://cs50.harvard.edu/sql/2024/notes/1/" target="_blank">Apoyo teorico</a></p>
	
	<p>
		<a href="https://sqliteonline.com/" target="_blank">Herramienta de práctica</a>
	</p>
	
	<p>
	
		<a href="https://cdn.cs50.net/sql/2023/x/lectures/1/src1/longlist.db"
			>Base de datos de ejemplo</a
		>
	</p>
	
	<p>
		<a href="https://cdn.cs50.net/sql/2023/x/lectures/1/src1/sea_lions.db"
			>Base de datos sea_lions</a
		>
	</p>
</div>

<style lang="postcss">
	.my-element {
		@apply bg-blue-200;
		@apply text-xs;
		@apply text-right;
		@apply text-blue-500;
	}
	.etiquetasA {
		@apply link;
		@apply link-primary;
	}

	.titulo {
		@apply text-3xl;
		@apply text-blue-500;
		@apply font-bold;
		@apply mb-2;
		@apply py-10;
	}

	.inicio {
		@apply flex;
		@apply justify-end;
		@apply bg-blue-200;
		@apply py-2;
	}

	.dark {
		@apply bg-slate-800;
		@apply px-5;
		color: #e0e0e0;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.textColor {
		color: #e0e0e0;
	}

	.fontSize {
		font-size: 20px;
	}
</style>
