import { faMicrosoft, faUnity } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';

export function load() {
	return {
		achievements: [
			{
				event: 'Codeforces',
				detail: '1697 Rating (handle - helewrer3)'
			},
			{
				event: 'Codechef',
				detail: '1894 Rating (handle - helewrer3)'
			},
			{
				event: 'Leetcode',
				detail: '2018 Rating (handle - helewrer3)'
			},
			{
				event: 'Educational Codeforces Round #100',
				detail: '497 rank out of 11884 participants'
			},
			{
				event: 'August Lunchtime 2020 Division 2',
				detail: '85 rank out of 7102 participants'
			},
			{
				event: 'Leetcode Biweekly Contest 109',
				detail: '35 rank out of 24639 participants'
			},
			{
				event: 'Vihaan 4.0',
				detail: 'Best Performing IEEE Team'
			}
		]
	};
}

export const prerender = true;
