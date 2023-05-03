export async function getServerSideProps(context) {
	return {
		props: {},
		// Use the slug parameter to generate the URL path
		redirect: {
			destination: '/login',
			permanent: true,
		},
	};
}

const Logout = (props) => {
	return <></>;
};

export default Logout;
