<!--
	Основные props:
		title (String) - заголовок блока, можно с html-разметкой
		titleTag (String) - html-тег для заголовка
		titleClass (String) - css class для заголовка
		text (String) - текст блока, можно с html-разметкой, если ничего не передавать, то отображаться не будет
		textTag (String) - html-тег для текста блока
		textClass (String) - css class для текста блока
		wide (Boolean) - текст на 8 колонок, а не на 6
-->
<template>
	<div class="heading" v-if="title || text">
		<h2 v-if="title" :class="['heading__title', titleClass]"
				   v-html="title">
		</h2>
		<h3 v-if="text" :class="['heading__text', textClass, wide ? 'heading__text_wide' : '']"
				v-html="text"
		></h3>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'Headline here'
			},
			titleTag: {
				type: String,
				default: 'span'
			},
			titleClass: {
				type: String,
				default: 'h20_large'
			},
			text: {
				type: String,
				default: 'Subheading here'
			},
			textTag: {
				type: String,
				default: 'p'
			},
			textClass: {
				type: String,
				default: 'p20_large'
			},
			wide: {
				type: Boolean,
				default: false
			}
		},
		data: function () {
			return {
			}
		},
		methods: {
		},
	};
</script>

<style lang="scss" scoped>
	.heading {
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
		@media (min-width: 721px) {
			&__text {
				padding: 0 16px;
				width: 100%/12*8;
			}
		}
		@media (min-width: 1151px) {
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

			@media (max-width: 1150px) {
				width: 100%/12*10;
			}

			@media (max-width: 720px) {
				width: 100%;
			}
		}
	}
</style>
