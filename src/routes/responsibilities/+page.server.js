import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

export function load() {
	return {
		responsibilities: [
			{
				title: 'Computer Society Chair',
				org: 'IEEE DTU',
				logo: faBuildingColumns,
				detail:
					'Conducted and anchored workshops on Flutter Development, DSA and Graphic Designing in TECHWEEK ‘20 and have been taking several SIG classes consisting of over 150 students about aforementioned topics. Responsible for handling technological aspects/needs of the society, hosting websites, conducting events/hackathons etc.'
			}
		]
	};
}

export const prerender = true;
