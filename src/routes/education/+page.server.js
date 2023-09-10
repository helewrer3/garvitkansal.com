import { faMicrosoft, faUnity } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';

export function load() {
	return {
		education: [
			{
				logo: faGraduationCap,
				title: 'Delhi Techonlogical University',
				description: 'B. Tech. in Computer Engineering | 9.14 CGPA',
				year: '2019-2023'
			},
			{
				logo: faSchool,
				title: 'Amity International School',
				description: 'High School Certificate Program [CBSE] | 93.6%',
				year: '2017-2019'
			},
			{
				logo: faSchool,
				title: 'Amity International School',
				description: 'Seconddary School Certificate Program [CBSE] | 10 CGPA',
				year: '2007-2017'
			}
		]
	};
}

export const prerender = true;
