import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-slate-200">
        <div 
          className="absolute inset-0 bg-blue-900 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/header-bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-start items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/ahmad-hamdan-profile.webp"
                alt="Ahmad Hamdan"
                width={120}
                height={120}
                className="rounded-full object-cover ring-4 ring-white shadow-lg"
                priority
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Ahmad Hamdan
              </h1>
              <div className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
                <p className="text-2xl sm:text-3xl font-semibold text-white">Senior Full Stack Web Developer</p>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </div>
              <p className="text-sm text-slate-200 mb-4">Started in 2013 in Lebanon • Based in Michigan, USA since 2021</p>
            </div>
          </div>
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-3xl leading-relaxed">
            I work across the full web stack: frontend and backend; building responsive, SEO-friendly applications that prioritize performance and accessibility.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:ahmadmhdhamdan@gmail.com"
              aria-label="Email: ahmadmhdhamdan@gmail.com"
              className="group relative inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-lg transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <span className="sr-only">Email: ahmadmhdhamdan@gmail.com</span>
              <span className="tooltip absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-slate-800 text-white text-xs rounded px-2 py-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 transition-all">Email</span>
            </a>
            <a
              href="tel:+17344500576"
              aria-label="Phone: +1 (734) 450-0576"
              className="group relative inline-flex items-center justify-center w-12 h-12 rounded-lg border border-slate-400 hover:border-slate-300 text-slate-200 hover:text-white text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span className="sr-only">Phone: +1 (734) 450-0576</span>
              <span className="tooltip absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-slate-800 text-white text-xs rounded px-2 py-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 transition-all">Phone</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-hamdan-73a283136/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn: Ahmad Hamdan"
              className="group relative inline-flex items-center justify-center w-12 h-12 rounded-lg border border-slate-400 hover:border-slate-300 text-slate-200 hover:text-white text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              <span className="sr-only">LinkedIn: Ahmad Hamdan</span>
              <span className="tooltip absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-slate-800 text-white text-xs rounded px-2 py-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 transition-all">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ahmad-m-hamdan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub: ahmad-m-hamdan"
              className="group relative inline-flex items-center justify-center w-12 h-12 rounded-lg border border-slate-400 hover:border-slate-300 text-slate-200 hover:text-white text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
              <span className="sr-only">GitHub: ahmad-m-hamdan</span>
              <span className="tooltip absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-slate-800 text-white text-xs rounded px-2 py-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 transition-all">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Professional Summary */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Summary</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Senior Full Stack Web Developer with over a decade of experience building responsive, SEO-friendly websites and applications. I specialize in frontend technologies (HTML5, CSS3, Tailwind, JavaScript/ES6, React.js) and backend systems (PHP, Yii2, Fat-Free, CodeIgniter, MySQL/MariaDB). I also have deep experience with CMS platforms (WordPress, PrestaShop) and CRM integrations (Salesforce, HubSpot).
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Proven track record leading teams and projects to improve performance and search rankings, and delivering reliable releases using CI/CD pipelines, Git workflows, and tools like Jira and Confluence. I’m bilingual (Arabic native, English fluent) and comfortable collaborating with designers using Figma and Adobe Creative Suite.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 hover:shadow-xl transition-shadow mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Senior Web Developer</h3>
                <span className="inline-block mt-3 sm:mt-0 text-sm font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  June 2024 - Present
                </span>
              </div>
              <p className="text-lg font-semibold text-blue-600 mb-5">Cisco</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-blue-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Contributing to the ongoing maintenance and enhancement of the Duo website (<a href="https://duo.com" target="_blank" className="text-blue-600 hover:underline">duo.com</a>), ensuring stability and optimal performance</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-blue-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Collaborating within the development team to revamp the site into a more modern, user-friendly platform aligned with the latest SEO best practices and WCAG accessibility standards</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-blue-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Conducting thorough code reviews on GitHub, upholding clean coding standards to promote readability, maintainability, and team-wide consistency</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 hover:shadow-xl transition-shadow mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Senior WordPress Developer</h3>
                <span className="inline-block mt-3 sm:mt-0 text-sm font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  November 2023 - January 2025
                </span>
              </div>
              <p className="text-lg font-semibold text-blue-600 mb-5">Black Hills Information Security</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-blue-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Leading the development and launch of the <a href="https://www.antisyphontraining.com/" target="_blank" className="text-blue-600 hover:underline">Antisyphon Training website</a>, architecting the structure, and transforming Figma designs into a responsive WordPress platform using PHP</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-blue-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Collaborating effectively within a cross-functional team to ensure the timely progression and successful completion of the project</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-blue-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Crafting detailed step-by-step documentation on Confluence, providing valuable resources for current and future administrators to navigate the website effortlessly once launched</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Team Lead</h3>
                <span className="inline-block mt-3 sm:mt-0 text-sm font-medium bg-indigo-100 text-blue-600 px-4 py-2 rounded-full">
                  December 2021 - September 2023
                </span>
              </div>
              <p className="text-lg font-semibold text-indigo-600 mb-5">Market Rebellion</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Architected and managed the company's WordPress-based <a href="https://www.marketrebellion.com/" target="_blank" className="text-blue-600 hover:underline">website</a> & <a href="https://member.marketrebellion.com/" target="_blank" className="text-blue-600 hover:underline">portal</a></span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Led the Analyst Hub project, emphasizing strategic project architecture</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Orchestrated release cycles and delegated tasks through Jira</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Integrated Twilio SMS feature via PHP, boosting customer retention by 30%</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Full Stack Developer</h3>
                <span className="inline-block mt-3 sm:mt-0 text-sm font-medium bg-indigo-100 text-blue-600 px-4 py-2 rounded-full">
                  February 2021 - November 2021
                </span>
              </div>
              <p className="text-lg font-semibold text-indigo-600 mb-5">AstroLabs</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Managed & maintained the company’s main <a href="https://astrolabs.com/" target="_blank" className="text-blue-600 hover:underline">website</a> & <a href="https://www.setupinsaudi.com/" target="_blank" className="text-blue-600 hover:underline">Saudi chapter</a> via WordPress & PHP</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Built a new standalone WordPress theme for the main website from scratch</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Developed GROW, a social platform powered by BuddyPress hosting more than 1000 users</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Senior Web Developer</h3>
                <span className="inline-block mt-3 sm:mt-0 text-sm font-medium bg-indigo-100 text-blue-600 px-4 py-2 rounded-full">
                  June 2020 - February 2021
                </span>
              </div>
              <p className="text-lg font-semibold text-indigo-600 mb-5">Inside Telecom</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Developed, & maintained the company’s main <a href="https://www.insidetelecom.com/" target="_blank">tech news website</a> & newsletters via WordPress, PHP, & MailChimp</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Led efforts to overhaul & optimize legacy codebase in PHP, JavaScript & CSS</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Boosted rankings & traffic by 480% in the first 5 months through on-site SEO guidance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Software Engineer</h3>
                <span className="inline-block mt-3 sm:mt-0 text-sm font-medium bg-indigo-100 text-blue-600 px-4 py-2 rounded-full">
                  March 2017 - May 2020
                </span>
              </div>
              <p className="text-lg font-semibold text-indigo-600 mb-5">MIT Enterprise Forum Pan Arab</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Led the integration of Salesforce as the organization’s main CRM</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Built & maintained all of the organization’s websites via Yii2 PHP, including the main competition registration platform which in 2018 hosted a record of over 1200 applicants</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Headed the Alumni Directory project, centralizing competition data since 2007</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Software Engineer</h3>
                <span className="inline-block mt-3 sm:mt-0 text-sm font-medium bg-indigo-100 text-blue-600 px-4 py-2 rounded-full">
                  November 2015 - February 2017
                </span>
              </div>
              <p className="text-lg font-semibold text-indigo-600 mb-5">Infosysta</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Maintained the company’s main website using Fat-Free PHP</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Adopted agile practices to work with a team on the company’s primary product, <a href="https://www.app4legal.com/" target="_blank" className="text-blue-600 hover:underline">App4Legal</a>, using CodeIgniter PHP, CSS, & JavaScript while adhering to the MVC architecture</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Worked on Jira plugins, such as <a href="https://marketplace.atlassian.com/apps/1215724/arabic-for-jira" target="_blank" className="text-blue-600 hover:underline">Arabic for Jira, AMJ - Attachments Manager for Jira</a>, & <a href="https://marketplace.atlassian.com/apps/1214475/mobile-for-jira" target="_blank" className="text-blue-600 hover:underline">Mobile for Jira</a> currently having 1500+ downloads</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Web Developer</h3>
                <span className="inline-block mt-3 sm:mt-0 text-sm font-medium bg-indigo-100 text-blue-600 px-4 py-2 rounded-full">
                  June 2013 - November 2015
                </span>
              </div>
              <p className="text-lg font-semibold text-indigo-600 mb-5">Eastline Digital</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Created Facebook apps & microsites for brands like GAP & PULL&BEAR using native PHP</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <i className="fa-solid fa-angle-right text-indigo-500 flex-shrink-0" aria-hidden="true"></i>
                  <span className="text-base">Developed <a href="http://www.eastlinemarketing.com/portfolio-item/sportstown-online-sportswear-nike-converse-brands/" target="_blank" className="text-blue-600 hover:underline">Sports Town</a> for the official Nike & Converse retailer in Lebanon using PrestaShop CMS, PHP, HTML, CSS, & JavaScript</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12">
              <h3 className="text-xl font-bold text-blue-600 mb-6">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML5", "CSS3", "LESS/SASS", "Bootstrap", "jQuery", "AJAX", "Foundation", "Tailwind CSS", "JavaScript (ES6)", "React.js", "WCAG"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-sm font-semibold rounded-lg border border-blue-200 hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12">
              <h3 className="text-xl font-bold text-purple-600 mb-6">Backend Development</h3>
              <div className="flex flex-wrap gap-3">
                {["PHP", "Yii2", "Fat-Free", "CodeIgniter", "MySQL", "MariaDB", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 text-sm font-semibold rounded-lg border border-purple-200 hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12">
              <h3 className="text-xl font-bold text-indigo-600 mb-6">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {["CI/CD", "Git", "GitHub", "GitLab", "Bitbucket", "Confluence", "Jira", "Composer", "npm", "PHPUnit"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 text-sm font-semibold rounded-lg border border-indigo-200 hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12">
              <h3 className="text-xl font-bold text-cyan-600 mb-6">Professional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["REST", "SOAP", "Salesforce", "HubSpot", "WordPress", "PrestaShop", "Wix", "Joomla", "Google Analytics", "Google Search Console", "Google Ads", "Figma", "Adobe Creative Suite (Photoshop, Illustrator)", "Arabic (native)", "English (fluent)"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 text-sm font-semibold rounded-lg border border-cyan-200 hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Education</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Bachelor of Science in Computer Science
                </h3>
                <span className="inline-block mt-3 sm:mt-0 text-sm font-medium bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  2008 - 2013
                </span>
              </div>
              <p className="text-gray-600 text-lg">American University of Beirut, Lebanon</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 mt-32 border-t border-slate-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
