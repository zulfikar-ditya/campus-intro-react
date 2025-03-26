export default function Navbar() {
	return (
		<nav className="flex justify-between items-center p-4">
			<h1>@Ayush Barnwal</h1>

			<ul className="flex space-x-4">
				<li className="text-slate-900">About</li>
				<li className="text-slate-900">Work</li>
				<li className="text-slate-900">Contact</li>
			</ul>
		</nav>
	);
}
