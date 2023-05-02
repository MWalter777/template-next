import dynamic from 'next/dynamic';

const DashboardAnalytics = dynamic(
	() => import('../../Components/DashboardAnalytics'),
	{
		ssr: false,
	}
);

export default DashboardAnalytics;
