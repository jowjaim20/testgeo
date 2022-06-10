import React from 'react';
import Navigation from '../Navigation/index';
import { hubspotService } from '@services/index';

export default function PrivacyPage() {
	return (
		<div className='bg-gray-50 px-5'>
			<Navigation />
			<div className='mx-auto pt-12 pb-24 md:pb-28 lg:pb-32 px-4 sm:pt-16 sm:px-6 lg:px-4 font-fontFamily-body'>
				<div className='max-w-4xl mx-auto p-4 sm:p-10 lg:p-24 text-lg text-subtle-400 bg-white  '>
					<h1 className='font-bold text-4xl text-center mb-12 text-black'>
						Privacy Policy
					</h1>
					<p className='mb-10'>
						{' '}
						This Privacy Policy describes how your personal information is
						collected, used, and shared when you visit{' '}
						<a href='https://geonode.com' target='_blank' className='text-link-200'>
						 https://geonode.com
						</a>{' '}(the "Site").
					</p>

					<p className='mb-10'>
						Protecting your private information is our priority. This Statement
						of Privacy applies to {' '}
						<a href='https://geonode.com' target='_blank' className='text-link-200'>
						 https://geonode.com
						</a>{' '} and governs data
						collection and usage. We have developed this Policy for you to
						understand how we collect, use, communicate and make use of personal
						information. The following rules outline our privacy policy.
					</p>

					<p className='mb-10'>
						Similar to other commercial websites, our website utilizes a
						standard technology called 'cookies' (see our cookies policy section
						for more information) and server logs to collect information about
						how our site is used. Information gathered through cookies and
						server logs may include the date and time of visits, the pages
						viewed, time spent at our site, and the websites visited just before
						and just after our own, as well as your IP address.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>Introduction</h2>
					<p className='mb-4'>
						This Policy sets out the conditions under which we may process any
						information that we collect from you or provide to us. It covers
						information that could identify you ("personal information") and
						information that could not. In the context of the law and this
						notice, "process" means collecting, storing, transferring, using, or
						otherwise acting on the information.
					</p>
					<ul className='mb-12 list-disc list-inside'>
						<li className='mb-3'>
							We take the protection of your privacy and confidentiality
							seriously. We understand that all visitors to our website are
							entitled to know that their data will not be used for any purpose
							unintended by them and will not accidentally fall into the hands
							of a third party.
						</li>
						<li className='mb-3'>
							<strong>Geonode PTE LTD </strong>undertakes to preserve the
							confidentiality of all information you provide to us, and we hope
							that you reciprocate.
						</li>
						<li className='mb-6'>
							The law requires us to tell you about your rights and our
							obligations to you regarding your data's processing and control.
						</li>
					</ul>
					<h2 className='mb-6 text-black text-2xl font-bold'>Log files</h2>
					<p className='mb-12'>
						<strong>Geonode PTE LTD</strong> follows a standard procedure of
						using log files. These files log visitors when they visit websites.
						All hosting companies do this and a part of hosting services'
						analytics. The information collected from log files includes
						internet protocol (IP) addresses, browser type, Internet Service
						Provider (ISP), date and time stamp, referring/exit pages, and
						possibly the number of clicks. These are not linked to any
						personally identifiable information. The purpose of the information
						is to analyze trends, administer the site, track users' movement on
						the website, and gather demographic information.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Collection of your personal information
					</h2>
					<p className='mb-6'>
						<strong>Geonode PTE LTD</strong> may collect personally identifiable
						information when you sign up, such as Name, Phone, and Email
						Address.
					</p>
					<p className='mb-12'>
						<strong>Geonode PTE LTD </strong>encourages you to review the
						privacy statements of websites you choose to link to from{' '}
						<strong>Geonode PTE LTD</strong> so that you can understand how
						those websites collect, use and share your information. We are not
						responsible for the privacy statements or other content on websites
						outside of the <strong>Geonode PTE LTD </strong>website.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						What information we collect and why?
					</h2>
					<p className='mb-7'>
						We may collect information about you directly from you and
						automatically through your use of our Site or Services.
					</p>
					<ul className='mb-12 list-disc list-inside'>
						<li>
							<strong>Information We Collect Directly from You:</strong> Certain
							areas and features of our Site and Services require your Name,
							email address, and IP address.
						</li>
						<li>
							<strong>Information We Collect Automatically:</strong> We may
							automatically collect the following information about your use of
							our site via some software analytics, including the length of time
							you visit our site and your movement through our site.
						</li>
						<li>
							<strong>We may also collect the following information:</strong>{' '}
							Device ID, Location, and Language information.
						</li>
					</ul>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						We do not sell, rent or lease our customer lists to third parties
					</h2>
					<p className='mb-6'>
						<strong>Geonode PTE LTD </strong>may share data with trusted
						partners to perform statistical analysis, send you email or postal
						mail, provide customer support, or arrange for deliveries. All such
						third parties are prohibited from using your personal information to
						provide these services to <strong>Geonode PTE LTD</strong>. They are
						required to maintain the confidentiality of your data.
					</p>
					<p className='mb-12'>
						<strong>Geonode PTE LTD</strong> will disclose your personal
						information, without notice, only if required to do so by law or in
						the good faith belief that such action is necessary to: (a) Conform
						to the edicts of the law or comply with legal process served on{' '}
						<strong>Geonode PTE LTD</strong> or the site; (b) protect and defend
						the rights or property of <strong>Geonode PTE LTD</strong>; And, (c)
						act under exigent circumstances to protect the personal safety of
						users of <strong>Geonode PTE LTD</strong>, or the public.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Our advertising partners
					</h2>
					<p className='mb-12'>
						Some of the advertisers on our site may use cookies and web beacons.
						Each of our advertising partners has its own Privacy Policy for its
						policies on user data.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Information we process because we have a contractual obligation with
						you
					</h2>
					<p className='mb-6'>
						When you use the Geonode PTE LTD website, you agree to our terms and
						conditions; a contract is formed between you and us.
					</p>
					<p className='nb-6'>
						In order to carry out our obligations under that contract, we must
						process the information you give us. Some of this information may be
						personal information.
					</p>
					<p className='mb-3'>We may use it in order to:</p>
					<ul className='mb-6 list-disc list-inside'>
						<li className='mb-3'>Verify your identity for security purposes</li>
						<li className='mb-3'>Provide you with our services</li>
						<li className='mb-3'>
							Provide you with suggestions and advice on services and how to
							obtain the most from using our website.
						</li>
					</ul>
					<p className='mb-6'>
						<strong>Geonode PTE LTD </strong>may aggregate this information in a
						general way and use it to provide class information, such as
						monitoring our performance with respect to a particular service we
						provide. If we use it for this purpose, you as an individual will
						not be personally identifiable. <strong>Geonode PTE LTD</strong>{' '}
						shall continue to process this information until the contract
						between us ends or is terminated by either party under the contract
						terms.
					</p>
					<p className='mb-6'>
						Except where you have consented to our use of your information for a
						specific purpose, we do not use your information in any way that
						would identify you personally. <strong>Geonode PTE LTD</strong> may
						aggregate it in a general way and use it to provide class
						information, such as monitoring the performance of a particular page
						on our website.
					</p>
					<p className='mb-12'>
						You may withdraw your consent at any time by instructing us here.
						However, if you do so, you may not be able to further use our
						website or our services.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Retention period for personal data
					</h2>
					<p className='mb-6'>
						Except as otherwise mentioned in this privacy notice, Geonode PTE
						LTD keeps your personal information only for as long as required by
						us:
					</p>
					<ol className='mb-12 list-decimal list-inside'>
						<li className='mb-3'>
							To provide you with the services you have requested;
						</li>
						<li className='mb-3'>
							To comply with other law, including for the period demanded by our
							tax authorities;
						</li>
						<li className='mb-3'>To support a claim or defense in court.</li>
					</ol>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Cookies and web beacons
					</h2>
					<p className='mb-6'>
						Like any other website, <strong>Geonode PTE LTD</strong> uses
						'cookies.' These cookies are used to store information, including
						visitors' preferences, and the pages on the website that the visitor
						accessed or visited. The data is used to optimize the users
						experience by customizing our web page content based on visitors'
						browser type and/or other information.
					</p>
					<p className='mb-12'>
						For more general information on cookies, please read our{' '}
						<a href='/cookie-policy' target='_blank' className='text-link-200'>
							Cookie Policy Page.
						</a>
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Third-party privacy policies
					</h2>
					<p className='mb-12'>
						<strong>Geonode PTE LTD</strong> Privacy Policy does not apply to
						other advertisers or websites. Thus, we advise you to consult the
						respective Privacy Policies of these third-party ad servers for more
						detailed information. It may include their practices and
						instructions about how to opt-out of specific options.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Children's information
					</h2>
					<p className='mb-6'>
						Another part of our priority is adding protection for children while
						using the internet. We encourage parents and guardians to observe,
						participate in, and/or monitor and guide their online activity.
					</p>
					<p className='mb-12'>
						<strong>Geonode PTE LTD </strong>does not knowingly collect any
						Personal Identifiable Information from children under the age of 13.
						If you think your child has provided this kind of information,
						please inform us, and we will promptly remove it.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Opt-in, opt-out & unsubscribe
					</h2>
					<p className='mb-6'>
						When any user provides their details such as Name, Email, Phone
						number, accept T&C, Cookies as well as Privacy Policy, they have to
						OPT-IN.
					</p>
					<p className='mb-6'>
						We provide users the opportunity to opt-out of receiving
						communications from us by reading the unsubscribe instructions
						located at the bottom of any email they receive from us at any time
						or email us.
					</p>
					<p className='mb-12'>
						We respect your privacy and give you an opportunity to opt-out of
						receiving announcements of certain information. Users may opt-out of
						receiving any or all communications from{' '}
						<strong>Geonode PTE LTD</strong> by contacting us{' '}
						<span
							className='text-lg text-link-200 cursor-pointer'
							onClick={() => hubspotService.openWidget()}
						>
							here
						</span>
						.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						General data protection regulation (GDPR)
					</h2>
					<p className='mb-6'></p>
					<p className='mb-6'>We are a Data Controller of your information.</p>
					<p className='mb-6'>
						<strong>Geonode PTE LTD </strong>legal basis for collecting and
						using the personal information described in this Privacy Policy
						depends on the Personal Information we collect and the specific
						context in which we collect the information:
					</p>
					<ul className='mb-6 list-disc list-inside'>
						<li className='mb-3'>
							<strong>Geonode PTE LTD</strong> needs to perform a contract with
							you
						</li>
						<li className='mb-3'>
							You have given <strong>Geonode PTE LTD </strong>permission to do
							so
						</li>
						<li className='mb-3'>
							Processing your personal information is in{' '}
							<strong>Geonode PTE LTD</strong> legitimate interests
						</li>
						<li className='mb-3'>
							<strong>Geonode PTE LTD</strong> needs to comply with the law
						</li>
					</ul>
					<p className='mb-6'>
						Geonode PTE LTD will retain your personal information only for as
						long as it is necessary for the purposes set out in this Privacy
						Policy. We will retain and use your information to the extent
						required to comply with our legal obligations, resolve disputes, and
						enforce our policies.
					</p>
					<p className='mb-6'>
						If you are a resident of the European Economic Area (EEA), you have
						certain data protection rights. If you wish to be informed what
						Personal Information we hold about you and if you want it to be
						removed from our systems, please contact us.
					</p>
					<p className='mb-6'>
						You are entitled to the following rights under applicable laws:
					</p>
					<ol className='mb-6 list-decimal list-inside'>
						<li className='mb-3'>
							<strong>The right to access:</strong> you may at any time request
							to access your data. Upon request, we will provide a copy of your
							personal data in a commonly used electronic form.
						</li>
						<li className='mb-3'>
							<strong>The right to rectification:</strong> you are entitled to
							obtain rectification of inaccurate personal data and to have
							incomplete personal data completed.
						</li>
						<li className='mb-3'>
							<strong>The right to erase:</strong> under certain circumstances
							(including processing based on your consent), you may request us
							to delete your User Data. Please note that this right is not
							unconditional. Therefore, an attempt to invoke the right might not
							lead to an action from us.
						</li>
						<li className='mb-3'>
							<strong>The right to object:</strong> to certain processing
							activities conducted by us in relation to your data, such as our
							processing of your data based on our legitimate interest. The
							right to object also applies to the processing of your data for
							direct marketing purposes.
						</li>
						<li className='mb-3'>
							<strong>The right to data portability:</strong> you are entitled
							to receive your data (or have your data directly transmitted to
							another data controller) in a structured, commonly used, and
							machine-readable format.
						</li>
					</ol>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Intellectual property rights
					</h2>
					<p>
						All copyrights, trademarks, patents, and other intellectual property
						rights in and on our website and all content and software located on
						the site shall remain the sole property of{' '}
						<strong>Geonode PTE LTD</strong> or its licensors. The use of our
						trademarks, content, and intellectual property is forbidden without
						express written consent from us.
					</p>
					<p className='mb-6'>You must not:</p>
					<ul className='mb-6 list-disc list-inside'>
						<li className='mb-3'>
							Republish material from our website without prior written consent.
						</li>
						<li className='mb-3'>Sell or rent material from our website.</li>
						<li className='mb-3'>
							Reproduce, duplicate, create derivative, copy or otherwise exploit
							material on our website for any purpose.
						</li>
						<li className='mb-3'>
							Redistribute any content from our website, including onto another
							website.
						</li>
					</ul>
					<h2 className='mb-6 text-black text-2xl font-bold'>Acceptable use</h2>
					<p className='mb-12'>
						You agree to use our website only for lawful purposes and in a way
						that does not infringe the rights of, restrict or inhibit anyone
						else's use and enjoyment of the website. Prohibited behavior
						includes harassing or causing distress or inconvenience to any other
						user within our website. You must not use our website to send
						unsolicited commercial communications. You must not use the content
						on our website for any marketing-related purpose without our express
						written consent.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Third-party analytics
					</h2>
					<p className='mb-12'>
						We use automated devices and applications to evaluate usage of our
						site and, to the extent permitted, our Services. We also may use
						other analytic means to evaluate our Services. We use these tools to
						help us improve our Services, performance, and user experiences.
						These entities may use tracking technologies to perform their
						services.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Verification of your information
					</h2>
					<p className='mb-12'>
						When we receive any request to access, edit or delete personally
						identifiable information, we shall first take reasonable steps to
						verify your identity before granting you access or otherwise taking
						any action. This is important to safeguard your information.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Encryption of data sent between us
					</h2>
					<p>
						<strong>Geonode PTE LTD </strong>website uses Secure Sockets Layer
						(SSL) certificates to verify our identity to your browser and
						encrypt any data you give us. Whenever information is transferred
						between us, you can check that it is done so using SSL by looking
						for a closed padlock symbol or another trust mark in your browser's
						URL bar or toolbar.
					</p>
					<p className='mb-12'>
						If you have any complaints, please send us an email.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Review/modification of this privacy policy
					</h2>
					<p className='mb-12'>
						<strong>Geonode PTE LTD </strong>may update this privacy notice from
						time to time as necessary. The terms that apply to you are those
						posted here on our website when you use our website. We solely
						advise you to print a copy for your records.{' '}
						<strong>Geonode PTE LTD </strong>may update this privacy notice from
						time to time as necessary. The terms that apply to you are those
						posted here on our website when you use our website. We solely
						advise you to print a copy for your records.
					</p>
					<p>
						If you have any questions regarding our privacy policy, please{' '}
						<a
							className='text-lg text-link-200 '
							target='_blank'
							href='/contact'
						>
							contact us
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
