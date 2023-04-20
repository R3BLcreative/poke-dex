import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" className="h-full">
				<Head />
				<body className="bg-black text-base text-gray-50 font-body leading-relaxed h-full">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
