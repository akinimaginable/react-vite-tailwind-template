import archiveLogo from './assets/archive.svg';
import githubLogo from './assets/github.svg';
import NewsBanner from './components/NewsBanner.tsx';

export default function App() {
	return (
		<div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50">
			<NewsBanner />
			<div className="m-auto max-w-screen-xl p-6 text-center md:my-10">
				<h1 className="mt-12 text-6xl font-semibold">etr modern react and tailwind template</h1>

				<div className="my-6 text-lg font-medium">
					<span className="text-blue-500">React</span> for the ui,{' '}
					<span className="text-green-400">tailwind</span> for styling,{' '}
					<span className="text-purple-400">ESlint</span> and code quality{' '}
					<span className="text-yellow-400">prettier</span> for formatting
				</div>

				<div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-6">
					<a
						className="border-lg flex w-fit flex-row gap-3 rounded-full border border-neutral-700 bg-neutral-800 px-7 py-3 hover:bg-neutral-900"
						href="https://github.com/akinimaginable/react-vite-tailwind-template"
					>
						<span className="font-medium text-neutral-50">Github</span>
						<img src={githubLogo} className="size-6" alt="Github Logo" />
					</a>
					<a
						className="border-lg flex w-fit flex-row gap-3 rounded-full border border-yellow-600 bg-yellow-500 px-7 py-3 hover:bg-yellow-600"
						href="https://cdn.etrange.org/react-vite-tailwind-template.zip"
					>
						<span className="font-medium text-neutral-50">Download zip</span>
						<img src={archiveLogo} className="size-6" alt="Zip Logo" />
					</a>
				</div>
			</div>

			<div className="m-auto max-w-screen-xl p-6">
				<h2 className="my-6 text-4xl font-semibold md:my-10">Why this stack?</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div className="min-h-40 rounded-xl border-2 border-neutral-700 p-5">
						<h3 className="text-2xl font-semibold">React</h3>
						<p className="mt-2">
							React sucks, but it won the industry, it's well maintained, has a huge ecosystem, is
							adopted by thousands and is the framework with people you can hire.
						</p>
					</div>
					<div className="min-h-40 rounded-xl border-2 border-neutral-700 p-5">
						<h3 className="text-2xl font-semibold">Tailwind</h3>
						<p className="mt-2">
							Tailwind streamlines development by combining styles and markup, making code more
							maintainable and visually intuitive. Its self documenting utility classes ensure
							consistent naming and eliminate unused styles. It has sensible defaults and easy
							customization.
						</p>
					</div>
					<div className="min-h-40 rounded-xl border-2 border-neutral-700 p-5">
						<h3 className="text-2xl font-semibold">ESlint</h3>
						<p className="mt-2">
							ESlint is a static analysis tool that helm maintaining high code quality by enforcing
							consistent coding standards and catching errors early. It can be run as CI to ensure
							all code follow ESlint rules.
						</p>
					</div>
					<div className="min-h-40 rounded-xl border-2 border-neutral-700 p-5">
						<h3 className="text-2xl font-semibold">Prettier</h3>
						<p className="mt-2">
							Prettier is the industry standard for code formatting, supporting all commons
							languages and editors. It eases code reviews, by avoiding style discussions, saving
							time and energy.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
