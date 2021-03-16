<!--
	Основные props:
		title (String) - заголовок блока, можно с html-разметкой
		text (String) - текст блока, можно с html-разметкой, если ничего не передавать, то отображаться не будет
		wide (Boolean) - текст на 8 колонок, а не на 6
-->
<template>
<div class="sc20-wrapper">
	<div class="heading">
		<h2 v-if="title" class="h20_large">{{title}}</h2>
		<div v-if="text" 
			:class="['heading__text', 'p20_large', wide ? 'heading__text_wide' : '']"
			v-html="text"/>
	</div>
</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'Headline here'
			},
			text: {
				type: String,
				default: 'Subheading here'
			},
			wide: {
				type: Boolean,
				default: false
			}
		},
	};
</script>

<style lang="scss" scoped>
	.heading {
		width: 100%;
		&__title {
			display: block;
			text-align: center;
		}
		&__text {
			display: block;
			margin: 0 auto;
			text-align: center;
		}
		&__title + &__text {
			margin-top: 8px;
		}
		h2 {
			text-align: center;
		}
		@media (min-width: 700px+1) {
			&__text {
				padding: 0 16px;
				width: 100%/12*8;
			}
		}
		@media (min-width: 900px+1) {
			&__text {
				width: 100%/12*6;
			}
			&__title + &__text {
				margin-top: 16px;
			}
		}

		.heading__text_wide {
			width: 100%/12*8;
			text-align: left;

			@media (max-width: 900px) {
				width: 100%/12*10;
			}

			@media (max-width: 700px) {
				width: 100%;
			}
		}
	}
</style>
