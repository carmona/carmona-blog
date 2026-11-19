export type SupportedLang = 'en' | 'pt';

export interface TargetRole {
	title: string;
	description: string;
}

export interface SkillGroup {
	category: string;
	items: string;
}

export interface ExperienceItem {
	company: string;
	role: string;
	period: string;
	location: string;
	bullets: string[];
}

export interface EducationItem {
	institution: string;
	degree: string;
	period: string;
	focus: string;
}

export interface LanguageSkill {
	language: string;
	level: string;
	note?: string;
}

export interface ResumeData {
	lang: SupportedLang;
	langName: string;
	pageTitle: string;
	pageDescription: string;
	name: string;
	roleTitle: string;
	location: string;
	email: string;
	phone: string;
	linkedin: string;
	github: string;
	roadmap: string;
	ui: {
		languageNavLabel: string;
		printButton: string;
		downloadMarkdown?: string;
		revealContact: string;
		contactRevealed?: string;
		languages: Record<SupportedLang, string>;
	};
	sections: {
		summary: string;
		targetRoles: string;
		skills: string;
		experience: string;
		education: string;
		languages: string;
	};
	summaryText: string;
	targetRoles: TargetRole[];
	skills: SkillGroup[];
	experience: ExperienceItem[];
	education: EducationItem[];
	languages: LanguageSkill[];
}

export const resumeTranslations: Record<SupportedLang, ResumeData> = {
	en: {
		lang: 'en',
		langName: 'English',
		pageTitle: 'Filipe Carmona - Master Technical Resume & Career Dossier',
		pageDescription:
			'Master technical resume of Filipe Carmona - Senior Software Engineer, Frontend/Fullstack Specialist, Forward Deployed Engineer, and Tech Lead with 10+ years of experience.',
		name: 'Filipe Carmona',
		roleTitle: 'Senior Software Engineer • Fullstack & Frontend • Technical Lead',
		location: 'Santos, São Paulo, Brazil (Open to Remote / Relocation)',
		email: 'filipecarmona@outlook.com',
		phone: '+55 (13) 99630-8056',
		linkedin: 'https://linkedin.com/in/filipecarmona',
		github: 'https://github.com/carmona',
		roadmap: 'https://roadmap.sh/u/carmona',
		ui: {
			languageNavLabel: 'Resume language',
			printButton: 'Print / Save as PDF',
			downloadMarkdown: 'Download Master Markdown',
			revealContact: 'Click to reveal email & phone',
			contactRevealed: 'Direct contact info',
			languages: {
				en: 'English',
				pt: 'Português',
			},
		},
		sections: {
			summary: 'Professional Summary',
			targetRoles: 'Professional Summaries by Target Role',
			skills: 'Technical Skills Matrix',
			experience: 'Professional Experience',
			education: 'Education',
			languages: 'Languages',
		},
		summaryText:
			'Senior Software Engineer and Technical Lead with 10+ years of experience architecting performant web platforms, distributed cloud microservices, and client-facing enterprise software across React, Angular, TypeScript, Node.js (Express/NestJS), and multi-cloud infrastructure (AWS, Azure, GCP). Proven track record executing zero-downtime blue/green Kubernetes releases, leading the phased modernization of a 50-screen enterprise healthcare platform via Web Components, delivering real-time AI-assisted contact center widgets to 30,000+ daily agents across 10+ enterprise clients, and scaling healthcare SaaS platforms to 8,000+ practices. Experienced mentor and technical leader dedicated to code quality, automated testing (Jest, Cypress), CI/CD governance, and engineering excellence.',
		targetRoles: [
			{
				title: 'Senior Frontend Engineer',
				description:
					'Senior Frontend Engineer with 10+ years of experience architecting performant, accessible web applications and scalable design systems with React, Angular, and TypeScript. Proven track record modernizing 50-screen enterprise platforms, engineering real-time AI-powered agent widgets for 30,000+ contact center professionals across 10+ enterprise clients, and scaling healthcare SaaS platforms to 8,000+ practices. Deep expertise in micro-frontends, Web Components, performance optimization, and robust automated testing.',
			},
			{
				title: 'Senior Fullstack Software Engineer',
				description:
					'Senior Fullstack Software Engineer with 10+ years of experience delivering end-to-end enterprise web applications, distributed cloud services, and real-time AI workflows using TypeScript, React, Angular, Node.js (Express/NestJS), and multi-cloud infrastructure (AWS, Azure, GCP). Accomplished in leading blue/green Kubernetes deployments, architecting HIPAA-compliant healthcare data systems with FHIR standards, and publishing custom developer tooling adopted across cross-functional engineering teams.',
			},
			{
				title: 'Forward Deployed Engineer (FDE) / Customer Solutions Engineer',
				description:
					'Customer-Facing Forward Deployed Engineer with 10+ years of technical experience driving proof-of-concepts into hardened production deployments for enterprise clients. Proven success deploying real-time AI-assisted contact center solutions across 10+ enterprise clients serving 30,000+ human agents in hybrid cloud (AWS, Azure, on-premises) and Kubernetes environments. Adept at technical discovery, navigating complex compliance standards (HIPAA, SonarQube, Black Duck), building custom CLI developer tools, and aligning technical execution with business outcomes.',
			},
			{
				title: 'Engineering Tech Lead',
				description:
					'Engineering Tech Lead with 10+ years of experience driving frontend and fullstack system design, technical roadmaps, and high-performing developer teams. Successfully led the phased migration of a 50-screen legacy application from AngularJS to React 17/TypeScript via Web Components with zero downtime, established CI/CD pipelines and testing standards, mentored junior engineers to promotion readiness, and engineered mission-critical healthcare systems that supported 8,000+ medical practices and a provincial government public health distribution program.',
			},
		],
		skills: [
			{
				category: 'Programming Languages',
				items: 'TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS / SASS, SQL',
			},
			{
				category: 'Frontend Frameworks & Architecture',
				items: 'React (17/18), Angular (15+), Next.js, Redux, Zustand, Web Components, Micro-frontends, Enterprise Design Systems, Responsive UI/UX, Web Accessibility (WCAG 2.1)',
			},
			{
				category: 'Backend, APIs & Interoperability',
				items: 'Node.js, Express, NestJS, RESTful APIs, GraphQL, WebSockets, HL7 FHIR Standard, Microservices, MySQL',
			},
			{
				category: 'Cloud, DevOps & Tooling',
				items: 'Amazon Web Services (AWS EKS, EC2, S3), Microsoft Azure, Google Cloud Platform (GCP), Kubernetes (K8s), Docker, Blue/Green Deployments, Jenkins, GitHub Actions, Sonatype Nexus Registry, Git',
			},
			{
				category: 'AI & Applied Engineering',
				items: 'Google Dialogflow, Conversational AI / Agent Assist, Real-Time Sentiment Analysis, Retrieval-Augmented Generation (RAG), Local LLM Orchestration (Ollama, LM Studio), AI Coding Harnesses (Claude Code, Antigravity)',
			},
			{
				category: 'Testing, Quality & Compliance',
				items: 'Jest, Cypress, Karma, Jasmine, SonarQube (Static Analysis), Black Duck (Security Scans), HIPAA Compliance, Code Reviews',
			},
			{
				category: 'Leadership & Methodologies',
				items: 'Agile / Scrum, Technical Mentorship, Architecture Decision Records (ADRs), Sprint Planning, Backlog Grooming, B2B SaaS, E-Commerce',
			},
		],
		experience: [
			{
				company: 'Avaya',
				role: 'Software Engineer III (Senior Developer & Customer Solutions)',
				period: 'March 2024 – August 2025',
				location: 'Remote',
				bullets: [
					'Engineered and deployed reusable contact center UI widgets across 10+ global enterprise clients, serving 3,000+ human agents per client (30,000+ total daily active agents) operating in hybrid cloud and on-premises environments.',
					'Integrated Google Dialogflow conversational AI to deliver live document retrieval, context-aware reply suggestions, and real-time sentiment scoring, cutting agent research time and boosting first-contact resolution.',
					'Partnered with enterprise client IT, security, and infrastructure stakeholders across diverse deployment footprints, implementing solutions on self-hosted environments as well as Avaya cloud on AWS and Microsoft Azure.',
					'Co-managed AWS Kubernetes cluster releases using blue/green deployment strategies, ensuring seamless rollouts with zero operational downtime for mission-critical contact center workloads.',
					'Enforced strict enterprise compliance standards by integrating automated unit testing, SonarQube quality gates, and Black Duck security/open-source vulnerability scans into Jenkins CI/CD pipelines.',
					'Engineered an internal CLI boilerplate scaffolding package and distributed it via private Sonatype Nexus registry, standardizing architecture and slashing client widget onboarding time by ~70% across engineering teams.',
					'Constructed reusable, cross-browser component architectures in Angular 15, React, TypeScript, and SCSS strictly adhering to enterprise accessibility (WCAG 2.1) and responsive design standards.',
				],
			},
			{
				company: 'Sowingo',
				role: 'Senior Frontend Developer / Team Lead',
				period: 'February 2020 – October 2023',
				location: 'Toronto, Canada (Remote)',
				bullets: [
					'Architected the phased modernization of a 50-screen enterprise healthcare web app from AngularJS/ES5/LESS to React 17/TypeScript/SCSS using Web Components and git submodules, maintaining continuous production uptime.',
					'Led and mentored a team of 2 junior software engineers, conducting agile sprint planning, technical backlog grooming, and thorough pull request reviews while reporting team velocity to executive leadership.',
					'Engineered a modular, accessible (WCAG 2.1) UI design system with modern SCSS styling, establishing design tokens and accelerating feature delivery speed across development sprints.',
					'Implemented electronic patient health record interfaces strictly adhering to the HL7 FHIR standard with full HIPAA data security controls for sensitive clinical dental data.',
					'Built a low-latency, real-time messaging application enabling secure, encrypted clinical communication between dental practice team members and external consulting specialists.',
					'Scaled frontend performance and UX to support business growth from a few hundred practices to over 8,000 dental clinics, including an Ontario provincial government partnership for quota-managed N95 mask distribution during COVID-19.',
					'Instituted automated testing frameworks using Jest and Cypress within GitHub Actions CI/CD pipelines, decreasing regression bugs and ensuring stable bi-weekly deployments.',
				],
			},
			{
				company: 'Sowingo',
				role: 'Frontend Developer',
				period: 'August 2016 – January 2020',
				location: 'Toronto, Canada (Remote)',
				bullets: [
					'Developed core frontend features for a multi-tenant dental practice management software and e-commerce marketplace using AngularJS, JavaScript (ES6), and REST APIs in an Agile Scrum environment.',
					'Implemented marketplace product search leveraging Elasticsearch queries, dynamic multi-attribute filters, hierarchical category navigation, and distributor price comparison views.',
					'Built specialized clinical tracking modules including dental implant inventory with regulatory serial-number tracking, medication logs, and equipment sterilization compliance workflows.',
					'Developed interactive financial reporting dashboards enabling multi-practice dental organizations to audit purchase orders and track monthly/annual budgets.',
					'Automated frontend builds and unit testing using Gulp, Grunt, Karma, and Jasmine, translating Zeplin design specifications into pixel-perfect responsive layouts.',
				],
			},
			{
				company: 'CotaBox',
				role: 'Founding Partner & Frontend Developer',
				period: 'August 2015 – August 2016',
				location: 'Santos, Brazil',
				bullets: [
					'Co-founded and built the web interface for a B2B procurement marketplace facilitating purchase order quotes and price negotiations between enterprise commercial buyers and suppliers.',
					'Designed and developed interactive bidding dashboards with Angular, HTML5, and CSS3, standardizing pricing parameters across multi-item supplier proposals.',
					'Deployed and maintained cloud-hosted web applications on Google Cloud Platform (GCP).',
				],
			},
			{
				company: 'Mobbit IoT Enabler',
				role: 'Software Analyst',
				period: 'September 2015 – April 2016',
				location: 'Santos, Brazil',
				bullets: [
					'Designed lightweight web application interfaces for digital signage networks and IoT displays across 20+ commercial client networks in Brazil and Portugal.',
					'Built responsive, low-footprint frontends utilizing HTML5, CSS3, JavaScript, AngularJS, and Cordova optimized for hardware-constrained display devices.',
					'Mentored junior developers, reviewed technical deliverables, and enforced performance standards for hardware-constrained environments.',
				],
			},
			{
				company: 'Prodesan (Progresso e Desenvolvimento de Santos)',
				role: 'Software Developer',
				period: 'February 2014 – June 2015',
				location: 'Santos, Brazil',
				bullets: [
					'Engineered and maintained corporate municipal web systems utilizing PHP, Java EE6, HTML/CSS, and JavaScript for public-sector administration.',
					'Refactored legacy applications while establishing modern coding conventions for corporate intranet portals.',
					'Mentored and onboarded 3 engineering interns on software engineering best practices, version control workflows, and debugging techniques.',
				],
			},
			{
				company: 'Acqua Mundo',
				role: 'Webmaster',
				period: 'March 2011 – February 2014',
				location: 'Guarujá, Brazil',
				bullets: [
					'Designed and maintained responsive web portals utilizing PHP, JavaScript, WordPress, and Drupal CMS.',
					'Managed search engine optimization (SEO), digital content strategies, and cross-browser responsive layouts to drive traffic and user engagement.',
				],
			},
		],
		education: [
			{
				institution: 'UNIPDS',
				degree: 'Graduate Certificate in Software Engineering with Applied AI',
				period: 'June 2026 – July 2027 (Expected)',
				focus: 'Software architecture, enterprise distributed systems, and applied AI systems (RAG, conversational AI, LLM orchestration).',
			},
			{
				institution: 'FATEC Santos (Faculdade de Tecnologia de Santos)',
				degree: 'Technologist Degree in Systems Analysis and Development',
				period: 'January 2010 – June 2014',
				focus: 'Software engineering, algorithms, database systems, object-oriented design, and agile methodologies.',
			},
		],
		languages: [
			{ language: 'English', level: 'C2 – Fluent', note: 'IELTS Certified' },
			{ language: 'Portuguese', level: 'Native' },
			{ language: 'Italian', level: 'B1 – Intermediate' },
			{ language: 'Spanish', level: 'A2 – Elementary' },
		],
	},
	pt: {
		lang: 'pt',
		langName: 'Português',
		pageTitle: 'Filipe Carmona - Dossiê Técnico & Currículo Master',
		pageDescription:
			'Currículo técnico master de Filipe Carmona - Engenheiro de Software Sênior, Especialista Frontend/Fullstack, Forward Deployed Engineer e Líder Técnico com mais de 10 anos de experiência.',
		name: 'Filipe Carmona',
		roleTitle: 'Engenheiro de Software Sênior • Fullstack & Frontend • Líder Técnico',
		location: 'Santos, São Paulo, Brasil (Disponível para Remoto / Relocação)',
		email: 'filipecarmona@outlook.com',
		phone: '+55 (13) 99630-8056',
		linkedin: 'https://linkedin.com/in/filipecarmona',
		github: 'https://github.com/carmona',
		roadmap: 'https://roadmap.sh/u/carmona',
		ui: {
			languageNavLabel: 'Idioma do currículo',
			printButton: 'Imprimir / Salvar como PDF',
			downloadMarkdown: 'Baixar Markdown Master',
			revealContact: 'Clique para ver e-mail e telefone',
			contactRevealed: 'Contatos diretos',
			languages: {
				en: 'English',
				pt: 'Português',
			},
		},
		sections: {
			summary: 'Resumo Profissional',
			targetRoles: 'Resumos Profissionais por Cargo-Alvo',
			skills: 'Matriz de Habilidades Técnicas',
			experience: 'Experiência Profissional',
			education: 'Formação Acadêmica',
			languages: 'Idiomas',
		},
		summaryText:
			'Engenheiro de Software Sênior e Líder Técnico com mais de 10 anos de experiência arquitetando plataformas web performáticas, microsserviços distribuídos em nuvem e soluções corporativas voltadas para clientes em React, Angular, TypeScript, Node.js (Express/NestJS) e infraestrutura multi-cloud (AWS, Azure, GCP). Histórico comprovado de execução de lançamentos blue/green com zero downtime em Kubernetes, modernização gradual de plataforma corporativa de saúde com 50 telas via Web Components, entrega de widgets com IA em tempo real para mais de 30.000 agentes diários em 10+ clientes corporativos e escalabilidade de SaaS de saúde para mais de 8.000 clínicas. Mentor experiente focado em qualidade de código, testes automatizados (Jest, Cypress), governança de CI/CD e excelência em engenharia.',
		targetRoles: [
			{
				title: 'Engenheiro Frontend Sênior',
				description:
					'Engenheiro Frontend Sênior com mais de 10 anos de experiência arquitetando aplicações web de alta performance, acessíveis e escaláveis com React, Angular e TypeScript. Histórico comprovado de modernização de plataformas corporativas de 50 telas, engenharia de widgets com IA em tempo real para mais de 30.000 profissionais de contact center em 10+ clientes corporativos e escalabilidade de plataformas SaaS de saúde para mais de 8.000 clínicas. Sólida expertise em micro-frontends, Web Components, otimização de performance e testes automatizados robustos (Jest, Cypress).',
			},
			{
				title: 'Engenheiro Fullstack Sênior',
				description:
					'Engenheiro de Software Fullstack Sênior com mais de 10 anos de experiência entregando aplicações web corporativas completas, microsserviços distribuídos em nuvem e fluxos de IA em tempo real utilizando TypeScript, React, Angular, Node.js (Express/NestJS) e infraestrutura multi-cloud (AWS, Azure, GCP). Conquistas comprovadas na liderança de implantações blue/green em Kubernetes, arquitetura de prontuários em conformidade com HIPAA e padrão HL7 FHIR e desenvolvimento de ferramentas CLI internas adotadas por múltiplas equipes de engenharia.',
			},
			{
				title: 'Forward Deployed Engineer (FDE) / Engenheiro de Soluções',
				description:
					'Forward Deployed Engineer com mais de 10 anos de experiência técnica em soluções voltadas para o cliente, convertendo provas de conceito (POCs) em implementações robustas em produção. Sucesso comprovado na implantação de soluções de contact center potencializadas por IA em tempo real em 10+ clientes corporativos atendendo mais de 30.000 agentes humanos em ambientes híbridos (AWS, Azure, on-premises) e Kubernetes. Habilidade comprovada em descoberta técnica, navegação em padrões rígidos de segurança e governança (HIPAA, SonarQube, Black Duck), criação de CLIs para desenvolvedores e alinhamento de metas técnicas com resultados de negócios.',
			},
			{
				title: 'Líder Técnico de Engenharia (Tech Lead)',
				description:
					'Líder Técnico de Engenharia com mais de 10 anos de experiência orientando design de sistemas frontend e fullstack, roadmaps técnicos e equipes de alto desempenho. Liderou com sucesso a modernização gradual de uma plataforma corporativa legada de 50 telas de AngularJS para React 17/TypeScript via Web Components com zero tempo de inatividade, estabeleceu pipelines de CI/CD e padrões de testes automatizados, mentorei engenheiros juniores e arquitetei sistemas críticos de saúde que atenderam mais de 8.000 clínicas e programa governamental de distribuição emergencial na pandemia.',
			},
		],
		skills: [
			{
				category: 'Linguagens de Programação',
				items: 'TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS / SASS, SQL',
			},
			{
				category: 'Frameworks & Arquitetura Frontend',
				items: 'React (17/18), Angular (15+), Next.js, Redux, Zustand, Web Components, Micro-frontends, Design Systems Corporativos, UI/UX Responsivo, Acessibilidade Web (WCAG 2.1)',
			},
			{
				category: 'Backend, APIs & Interoperabilidade',
				items: 'Node.js, Express, NestJS, APIs RESTful, GraphQL, WebSockets, Padrão HL7 FHIR, Microsserviços, MySQL',
			},
			{
				category: 'Nuvem, DevOps & Ferramentas',
				items: 'Amazon Web Services (AWS EKS, EC2, S3), Microsoft Azure, Google Cloud Platform (GCP), Kubernetes (K8s), Docker, Implantações Blue/Green, Jenkins, GitHub Actions, Registro Sonatype Nexus, Git',
			},
			{
				category: 'IA & Engenharia Aplicada',
				items: 'Google Dialogflow, IA Conversacional / Agent Assist, Análise de Sentimento em Tempo Real, RAG (Retrieval-Augmented Generation), Orquestração de LLMs Locais (Ollama, LM Studio), Harnesses de IA (Claude Code, Antigravity)',
			},
			{
				category: 'Testes, Qualidade & Conformidade',
				items: 'Jest, Cypress, Karma, Jasmine, SonarQube (Análise Estática), Black Duck (Varredura de Segurança), Conformidade HIPAA, Revisões de Código (Code Review)',
			},
			{
				category: 'Liderança & Metodologias',
				items: 'Agile / Scrum, Mentoria Técnica, Architecture Decision Records (ADRs), Planejamento de Sprints, Refinamento de Backlog, B2B SaaS, E-Commerce',
			},
		],
		experience: [
			{
				company: 'Avaya',
				role: 'Software Engineer III (Desenvolvedor Sênior & Soluções para Clientes)',
				period: 'Março 2024 – Agosto 2025',
				location: 'Remoto',
				bullets: [
					'Desenvolvi e lancei widgets reutilizáveis de interface para contact centers implantados em mais de 10 clientes corporativos globais, atendendo a mais de 3.000 agentes humanos por cliente (30.000+ agentes ativos diários) em ambientes de nuvem híbrida e on-premises.',
					'Integrei IA conversacional com Google Dialogflow para fornecer busca de documentação em tempo real, sugestões contextuais de resposta e pontuação de sentimento, reduzindo o tempo de atendimento e aumentando a resolução no primeiro contato.',
					'Atuei em estreita colaboração com equipes de TI, segurança e infraestrutura dos clientes corporativos em diversas arquiteturas de implantação, executando soluções em ambientes locais (on-premises) e na nuvem Avaya na AWS e Microsoft Azure.',
					'Co-gerenciei implantações em clusters AWS Kubernetes utilizando estratégia blue/green, garantindo lançamentos contínuos com zero tempo de inatividade operacional em operações críticas de contact center.',
					'Assegurei padrões rigorosos de conformidade corporativa integrando testes unitários automatizados, quality gates no SonarQube e varreduras de vulnerabilidades de código aberto com Black Duck nos pipelines de CI/CD do Jenkins.',
					'Criei um pacote executável de CLI npm para scaffolding de boilerplates distribuído via registro privado Sonatype Nexus, padronizando a arquitetura e reduzindo o tempo de criação de novos widgets em ~70% entre as equipes.',
					'Construí arquiteturas de componentes reutilizáveis e compatíveis entre navegadores em Angular 15, React, TypeScript e SCSS seguindo rigorosamente as diretrizes de acessibilidade corporativa (WCAG 2.1) e design responsivo.',
				],
			},
			{
				company: 'Sowingo',
				role: 'Desenvolvedor Frontend Sênior / Líder Técnico',
				period: 'Fevereiro 2020 – Outubro 2023',
				location: 'Toronto, Canadá (Remoto)',
				bullets: [
					'Arquitetei a modernização em fases de uma plataforma de saúde corporativa de 50 telas de AngularJS/ES5/LESS para React 17/TypeScript/SCSS via Web Components e submódulos git, mantendo 100% de disponibilidade em produção.',
					'Liderei e mentorei uma equipe de 2 engenheiros de software juniores, conduzindo cerimônias ágeis, refinamento de backlog técnico e revisões detalhadas de pull requests, reportando a velocidade do time à diretoria executiva.',
					'Projetei um Design System modular e acessível (WCAG 2.1) com SCSS moderno, estabelecendo tokens de design e aumentando a velocidade de entrega de funcionalidades nos sprints seguintes.',
					'Implementei prontuários eletrônicos de pacientes aderindo estritamente ao padrão HL7 FHIR com controles integrais de segurança e privacidade em conformidade com a lei HIPAA.',
					'Construí uma aplicação de mensagens clínicas em tempo real com baixa latência, permitindo comunicação segura e criptografada entre membros da clínica e especialistas odontológicos externos.',
					'Escalei o desempenho e a interface do usuário para suportar a expansão de centenas de clínicas para mais de 8.000 consultórios odontológicos na América do Norte, incluindo parceria com o governo de Ontário para distribuição de máscaras N95 na pandemia de COVID-19.',
					'Estabeleci frameworks de testes automatizados com Jest e Cypress integrados a pipelines de CI/CD no GitHub Actions, reduzindo regressões em produção e assegurando entregas quinzenais estáveis.',
				],
			},
			{
				company: 'Sowingo',
				role: 'Desenvolvedor Frontend',
				period: 'Agosto 2016 – Janeiro 2020',
				location: 'Toronto, Canadá (Remoto)',
				bullets: [
					'Desenvolvi funcionalidades frontend essenciais para software de gestão odontológica multi-inquilino e marketplace de e-commerce utilizando AngularJS, JavaScript (ES6) e APIs REST em ambiente ágil Scrum.',
					'Implementei mecanismo de busca de produtos no marketplace com consultas no Elasticsearch, filtros dinâmicos de múltiplos atributos, navegação hierárquica por categorias e comparador de preços de distribuidores.',
					'Criei módulos clínicos especializados, incluindo rastreamento regulatório de implantes cirúrgicos com números de série e histórico de pacientes, registros de medicamentos e certificações de esterilização.',
					'Construí painéis analíticos financeiros e de orçamento, permitindo que redes odontológicas auditassem pedidos de compra e acompanhassem previsões orçamentárias mensais e anuais.',
					'Automatizei builds frontend e testes unitários utilizando Gulp, Grunt, Karma e Jasmine, convertendo especificações de design do Zeplin em layouts responsivos de alta fidelidade.',
				],
			},
			{
				company: 'CotaBox',
				role: 'Sócio Fundador & Desenvolvedor Frontend',
				period: 'Agosto 2015 – Agosto 2016',
				location: 'Santos, Brasil',
				bullets: [
					'Co-fundei e construí a interface web de um marketplace B2B para cotação e negociação de pedidos de compra entre compradores corporativos e fornecedores industriais.',
					'Desenvolvi painéis interativos de cotação e concorrência com Angular, HTML5 e CSS3, padronizando a análise de propostas complexas de fornecedores com múltiplos itens.',
					'Implantei e administrei aplicações web hospedadas em nuvem no Google Cloud Platform (GCP).',
				],
			},
			{
				company: 'Mobbit IoT Enabler',
				role: 'Analista de Software',
				period: 'Setembro 2015 – Abril 2016',
				location: 'Santos, Brasil',
				bullets: [
					'Projetei interfaces web leves para redes de sinalização digital e displays IoT em mais de 20 redes de clientes corporativos no Brasil e em Portugal.',
					'Desenvolvi frontends responsivos e de baixo consumo de recursos utilizando HTML5, CSS3, JavaScript, AngularJS e Cordova otimizados para dispositivos com hardware restrito.',
					'Mentorei desenvolvedores juniores, revisei entregas técnicas e garanti padrões de alta disponibilidade em endpoints distribuídos.',
				],
			},
			{
				company: 'Prodesan (Progresso e Desenvolvimento de Santos)',
				role: 'Desenvolvedor de Software',
				period: 'Fevereiro 2014 – Junho 2015',
				location: 'Santos, Brasil',
				bullets: [
					'Desenvolvi e mantive sistemas corporativos municipais utilizando PHP, Java EE6, HTML/CSS e JavaScript para a administração pública.',
					'Refatorei aplicações legadas essenciais e estabeleci convenções modernas de codificação para portais corporativos de intranet.',
					'Realizei mentoria e integração técnica de 3 estagiários de engenharia de software em boas práticas, controle de versão e depuração.',
				],
			},
			{
				company: 'Acqua Mundo',
				role: 'Webmaster',
				period: 'Março 2011 – Fevereiro 2014',
				location: 'Guarujá, Brasil',
				bullets: [
					'Desenvolvi e mantive portais web responsivos utilizando PHP, JavaScript, WordPress e CMS Drupal.',
					'Gerenciei otimização para motores de busca (SEO), estratégias de conteúdo digital e layouts responsivos para maximizar o tráfego e o engajamento.',
				],
			},
		],
		education: [
			{
				institution: 'UNIPDS',
				degree: 'Pós-Graduação em Engenharia de Software com IA Aplicada',
				period: 'Junho 2026 – Julho 2027 (Previsão)',
				focus: 'Arquitetura de software, sistemas corporativos distribuídos e integração prática de IA (RAG, fluxos com agentes, orquestração de LLMs).',
			},
			{
				institution: 'FATEC Santos (Faculdade de Tecnologia de Santos)',
				degree: 'Graduação Tecnológica em Análise e Desenvolvimento de Sistemas',
				period: 'Janeiro 2010 – Junho 2014',
				focus: 'Engenharia de software, estruturas de dados, algoritmos, modelagem de banco de dados, arquitetura de sistemas e metodologias ágeis.',
			},
		],
		languages: [
			{ language: 'Português', level: 'Nativo' },
			{ language: 'Inglês', level: 'C2 – Fluente', note: 'Certificado IELTS' },
			{ language: 'Italiano', level: 'B1 – Intermediário' },
			{ language: 'Espanhol', level: 'A2 – Básico' },
		],
	},
};
