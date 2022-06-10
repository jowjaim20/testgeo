import React from 'react';
import Navigation from '../Navigation/index';
import { hubspotService } from '@services/index';
import Link from 'next/link';

export default function TermsConditionPage() {
	return (
		<div className="bg-gray-50 px-5">
			<Navigation />
			<div className="mx-auto pt-12 pb-24 md:pb-28 lg:pb-32 px-4 sm:pt-16 sm:px-6 lg:px-4 font-fontFamily-body">
				<div className="max-w-4xl mx-auto p-4 sm:p-10 lg:p-24 text-lg text-subtle-400 bg-white  ">
					<h1 className="font-bold text-4xl mb-12 text-center text-black">Terms & Conditions</h1>
					<h2 className="mb-6 text-black text-2xl font-bold">Introduction</h2>
					<p className="mb-6">
						These are the terms and conditions governing the use of{' '}
						<a href="https://geonode.com" target="_blank" className="text-link-200">
							https://geonode.com
						</a>
						, (the Website) and the agreement that operates between us and you (the Terms). The Website is owned and operated by Geonode PTE LTD (us/our/we), and these Terms set out the rights and
						obligations of all users (you/your) concerning your use of the Website.
					</p>
					<p className="mb-6">
						Please read these Terms and our Privacy Statement carefully. Using the Website, you are consenting to be bound by the current Terms and our Privacy Statement. We may revise the Terms and
						information contained on the Website at any time and without notice. If you do not agree to these Terms or the Privacy Statement, please refrain from using the Website.
					</p>
					<p className="mb-12">
						If you have any questions about the Terms or the Privacy Statement, please{' '}
						<Link href="/contact/">
							<a className="text-lg text-link-200 " target="_blank">
								contact us
							</a>
						</Link>
						.
					</p>

					<h2 className="mb-6 text-black text-2xl font-bold">Conduct of use</h2>
					<p className="mb-12">
						You are allowed to access the content of this Website for your personal, non-commercial use, provided you do so without violation of copyright and other proprietary rights and provided you
						do not use this Website for any purpose that is unlawful or prohibited by these terms and conditions. You accept not to use this Website in any way that is unlawful, abusive, threatening,
						harassing, obscene, defamatory, hateful, or in any other way violating these terms and conditions.
					</p>
					<h2 className="text-black text-2xl font-bold mb-6">Liability</h2>
					<p className="mb-6">
						The material contained within the Website is provided without any guarantees, conditions, or warranties as to its accuracy. <strong>Geonode PTE LTD </strong>does not represent that
						information contained on or available via the Website is accurate or complete, and accordingly, it should not be relied on as such. It would be best if you did not rely on any such
						information. Any arrangements made between you and any other person using or named on the Website are entirely at your sole risk and responsibility.
					</p>
					<p className="mb-6">To the extent permitted by law, we and third parties connected to us hereby expressly exclude:</p>
					<ul className="list-disc mb-4 list-inside">
						<li className="mb-2">all conditions, warranties, and other terms which might otherwise be implied by statute, common law, or the law of equity;</li>
						<li className="mb-2">
							any liability for loss or damage incurred by any user in connection with the use, inability to use, or results of the use of the Website, any websites linked to it, and any material
							posted on it;
						</li>
						<li className="mb-2">any liability for any bugs or faults in our systems or tools; and</li>
						<li className="mb-2">
							any liability for any direct, special, indirect, or consequential loss or damage incurred by any user in connection with the Website or in connection with the use, inability to use, or
							results of the use of the Website, any websites linked to it and any materials posted on it, including, without limitation any liability for:
						</li>
					</ul>
					<ol className="list-decimal list-inside mb-6">
						<li className="mb-2">loss of income or revenue;</li>
						<li className="mb-2">loss of business;</li>
						<li className="mb-2">loss of profits or contracts;</li>
						<li className="mb-2">loss of anticipated savings;</li>
						<li className="mb-2">loss of data;</li>
						<li className="mb-2">loss of goodwill;</li>
						<li className="mb-2">wasted management or office time;</li>
						<li>for any other loss or damage of any kind, however arising and whether caused by tort (including negligence), breach of contract or otherwise, even if foreseeable.</li>
					</ol>
					<p className="mb-12">
						Nothing in this section affects our liability for death or personal injury arising from our negligence, our liability for fraudulent misrepresentation or misrepresentation as to a
						fundamental matter, or any other liability that cannot be excluded or limited under applicable law.
					</p>
					<h2 className="mb-6 text-black text-2xl font-bold">Limits of use</h2>
					<p className="mb-6">You may use our Website only for lawful purposes. You may not use our Website:</p>
					<ul className="list-disc mb-12 list-inside">
						<li className="mb-2">In any way that breaches any applicable local, national, or international law or regulation;</li>
						<li className="mb-2">In any way that is unlawful or fraudulent, or has any illegal or fraudulent purpose or effect;</li>
						<li className="mb-2">To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards;</li>
						<li className="mb-2">
							To transmit any data, send or upload any material that contains viruses, trojan horses, worms, time-bombs, keystroke loggers, spyware, adware, or any other harmful programs or similar
							computer code designed to affect the operation of any computer software or hardware adversely.
						</li>
					</ul>
					<h2 className="mb-6 text-black text-2xl font-bold">You also agree:</h2>
					<ul className="list-disc mb-12 list-inside">
						<li className="mb-2">Not to reproduce, duplicate, copy or re-sell any part of our Website in contravention of the provisions of these Terms;</li>
						<li className="mb-2">Not to use ad-blocking software;</li>
						<li className="mb-2">
							Not to charge others for the use of <strong>Geonode PTE LTD</strong> unless in a specific written agreement with <strong>Geonode PTE LTD;</strong>
						</li>
						<li className="mb-2">Not to re-use text or graphics from the Website or parts thereof.</li>
					</ul>
					<h2 className="mb-6 text-black text-2xl font-bold">Changes to terms</h2>
					<p className="mb-6">
						We are committed to ensuring that our Website is as useful and efficient as possible. For that reason, we reserve the right to make changes to the services at any time. We will never
						charge you for any service without making it very clear to you precisely what you're paying for.
					</p>
					<p className="mb-12">
						Any new features added to the current site shall also be subject to these terms and conditions. You can always review the most current version of the Terms and conditions at any time on
						this page. We reserve the right to update, change or retrieve any part of these Terms and conditions by posting updates and/or changes to our Website. It is your responsibility to check
						this page periodically for changes. Your continued use of or access to the Website following the posting of any changes constitutes acceptance of those changes.
					</p>
					<h2 className="mb-6 text-black text-2xl font-bold">Service terms</h2>
					<ol className="list-decimal list-inside mb-6">
						<li className="mb-2">
							<strong>Geonode PTE LTD</strong> at this moment grants the User a non-exclusive, non-transferable, limited right to access and use the Service under the conditions of these Terms &
							Conditions and for the duration of the agreement.
						</li>
						<li className="mb-2">
							The use of the Service is at the User's own expense and risk. The User is responsible for meeting the technical and functional requirements and using the electronic communication
							facilities necessary to access and use the Service. At all times, the User will bear the risk of loss, theft, or damage to any of its data.
						</li>
					</ol>
					<p className="mb-6">
						<strong>Geonode PTE LTD </strong>will have the right (but not the obligation), at its sole discretion, to review, edit, limit, refuse or remove content or to limit or refuse the User
						access to the Service. According to us, the use of the Service violates these Terms of Use more specifically in the event.
					</p>
					<p className="mb-12">
						We may disclose the User's Personal Data or Content, or other data relating to the use of the Service, to third parties where it believes, in good faith, that it is necessary to comply
						with a court order, ongoing judicial proceeding, criminal or civil subpoena, or other legal process or to exercise its constitutional rights of defense against legal claims.
					</p>
					<h2 className="mb-6 text-black text-2xl font-bold">Personal information</h2>
					<p className="mb-12">Our Privacy Policy regulates your submission of personal information through the store. You are to view our Privacy Policy.</p>
					<h2 className="mb-6 text-black text-2xl font-bold">Iframes</h2>
					<p className="mb-12">
						Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
					</p>
					<h2 className="mb-6 text-black text-2xl font-bold">Indemnification</h2>
					<p className="mb-12">
						You agree to indemnify, protect and hold harmless to
						<strong> Geonode PTE LTD</strong>, subsidiaries, affiliates, partners, officers, directors, agents, contractors, license, service providers, subcontractors, suppliers, interns, and
						employees, harmless from any claim or demand, including reasonable attorney's fees, made by any third party due to or arising out of your breach of these Terms and conditions or the
						documents they incorporate by reference or your infringement of any law or the rights of a third-party.
					</p>
					<h2 className="mb-6 text-black text-2xl font-bold">Severability</h2>
					<p className="mb-12">
						Suppose any provision of these Terms and conditions is discovered to be unlawful, null or unenforceable. In that case, such provision shall notwithstanding be enforceable to the fullest
						extent permitted by applicable law. The unenforceable portion shall be viewed to be cut off from these Terms of Use; such determination shall not affect the credibility and enforceability
						of any other remaining provisions.
					</p>
					<h2 className="mb-6 text-black text-2xl font-bold">Entire agreement</h2>
					<p className="mb-6">Our inability to exercise or enforce any right or provision of these Terms of Service shall not constitute a discharge of such right or provision.</p>
					<p className="mb-6">
						These Terms of Use and any policies or operating rules posted by us on this Website or in respect to the Service constitutes the entire agreement and understanding between you and us and
						govern your use of the Service, pre-empt any prior or synchronous agreements, communications, and proposals, whether oral or written, between you and us.
					</p>
					<p className="mb-12">Any ambiguities in the interpretation of these Terms of Use shall not be construed against the drafting party.</p>
					<h2 className="mb-6 text-black text-2xl font-bold">Governing Law And Jurisdiction</h2>
					<p className="mb-12">
						This Agreement, and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation, shall be governed by,
						and construed in accordance with, the laws of Singapore. Each Party irrevocably agrees that the courts of Singapore shall have exclusive jurisdiction to settle any dispute or claim
						(including non-contractual disputes or claims) arising out of or in connection with this Agreement or its subject matter or formation.
					</p>
					<h2 className="mb-6 text-black text-2xl font-bold">Contact information</h2>
					<p>
						If you would like to access, correct, register a complaint, or want more information, please{' '}
						<Link href="/contact/">
							<a className="text-lg text-link-200 cursor-pointer" onClick={() => hubspotService.openWidget()}>
								contact us
							</a>
						</Link>
						.
					</p>
					<p>12 Eu Tong Sen Street #08-169, The Central, 059819. Singapore.</p>
				</div>
			</div>
		</div>
	);
}
