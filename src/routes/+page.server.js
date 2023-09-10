import { faGithub, faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function load() {
	return {
		contact: [
			{
				name: 'Linkedin',
				link: 'https://www.linkedin.com/in/helewrer3/',
				logo: faLinkedin
			},
			{
				name: 'Github',
				link: 'https://github.com/helewrer3',
				logo: faGithub
			},
			{
				name: 'Mail',
				link: 'mailto:helewrer3@gmail.com',
				logo: faEnvelope
			},
			{
				name: 'Medium',
				link: 'https://medium.com/@garvitkansal',
				logo: faMedium
			},
			{
				name: 'Leetcode',
				link: 'https://leetcode.com/helewrer3',
				logo: faCode
			},
			{
				name: 'Codeforces',
				link: 'https://codeforces.com/profile/helewrer3',
				logo: faCode
			}
		]
	};
}

export const prerender = true;
