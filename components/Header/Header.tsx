"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">
                    psychologists.services
                </Link>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/psychologists">Psychologists</Link></li>
                </ul>
                <ul>
                    <li><button>Log In</button></li>
                    <li><button>Registration</button></li>
                </ul>
            </nav>
        </header>
    )
}