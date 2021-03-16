<!--
	Основные props:
		role (String) - роль пользователя, по дефолту lsp
		img (String) - ссылка картинку блока
		title (String) - заголовок блока
		text (String) - основной текст блока, разрешено передавать html разметку
		linkText (String) - текст в кнопке, если ничего не передавать, то отображаться не будет
		linkHref (String) - адрес href для кнопки, если пусто, то ссылка выводится кнопкой и не будет редиректа
		linkAction (Function) - функция, которая выполнится при клике на линк
		чтобы передать в компонент кастомное содержимое - используйте slot, он находится между текстом и кнопками
		(если не передавть ничего текстового - то можно вывести кастомный текст слотом)
-->
<template>
<div class="hero">
<div class="sc20-wrapper">
	<div class="hero-block">
		<div class="img-block" :class="{'limitRight': limitWidthRightBlock}">
			<gyoutube-modal v-if="video" :videoID="video" :poster="img" class="video"></gyoutube-modal>
			<img v-else :src="img" :alt="title">
		</div>
		<div class="text-block">
			<h1 v-if="title" class="h20_medium" v-html='title'></h1>
			<div v-if="sub_text" class="p20_large" v-html='sub_text'></div>
			<gcreate
					v-if="rega"
					:hide-soc='true'
					:hide-title='true'
					:button-email-verify='false'
					text-button='Create a free account'
					text-placeholder='Email'
					role="all"></gcreate>
			<a v-if="linkText && linkHref"
					:href="linkHref" @click="action()" class="sc20-button">
				{{linkText}}
			</a>
			<button v-else-if="linkText && !linkHref"
					@click="action()" class="sc20-button">
				{{linkText}}
			</button>

		</div>
	</div>
</div>
</div>
</template>
<script>
	export default {
		props: {
			role: {
				type: String,
				default: 'lsp'
			},
			rega: {
				type: Boolean,
				default: true
			},
			limitWidthRightBlock: {
				type: Boolean,
				default: false
			},
			img: {
				type: String,
				default: 'https://smartcat.com/_vuepromo_img/about-us/about-1.png'
			},
			video: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: 'Headline here'
			},
			sub_text: {
				type: String,
				default: 'Today’s companies need to deliver their content instantly across the globe. But this is not possible if you keep exchanging endless emails and files to get content localized. The only way to stay globally relevant is to connect the whole multilingual content delivery loop. '
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
		},
		methods: {
			action() {
				eval(this.linkAction)
			}
		},
		data: function () {
			return {}
		},
	};
</script>
<style lang="scss" scoped>
	.hero {
		padding: 80px 0;
		background: #f5f5f7;
	}
	.hero-block {
		display: flex;
		flex-direction: row;
		align-items: center;
		@media (max-width: 700px) {
			flex-direction: column;
			align-items: flex-start;
		}
		.img-block {
			order: 2;
			flex: 1 0;
    		flex-basis: calc(100% - 590px);
			margin-left: auto;
			&.limitRight {
				max-width: 544px;
			}
			@media (max-width: 900px) {
				flex: 1 0;
				flex-basis: calc(100% - 430px);
				&.limitRight {
					max-width: 275px;
				}
			}
			@media (max-width: 700px) {
				order: 1;
				flex: 0 1;
    			flex-basis: 0;
				margin-bottom: 16px;
				max-width: 320px;
				margin-left: 0;
				margin-right: auto;
				&.limitRight {
					max-width: 320px;
				}
			}
			img {
				image-rendering: -webkit-optimize-contrast;
 				image-rendering: optimize-contrast;
				width: auto;
				max-width: 100%;
			}
		}
		.text-block {
			order: 1;
			margin-right: 128px;
			@media (max-width: 900px) {
				margin-right: 60px;
			}
			@media (max-width: 700px) {
				order: 2;
				margin-right: 0;
				width: 100%;
			}
			.h20_medium {
				margin-bottom: 24px;
				@media (min-width: 900px+1) {
					font-size: 48px;
					line-height: 58px;
				}
				@media (max-width: 700px) {
					margin-bottom: 16px;
				}
			}
			.p20_large {
				margin-bottom: 24px;
				@media (max-width: 700px) {
					margin-bottom: 16px;
				}
			}
		}
	}
</style>
