import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center p-4">
			<h1>
				<Link href="/" className="text-slate-900">
					@Ayush Barnwal
				</Link>
			</h1>

			<ul className="flex space-x-4">
				<li className="text-slate-900">About</li>
				<li className="text-slate-900">Work</li>
				<li className="text-slate-900">
					<Link href={"/contact"}>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
