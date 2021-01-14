import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
	return (
		<>
			<Layout>
				<Head>
					<title>First Post</title>
				</Head>
				<h1>First Post</h1>
				<p>heyyy heyyy heyyy heyyyy</p>
				<h2>
					<Link href="/">
						<a>Back to home</a>
					</Link>
				</h2>
				<style jsx>{`
					h1 {
						font-size: 25px;
						font-family: arial;
						color: gray;
					}
				`}</style>
			</Layout>
		</>
	);
}
