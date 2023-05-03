export async function getServerSideProps(context) {
	return {
		props: {},
		// Use the slug parameter to generate the URL path
		redirect: {
			destination: '/dashboard',
			permanent: true,
		},
	};
}

export default function Index() {
	return <></>;
}
