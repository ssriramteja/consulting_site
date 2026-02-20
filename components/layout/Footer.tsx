import Link from 'next/link';
import { Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 py-12">
                {/* Newsletter Section */}
                <div className="mb-16 border-b border-slate-800 pb-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Curve</h2>
                            <p className="text-slate-400">Subscribe to our newsletter for the latest insights on tech, innovation, and business strategy.</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-grow bg-slate-800 border border-slate-700 text-white rounded-full px-6 py-3 focus:outline-none focus:border-secondary transition-colors"
                                />
                                <button
                                    type="button"
                                    className="bg-secondary text-white font-bold px-8 py-3 rounded-full hover:bg-secondary-dark transition-colors whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Innovative IT Solutions</h3>
                        <p className="text-sm">
                            Helping clients improve competitiveness and efficiency through system integration and custom application development.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-slate-400 hover:text-white">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                    </div>

                    {/* Technology */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Expertise</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/services" className="hover:text-white">Our Executive Team</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white">Our wide range of IT professionals skills</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Employment */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Employment</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/careers" className="hover:text-white">IITS Consulting Services</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-white">Current Job Openings</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/contact" className="hover:text-white">Our Locations</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white">Enquiry Form</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
                    <p>© {new Date().getFullYear()} iitsolutionsinc.com. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
