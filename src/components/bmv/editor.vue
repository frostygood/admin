<template>
	<div class="editor" v-html="texts"></div>
</template>
<script>
	export default {
		props: {
			texts: {
				type: String,
				default: "...",
			},
		},
		data: function () {
			return {};
		},
	};
</script>
<style lang="scss">
	.editor {
		max-width: 720px;
		h2 {
			font-family: "Inter", Roboto, Arial, sans-serif;
			font-style: normal;
			font-weight: 600;
			font-size: 32px;
			line-height: 40px;
			letter-spacing: -0.03em;
			color: #333333;
			margin: 0 0 16px 0;
			padding: 0;
			color: #27357e;
			@media (max-width: 1149px) {
				font-size: 24px;
				line-height: 32px;
				letter-spacing: -0.02em;
			}
		}
		h3 {
			font-family: "Inter", Roboto, Arial, sans-serif;
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 40px;
			letter-spacing: -0.03em;
			color: #333333;
			margin: 0 0 16px 0;
			padding: 0;

			@media (max-width: 1149px) {
				font-size: 24px;
				line-height: 32px;
				letter-spacing: -0.02em;
			}
		}

		p {
			font-family: "Inter", Roboto, Arial, sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 32px;
			color: grey;
			margin: 0 0 18px 0;
			padding: 0;

			@media (max-width: 1149px) {
				font-size: 16px;
				line-height: 26px;
				margin: 0 0 16px 0;
			}
		}

		a {
			cursor: pointer;
			color:  #3179cf;
			text-decoration: none;
			outline: none;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			-webkit-tap-highlight-color: transparent;
			&:hover,
			&:focus,
			&:active {
				text-decoration: underline;
				outline: none;
			}
		}

		ul{
			padding: 0;
			margin: 0;
			margin-bottom: 40px;
			list-style: none;
			li {
				position: relative;
				padding-left: 15px;
				margin-left: 20px;
				margin-bottom: 10px;
				&::before {
					content: "";
					position: absolute;
					width: 6px;
					height: 6px;
					border-radius: 50%;
					background-color: #222;
					left: 0;
					top: 14px;
				}
			}
		}
	}
</style>
