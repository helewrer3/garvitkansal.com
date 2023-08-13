import { faMicrosoft, faUnity } from '@fortawesome/free-brands-svg-icons';
import { faT } from '@fortawesome/free-solid-svg-icons';

export function load() {
	return {
		workEx: [
			{
				logo: faMicrosoft,
				name: 'Microsoft',
				position: 'Software Engineer',
				duration: "Jul'23 - Present",
				work: 'Part of the M365 Core team, responsible for deployment and development of sovereign clouds.',
				tech: ['C#', 'PowerShell']
			},
			{
				logo: faMicrosoft,
				name: 'Microsoft',
				position: 'Software Engineer Intern',
				duration: "May'22 - Jul'22",
				work: 'Part of the Microsoft ToDo Android team, developed the home-screen widgets and implemented a framework to enable developers to showcase new app features to the user.',
				tech: ['Kotlin', 'Java']
			},
			{
				logo: faT,
				name: 'Trell',
				position: 'Software Developer Intern',
				duration: "Sep'21 - March'22",
				work: "Part of the Internal Tools team, developed various databases, APIs, tools to be used internally within the org. Optimized the app's search engine to reduce follower search time by 20%.",
				tech: [
					'ReactJS',
					'NestJS',
					'Docker',
					'Kubernetes',
					'AWS',
					'Elastic Search',
					'Apache Kafka',
					'Sentry',
					'PHP',
					'TypeScript'
				]
			},
			{
				logo: faUnity,
				name: 'Elixar Systems',
				position: 'Augmented Reality Content Developer',
				duration: "Dec'19 - Jan'20",
				work: 'Developed variegated interactive AR simulations for NCERT using Unity, Vuforia & Blender for science textbooks. Devised the launch of the NCERT ePathshala AR app on google playstore under Digital India initiative',
				tech: ['C#', 'Blender', 'Unity', 'Vuforia']
			}
		]
	};
}
