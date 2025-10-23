import React from 'react';
import { Link } from 'react-router-dom';

const NAV_SECTIONS = [
	{
		title: 'Explore',
		items: [
			{ label: 'Home', to: '/' },
			{ label: 'About', to: '/about' },
			{ label: 'Projects', to: '/projects' },
			{ label: 'Contact', to: '/contact' },
		],
	},
	{
		title: 'Craft',
		items: [
			{ label: 'Frontend', href: '../about' },
			{ label: 'Backend', href: '../about' },
            { label: 'Database', href: '../about'},
			{ label: 'Performance', href: '../about' },
		],
	},
	{
		title: 'Connect',
		items: [
			{ label: 'GitHub', href: 'https://github.com/SanketP2003' },
			{ label: 'LinkedIn', href: 'https://linkedin.com/in/sanketpatil-in' },
			{ label: 'Email', href: 'mailto:1002sanketpatil@gmail.com' },
		],
	},
];

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="section-paper border-t border-zinc-200">
			<div className="container-base py-14">
				<div className="grid gap-10 md:grid-cols-4">
					<div className="space-y-3 animate-fadeInUp">
						<div className="inline-flex items-center gap-2 group">
							<div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 animate-pulse-glow" />
							<span className="font-extrabold tracking-wide text-zinc-900 group-hover:text-yellow-600 transition-colors duration-300">
								Sanket{' '}
								<span className="text-zinc-700">Patil</span>
							</span>
						</div>
						<p className="text-sm text-zinc-600 max-w-xs hover:text-zinc-800 transition-colors duration-300">
							Elevating the Software Engineer. Thoughtful design meets rigorous
							engineering.
						</p>
					</div>

					{NAV_SECTIONS.map((sec, sectionIndex) => (
						<div key={sec.title} className="space-y-3 animate-fadeInUp" style={{ animationDelay: `${(sectionIndex + 1) * 0.15}s` }}>
							<h4 className="text-zinc-900 font-semibold hover:text-yellow-600 transition-colors duration-300">{sec.title}</h4>
							<ul className="space-y-2 text-sm">
								{sec.items.map((it, itemIndex) => (
									<li key={it.label} className="animate-slideInLeft" style={{ animationDelay: `${(sectionIndex + 1) * 0.15 + itemIndex * 0.05}s` }}>
										{it.to ? (
											<Link
												to={it.to}
												className="text-zinc-600 hover:text-zinc-900 hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-1 group"
											>
												<span>{it.label}</span>
												<svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
												</svg>
											</Link>
										) : (
											<a
												href={it.href}
												className="text-zinc-600 hover:text-zinc-900 hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-1 group"
												target={
													it.href?.startsWith('http')
														? '_blank'
														: undefined
												}
												rel={
													it.href?.startsWith('http')
														? 'noopener noreferrer'
														: undefined
												}
											>
												<span>{it.label}</span>
												<svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
												</svg>
											</a>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="mt-12 pt-6 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600 animate-fadeInUp delay-600">
					<div className="flex items-center gap-2 group">
						<div className="grid grid-cols-3 gap-1">
							<span className="w-2 h-2 rounded-full bg-zinc-900/80 group-hover:bg-yellow-400 transition-all duration-300 delay-0 group-hover:animate-bounce" />
							<span className="w-2 h-2 rounded-full bg-zinc-900/60 group-hover:bg-yellow-500 transition-all duration-300 delay-75 group-hover:animate-bounce" />
							<span className="w-2 h-2 rounded-full bg-zinc-900/40 group-hover:bg-yellow-600 transition-all duration-300 delay-150 group-hover:animate-bounce" />
						</div>
						<span className="group-hover:text-zinc-900 transition-colors duration-300">© {year} Sanket Patil. All rights reserved.</span>
					</div>
					<div className="flex gap-4">
						<Link to="/" className="hover:text-zinc-900 hover:scale-110 transition-all duration-300">
							Home
						</Link>
						<Link to="/projects" className="hover:text-zinc-900 hover:scale-110 transition-all duration-300">
							Projects
						</Link>
						<Link to="/contact" className="hover:text-zinc-900 hover:scale-110 transition-all duration-300">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
