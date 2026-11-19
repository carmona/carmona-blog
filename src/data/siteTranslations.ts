import { SITE_TITLE } from '../consts';
import type { SupportedLang } from './resume';

export type { SupportedLang };

export interface SiteTranslation {
	lang: SupportedLang;
	htmlLang: string;
	ui: {
		siteTitle: string;
		languageNavLabel: string;
		languages: Record<SupportedLang, string>;
		shortLanguages: Record<SupportedLang, string>;
		theme: {
			toggleAria: string;
			switchToDark: string;
			switchToLight: string;
		};
		nav: {
			home: string;
			about: string;
			resume: string;
			blog: string;
			menuButton: string;
			openMenu: string;
			closeMenu: string;
		};
		footer: {
			copyright: string;
			githubAria: string;
			linkedinAria: string;
		};
	};
	home: {
		pageTitle: string;
		pageDescription: string;
		greeting: string;
		tagline: string;
		intro: string;
		highlightsHeading: string;
		highlights: Array<{
			title: string;
			description: string;
		}>;
		exploreHeading: string;
		exploreIntro: string;
		resumeLinkText: string;
		resumeAltText: string;
		resumeAltLinkText: string;
		aboutLinkText: string;
		connectText: string;
	};
	about: {
		pageTitle: string;
		pageDescription: string;
		heroImageAlt: string;
		intro: string;
		backgroundHeading: string;
		backgroundText: string;
		highlightsHeading: string;
		highlights: Array<{
			title: string;
			content: string;
		}>;
		learningHeading: string;
		learningText: string;
		languagesHeading: string;
		languagesIntro: string;
		languagesList: Array<{
			name: string;
			level: string;
		}>;
		contactHeading: string;
		contactIntro: string;
		contactResumeLink: string;
		contactResumeAltNote: string;
		contactLinkedIn: string;
		contactGitHub: string;
		contactRoadmap: string;
		contactEmail: string;
	};
}

export const siteTranslations: Record<SupportedLang, SiteTranslation> = {
	en: {
		lang: 'en',
		htmlLang: 'en',
		ui: {
			siteTitle: SITE_TITLE,
			languageNavLabel: 'Select language',
			languages: {
				en: 'English',
				pt: 'Português',
			},
			shortLanguages: {
				en: 'EN',
				pt: 'PT',
			},
			theme: {
				toggleAria: 'Toggle color theme',
				switchToDark: 'Switch to dark theme',
				switchToLight: 'Switch to light theme',
			},
			nav: {
				home: 'Home',
				about: 'About',
				resume: 'Resume',
				blog: 'Blog',
				menuButton: 'Menu',
				openMenu: 'Open navigation menu',
				closeMenu: 'Close navigation menu',
			},
			footer: {
				copyright: 'All rights reserved.',
				githubAria: "Go to Filipe's GitHub profile",
				linkedinAria: "Go to Filipe's LinkedIn profile",
			},
		},
		home: {
			pageTitle: `${SITE_TITLE} — Software Engineer & Technical Lead`,
			pageDescription: 'Senior Software Engineer, Frontend/Fullstack Specialist & Technical Lead.',
			greeting: "👋 Hi, I'm Filipe",
			tagline: 'Software Engineer • Frontend Specialist • Technical Lead',
			intro: 'Welcome to my personal corner of the web. This is where I post everything worth talking about.',
			highlightsHeading: 'What I Do',
			highlights: [
				{
					title: 'Frontend Architecture & Design Systems:',
					description:
						'Deep expertise in React, Angular, TypeScript, Web Components, and WCAG 2.1 accessibility. Led the phased, zero-downtime modernization of a 50-screen enterprise platform.',
				},
				{
					title: 'Applied AI & Real-Time Systems:',
					description:
						'Deployed Google Dialogflow conversational AI, live document retrieval, sentiment scoring, and LLM orchestration powering 30,000+ daily contact center agents across 10+ enterprise clients.',
				},
				{
					title: 'Healthcare SaaS & Scale:',
					description:
						'Scaled applications from hundreds of practices to over 8,000 dental clinics across North America, building HIPAA-compliant electronic records using the HL7 FHIR standard.',
				},
				{
					title: 'Cloud & DevOps Governance:',
					description:
						'Co-managed zero-downtime blue/green Kubernetes releases on AWS, created private CLI developer tooling that reduced onboarding time by ~70%, and enforced strict security gates with SonarQube and Black Duck.',
				},
			],
			exploreHeading: 'Explore',
			exploreIntro: 'Interested in my career history, skill set, and past projects?',
			resumeLinkText: 'Technical Resume',
			resumeAltText: 'also available in',
			resumeAltLinkText: 'Português',
			aboutLinkText: 'About Me',
			connectText: 'Connect with me on LinkedIn or check out my work on GitHub.',
		},
		about: {
			pageTitle: `About ${SITE_TITLE}`,
			pageDescription:
				'Senior Software Engineer, Frontend/Fullstack Specialist & Technical Lead with 10+ years of experience.',
			heroImageAlt: 'Filipe Carmona',
			intro: `Hello! I'm <strong>Filipe Carmona</strong>, a Senior Software Engineer and Technical Lead with over a decade of experience designing, architecting, and scaling enterprise web applications, distributed cloud services, and applied AI systems. I am based in Santos, São Paulo, Brazil, and work remotely with international teams across North America and globally.`,
			backgroundHeading: 'My Background & Journey',
			backgroundText: `My engineering career spans 10+ years across fast-growing SaaS startups, enterprise telecommunications, e-commerce marketplaces, and public sector software. Throughout this journey, I have specialized in building accessible, high-performance web applications using <strong>TypeScript</strong>, <strong>React</strong>, <strong>Angular</strong>, and <strong>Node.js</strong>, while managing multi-cloud deployments on <strong>AWS</strong>, <strong>Azure</strong>, and <strong>Google Cloud Platform</strong>.`,
			highlightsHeading: 'Key Career Highlights',
			highlights: [
				{
					title: 'Avaya (2024 – 2025):',
					content:
						'As Software Engineer III, I engineered reusable contact center UI widgets deployed across 10+ global enterprise clients, serving 30,000+ daily active agents. I integrated Google Dialogflow for conversational AI, context-aware reply suggestions, and real-time sentiment scoring. Additionally, I authored an internal CLI scaffolding tool published to a private Sonatype Nexus registry, cutting widget setup time by ~70%, and co-managed zero-downtime blue/green Kubernetes releases on AWS.',
				},
				{
					title: 'Sowingo (2016 – 2023):',
					content:
						'Over 7+ years, I evolved from Frontend Developer to Senior Developer and Team Lead. I architected the phased, zero-downtime migration of a 50-screen enterprise healthcare web app from AngularJS to React 17/TypeScript via Web Components. I mentored junior software engineers, implemented electronic patient health records strictly adhering to the HL7 FHIR standard with HIPAA compliance, built low-latency real-time clinical messaging, and helped scale the platform to support over 8,000 dental clinics across North America.',
				},
				{
					title: 'Entrepreneurship & Early Career:',
					content:
						'Co-founded B2B e-procurement marketplace CotaBox, engineered lightweight IoT and digital signage web interfaces at Mobbit IoT Enabler, and developed municipal administrative systems in Java EE and PHP for Prodesan.',
				},
			],
			learningHeading: 'Applied AI & Lifelong Learning',
			learningText: `Technology evolves rapidly, and I am committed to continuous growth. I am currently pursuing a <strong>Graduate Certificate in Software Engineering with Applied AI</strong> at UNIPDS (2026–2027), focusing on enterprise distributed architectures, Retrieval-Augmented Generation (RAG), conversational agent assist, and local LLM orchestration (Ollama, LM Studio). I hold a Technologist Degree in <strong>Systems Analysis and Development</strong> from FATEC Santos (2010–2014).`,
			languagesHeading: 'Languages & Global Collaboration',
			languagesIntro: 'Working in cross-border and distributed engineering teams is second nature to me:',
			languagesList: [
				{ name: 'English', level: 'C2 – Fluent (IELTS Certified)' },
				{ name: 'Portuguese', level: 'Native' },
				{ name: 'Italian', level: 'B1 – Intermediate' },
				{ name: 'Spanish', level: 'A2 – Elementary' },
			],
			contactHeading: 'Get in Touch',
			contactIntro: "Whether you'd like to collaborate, discuss technical architecture, or learn more about my background:",
			contactResumeLink: 'Technical Resume',
			contactResumeAltNote: 'also available in',
			contactLinkedIn: 'LinkedIn',
			contactGitHub: 'GitHub',
			contactRoadmap: 'Roadmap.sh',
			contactEmail: 'filipecarmona@outlook.com',
		},
	},
	pt: {
		lang: 'pt',
		htmlLang: 'pt-BR',
		ui: {
			siteTitle: SITE_TITLE,
			languageNavLabel: 'Selecionar idioma',
			languages: {
				en: 'English',
				pt: 'Português',
			},
			shortLanguages: {
				en: 'EN',
				pt: 'PT',
			},
			theme: {
				toggleAria: 'Alternar tema de cores',
				switchToDark: 'Mudar para tema escuro',
				switchToLight: 'Mudar para tema claro',
			},
			nav: {
				home: 'Início',
				about: 'Sobre',
				resume: 'Currículo',
				blog: 'Blog',
				menuButton: 'Menu',
				openMenu: 'Abrir menu de navegação',
				closeMenu: 'Fechar menu de navegação',
			},
			footer: {
				copyright: 'Todos os direitos reservados.',
				githubAria: 'Acessar perfil do Filipe no GitHub',
				linkedinAria: 'Acessar perfil do Filipe no LinkedIn',
			},
		},
		home: {
			pageTitle: `${SITE_TITLE} — Engenheiro de Software e Líder Técnico`,
			pageDescription: 'Engenheiro de Software Sênior, Especialista Frontend/Fullstack e Líder Técnico.',
			greeting: '👋 Olá, eu sou o Filipe',
			tagline: 'Engenheiro de Software • Especialista em Frontend • Líder Técnico',
			intro: 'Bem-vindo ao meu espaço pessoal na web. Aqui compartilho tudo que vale a pena falar a respeito.',
			highlightsHeading: 'O Que Eu Faço',
			highlights: [
				{
					title: 'Arquitetura Frontend e Design Systems:',
					description:
						'Ampla experiência com React, Angular, TypeScript, Web Components e acessibilidade WCAG 2.1. Liderou a modernização gradual, com zero downtime, de uma plataforma corporativa com mais de 50 telas.',
				},
				{
					title: 'IA Aplicada e Sistemas em Tempo Real:',
					description:
						'Implementou IA conversacional com Google Dialogflow, busca de documentos em tempo real, análise de sentimento e orquestração de LLMs para mais de 30.000 operadores diários de contact center em mais de 10 clientes corporativos.',
				},
				{
					title: 'SaaS na Área da Saúde e Alta Escala:',
					description:
						'Escalou sistemas de centenas de clínicas para mais de 8.000 clínicas odontológicas na América do Norte, desenvolvendo prontuários eletrônicos com conformidade HIPAA e padrão HL7 FHIR.',
				},
				{
					title: 'Nuvem e Governança DevOps:',
					description:
						'Coliderou implantações blue/green sem downtime em Kubernetes na AWS, criou ferramentas CLI internas que reduziram o tempo de onboarding em ~70% e implementou gates de segurança rigorosos com SonarQube e Black Duck.',
				},
			],
			exploreHeading: 'Explorar',
			exploreIntro: 'Quer saber mais sobre minha trajetória profissional, competências e projetos?',
			resumeLinkText: 'Currículo Técnico',
			resumeAltText: 'também disponível em',
			resumeAltLinkText: 'English',
			aboutLinkText: 'Sobre Mim',
			connectText: 'Conecte-se comigo no LinkedIn ou veja meus projetos no GitHub.',
		},
		about: {
			pageTitle: `Sobre ${SITE_TITLE}`,
			pageDescription:
				'Engenheiro de Software Sênior, Especialista Frontend/Fullstack e Líder Técnico com mais de 10 anos de experiência.',
			heroImageAlt: 'Filipe Carmona',
			intro: `Olá! Eu sou o <strong>Filipe Carmona</strong>, Engenheiro de Software Sênior e Líder Técnico com mais de uma década de experiência no design, arquitetura e escala de aplicações web corporativas, serviços distribuídos em nuvem e sistemas de IA aplicada. Resido em Santos, São Paulo, Brasil, e atuo remotamente com equipes internacionais na América do Norte e no mundo todo.`,
			backgroundHeading: 'Minha Trajetória e Experiência',
			backgroundText: `Minha carreira na engenharia de software abrange mais de 10 anos em startups SaaS de rápido crescimento, telecomunicações corporativas, marketplaces de e-commerce e software para o setor público. Ao longo dessa trajetória, especializei-me no desenvolvimento de aplicações web acessíveis e de alta performance com <strong>TypeScript</strong>, <strong>React</strong>, <strong>Angular</strong> e <strong>Node.js</strong>, além de gerenciar implantações multi-cloud na <strong>AWS</strong>, <strong>Azure</strong> e <strong>Google Cloud Platform</strong>.`,
			highlightsHeading: 'Principais Destaques da Carreira',
			highlights: [
				{
					title: 'Avaya (2024 – 2025):',
					content:
						'Como Engenheiro de Software III, desenvolvi widgets de interface reutilizáveis para contact center implantados em mais de 10 clientes corporativos globais, atendendo a mais de 30.000 agentes ativos diariamente. Integrei IA conversacional com Google Dialogflow, sugestões contextuais de resposta e pontuação de sentimento em tempo real. Além disso, criei uma ferramenta CLI interna de scaffolding publicada em registro privado Sonatype Nexus, reduzindo o tempo de criação de widgets em ~70%, e coliderei implantações blue/green sem downtime em Kubernetes na AWS.',
				},
				{
					title: 'Sowingo (2016 – 2023):',
					content:
						'Ao longo de mais de 7 anos, evoluí de Desenvolvedor Frontend a Desenvolvedor Sênior e Líder de Equipe. Arquitetei e executei a migração gradual, com zero downtime, de uma aplicação corporativa na área de saúde com mais de 50 telas de AngularJS para React 17/TypeScript utilizando Web Components. Liderei e mentorei engenheiros de software, implementei prontuários eletrônicos de saúde em estrita conformidade com o padrão HL7 FHIR e HIPAA, desenvolvi mensageria clínica de baixa latência em tempo real e auxiliei na escala da plataforma para mais de 8.000 clínicas odontológicas na América do Norte.',
				},
				{
					title: 'Empreendedorismo e Início de Carreira:',
					content:
						'Co-fundei o marketplace B2B de e-procurement CotaBox, desenvolvi interfaces web leves para IoT e sinalização digital na Mobbit IoT Enabler e projetei sistemas administrativos municipais em Java EE e PHP na Prodesan.',
				},
			],
			learningHeading: 'IA Aplicada e Aprendizado Contínuo',
			learningText: `A tecnologia evolui rapidamente e tenho compromisso constante com o aprendizado contínuo. Atualmente curso Pós-Graduação em <strong>Engenharia de Software com IA Aplicada</strong> na UNIPDS (2026–2027), com foco em arquiteturas distribuídas corporativas, Retrieval-Augmented Generation (RAG), assistência conversacional para agentes e orquestração de LLMs locais (Ollama, LM Studio). Sou graduado como Tecnólogo em <strong>Análise e Desenvolvimento de Sistemas</strong> pela FATEC Santos (2010–2014).`,
			languagesHeading: 'Idiomas e Colaboração Global',
			languagesIntro: 'Atuar em equipes de engenharia distribuídas e internacionais é natural no meu dia a dia:',
			languagesList: [
				{ name: 'Inglês', level: 'C2 – Fluente (Certificado IELTS)' },
				{ name: 'Português', level: 'Nativo' },
				{ name: 'Italiano', level: 'B1 – Intermediário' },
				{ name: 'Espanhol', level: 'A2 – Elementar' },
			],
			contactHeading: 'Entre em Contato',
			contactIntro: 'Seja para colaborar, discutir arquitetura de sistemas ou saber mais sobre meu trabalho:',
			contactResumeLink: 'Currículo Técnico',
			contactResumeAltNote: 'também disponível em',
			contactLinkedIn: 'LinkedIn',
			contactGitHub: 'GitHub',
			contactRoadmap: 'Roadmap.sh',
			contactEmail: 'filipecarmona@outlook.com',
		},
	},
};

export function getCurrentLang(pathname: string): SupportedLang {
	const clean = pathname.replace(/\/$/, '') || '/';
	if (clean === '/pt' || clean.startsWith('/pt/') || clean === '/resume/pt') {
		return 'pt';
	}
	return 'en';
}

export function getLocalizedPath(targetLang: SupportedLang, currentPathname: string): string {
	const cleanPath = currentPathname.length > 1 && currentPathname.endsWith('/')
		? currentPathname.slice(0, -1)
		: currentPathname;

	// Home
	if (cleanPath === '' || cleanPath === '/' || cleanPath === '/pt' || cleanPath === '/en') {
		return targetLang === 'pt' ? '/pt' : (cleanPath === '' || cleanPath === '/' ? '/' : '/en');
	}

	// Resume
	if (
		cleanPath === '/resume' ||
		cleanPath === '/resume/en' ||
		cleanPath === '/resume/pt' ||
		cleanPath === '/pt/resume' ||
		cleanPath === '/en/resume'
	) {
		if (targetLang === 'pt') {
			return cleanPath === '/en/resume' || cleanPath === '/pt/resume' ? '/pt/resume' : '/resume/pt';
		} else {
			return cleanPath === '/pt/resume' || cleanPath === '/en/resume' ? '/en/resume' : '/resume';
		}
	}

	// About
	if (cleanPath === '/about' || cleanPath === '/pt/about' || cleanPath === '/en/about') {
		return targetLang === 'pt' ? '/pt/about' : (cleanPath === '/about' ? '/about' : '/en/about');
	}

	// General
	const isPt = cleanPath.startsWith('/pt/') || cleanPath === '/pt';
	const isEn = cleanPath.startsWith('/en/') || cleanPath === '/en';
	const basePath = isPt
		? cleanPath.replace(/^\/pt/, '') || '/'
		: isEn
			? cleanPath.replace(/^\/en/, '') || '/'
			: cleanPath;

	if (targetLang === 'pt') {
		return basePath === '/' ? '/pt' : `/pt${basePath}`;
	}
	return isEn || cleanPath.startsWith('/en')
		? (basePath === '/' ? '/en' : `/en${basePath}`)
		: basePath;
}
