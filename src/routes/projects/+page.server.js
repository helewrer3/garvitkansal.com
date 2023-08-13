import {
	faLaptopCode,
	faMobileAndroid,
	faGamepad,
	faTerminal
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function load() {
	const Domains = {
		web: 'Web Development',
		app: 'App Development',
		game: 'Game Development'
	};

	return {
		metaData: [
			{
				domain: Domains.web,
				logo: faLaptopCode
			},
			{
				domain: Domains.app,
				logo: faMobileAndroid
			},
			{
				domain: Domains.game,
				logo: faGamepad
			}
		],
		projects: [
			{
				name: 'Vihaan',
				domainId: 0,
				summary:
					'Published a for Vihaan, the largest hackathon conducted by IEEE DTU, along with a team of 6 contributors. Played a vital role as an organiser in managing, debugging, testing and developing the website to be used by 1100+ participants.',
				link: 'https://vihaan.ieeedtu.in/#/',
				logo: faTerminal,
				tech: ['Flutter', 'Firebase']
			},
			{
				name: 'Helewcial_v2',
				domainId: 0,
				summary:
					'Deployed a social media website with multi-user backend support, user authorisation and authentication. Allows for user to create, edit posts and comments.',
				link: 'https://github.com/helewrer3/Helewcial_v2',
				logo: faGithub,
				tech: ['NodeJS', 'Express', 'MongoDB', 'Google OAuth 2.0']
			},
			{
				name: 'Sketchewrer3',
				domainId: 0,
				summary:
					'Deployed a web application that allows multiple users to join a canvas and enable design, communicate, and share content and idea among each other.',
				link: 'https://github.com/helewrer3/collab_drawing',
				logo: faGithub,
				tech: ['NodeJS', 'Express', 'Socket.io', 'Canvas']
			},
			{
				name: 'Agro App',
				domainId: 1,
				summary:
					'Developed an Android App incorporating user authentication and authorization, marketplace, crop disease and cure prediction, crop yield estimate, live news and weather. Helps provide farmers with an extensive app to fulfill all of their commercial, farming and social needs.',
				link: 'https://github.com/helewrer3/agro_app',
				logo: faGithub,
				tech: ['NodeJS', 'Flutter', 'Firebase', 'Flask', 'Tensorflow Lite', 'Teachable Machine']
			},
			{
				name: 'Cri De Eco',
				domainId: 2,
				summary:
					'Published a PC Game featuring eight levels with character upgradation, action-packed story, original soundtrack and a points-based high-score system. Has been downloaded over 2000 times since release.',
				link: 'https://gamejolt.com/games/crideeco/337996',
				logo: faGithub,
				tech: ['Gamemaker Studio', 'Adobe Photoshop', 'Bfxr', 'C++']
			},
			{
				name: 'P.A.S.S.',
				domainId: 2,
				summary:
					'Published a PC Game. Fight through endless waves of unique aliens to protect the sovereign planet of Earth and aim for the highest score among your peers.',
				link: 'https://helewrer3.itch.io/pass',
				logo: faGithub,
				tech: ['Unity', 'Blender', 'Bfxr', 'C#']
			}
		]
	};
}
