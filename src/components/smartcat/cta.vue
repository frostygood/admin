<!--
	Основные props:
		role (String) - роль пользователя, по дефолту lsp
		big (Boolean) - выбор типа карточки, по умолчанию - false, т.е. одна кнопка + опциональный заголовок, true - текст + кнопка + опциональный заголовок
		text (String) - основной текст блока, можно разметку
		caption (String) - Текст под кнопкой, можно передавать разметку
		linkText (String) - текст в кнопке, если ничего не передавать, то отображаться не будет
		linkHref (String) - адрес href для кнопки, если пусто, то ссылка выводится кнопкой и не будет редиректа
		linkAction (Function) - функция, которая выполнится при клике на линк
-->

<template>
<div class="sc20-wrapper">
	<div class="cta__content" :class="[role, big ? 'cta__content_big' : '']">
		<div class="cta__inner">
			<p class="h20_large text_white cta__text" v-if="text" v-html="text"></p>
			<div class="cta__controls">
				<gcreate
					v-if="rega"
					:hide-soc='true'
					:hide-title='true'
					:opacity='true'
					:btn-filled='true'
					text-button='Create a free account'
					text-placeholder='Email'
					role="all" />
				<a v-if="linkText && linkHref"
				   :href="linkHref"
				   @click="action()"
				   :class="['sc20-button', caption ? 'mb-sm' : '', btnClass]">
					{{linkText}}
				</a>
				<button v-else-if="linkText && !linkHref"
						@click="action()"
						:class="['sc20-button', caption ? 'mb-sm' : '', btnClass]">
					{{linkText}}
				</button>
			</div>
			<p class="cta__caption caption_small text_white" v-if="caption" v-html="caption"></p>
		</div>
	</div>
</div>
</template>
<script>
    export default {
		props: {
			big: {
				type: Boolean,
				default: true
			},
			rega: {
				type: Boolean,
				default: true
			},
			text: {
				type: String,
				default: ''
			},
			caption: {
				type: String,
				default: ''
			},
			linkText: {
				type: String,
				default: ''
			},
			linkHref: {
				type: String,
				default: ''
			},
			linkAction: {
				// type: Function,
				// default: () => {
				// 	console.log('click');
				// }
			},
			role: {
				type: String,
				default: 'all'
			},
		},
		methods: {
			action() {
				eval(this.linkAction)
			}
		},
	    computed: {
			btnClass: function () {
				let btnClass = "sc20-button_white";
				if (this.role === 'lsp') {
					btnClass = 'sc20-button_white-green';
				} else if (this.role === 'end') {
					btnClass = 'sc20-button_white-blue';
				} else if (this.role === 'freel') {
					btnClass = 'sc20-button_white-orange';
				} else if (this.role === 'all') {
					btnClass = 'sc20-button_white';
				}
				return btnClass;
			}
	    }
    };
</script>
<style lang="scss" scoped>
	.cta__content {
		background: #000000;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40px 0;
		border-radius: 16px;
		position: relative;

		&:before {
			content: '';
			display: inline-block;
			position: absolute;
			background: purple;
			border-radius: 50%;
			width: 396px;
			height: 396px;
			top: 50%;
			margin-top: -198px;
			left: 50%;
			margin-left: -198px;

			@media (max-width: 700px) {
				width: 232px;
				height: 232px;
				margin-top: -116px;
				margin-left: -116px;
			}
		}

		@media (max-width: 700px) {
			margin-left: -20px;
			margin-right: -20px;
			padding-left: 20px;
			padding-right: 20px;
			border-radius: 0;
		}

		&.lsp {
			&:before {
				background: green;
			}
		}
		&.end {
			&:before {
				background: blue;
			}
		}
		&.freel {
			&:before {
				background: orange;
			}
		}
		&.all {
			&:before {
				background: violet;
			}
		}
	}
	.cta__content_big {
		padding: 80px 0 64px;

		@media (max-width: 900px) {
			padding: 64px 0 56px;
		}
		@media (max-width: 700px) {
			padding: 48px 0;
		}

		&:before {
			width: 690px;
			height: 690px;
			margin-top: -345px;
			margin-left: -345px;

			@media (max-width: 900px) {
				width: 464px;
				height: 464px;
				margin-top: -232px;
				margin-left: -232px;
			}

			@media (max-width: 700px) {
				width: 400px;
				height: 400px;
				top: auto;
				margin-top: 0;
				margin-left: -200px;
				bottom: -150px;
			}
		}
	}
	.cta__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
	.cta__controls {
		display: flex;
		justify-content: center;

		@media (max-width: 700px) {
			flex-direction: column;

			input {
				margin-bottom: 16px;
				margin-right: 0;
			}
		}
	}
	.cta__text {
		max-width: 880px;
		text-align: center;
		margin-bottom: 32px;

		@media (max-width: 900px) {
			max-width: 608px;
		}

		@media (max-width: 700px) {
			max-width: 288px;
		}
	}
	.cta__caption {
		max-width: 880px;
		text-align: center;

		@media (max-width: 900px) {
			max-width: 608px;
		}

		@media (max-width: 700px) {
			max-width: 288px;
		}
	}
</style>
