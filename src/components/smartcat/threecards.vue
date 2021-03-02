<template>
	<div class="three-cards" :class="[b_column_formatting_of_the_card ? 'three-cards_column' : '', b_column_narrow_formatting_of_the_card ? 'three-cards_column_narrow' : '']">
		<div class="item" v-if="s_title_in_first_card || e_text_in_first_card || s_text_in_link_in_first_card || i_img_in_first_card">
			<div class="img-wrap"><img :src="i_img_in_first_card" :alt="s_title_in_first_card"></div>
			<div>
				<p v-if="s_title_in_first_card" class="h20_small mb-sm">{{s_title_in_first_card}}</p>
				<p v-if="e_text_in_first_card" class="p20_medium" :class="[s_text_in_link_in_first_card ? 'mb-sm' : '']" v-html="e_text_in_first_card"></p>
				<p v-if="s_text_in_link_in_first_card" class="p20_medium">
					<a class="sc20-link"
					   :class="{'sc20-link_bold' : b_bold_link_in_cards}"
					   :href='l_href_in_link_in_first_card'>{{s_text_in_link_in_first_card}}</a>
				</p>
			</div>
		</div>
		<div class="item" v-if="s_title_in_second_card || e_text_in_second_card || s_text_in_link_in_second_card || i_img_in_second_card">
			<div class="img-wrap"><img :src="i_img_in_second_card" :alt="s_title_in_second_card"></div>
			<div>
				<p v-if="s_title_in_second_card" class="h20_small mb-sm">{{s_title_in_second_card}}</p>
				<p v-if="e_text_in_second_card" class="p20_medium" :class="[s_text_in_link_in_second_card ? 'mb-sm' : '']" v-html="e_text_in_first_card"></p>
				<p v-if="s_text_in_link_in_second_card" class="p20_medium">
					<a class="sc20-link"
					   :class="{'sc20-link_bold' : b_bold_link_in_cards}"
					   :href='l_href_in_link_in_second_card'>{{s_text_in_link_in_second_card}}</a>
				</p>
			</div>
		</div>
		<div class="item" v-if="s_title_in_third_card || e_text_in_third_card || s_text_in_link_in_third_card || i_img_in_third_card">
			<div class="img-wrap"><img :src="i_img_in_third_card" :alt="s_title_in_third_card"></div>
			<div>
				<p v-if="s_title_in_third_card" class="h20_small mb-sm">{{s_title_in_third_card}}</p>
				<p v-if="e_text_in_third_card" class="p20_medium" :class="[s_text_in_link_in_third_card ? 'mb-sm' : '']" v-html="e_text_in_third_card"></p>
				<p v-if="s_text_in_link_in_third_card" class="p20_medium">
					<a class="sc20-link"
					   :class="{'sc20-link_bold' : b_bold_link_in_cards}"
					   :href='l_href_in_link_in_third_card'>{{s_text_in_link_in_third_card}}</a>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
        props: {
			s_title_in_first_card: {
				type: String,
				default: 'Fig1',
				//builder: 'string'
			},
			e_text_in_first_card: {
				type: String,
				default: 'Weebly uses Smartcat to localize their platform for more than 45 million entrepreneurs around the world.',
			},
			i_img_in_first_card: {
				type: String,
				default: 'https://www.smartcat.com/_vuepromo_img/client-portal/customize.svg',
			},
			s_text_in_link_in_first_card: {
				type: String,
				default: 'Donec sit amet  →',
			},
			l_href_in_link_in_first_card: {
				type: String,
				default: '',
			},
			s_title_in_second_card: {
				type: String,
				default: 'Fig2',
			},
			e_text_in_second_card: {
				type: String,
				default: 'Weebly uses Smartcat to localize their platform for more than 45 million entrepreneurs around the world.',
			},
			i_img_in_second_card: {
				type: String,
				default: 'https://www.smartcat.com/_vuepromo_img/client-portal/customize.svg',
			},
			s_text_in_link_in_second_card: {
				type: String,
				default: 'Donec sit amet  →',
			},
			l_href_in_link_in_second_card: {
				type: String,
				default: '',
			},
			s_title_in_third_card: {
				type: String,
				default: 'Fig3',
			},
			e_text_in_third_card: {
				type: String,
				default: 'Weebly uses Smartcat to localize their platform for more than 45 million entrepreneurs around the world.',
			},
			i_img_in_third_card: {
				type: String,
				default: 'https://www.smartcat.com/_vuepromo_img/client-portal/customize.svg',
			},
			s_text_in_link_in_third_card: {
				type: String,
				default: 'Donec sit amet  →',
			},
			l_href_in_link_in_third_card: {
				type: String,
				default: '',
			},
			s_role_of_user: {
				type: String,
				default: 'lsp'
			},
			b_column_formatting_of_the_card: {
				type: Boolean,
				default: false
			},
			b_column_narrow_formatting_of_the_card: {
				type: Boolean,
				default: false
			},
			b_bold_link_in_cards: {
				type: Boolean,
				default: false
			}
        },
    };
</script>
<style lang="scss" scoped>
.three-cards {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 700px) {
		flex-direction: column;
	}
	.item {
		width: 31%;
		@media (max-width: 700px) {
			width: 100%;
			flex-direction: column;
			padding-bottom: 17px;
			margin-bottom: 17px;
			border-bottom: 1px solid rgba(19, 16, 27, 0.15);
			&:nth-last-of-type(1) {
				margin: 0;
				padding: 0;
				border: none;
			}
		}
		img {
			width: auto;
			max-width: 100%;
			margin-bottom: 16px;
			@media (max-width: 700px) {
				width: 132px;
			}
		}
	}
	&.three-cards_column {
		@media (max-width: 1150px) {
			flex-direction: column;
			.item {
				width: 100%;
				margin-bottom: 40px;
				display: flex;
				align-items: center;

				.img-wrap {
					flex-shrink: 0;
				}

				img {
					width: 336px;
					margin-right: 32px;
				}
			}
		}
		@media (max-width: 700px) {
			.item {
				width: 100%;
				margin-bottom: 40px;
				padding-bottom: 0;
				border: none;
				flex-direction: column;

				img {
					width: 100%;
					margin-right: 0;
				}
				&:nth-last-of-type(1) {
					margin: 0;
				}
			}
		}
	}
	&.three-cards_column_narrow {
		@media (max-width: 1150px) {
			flex-direction: column;
			width: 100%/12*8;
			margin-left: auto;
			margin-right: auto;
			
			.item {
				width: 100%;
				margin-bottom: 40px;
				display: flex;
				align-items: center;

				&:last-child {
					margin-bottom: 0;
				}

				.img-wrap {
					flex-shrink: 0;
				}

				img {
					width: 96px;
					margin-right: 32px;
				}
			}
		}
		@media (max-width: 700px) {
			width: 100%;

			.item {
				padding-bottom: 0;
				border: none;
				flex-direction: column;
				align-items: start;

				img {
					width: 100%;
					margin-right: 0;
				}
				&:nth-last-of-type(1) {
					margin: 0;
				}
			}
		}
	}
}
</style>
